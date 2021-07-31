<template>
  <main>
    <Search class="input-block" @show-page="checkVacation"/>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'default',

  mounted () {
    this.requestGetVacations()
  },

  emit: ['show-page'],

  methods: {
    ...mapActions ({
      requestGetVacations: 'user/requestGetVacations'
    }),

    checkVacation (language) {
      this.$router.push('/vacations/' + language.toLowerCase())
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .input-block {
    width: 80%;
  }
}
</style>