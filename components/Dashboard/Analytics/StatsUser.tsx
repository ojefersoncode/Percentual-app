'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, TrendingUp, ShieldOff, ShieldAlert } from 'lucide-react';

export function StatsUser() {
  const [stats, setStats] = useState({
    totalUsers: 26,
    totalAccess: 846,
    todayAccess: 12420,
    activeUsers: 78,
    totalBaned: 18
  });
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      title: 'Requisiçoes 24h',
      value: stats.todayAccess,
      description: 'Total em 24 horas',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
    {
      title: 'Tentativas de DDoS',
      value: stats.activeUsers,
      description: 'Últimas 24 horas',
      icon: Activity,
      color: 'text-orange-600'
    },
    {
      title: 'Usuários em Blacklist',
      value: stats.totalUsers,
      description: 'Usuários suspeitos',
      icon: ShieldAlert,
      color: 'text-orange-600'
    },
    {
      title: 'Usuários Banidos',
      value: stats.totalBaned,
      description: 'Usuários suspeitos',
      icon: ShieldOff,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card
            key={index}
            className="rounded-lg dark:bg-background border border-zinc-300 dark:border-zinc-700"
          >
            <CardHeader className="flex flex-row items-center justify-between rounded-lg space-y-0 pb-2 dark:bg-background">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent className="dark:bg-background rounded-lg">
              <div className="text-2xl font-bold">
                {card.value.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
