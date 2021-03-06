import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401

const onUnauthorized = () => {
    router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    }) .then(result => result.data)
        .catch(result => {
            const {status} = result.response
            if(status === UNAUTHORIZED) onUnauthorized()
            throw result.response
        })
}

// 인증 토큰 정보 세팅
export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const auth = {
    login(id, password) {
        return request('post', '/login', {id, password})
    }
}