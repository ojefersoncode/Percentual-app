'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'A bar chart';

const chartData = [
  { month: '12h', usuarios: 186 },
  { month: '13h', usuarios: 305 },
  { month: '14h', usuarios: 1037 },
  { month: '15h', usuarios: 1723 },
  { month: '16h', usuarios: 2209 },
  { month: '17h', usuarios: 2914 },
  { month: '18h', usuarios: 2809 },
  { month: '19h', usuarios: 2809 },
  { month: '20h', usuarios: 2209 },
  { month: '21h', usuarios: 2309 },
  { month: '22h', usuarios: 2109 },
  { month: '23h', usuarios: 1209 }
];

const chartConfig = {
  desktop: {
    label: 'Usuarios',
    color: '#FA6101'
  }
} satisfies ChartConfig;

export function ChartUsers() {
  return (
    <Card className="w-full rounded-lg bg-white dark:bg-background border border-zinc-300 dark:border-zinc-700">
      <CardHeader>
        <CardTitle className="text-lg">Usuarios Online</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="usuarios" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
