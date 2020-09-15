<template>
  <v-container>
    <div class="Overview">
      <p>Overview</p>
      <p>Hello {{orderInfo.name}} check below detail of your order and make they are correct.</p>
      <p>Your order is:</p>
      <ul>
        <li v-for="order in orders" v-bind:key="order._id">{{order.text}}, {{order.amount}}g</li>
      </ul>
      <p>Grand total is: {{grandTotal}}</p>
      <p>
        To be
        <span
          v-if="orderInfo.orderType =='homeDelivery'"
        >delivered on {{orderInfo.date}}, to address {{orderInfo.address}}</span>
        <span v-if="orderInfo.orderType =='pickUp'">picked up on {{orderInfo.date}}</span>
      </p>
      <v-btn to="/order">Back to order</v-btn>
      <v-btn to="/orderDetails">Back to Information</v-btn>
    </div>
    <v-btn @click="sendOrder">Place order</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendOrder() {
      this.$http.post("http://localhost:3000/orders", {
        orderInfo: this.orderInfo,
        orders: this.orders,
      });
      this.$store.dispatch("clearStore");
      this.$router.push("/");
    },
  },
  computed: {
    grandTotal() {
      let result = 0;
      for (let i = 0; i <= this.orders.length - 1; i++) {
        result += this.orders[i].orderPrice;
      }
      return result;
    },
    orders() {
      return this.$store.state.orders;
    },
    orderInfo() {
      return this.$store.state.orderInfo;
    },
  },
};
</script>
