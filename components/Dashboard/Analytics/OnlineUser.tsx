'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'A linear area chart';

const chartData = [
  { month: '12h', online: 479 },
  { month: '13h', online: 381 },
  { month: '14h', online: 396 },
  { month: '15h', online: 356 },
  { month: '16h', online: 384 },
  { month: '17h', online: 405 },
  { month: '18h', online: 537 },
  { month: '19h', online: 573 },
  { month: '20h', online: 629 },
  { month: '21h', online: 644 }
];

const chartConfig = {
  desktop: {
    label: 'Usuarios',
    color: '#FA6101'
  }
} satisfies ChartConfig;

export function OnlineUser() {
  return (
    <Card className="w-full rounded-lg bg-white dark:bg-subbackground border border-zinc-300 dark:border-zinc-700">
      <CardHeader>
        <CardTitle className='text-lg'>Usuarios online</CardTitle>
        <CardDescription>Total de Usuarios online agora</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="online"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Aumento de 5.2% nesse mês <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
