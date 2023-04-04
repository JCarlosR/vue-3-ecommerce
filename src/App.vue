<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      details: [{productId: 5, quantity: 3}]
    };
  }
}
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <RouterLink to="/" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">
            Home
          </v-btn>
        </RouterLink>

        <RouterLink to="/cart" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">
            Cart
          </v-btn>
        </RouterLink>

        <RouterLink to="/about" custom v-slot="{navigate}">
          <v-btn variant="text" @click="navigate">
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

    <v-main>
      <v-container>
        <RouterView :details="details" />
      </v-container>
    </v-main>
  </v-app>
</template>
