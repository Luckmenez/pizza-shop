import { api } from '@/lib/axios'

interface DeliverOrderParams {
  orderId: string
}

export async function deliverlOrder({ orderId }: DeliverOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
