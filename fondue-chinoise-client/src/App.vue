<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
      <div class="d-flex justify-end">
        <router-link tag="button" to="/" class="ml-2">Home</router-link>
        <router-link tag="button" to="order" class="ml-2">Order</router-link>
        <router-link tag="button" to="meatSelection" class="ml-2">Meat Selection</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
