import axiosClient from '@/configs/axiosClient'
import { AppPath } from './utils'

interface CreateOrderRequest {
  watchId: number
  userId: number
}

export const createOrder = async (req: CreateOrderRequest) => {
  try {
    const response = await axiosClient.post(AppPath.CREATE_ORDER, req)

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
