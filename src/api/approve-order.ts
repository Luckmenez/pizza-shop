import { api } from '@/lib/axios'

interface AprroveOrderParams {
  orderId: string
}

export async function approvelOrder({ orderId }: AprroveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
