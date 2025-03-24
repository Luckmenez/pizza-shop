import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')


  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtors:</span>
      <Input placeholder="Id do pedido" className="h-8 w-[320px]" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent defaultValue="all">
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant={'secondary'} size={'xs'}>
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant={'outline'} size={'xs'}>
        <X className="mr-2 h-4 w-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
