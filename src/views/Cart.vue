<template>
  <div class="cart">
    <ma-card
        v-for="group in cartGroups"
        :key="group[0].id"

        :id="group[0].id"
        :title="group[0].name"
        :desc="group[0].description"
        :price="group[0].price"
    ></ma-card>
  </div>
</template>

<script>
import MaCard from '@/components/Card.vue';
export default {
  name: "MaCart",
  components: {MaCard},
  mounted() {
    if(this.$store.getters.isAnonymous) this.$router.push({name: 'products'});
    else {
      let payload = {token: this.$store.getters.userToken};
      this.$store.dispatch('getCart', payload);
    }
  },

  computed: {
    cart() {
      return this.$store.state.products.cart;
    },

    cartGroups() {
      return this.$store.getters.cartGroups;
    }
  }

}
</script>

<style scoped>

.cart {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 50px;
}

</style>