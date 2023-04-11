<script lang="ts">
import { useCategoriesStore } from '../../stores/categories'
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useCategoriesStore, ['categories', 'loading'])
    },
    methods: {
        clearCategory() {
            this.$router.push({
                name: 'home'
            });
        },
        goToCategory(categoryId: number) {
            this.$router.push({ 
                name: 'category', 
                params: { categoryId } 
            })
        }        
    }
}
</script>

<template>
    <v-list-subheader>Categorías</v-list-subheader>
    <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
        <v-list-item-title>
            Todas
        </v-list-item-title>
    </v-list-item>

    <v-progress-linear v-if="loading" indeterminate></v-progress-linear>

    <v-list-item v-else :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
    v-for="category in categories"
    :key="category.id"
    link
    @click="goToCategory(category.id)"
    >
        <v-list-item-title>
            {{ category.name }}
        </v-list-item-title>
    </v-list-item>
</template>