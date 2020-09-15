<template>
  <div class="column">
    <app-order v-for="(order, index) in orders" v-bind:key="order.id">
      <v-card style="width: 400px" class="mt-4">
        <v-card-text>
          {{order.text}}, {{order.amount}}g, {{order.orderPrice}}
          <v-btn @click="deleteOrder(index)" color="gray" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </app-order>
  </div>
</template>
<script>
import Order from "./Order";
export default {
  props: ["orders"],
  components: {
    appOrder: Order,
  },
  methods: {
    deleteOrder(index) {
      this.$emit("orderDeleted", index);
    },
  },
};
</script>
<style scoped>
</style>