'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'A linear area chart';

const chartData = [
  { month: 'Jan', usuarios: 186 },
  { month: 'Fev', usuarios: 305 },
  { month: 'Mar', usuarios: 1037 },
  { month: 'Abril', usuarios: 1723 },
  { month: 'Maio', usuarios: 2209 },
  { month: 'Jun', usuarios: 2914 },
  { month: 'Jul', usuarios: 2809 },
  { month: 'Ago', usuarios: 2909 },
  { month: 'Set', usuarios: 3209 },
  { month: 'Out', usuarios: 3309 },
  { month: 'Nov', usuarios: 3609 },
  { month: 'Dez', usuarios: 4209 }
];

const chartConfig = {
  desktop: {
    label: 'Usuarios',
    color: '#FA6101'
  }
} satisfies ChartConfig;

export function TotalUser() {
  return (
    <Card className="w-full rounded-lg bg-white dark:bg-background border border-zinc-300 dark:border-zinc-700">
      <CardHeader>
        <CardTitle className="text-lg">Usuarios cadastrados</CardTitle>
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
              dataKey="usuarios"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
