'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  type ChecklistItem,
  checklistItems,
  calculateScore,
  getCategoryLabel,
  getPriorityLabel,
} from '@/lib/validations/checklist';
import {
  IconShieldCheck,
  IconAlertTriangle,
  IconCircleCheck,
  IconFileText,
  IconSettings,
  IconRefresh,
  IconSchool,
} from '@tabler/icons-react';

export function ChecklistForm() {
  const [items, setItems] = useState<ChecklistItem[]>(checklistItems);
  const score = calculateScore(items);

  const handleToggle = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleReset = () => {
    setItems(checklistItems.map(item => ({ ...item, checked: false })));
  };

  const categories = ['admin', 'tech', 'process', 'formation'] as const;
  
  const categoryIcons = {
    admin: IconFileText,
    tech: IconSettings,
    process: IconRefresh,
    formation: IconSchool,
  };

  const getPriorityColor = (priority: ChecklistItem['priority']) => {
    switch (priority) {
      case 'critical':
        return 'destructive';
      case 'important':
        return 'default';
      case 'recommended':
        return 'secondary';
    }
  };

  const getScoreColor = () => {
    switch (score.level) {
      case 'danger':
        return 'text-red-600';
      case 'warning':
        return 'text-amber-600';
      case 'good':
        return 'text-blue-600';
      case 'excellent':
        return 'text-green-600';
    }
  };

  const getProgressColor = () => {
    switch (score.level) {
      case 'danger':
        return 'bg-red-600';
      case 'warning':
        return 'bg-amber-500';
      case 'good':
        return 'bg-blue-600';
      case 'excellent':
        return 'bg-green-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Score Card */}
      <Card className="border-2">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex items-center justify-center gap-2">
            {score.level === 'excellent' && <IconCircleCheck className="h-8 w-8 text-green-600" />}
            {score.level === 'good' && <IconShieldCheck className="h-8 w-8 text-blue-600" />}
            {score.level === 'warning' && <IconAlertTriangle className="h-8 w-8 text-amber-500" />}
            {score.level === 'danger' && <IconAlertTriangle className="h-8 w-8 text-red-600" />}
            Votre Score de Préparation
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className={`text-6xl font-bold ${getScoreColor()}`}>
            {score.percentage}%
          </div>
          <div className="w-full max-w-md mx-auto">
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${getProgressColor()}`}
                style={{ width: `${score.percentage}%` }}
              />
            </div>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {score.message}
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span>
              <strong>{items.filter(i => i.checked).length}</strong> sur <strong>{items.length}</strong> éléments complétés
            </span>
            <button 
              onClick={handleReset}
              className="text-primary hover:underline"
            >
              Réinitialiser
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Countdown */}
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardContent className="py-6 text-center">
          <p className="text-lg opacity-90">Temps restant avant l&apos;obligation de réception</p>
          <p className="text-3xl font-bold mt-2">
            {Math.ceil((new Date('2026-09-01').getTime() - Date.now()) / (1000 * 60 * 60 * 24))} jours
          </p>
          <p className="text-sm opacity-75 mt-1">1er septembre 2026</p>
        </CardContent>
      </Card>

      {/* Checklist Tabs */}
      <Tabs defaultValue="admin" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {categories.map(cat => {
            const Icon = categoryIcons[cat];
            const catItems = items.filter(i => i.category === cat);
            const checkedCount = catItems.filter(i => i.checked).length;
            return (
              <TabsTrigger key={cat} value={cat} className="gap-1 text-xs sm:text-sm">
                <Icon className="h-4 w-4 hidden sm:block" />
                <span className="truncate">{getCategoryLabel(cat)}</span>
                <Badge variant="outline" className="ml-1 hidden sm:flex">
                  {checkedCount}/{catItems.length}
                </Badge>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {categories.map(cat => (
          <TabsContent key={cat} value={cat} className="mt-6">
            <div className="space-y-3">
              {items
                .filter(item => item.category === cat)
                .sort((a, b) => {
                  const priorityOrder = { critical: 0, important: 1, recommended: 2 };
                  return priorityOrder[a.priority] - priorityOrder[b.priority];
                })
                .map(item => (
                  <Card 
                    key={item.id} 
                    className={`transition-all cursor-pointer hover:shadow-md ${
                      item.checked ? 'bg-muted/50 border-green-200' : ''
                    }`}
                    onClick={() => handleToggle(item.id)}
                  >
                    <CardContent className="flex items-start gap-4 py-4">
                      <Checkbox
                        id={item.id}
                        checked={item.checked}
                        onCheckedChange={() => handleToggle(item.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <label 
                            htmlFor={item.id}
                            className={`font-medium cursor-pointer ${
                              item.checked ? 'line-through text-muted-foreground' : ''
                            }`}
                          >
                            {item.title}
                          </label>
                          <Badge variant={getPriorityColor(item.priority)}>
                            {getPriorityLabel(item.priority)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                      {item.checked && (
                        <IconCircleCheck className="h-5 w-5 text-green-600 shrink-0" />
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Légende des priorités</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="destructive">Critique</Badge>
              <span className="text-sm text-muted-foreground">À faire absolument avant Sept 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default">Important</Badge>
              <span className="text-sm text-muted-foreground">Fortement recommandé</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Recommandé</Badge>
              <span className="text-sm text-muted-foreground">Bonnes pratiques</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
