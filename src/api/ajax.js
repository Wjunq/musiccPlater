import axios from "axios";
import nprogress from "nprogress";

const ajax = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

ajax.interceptors.request.use((config) => {
    nprogress.start();
    return config
})

ajax.interceptors.response.use(
    (req) => {
        nprogress.done()
        return req.data
    },
    (err) => {
        nprogress.done()
        alert(err)
        return new Promise(() => {})
    }
)

export default ajax