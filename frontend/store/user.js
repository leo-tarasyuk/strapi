export const state = () => ({
  messages: [],
  vacations: []
})

export const getters = {
  messages: state => state.messages,
  vacations: state => state.vacations
}

export const mutations = {
  getMessages (state, payload) {
    state.messages = payload
  },
  getVacations (state, payload) {
    state.vacations = payload
  }
}

export const actions = {
  requestGetMessages({ commit }) {
    return new Promise((resolve, reject) => {
      const url = '/articles'

      this.$axios.$get(url)
        .then(response => {
          commit('getMessages', response)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },

  requestLoginUser(context, payload) {
    return new Promise((resolve, reject) => {
      this.$auth.loginWith('local', {
        data: {
          identifier: payload.email,
          password: payload.password
        },
      })
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
  },

  requestRegisterUser({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.post("auth/local/register", {
        username: payload.email,
        email: payload.email,
        password: payload.password,
      })
      .then(response => {
        dispatch('requestLoginUser', payload)
        resolve(response)
      })
      .catch(error => reject(error))
    })
  },

  requestGetVacations({ commit }) {
    return new Promise((resolve, reject) => {
      const url = '/vacations'

      this.$axios.$get(url)
        .then(response => {
          commit('getVacations', response)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  }
}
