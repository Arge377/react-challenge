import { User } from '../types/auth'
import { setBearer } from './apiClient'
import FetchClient from './fetchClient.service'

const authorize = async ({username, password}: User) => {
  return FetchClient.post<any>({
    endpoint: '/auth',
    body: {
        username,
        password
    },
  }).then((res) => {
    setBearer(res.token)
    return res.token;
  })
}

export const authService = {
  authorize
}