<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types';

export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    emits: ['addProduct'],
    methods: {
        onAddButtonClick() {
            this.$emit('addProduct');
        }
    }
}
</script>

<template>
    <v-card>
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover />

        <v-card-title>
            {{  product.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-4">
                Esta es una descripción de ejemplo.
            </p>
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>
        
        <v-card-actions>
            <v-btn @click="onAddButtonClick" color="orange-lighten-2">
                Agregar al carrito
            </v-btn>
        </v-card-actions>
    </v-card>
</template>