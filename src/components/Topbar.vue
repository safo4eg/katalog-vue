<template>
  <nav class="nav-topbar">
    <router-link class="link home" to="products">Katalog</router-link>
    <template v-if="isLoggedIn">
      <div class="right">
        <router-link class="link" to="products">Products</router-link>
        <router-link class="link" to="register">Orders</router-link>
        <router-link class="link" to="register">Cart</router-link>
        <router-link class="link" to="register">Sign out</router-link>
      </div>
    </template>
    <template v-else-if="!isLoggedIn">
      <div class="right">
        <router-link class="link" to="products">Products</router-link>
        <router-link class="link" to="login">Sign in</router-link>
        <router-link class="link" to="register">Sign up</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
export default {
  name: "MaTopBar",
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    }
  },
}
</script>

<style scoped>

.nav-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.link {
  color: black;
  text-decoration: none;
  transition: all .1s linear;
}

.link:hover {
  color: #ee6e05;
}

.link.home {
  font-size: 32px
}

.link.home:hover {
  color: black;
}
</style>