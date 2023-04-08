<script lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from '../model/types';

export default {
    components: {
        ProductCard
    },
    data() {
        return {
            products: [
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Micrófono', price: 20, id: 12},
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Micrófono', price: 20, id: 12}
            ] as Product[]
        }
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" :key="p.id" cols="4">
            <ProductCard 
                :product="p" />
        </v-col>
    </v-row>
</template>