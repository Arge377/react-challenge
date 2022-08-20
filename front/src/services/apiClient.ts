import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const setBearer = (token: string) => {
  axiosClient.interceptors.request.use(
    (request) => {
      if(request.headers){
        const localToken = localStorage.getItem('token');
        token ? request.headers.Authorization = `Bearer ${token}` : request.headers.Authorization = `Bearer ${localToken}`;
      }
 
      return request
    }
  )
}

export { axiosClient, setBearer }