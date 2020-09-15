import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: JSON.parse(localStorage.getItem("localOrders")) || [],
    orderInfo: JSON.parse(localStorage.getItem("localOrderInfo")) || {},
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
  },
  mutations: {
    updateOrders(state, data) {
      state.orders = data;
    },
    updateOrderInfo(state, data) {
      state.orderInfo = data;
    },
    SET_STORE_ORDER_INFO(state, data) {
      state.orderInfo = data;
    },

    SET_STORE_ORDERS(state, data) {
      state.orders = data;
    },
    CLEAR_STORE(state) {
      state.orders = [];
      state.orderInfo = {};
    },
  },
  actions: {
    updateOrders({ commit }, data) {
      commit("updateOrders", data);
      localStorage.setItem("localOrders", JSON.stringify(this.state.orders));
    },

    clearStore(context) {
      localStorage.removeItem("localOrders");
      localStorage.removeItem("localOrderInfo");
      context.commit("CLEAR_STORE");
    },
    updateOrderInfo({ commit }, data) {
      commit("updateOrderInfo", data);
      localStorage.setItem(
        "localOrderInfo",
        JSON.stringify(this.state.orderInfo)
      );
    },
    // saveLocalOrderInfo() {
    //   localStorage.setItem(
    //     "localOrderInfo",
    //     JSON.stringify(this.state.orderInfo)
    //   );
    // },
  },
  modules: {},
});
