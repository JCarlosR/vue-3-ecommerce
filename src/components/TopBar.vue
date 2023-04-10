<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default {
    computed: {
        itemsCount() {
            const cartStore = useCartStore();
            return cartStore.cartItemsCount;
        }
    }
}
</script>

<template>
    <v-app-bar flat>
      <v-container class="fill-height d-flex">
        <v-avatar
          class="me-10 ms-4"
          size="32">
          <v-img src="/logo.jpg" />
        </v-avatar>

        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home' || $route.name === 'category'" variant="text" @click="navigate">
            Home
          </v-btn>
        </RouterLink>

        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
            <v-btn prepend-icon="mdi-cart" :active="$route.name === 'cart'" variant="text" @click="navigate">
              Cart
            </v-btn>
          </v-badge>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn prepend-icon="mdi-information" :active="$route.name === 'about'" variant="text" @click="navigate">
            About
          </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>