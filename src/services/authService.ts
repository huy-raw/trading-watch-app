import axiosClient from '@/configs/axiosClient'
import { LoginRequest, RegisterRequest } from './type'

const signin = async (request: LoginRequest) => {
  try {
    const response = await axiosClient.post('/auth/login', request)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const signup = async (request: RegisterRequest) => {
  try {
    const response = await axiosClient.post('/auth/register', request)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { signin, signup }
