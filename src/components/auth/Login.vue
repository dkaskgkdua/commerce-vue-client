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
            :disabled="invalidForm"
        >
          취소
        </v-btn>

      </v-form>
      <p class="error" v-if="error">{{error}}</p>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Login",
  data: () => ({
    valid: true,
    id: '',
    password: '',
    error: '',
    rPath: '',
    idRules: [
      v => !!v || 'Name is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),
  computed: {
    invalidForm() {
      return !this.id || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
       'LOGIN'
    ]),
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    onSubmit() {
      this.LOGIN({id:this.id, password: this.password})
        .then(() => {
          this.$router.push(this.rPath) // 이전 url로 라우팅
        })
        .catch(err => {
          this.error = err.data.error
        })
    }
  }
}
</script>

<style scoped>

</style>