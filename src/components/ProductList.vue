<script lang="ts">
import ProductCard from './ProductCard.vue'
import Cart from './Cart.vue'
import type { CartDetail, Product } from '../model/types';

export default {
    components: {
        ProductCard,
        Cart
    },
    props: ['details'],
    data() {
        return {
            products: <Array<Product>>[
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Micrófono', price: 20, id: 12},
                {name: 'Silla', price: 56, id: 5},
                {name: 'Monitor', price: 450, id: 7},
                {name: 'Micrófono', price: 20, id: 12}
            ]
        }
    },
    methods: {
        onProductAdded(productId: number) {

        }
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard 
                :product="p"
                @addProduct="onProductAdded(p.id)" />
        </v-col>
    </v-row>
</template>