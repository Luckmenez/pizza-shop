import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthOrdersRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthOrdersRevenue,
  })
  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita Total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <span className="text-2xl font-bold tracking-tight">
            {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth > 0 && (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}

              {monthRevenue.diffFromLastMonth < 0 && (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}

              {monthRevenue.diffFromLastMonth === 0 && (
                <>
                  <span className="text-foreground">
                    -{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}
            </p>
          </span>
        )}
        {/* <span className="text-2xl font-bold tracking-tight">
          R$ 1.200,00
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">+2%</span>{' '}
            em relação ao mês passado
          </p>
        </span> */}
      </CardContent>
    </Card>
  )
}
