<template>

  <v-row align="center"
         justify="center">
    <v-col cols="12"></v-col>
    <v-col cols="12" align="center">
      <h1 style="color:hotpink;">Commerce</h1>
    </v-col>
    <v-col cols="5">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="id"

          :rules="idRules"
          label="id"
          required
        >
<!--          :counter="10"-->
        </v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="password"
          required
        >
        </v-text-field>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
          로그인
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
          취소
        </v-btn>

      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: true,
    id: '',
    password: '',
    idRules: [
      v => !!v || 'Name is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>

</style>