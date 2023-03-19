<template>
  <div class="login">
    <h3 class="title">Sign in</h3>
    <form action="/" @submit.prevent="onSubmit">
      <ma-validation-errors v-if="validationErrors" :validation-errors="validationErrors"></ma-validation-errors>
      <div class="input-wrapper">
        <input class="item" type="email" placeholder="email" v-model="email">
        <input class="item" type="password" placeholder="password" v-model="password">
        <input class="item" type="submit" value="Login">
      </div>
    </form>
  </div>
</template>

<script>
import MaValidationErrors from "@/components/ValidationErrors.vue";
export default {
  name: "MaLogin",
  components: {MaValidationErrors},
  data() {
    return {
      email: '',
      password: '',
    }
  },

  computed: {
    formData() {
      return {email: this.email, password: this.password}
    },

    validationErrors() {
      return this.$store.state.auth.validationErrors;
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('login', JSON.stringify(this.formData));
    }
  }
}
</script>

<style scoped>
.login {
  width: 700px;
  margin: 40px auto 0 auto;
}

.title {
  font-size: 32px;
  text-align: center;
}

form {
  width: 500px;
  margin: 30px auto 0 auto;
  text-align: center;
}

.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px 15px;
  font-size: 16px;
}

.input-wrapper .item:nth-child(n + 2) {
  margin-top: 10px;
}

.fio-wrapper input:nth-child(n + 2) {
  margin-left: 5px;
}
</style>