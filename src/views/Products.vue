<template>
  <div class="products">
    <ma-card
        v-for="card in products"
        :key="card.id"

        :id="card.id"
        :title="card.name"
        :desc="card.description"
        :price="card.price"
    ></ma-card>
  </div>
</template>

<script>
import MaCard from '@/components/Card.vue'
export default {
  name: "MaProducts",
  components: {MaCard},

  mounted() {
    this.$store.dispatch('getProducts');
  },

  computed: {
    products() {
      return this.$store.state.products.products;
    }
  }
}
</script>

<style scoped>

.products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 50px;
}

</style>