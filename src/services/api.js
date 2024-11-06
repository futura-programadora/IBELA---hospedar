import axios from 'axios'

const api = axios.create({
    baseURL: 'http://igrejabiblicaevangelicalivrealpha.com:3000'
})

export default api