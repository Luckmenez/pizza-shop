import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita Total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          R$ 1.200,00
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">+2%</span>{' '}
            em relação ao mês passado
          </p>
        </span>
      </CardContent>
    </Card>
  )
}
