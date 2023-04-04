<script lang="ts">
import Cart from '../components/Cart.vue'

export default {
  components: {
    Cart
  },
  props: ['details']
}
</script>

<template>
  <Cart :details="details" />
</template>