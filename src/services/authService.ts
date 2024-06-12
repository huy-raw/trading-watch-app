import axiosClient from '@/configs/axiosClient'
import { LoginModel, RegisterModel } from './type'

const signin = async (request: LoginModel) => {
  try {
    const response = await axiosClient.post('/auth/login', request)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const signup = async (request: RegisterModel) => {
  try {
    const response = await axiosClient.post('/auth/register', request)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { signin, signup }
