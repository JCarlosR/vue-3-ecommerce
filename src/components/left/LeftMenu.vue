<script lang="ts">
import OrderOptions from './OrderOptions.vue'
import CategoryOptions from './CategoryOptions.vue'

export default {
    components: {
        OrderOptions,
        CategoryOptions
    }
}
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <CategoryOptions />

            <v-divider class="my-2"></v-divider>

            <OrderOptions />
        </v-list>
    </v-sheet>
</template>