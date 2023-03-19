<template>
  <div class="card">
    <div class="top">
      <p class="title">{{title}}</p>
      <p class="price">${{price}}</p>
    </div>
    <div class="desc">
      <p>{{desc}}</p>
    </div>

    <div class="actions" v-if="!isAnonymous">
      <button v-if="currentUri === 'products'" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MaCard",

  data() {
    return {
    }
  },

  props: {
    id: {
      type: Number,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    desc: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },
  },

  computed: {
    ...mapGetters({
      isAnonymous: "isAnonymous",
      userToken: 'userToken',
    }),

    currentUri() {
      return window.location.href.match(/(?:products)|(?:cart)|(?:orders)$/)[0];
    }
  },

  methods: {
    addToCart() {
      let payload = {
        userToken: this.userToken,
        id: this.id,
      }
      this.$store.dispatch('addProductToCart', payload);
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 250px;
  padding: 10px 15px;
  background-color: #e1e1e1;
  border-radius: 10px;

  margin-left: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card:nth-child(n + 4) {
  margin-top: 20px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.top .title {
  font-weight: bolder;
}

.top .price {
  font-size: 18px;
}

.desc {
  margin-top: 10px;
}

.actions {
  display: flex;
  justify-content: flex-end;

  margin-top: 15px;
}

.actions button {
  padding: 5px;
}

.actions button:hover {
  cursor: pointer;
}

</style>