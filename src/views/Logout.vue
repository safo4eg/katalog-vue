<template>

</template>

<script>
export default {
  name: "MaLogout",
  mounted() {
    this.$store.dispatch('logout', {token: this.$store.getters.userToken}).then(resolved => {
      this.$router.push({name: 'products'});
    });
  }
}
</script>

<style scoped>

</style>