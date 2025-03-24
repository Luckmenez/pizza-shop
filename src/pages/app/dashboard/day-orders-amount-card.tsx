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
        {dayOrdersAmount && (
          <span className="text-2xl font-bold tracking-tight">
            {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday > 0 && (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}

              {dayOrdersAmount.diffFromYesterday < 0 && (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}

              {dayOrdersAmount.diffFromYesterday === 0 && (
                <>
                  <span className="text-foreground">
                    -{dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}
            </p>
          </span>
        )}
      </CardContent>
    </Card>
  )
}
