<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { RouterLink } from 'vue-router';

export default {
    methods: {
        decrementQuantity(productId: number) {
            this.cartStore.decrement(productId);
        },
        incrementQuantity(productId: number) {
            this.cartStore.increment(productId);
        },
        deleteProduct(productId: number) {
            this.cartStore.deleteProduct(productId);
        }
    },
    computed: {
        cartStore() {
            return useCartStore();
        },
        details() {
            return this.cartStore.details;
        }
    }
}
</script>

<template>
    <v-card class="mt-4">
        <v-card-title>
            Productos agregados al carrito
        </v-card-title>

        <v-card-text>
            <v-list v-if="details.length > 0">
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product {{ detail.productId }} 
                        <v-btn @click="decrementQuantity(detail.productId)">
                            -
                        </v-btn>
                        (Qty: {{ detail.quantity }})
                        <v-btn @click="incrementQuantity(detail.productId)">
                            +
                        </v-btn>
                        <v-btn @click="deleteProduct(detail.productId)">
                            Eliminar
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <p v-else>
                Aún no has agregado items a tu carrito de compras.
                Haz <router-link to="/">clic aquí</router-link> para ver los productos disponibles.
            </p>
        </v-card-text>
    </v-card>
</template>