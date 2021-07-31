<template>
  <v-container>
    <h1>{{ title }}</h1>
    <AuthLoginForm :button-text="title" :submit-form="loginUser" :error="responseError"/>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import AuthLoginForm from '@/components/Forms/AuthLoginForm'

export default {
  components: {
    AuthLoginForm
  },

  layout: 'auth',

  middleware: 'notAuthenticated',

  data () {
    return {
      title: 'Login',
      responseError: ''
    }
  },

  methods: {
    ...mapActions({
      requestLoginUser: 'user/requestLoginUser',
    }),

    loginUser(user) {
      this.responseError = false;
      this.requestLoginUser(user)
      .catch(error => {
        this.responseError = error.response.data.message[0].messages[0].message
      })
    }
  }
}
</script>