# FacturSimple 🇫🇷

**Simple, affordable e-invoicing for French micro-entrepreneurs**

> La facturation électronique enfin simple pour les micro-entrepreneurs.

## 🎯 What is FacturSimple?

FacturSimple is an e-invoicing SaaS designed specifically for French micro-entrepreneurs (auto-entrepreneurs) who need to comply with the upcoming 2026 e-invoicing reform without paying enterprise prices.

**Live Demo:** [Coming Soon - Pending Vercel Deployment]  
**GitHub:** https://github.com/robhayesbuilds/factursimple

---

## 💡 Why This Product?

### The Problem

Starting **September 1, 2026**, ALL French businesses (including micro-entrepreneurs in franchise de TVA) must be able to **receive** electronic invoices in structured formats (Factur-X, UBL, CII). By **September 2027**, they must also **emit** compliant e-invoices.

**Current options are expensive:**
- Pennylane: €99/mo (overkill for simple needs)
- Tiime: €18-50/mo
- Most solutions target larger businesses with complex features

**The gap:** No simple, affordable (€9-19/mo) solution exists for the 4+ million French micro-entrepreneurs who just need basic compliance.

### Why It's a Good Idea

| Factor | Assessment |
|--------|------------|
| **Market Size** | 4+ million micro-entreprises in France |
| **Timing** | Government mandate = forced adoption by Sept 2026 |
| **Urgency** | 7 months until deadline (as of Feb 2026) |
| **Competition** | Weak at €9-19/mo price point |
| **Barrier to Entry** | French language + regulatory knowledge keeps US competitors out |
| **Distribution** | French-speaking founder = marketing advantage |

### Market Validation

- **70% of French entrepreneurs fear the 2026 reform** (Source: Selectra)
- Found Reddit thread: "Facture électronique, aucune alternative gratuite?" - people literally asking for this
- Competitor Pennylane has 3.1/5 mobile rating vs 4.7/5 desktop = mobile-first opportunity
- Support complaints everywhere = opportunity for better service

---

## ✨ Features

### Current (Landing Page MVP)
- ✅ Waitlist email capture with Zod validation
- ✅ Responsive landing page (French)
- ✅ 13+ SEO blog articles targeting French keywords
- ✅ Free invoice generator tool (`/generateur-facture`)
- ✅ Pricing comparison calculator
- ✅ Trust badges and social proof
- ✅ JSON-LD structured data for SEO

### Planned (Product MVP)
- 📄 Factur-X compliant invoice generation
- 📤 E-invoicing transmission via PDP
- 📥 E-invoice reception (Sept 2026 requirement)
- 📊 E-reporting to French tax authorities
- 📱 Mobile-first design
- 🔄 Auto-numbering and client management
- 💾 10-year compliant storage (French hosting)

---

## 💰 Pricing Strategy

| Plan | Price | Target |
|------|-------|--------|
| **Solo** | €9/mo | Auto-entrepreneurs (≤30 invoices/mo) |
| **Pro** | €19/mo | Active micro-entreprises (unlimited) |

**Competitor Comparison:**
- Pennylane Premium: €99/mo
- Tiime Business: €39/mo  
- QuickBooks: €30/mo
- **FacturSimple: €9-19/mo** ← Gap in market

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Validation:** Zod + React Hook Form
- **Language:** TypeScript (strict, no assertions)
- **Deployment:** Vercel (pending)

### Project Structure
```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── _components/                # Page-specific components
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── faq-section.tsx
│   │   └── waitlist-form.tsx
│   ├── blog/                       # SEO content
│   ├── generateur-facture/         # Free tool
│   └── api/waitlist/               # Email capture
├── components/ui/                  # shadcn components
└── lib/
    ├── utils.ts
    └── validations.ts
```

---

## 📚 Research & References

### Government Sources
- [Service-Public.fr - Facturation électronique](https://www.service-public.fr/professionnels-entreprises/vosdroits/F31808)
- [impots.gouv.fr - Réforme facturation](https://www.impots.gouv.fr/facturation-electronique)

### Market Research
- [Les Echos - E-invoicing deadline](https://www.lesechos.fr/) - Sept 2026 mandate coverage
- [Selectra Survey](https://selectra.info/) - 70% of entrepreneurs fear the reform
- [FNAE (Fédération Nationale des Auto-Entrepreneurs)](https://www.federation-auto-entrepreneur.fr/) - 80K+ members

### Competitor Analysis
Full analysis in `/research/competitor-analysis.md`:

| Competitor | Price | Weakness |
|------------|-------|----------|
| **Pennylane** | €14-99/mo | 3.1/5 mobile rating, expensive, support issues |
| **Tiime** | €0-50/mo | 3 apps needed, fragmented UX |
| **Henrri** | €0-29/mo | No mobile app at all |
| **Freebe** | €12-22/mo | No free tier, design-focused |
| **Indy** | Free-€36/mo | Declining service quality |
| **Abby** | €0-20/mo | Micro-entrepreneurs only |

### Community Validation
- Reddit r/EntreprendreenFrance - Active e-invoicing discussions
- Reddit r/vosfinances - Freelancer invoicing questions
- Reddit r/developpeurs - Technical discussions on solutions

---

## 🚀 Go-to-Market Strategy

### Phase 1: Validate (Feb 2026)
- [x] Landing page with waitlist
- [x] SEO content (13 articles)
- [x] Free invoice generator tool
- [ ] Deploy to Vercel
- [ ] Post in French communities (transparent approach)
- [ ] Collect 500+ email signups

### Phase 2: Build MVP (Mar-Apr 2026)
- [ ] Core invoicing functionality
- [ ] Factur-X generation
- [ ] User authentication
- [ ] Stripe payments

### Phase 3: Launch (May 2026)
- [ ] Beta with waitlist users
- [ ] PDP partnership or certification
- [ ] PR in French startup media (Maddyness, Les Echos)

### Phase 4: Scale (June-Sept 2026)
- [ ] Influencer partnerships (J'aime la paperasse, Dougs, etc.)
- [ ] Paid acquisition (Facebook, Google Ads)
- [ ] Full compliance before Sept 1 deadline

---

## 🎯 Target Audience

**Primary:** French auto-entrepreneurs / micro-entrepreneurs
- 4+ million in France
- Currently using Word/Excel or expensive tools
- Need simple compliance, not full accounting
- Price sensitive (prefer €9-19/mo over €99/mo)

**Secondary:** Small freelancers (graphistes, développeurs, consultants)
- Need professional invoicing
- Want mobile-first experience
- Value simplicity over features

---

## 📈 Success Metrics

| Metric | Target (by Sept 2026) |
|--------|----------------------|
| Waitlist signups | 2,000+ |
| Paying customers | 500+ |
| MRR | €5,000+ |
| Blog traffic | 10,000 visits/mo |

---

## 👥 Team

Built by Rob Hayes (AI-powered operator) for Yassine Zaanouni's portfolio.

---

## 📄 License

Proprietary - All rights reserved.

---

## 🔗 Links

- **Landing Page:** [Pending Vercel deployment]
- **GitHub:** https://github.com/robhayesbuilds/factursimple
- **Research:** See `/research/` folder for full analysis
- **Outreach Targets:** See `/research/outreach-targets.md`
