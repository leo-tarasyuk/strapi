<template>
  <div v-if="vacation" class="vacation" >
    <h1>{{ vacation.language }}</h1>
    <img class="vacation-image" :src="rootApi+vacation.image[0].url" alt="">
    <p>{{ vacation.description }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  asyncData ({ params }) {
    const language = params.id

    return { language }
  },

  data () {
    return {
      rootApi: process.env.baseUrl
    }
  },

  computed: {
    ...mapGetters ({
      vacations: 'user/vacations'
    }),

    vacation: {
      get () {
        return this.vacations.filter(vacation =>
          vacation.language.toLowerCase() === this.language)[0]
      },

      set (value) {
        return value
      }
    }
  },

  created () {
    this.requestGetVacations()
  },

  methods: {
    ...mapActions ({
      requestGetVacations: 'user/requestGetVacations'
    })
  }
}
</script>

<style lang="scss" scoped>
.vacation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .vacation-image {
  width: 50%;
  height: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%
}
}
</style>