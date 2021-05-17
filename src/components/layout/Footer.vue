<template>
  <v-footer
      dark
      padless
  >
    <div class="pink lighten-1 white--text text-center mx-auto" style="width:100%;">
      Copyright &copy; {{ new Date().getFullYear() }}

      <v-spacer></v-spacer>
      <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          dark
          icon
      >
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
    ]
  })
}
</script>

<style scoped>

</style>