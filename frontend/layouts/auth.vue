<template>
    <v-app dark>
      <v-app-bar
        fixed
        app
      >
        <h2>Strapi</h2>
        <v-spacer />
        <v-btn to='/auth/login'>
          Login
        </v-btn>
        <v-btn to='/auth/register'>
          Register
        </v-btn>
      </v-app-bar>
      <v-main>
        <Nuxt />
      </v-main>
    </v-app>
</template>