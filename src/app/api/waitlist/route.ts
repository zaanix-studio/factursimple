import { NextRequest, NextResponse } from 'next/server'

// Upstash Redis REST API - No SDK needed
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

interface WaitlistEntry {
  email: string
  timestamp: string
  source?: string
}

async function redisCommand(command: string[]): Promise<unknown> {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    throw new Error('Redis not configured')
  }

  const response = await fetch(`${UPSTASH_REDIS_REST_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  })

  if (!response.ok) {
    throw new Error(`Redis error: ${response.status}`)
  }

  const data = await response.json()
  return data.result
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()
    
    // Check if Redis is configured
    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
      // Fallback: just log and return success (better than crashing)
      console.log(`[WAITLIST] New signup (Redis not configured): ${normalizedEmail}`)
      return NextResponse.json(
        { message: 'Inscrit avec succès (mode démo)', count: -1 },
        { status: 201 }
      )
    }

    // Check for duplicates using a Set
    const isMember = await redisCommand(['SISMEMBER', 'waitlist:emails', normalizedEmail])
    
    if (isMember === 1) {
      return NextResponse.json(
        { message: 'Déjà inscrit', alreadyExists: true },
        { status: 200 }
      )
    }

    // Add to Set (for deduplication)
    await redisCommand(['SADD', 'waitlist:emails', normalizedEmail])

    // Add full entry to a sorted set (for ordering by timestamp)
    const entry: WaitlistEntry = {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
      source: source || 'landing-page'
    }
    
    await redisCommand([
      'ZADD', 
      'waitlist:entries', 
      Date.now().toString(), 
      JSON.stringify(entry)
    ])

    // Get count
    const count = await redisCommand(['SCARD', 'waitlist:emails']) as number

    console.log(`[WAITLIST] New signup: ${normalizedEmail} (total: ${count})`)

    return NextResponse.json(
      { message: 'Inscrit avec succès', count },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
      return NextResponse.json({ count: 0, configured: false })
    }

    const count = await redisCommand(['SCARD', 'waitlist:emails']) as number
    
    return NextResponse.json({
      count,
      configured: true
    })
  } catch (error) {
    console.error('Waitlist GET error:', error)
    return NextResponse.json({ count: 0, error: true })
  }
}
