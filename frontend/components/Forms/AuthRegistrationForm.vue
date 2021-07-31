<template>
  <v-container>
    <v-form>
      <v-text-field 
        v-model="userInfo.email"
        :error-messages="emailErrors"
        label="Email"
        @blur="$v.userInfo.email.$touch()"
      />
      <v-text-field 
        v-model="userInfo.password"
        :error-messages="passwordErrors"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        @blur="$v.userInfo.password.$touch()"
      />

      <v-text-field
        v-model="userInfo.repeatPassword"
        :error-messages="repeatPasswordErrors"
        label="Repeat password"
        :type="showRepeatPassword ? 'text' : 'password'"
        :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showRepeatPassword = !showRepeatPassword"
        @blur="$v.userInfo.repeatPassword.$touch()"
      />

      <v-btn @click="submit(userInfo)">{{ buttonText }}</v-btn>
    </v-form>
    <span v-if="error">{{ error }}</span>
  </v-container>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  mixins: [ validationMixin ],

  validations: {
    userInfo: {
      email: { required, email },
      password: { required, minLength: minLength(6)},
      repeatPassword: { sameAsPassword: sameAs('password')}
    }
  },

  props: {
    submitForm: {
      type: Function,
      default: () => {}
    },
    buttonText: {
      type: String,
      default: ''
    },
    error: {
      type: [ String, Boolean ],
      default: ''
    }
  },

  data () {
    return {
      showPassword: false,
      showRepeatPassword: false,
      userInfo: {
        email: '',
        password: ''
      }
    }
  },

  computed: {

    emailErrors () {
      const errors = []
      if (!this.$v.userInfo.email.$dirty) return errors
      !this.$v.userInfo.email.required && errors.push('Email is required')
      !this.$v.userInfo.email.email && errors.push('Must be valid email')
      return errors
    },

    passwordErrors () {
      const errors = []
      if (!this.$v.userInfo.password.$dirty) return errors
      !this.$v.userInfo.password.required && errors.push('Password is required')
      !this.$v.userInfo.password.minLength && errors.push('Password must have at least 6 symbols')
      return errors
    },

    repeatPasswordErrors () {
      const errors = []
      if (!this.$v.userInfo.repeatPassword.$dirty) return errors
      !this.$v.userInfo.repeatPassword.sameAsPassword && errors.push('The repeat password is not the same')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.userInfo.$invalid) this.submitForm(this.userInfo)
    }
  }
}
</script>