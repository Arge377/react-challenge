import { Options } from '../types/httpOptions'
import { axiosClient } from './apiClient'

export default class FetchClient {
  static async get<T>(options: Options): Promise<T> {
    const { endpoint } = options
    const response = await axiosClient.get(endpoint)
    return response.data
  }

  static async post<T>(options: Options): Promise<T> {
    const { endpoint, body } = options
    const response = await axiosClient.post(endpoint, body)
    return response.data
  }
}