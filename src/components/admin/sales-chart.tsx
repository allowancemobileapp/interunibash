"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { date: "Jan", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Feb", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Mar", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Apr", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "May", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Jun", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Jul", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Aug", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Sep", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Oct", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Nov", sales: Math.floor(Math.random() * 2000) + 1000 },
  { date: "Dec", sales: Math.floor(Math.random() * 2000) + 1000 },
]

export function SalesChart() {
  return (
    <ChartContainer
      config={{
        sales: {
          label: "Sales",
          color: "hsl(var(--primary))",
        },
      }}
      className="h-[300px] w-full"
    >
      <BarChart data={data} accessibilityLayer>
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `₦${Number(value) / 1000}k`}
        />
        <Tooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="sales" fill="var(--color-sales)" radius={8} />
      </BarChart>
    </ChartContainer>
  )
}
