<script lang="ts">
import { useCartStore } from '@/stores/cart';
import type { CartDetail } from '@/model/types';
import type { PropType } from 'vue';
import { mapActions } from 'pinia';

export default {
    props: {
        detail: {
            type: Object as PropType<CartDetail>,
            required: true
        }
    },
    methods: {
        ...mapActions(useCartStore, {
            decrementQuantity: "decrement",
            incrementQuantity: "increment",
            deleteProduct: "deleteProduct"
        })
    },
    computed: {
        productImageUrl() {
            return this.detail.product.image 
                ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg';
        },
        subTotal() {
            return this.detail.product.price * this.detail.quantity;
        }
    }
}
</script>

<template>
    <tr>
        <td>
            <v-avatar size="40px">
                <v-img :src="productImageUrl" />
            </v-avatar>
            {{ detail.product.name }}
        </td>
        <td class="text-center">
            <v-btn 
                class="ml-2"
                icon="mdi-minus"
                size="x-small" 
                @click="decrementQuantity(detail.product.id)" />
            {{ detail.quantity }}
            <v-btn 
                icon="mdi-plus"
                size="x-small" 
                @click="incrementQuantity(detail.product.id)" />
        </td>
        <td>
            ${{ detail.product.price }}
        </td>
        <td>
            ${{ subTotal }}
        </td>
        <td>
            <v-btn 
                class="ml-2"
                icon="mdi-delete"
                size="x-small" 
                @click="deleteProduct(detail.product.id)" />
        </td>
    </tr>
</template>