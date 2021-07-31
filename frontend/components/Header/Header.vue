<template>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click="showNavigationBoard(navigationBoard)" />
      <!-- <v-btn
        v-if="navigationBoard"
        icon
        @click="changeNavigationBoard(mini)"
      >
        <v-icon>mdi-{{ `chevron-${ mini ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-btn
        icon
        @click="darkMode"
      >
        <v-icon>mdi-alpha-t-circle</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        icon
        @click="showUserBoard(userBoard)"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    props: {
        navigationBoard: {
            type: Boolean,
            default: false,
        },

        mini: {
            type: Boolean,
            default: false
        },

        userBoard: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        showNavigationBoard (value) {
            this.$emit('show-nav-board', value)
        },

        // changeNavigationBoard (value) {
        //     this.$emit('mini-nav-board', value)
        // },

        darkMode () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },

        showUserBoard (value) {
            this.$emit('show-user-board', value)
        }
    }
}
</script>