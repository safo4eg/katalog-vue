<template>
  <nav class="nav-topbar">
    <router-link class="link home" to="products">Katalog</router-link>
    <template v-if="!isAnonymous">
      <div class="right">
        <router-link class="link" to="products">Products</router-link>
        <router-link class="link" to="orders">Orders</router-link>
        <router-link class="link" to="cart">Cart</router-link>
        <router-link class="link" to="logout">Sign out</router-link>
      </div>
    </template>
    <template v-else-if="isAnonymous">
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
    isAnonymous() {
      return this.$store.getters.isAnonymous;
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