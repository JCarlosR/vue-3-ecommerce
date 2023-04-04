<script lang="ts">
  import ProductList from '@/components/ProductList.vue';

  export default {
    components: {
      ProductList
    },
    props: ['details']
  }  
</script>

<template>
  <ProductList :details="details" />
</template>
