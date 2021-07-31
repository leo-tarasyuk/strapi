<template>
  <v-container>
    <h1>{{ title }}</h1>
    <AuthRegistrationForm :button-text="title" :submit-form="registerUser" :error="responseError"/>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import AuthRegistrationForm from '@/components/Forms/AuthRegistrationForm'

export default {
  components: {
    AuthRegistrationForm
  },

  layout: 'auth',

  middleware: 'notAuthenticated',

  data () {
    return {
      title: 'Register',
      responseError: ''
    }
  },

  methods: {
    ...mapActions({
      requestRegisterUser: 'user/requestRegisterUser',
    }),

    registerUser(user) {
      this.responseError = false;
      this.requestRegisterUser(user)
      .catch(error => {
        this.responseError = error.response.data.message[0].messages[0].message
      })
    }
  }
}
</script>