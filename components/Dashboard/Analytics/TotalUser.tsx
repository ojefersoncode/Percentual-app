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
  { month: 'January', usuarios: 186 },
  { month: 'February', usuarios: 305 },
  { month: 'March', usuarios: 1037 },
  { month: 'April', usuarios: 1723 },
  { month: 'May', usuarios: 2209 },
  { month: 'June', usuarios: 2914 }
];

const chartConfig = {
  desktop: {
    label: 'Usuarios',
    color: 'var(--chart-1)'
  }
} satisfies ChartConfig;

export function TotalUser() {
  return (
    <Card className="w-full rounded-lg bg-white dark:bg-subbackground border border-zinc-300 dark:border-zinc-700">
      <CardHeader>
        <CardTitle className='text-lg'>Usuarios cadastrados</CardTitle>
        <CardDescription>Total de contas cadastradas</CardDescription>
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
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Aumento de 34.7% nesse mês <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
