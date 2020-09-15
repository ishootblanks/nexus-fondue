import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Example from "../views/Example.vue";
import Order from "../views/Order.vue";
import CustomerInfo from "../views/CustomerInfo.vue";
import Overview from "../views/OrderOverview.vue";
import MeatSelection from "../views/MeatSelection.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/orderDetails",
    name: "OrderDetails",
    component: CustomerInfo,
  },
  {
    path: "/example",
    name: "Example",
    component: Example,
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/meatSelection",
    name: "MeatSelection",
    component: MeatSelection,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
