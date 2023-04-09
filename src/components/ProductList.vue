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
                {name: 'Silla', price: 56, id: 1, image: '/silla.webp'},
                {name: 'Monitor', price: 450, id: 2, image: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I'},
                {name: 'Micrófono', price: 20, id: 3, image: 'https://i.pinimg.com/564x/43/3b/ba/433bbaaf9a2dcbd7aed7a3ba138178c2.jpg'},
                {name: 'Parlante', price: 56, id: 4},
                {name: 'Audífonos', price: 450, id: 5},
                {name: 'Mouse Gamer', price: 20, id: 6}
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