import * as api from '../api'

const actions = {
    LOGIN({commit}, {email, password}) {
        return api.auth.login(email, password)
            .then(({accessToken}) => commit('LOGIN', accessToken))
    }
}
export default actions