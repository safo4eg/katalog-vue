<template>
  <div class="card">
    <p>{{title}}</p>
    <p>{{price}}</p>
    <p>{{desc}}</p>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  name: "MaCard",
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
    }
  }
}
</script>

<style scoped>

</style>