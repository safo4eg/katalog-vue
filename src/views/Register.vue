<template>
  <div class="register">
    <h3 class="title">{{isAnonymous}}</h3>
    <form action="/" @submit.prevent="onSubmit">
      <ma-validation-errors v-if="validationErrors" :validation-errors="validationErrors"></ma-validation-errors>
      <div class="input-wrapper">
        <div class="fio-wrapper item">
          <input type="text" placeholder="name" v-model="name">
          <input type="text" placeholder="surname" v-model="surname">
          <input type="text" placeholder="patronymic" v-model="patronymic">
        </div>
        <input class="item" type="email" placeholder="email" v-model="email">
        <input class="item" type="password" placeholder="password" v-model="password">
        <input class="item" type="password" placeholder="confirm password">
        <input class="item" type="submit" value="Register">
      </div>
    </form>
  </div>
</template>

<script>
import MaValidationErrors from "@/components/ValidationErrors.vue";
import {mapGetters} from "vuex";

export default {
  name: "MaRegister",
  components: {MaValidationErrors},
  data() {
    return {
      name: '',
      surname: '',
      patronymic: '',
      email: '',
      password: '',
    }
  },

  computed: {
    ...mapGetters({
      isAnonymous: "isAnonymous",
    }),

    formData() {
      let obj = {
        fio: this.surname + ' ' + this.name + ' ' + this.patronymic,
        email: this.email,
        password: this.password
      }
      return obj;
    },

    validationErrors() {
      return this.$store.state.auth.validationErrors;
    }
  },

  methods: {
    onSubmit() {
      this.$store.dispatch('register', JSON.stringify(this.formData)).then(
          resolved => {
            this.$router.push('products');
      });
    }
  }
}
</script>

<style scoped>
.register {
  width: 700px;
  margin: 40px auto 0 auto;
}

.title {
  font-size: 32px;
  text-align: center;
}

form {
  display: inline-block;
  margin-top: 30px;
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

.fio-wrapper {
  display: flex;
}

.fio-wrapper input:nth-child(n + 2) {
  margin-left: 5px;
}

</style>