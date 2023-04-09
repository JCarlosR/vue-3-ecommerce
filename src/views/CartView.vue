<script lang="ts">
import ShoppingCart from '../components/cart/ShoppingCart.vue'
import SummaryCard from '@/components/cart/SummaryCard.vue';

export default {
  components: {
    ShoppingCart,
    SummaryCard
  }
}
</script>

<template>
  <v-row>
    <v-col cols="8">
      <ShoppingCart />
    </v-col>
    <v-col cols="4">
      <SummaryCard />
    </v-col>
  </v-row>
</template>