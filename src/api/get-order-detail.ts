import { api } from '@/lib/axios'

export interface GetOrderDetailParams {
  orderId: string
}

export interface getOrdersDetailsResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: Date
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function GetOrderDetail({ orderId }: GetOrderDetailParams) {
  const response = await api.get<getOrdersDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
