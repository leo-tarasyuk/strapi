<template>
  <v-container >
    <v-row v-for="message in messages" :key="message.id">
      <v-col class="topic">
        <v-container class="author-block">
          <img class="author-image" :src="rootApi + message.author.picture.url" alt="">
          <p class="author-name">{{ message.author.name }}</p>
        </v-container>

        <v-container class="topic-block" >
          <h2 class="topic-description">{{ message.description }}</h2>
          <img class="topic-image" :src="rootApi + message.image.url" alt="">
          <p class="topic-text">{{ message.content }}</p>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// import { messageQuery } from '../services/graphql'

export default {
  layout: 'default',

  middleware: 'authenticated',

  data () {
    return {
      rootApi: process.env.baseUrl
    }
  },

  computed: {
    ...mapGetters({
      messages: 'user/messages'
    })
  },

  created () {
    this.requestGetMessages()
  },

  methods: {
    ...mapActions({
      requestGetMessages: 'user/requestGetMessages',
    })
  },

  // apollo: {
  //   messages: {
  //     prefetch: true,
  //     query: messageQuery
  //   }
  // },
}
</script> 

<style lang='scss' scoped>

.topic {
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid brown;

  .author-block {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .author-image {
      width: 30px;
      height: 30px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%
    }

    .author-name {
      margin: 0;
      padding-left: 10px;
    }
  }

  .topic-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .topic-description {
      padding: 10px;
      text-align: center;
    }

    .topic-image {
      width: 300px;
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    .topic-text {
      padding: 10px 0;
    }
  }
}

</style>