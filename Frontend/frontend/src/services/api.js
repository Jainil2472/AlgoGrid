import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || ' https://leaddesk-backend-ulhf.onrender.com',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

export function getApiError(error, fallbackMessage) {
  return error.response?.data?.message || fallbackMessage
}

export default api
