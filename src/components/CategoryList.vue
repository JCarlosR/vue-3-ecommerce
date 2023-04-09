<script lang="ts">
import type { Category } from '@/model/types';

export default {
    data() {
        return {
            categories: [{
                id: 1,
                name: 'Oficina',
                description: 'Productos para tu oficina.'
            }, {
                id: 2,
                name: 'Computadora',
                description: 'Accesorios para computadora.'
            }] as Category[]
        };
    }
}
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
            v-for="category in categories"
            :key="category.id"
            link
            >
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
            link
            color="grey-lighten-4"
            >
                <v-list-item-title>
                    Order by price
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>