<template>
  <ul class="validation-errors">
    <li v-for="message in errorMessages" :key="message">{{message}}</li>
  </ul>
</template>

<script>
export default {
  name: "MaValidationErrors",
  props: {
    validationErrors: {
      type: Object,
      required: true
    },
  },

  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(key => {
        return this.validationErrors[key][0];
      });
    }
  }
}
</script>

<style scoped>

</style>