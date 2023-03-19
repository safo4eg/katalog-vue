<template>
  <div class="orders">
    <p class="cheque">Чек: ${{orderSum}}</p>
    <div class="card-wrapper">
      <ma-card
          v-for="product in ordersProduct"
          :key="product.product.id"
          :id="product.product.id"
          :title="product.product.name"
          :price="product.product.price"
          :desc="product.product.description"
          :amount="product.count"
      ></ma-card>
    </div>
  </div>
</template>

<script>
import MaCard from '@/components/Card.vue';
export default {
  name: "MaOrders",
  components: {MaCard},

  mounted() {
    if(this.$store.getters.isAnonymous) this.$router.push({name: 'products'});
    else {
      let payload = {token: this.$store.getters.userToken};
      this.$store.dispatch('getOrder', payload);
    }
  },

  computed: {
    ordersProduct() {
      return this.$store.getters.ordersProduct;
    },

    orderSum() {
      return this.$store.getters.orderSum;
    }
  }


}
</script>

<style scoped>
.orders {
  width: 100%;
  margin-top: 50px;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cheque {
  font-size: 20px;
  font-weight: bold;
}

</style>