"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Activity, TrendingUp, Eye } from "lucide-react"


export function StatsUser() {
  const [stats, setStats] = useState({
    totalUsers: 11,
    totalAccess: 846,
    todayAccess: 12420,
    activeUsers: 78,
  })
  const [loading, setLoading] = useState(true)


  const cards = [
    {
      title: "Usuários em Blacklist",
      value: stats.totalUsers,
      description: "Usuários suspeitos",
      icon: Users,
      color: "text-orange-600",
    },
    {
      title: "Tentativas de DDoS",
      value: stats.activeUsers,
      description: "Últimas 24 horas",
      icon: Activity,
      color: "text-orange-600",
    },
    {
      title: "Requisiçoes 24h",
      value: stats.todayAccess,
      description: "Total de requisiçoes hoje",
      icon: TrendingUp,
      color: "text-orange-600",
    },
    {
      title: "Total de Acessos",
      value: stats.totalAccess,
      description: "Ultimos 30 dias",
      icon: Eye,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Card key={index} className="rounded-lg dark:bg-subbackground border border-zinc-300 dark:border-zinc-700">
            <CardHeader className="flex flex-row items-center justify-between rounded-lg space-y-0 pb-2 dark:bg-subbackground">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <Icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent className="dark:bg-subbackground rounded-lg">
              <div className="text-2xl font-bold">{card.value.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
