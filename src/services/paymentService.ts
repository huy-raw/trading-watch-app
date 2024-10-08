import axiosClient from '@/configs/axiosClient'
import { AppPath } from './utils'
import { isLocal } from '@/configs/config'

export const paymentVNPay = async (orderId: string, mode) => {
  try {
    const res = await axiosClient.get(AppPath.PAYMENT_VNPAY(orderId, mode))

    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

interface PaymentPostWatch {
  watchId?: number
  renewalPackageId?: number
}

export const paymentPostWatch = async (req: PaymentPostWatch) => {
  try {
    const res = await axiosClient.get(
      `payment/vn-pay/postWatch?watchId=${req.watchId}&renewalPackageId=${req.renewalPackageId}&isLocal=${isLocal}`
    )

    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

interface DepositResponse {
  code: string
  message: string
  paymentUrl: string
}

export const deposit = async (amount, userId): Promise<DepositResponse> => {
  try {
    const res = await axiosClient.get(AppPath.DEPOSIT(amount, userId, isLocal))

    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
