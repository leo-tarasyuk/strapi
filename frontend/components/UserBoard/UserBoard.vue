<template>
    <v-navigation-drawer
      v-model="isOpen"
      :right="true"
      temporary
      fixed
    >
      <v-list>
        <v-list-item>
          <v-row>
            <p class="user-board-name">User</p>
            <v-spacer />
            <v-btn
              icon
              @click="showUserBoard(userBoard)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-list-item>
        <v-list-item>
          <v-btn @click="logout">Logout</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        userBoard: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
      isOpen: {
        get () {
          return this.userBoard
        },

        set (value) {
          return value
        }
      }
    },

    methods: {
        showUserBoard (value) {
          this.$emit('show-user-board', value)
        },

        logout () {
          this.$auth.logout()
          this.$router.push('/auth/login')
        }
    }
}
</script>

<style scoped>
.user-board-name {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding-left: 10px;
}
</style>