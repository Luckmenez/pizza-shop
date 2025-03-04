import { api } from '@/lib/axios'

export interface RegisterRestaurantPayload {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantPayload) {
  return api.post('/restaurants', {
    email,
    managerName,
    phone,
    restaurantName,
  })
}
