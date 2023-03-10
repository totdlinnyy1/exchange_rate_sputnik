import axios from 'axios'

export const API_URL = 'https://api.apilayer.com/exchangerates_data/'

const API_KEY = import.meta.env.VITE_EXCHANGER_RATES_API_KEY || ''

// Axios instance with base URL and apikey for api
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    apikey: API_KEY
  }
})

export default axiosInstance
