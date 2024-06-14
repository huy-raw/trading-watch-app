import { Role } from '@/common/type'

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
}

export interface CreateAppraisalRequest {
  name: string
  email: string
  phoneNumber: string
  hasOriginalBox: boolean
  hasPapersOrWarranty: boolean
  hasPurchaseReceipt: boolean
  areThereAnyStickers: boolean
  age: number
  region: string
  desiredPrice: number
  description: string
  brand: string
  referenceCode: string
  imageFiles: unknown[]
}

export interface CreateAppraisalReportRequest {
  brand: string
  Request: string
  referenceCode: string
  watchType: string
  material: string
  watchStrap: string
  yearProduced: number
  watchStatus: string
  accessories: string
  watchGender: string
  origin: string
  size: string
  userId: number
  createDate: string
  imageFiles: unknown[]
}
