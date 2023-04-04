<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from './types';

export default {
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true
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
            <v-list>
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product {{ detail.productId }} 
                        (Qty: {{ detail.quantity }})
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>