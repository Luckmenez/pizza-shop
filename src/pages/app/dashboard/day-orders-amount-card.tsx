import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDaysOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDaysOrdersAmount,
  })
  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita Total (dia)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          12
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 dark:text-rose-400">-4%</span> em
            relação a ontem
          </p>
        </span>
      </CardContent>
    </Card>
  )
}
