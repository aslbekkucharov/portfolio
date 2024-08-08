import axios from 'axios'

const instance = axios.create({
    timeout: 5000,
    baseURL: process.env.API_BASE
})

export { instance as axiosInstance }