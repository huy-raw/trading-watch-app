import axiosClient from '@/configs/axiosClient'
import { CreateAppraisalRequest } from './type'

const createAppraisalRequest = async (req: CreateAppraisalRequest) => {
  try {
    const form = new FormData()
    form.append('name', `${req.name}`)
    form.append('email', `${req.email}`)
    form.append('phoneNumber', `${req.phoneNumber}`)
    form.append('hasOriginalBox', `${req.hasOriginalBox}`)
    form.append('hasPapersOrWarranty', `${req.hasPapersOrWarranty}`)
    form.append('hasPurchaseReceipt', `${req.hasPurchaseReceipt}`)
    form.append('areThereAnyStickers', `${req.areThereAnyStickers}`)
    form.append('age', `${req.age}`)
    form.append('region', `${req.region}`)
    form.append('desiredPrice', `${req.desiredPrice}`)
    form.append('description', `${req.description}`)
    form.append('brand', `${req.brand}`)
    form.append('referenceCode', `${req.referenceCode}`)
    form.append('imageFiles', `${req.imageFiles}`)

    const response = await axiosClient.post('/appraisal-requests/create')

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { createAppraisalRequest }
