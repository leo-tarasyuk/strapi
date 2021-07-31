<template>
  <v-app dark>
    <Header 
      :navigation-board="navigationBoard"
      :mini="mini"
      :user-board="userBoard"
      @show-nav-board="showNavigationBoard"
      @mini-nav-board="changeNavigationBoard"
      @show-user-board="showUserBoard"
    />
    <NavigationBoard 
      :navigation-board="navigationBoard"
      :mini="mini"
    />
    <v-main>
      <Nuxt />
    </v-main>
    <UserBoard 
      :user-board="userBoard"
      @show-user-board="showUserBoard"
    />
    <v-footer app >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  emits: ['show-nav-board', 'mini-nav-board', 'show-user-board'],

  data () {
    return {
      navigationBoard: true,
      mini: false,
      userBoard: false
    }
  },

  methods: {
    showNavigationBoard (value) {
      this.navigationBoard = !value
    },

    changeNavigationBoard (value) {
      this.mini = !value
    },

    showUserBoard (value) {
      this.userBoard = !value
    }
  }
}
</script>