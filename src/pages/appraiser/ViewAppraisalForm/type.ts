export interface AppraisalDetail {
  age: number
  appointmentDate: string // ISO date string
  appraisalLocation: string
  arethereanystickers: boolean
  brand: string
  createDate: string | null
  description: string
  desiredPrice: number
  email: string
  hasOriginalBox: boolean
  hasPapersOrWarranty: boolean
  hasPurchaseReceipt: boolean
  id: number
  imageUrls: string[] // Array of image URLs
  name: string
  pdfUrl: string | null
  phoneNumber: string
  referenceCode: string
  status: 'wait' | 'processing' | 'complete' // Assuming status has limited values
  updateDate: string | null
  userId: number
}
