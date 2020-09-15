<template>
  <div>
    <v-container>
      <p>Order component</p>
      <div class="d-flex">
        <app-order-form @orderAdded="newOrder"></app-order-form>
        <app-order-list :orders="orders" @orderDeleted="deleteOrder"></app-order-list>
      </div>
      <v-btn @click="pushToStore" to="/orderDetails" class="ml-2">Proceed</v-btn>
    </v-container>
    <v-footer>
      <h4>Total: {{total}}E</h4>
    </v-footer>
  </div>
</template>

<script>
import OrderForm from "../components/order/OrderForm";
import OrderList from "../components/order/OrderList";

export default {
  data() {
    return {
      orders: [],
      total: 0,
    };
  },
  components: {
    appOrderForm: OrderForm,
    appOrderList: OrderList,
  },
  methods: {
    calculateTotal() {
      let holder = 0;
      for (let i = 0; i <= this.orders.length - 1; i++) {
        holder += this.orders[i].orderPrice;
      }
      this.total = holder;
    },
    newOrder(order) {
      this.orders.push(order);
      this.calculateTotal();
      this.pushToStore();
    },
    deleteOrder(index) {
      this.orders.splice(index, 1);
      this.calculateTotal();
      this.pushToStore();
    },
    pushToStore() {
      this.$store.dispatch("updateOrders", this.orders);
      //this.$router.push("/orderDetails");
    },
  },

  created() {
    //this.$store.dispatch("retrieveLocalOrders");
    this.orders = this.$store.state.orders;
    this.calculateTotal();
    //this.$store.dispatch("clearLolcalOrders");
  },
};
</script>
