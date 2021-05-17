<template>
  <v-app>
    <Navbar/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export default {
  name: 'App',

  components: {
    Footer,
    Navbar
  },

  data: () => ({

  }),
};
</script>
