import axiosClient from '@/configs/axiosClient'
import { CreateAppraisalReportRequest } from './type'

const createAppraisalReportRequest = async (
  req: CreateAppraisalReportRequest
) => {
  try {
    const response = await axiosClient.post('/appraisal-report/create')

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { createAppraisalReportRequest }
