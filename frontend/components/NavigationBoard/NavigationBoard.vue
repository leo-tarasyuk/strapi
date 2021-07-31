<template>
    <v-navigation-drawer
      v-model="isOpen"
      :mini-variant="mini"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in pages"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
      }
    },

    data () {
      return {
        pages: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Vacations',
            to: '/vacations'
          }
        ],
      }
    },

    computed: {
      isOpen: {
        get () {
          return this.navigationBoard
        },

        set (value) {
          return value
        }
      }
    }
}
</script>