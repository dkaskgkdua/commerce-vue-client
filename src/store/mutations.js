import {setAuthInHeader} from '../api'

const mutations = {
    LOGIN(state, token) {
        if(!token) return
        state.token = token
        localStorage.setItem('token', token)
        setAuthInHeader(token)
    }
}

export default mutations