<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div
          class="card-wrapper"
          v-for="group in cartGroups"
          :key="group[0].id"
      >
        <ma-card
            :id="group[0].id"
            :title="group[0].name"
            :desc="group[0].description"
            :price="group[0].price"
        ></ma-card>

        <div class="actions">
          <button class="item" @click="deleteAllProductsGroup(group[0].product_id)">delete product</button>
          <button class="item" @click="deleteProduct(group[0].id)">take</button>
          <span class="item">{{group.length}}</span>
          <button class="item" @click="addProduct(group[0].product_id)">add</button>
        </div>

      </div> <!-- for wrapper -->
    </div>

    <div class="order">
      <button @click="toOrder">to order</button>
    </div>
  </div>
</template>

<script>
import MaCard from '@/components/Card.vue';
export default {
  name: "MaCart",
  components: {MaCard},
  data() {
    return {

    }
  },
  mounted() {
    if(this.$store.getters.isAnonymous) this.$router.push({name: 'products'});
    else {
      let payload = {token: this.$store.getters.userToken};
      this.$store.dispatch('getCart', payload);
    }
  },

  computed: {
    cartGroups() {
      return this.$store.getters.cartGroups;
    },

    userToken() {
      return this.$store.getters.userToken;
    },
  },

  methods: {
    addProduct(product_id) {
      this.$store.dispatch('addProductToCart', {userToken: this.userToken, id: product_id});
    },

    deleteProduct(id) {
      this.$store.dispatch('deleteProductFromCart', {token: this.userToken, productsId: [id]});
    },

    deleteAllProductsGroup(product_id) {
      let idArray = [];
      this.cartGroups[product_id].forEach(product => {
        idArray.push(product.id);
      });
      this.$store.dispatch('deleteProductFromCart', {token: this.userToken, productsId: idArray});
    },

    toOrder() {
      this.$store.dispatch('toOrder', {token: this.userToken}).then(resolved => {
        this.$router.push({name: 'products'});
      });
    }
  }

}
</script>

<style scoped>

.cart-wrapper {
  display: flex;
  flex-direction: column;
}

.cart {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 50px;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
}

.card-wrapper:nth-child(n + 4) {
  margin-top: 20px;
}

.actions {
  align-self: flex-end;
  position: relative;
  top: -40px;
  right: 20px;
}

.actions button.item {
  padding: 3px;
}

.actions button.item:hover {
  cursor: pointer;
}

.actions .item:nth-child(n + 2) {
  margin-left: 5px;
}

.order {
  align-self: flex-end;
}

.order button {
  background-color: yellow;
  padding: 5px;
  font-size: 24px;
}

.order button:hover {
  cursor: pointer;
}

.order button:active {
  color: white;
  background-color: black;
}

</style>