<template>
  <v-container>
    <div>
      <v-form ref="form" v-model="valid">
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="order"
            :items="meatSelection"
            label="Meat"
            required
            return-object
            :rules="dropDownRules"
            validate-on-blur
          ></v-select>
        </v-col>
        <!-- <p>{{order.text}}</p> -->
        <v-col cols="12" sm="6" md="3">
          <v-card v-if="order.value">
            <v-card-title>Description</v-card-title>
            <v-card-text>{{ order.description }}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Amount"
            placeholder="grams"
            outlined
            v-model="order.amount"
            @input="calculatePrice"
            :rules="amountRules"
            validate-on-blur
          ></v-text-field>
          <!-- <p>{{order.amount}}</p> -->
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Price"
            disabled
            placeholder="Euros"
            outlined
            v-model="order.orderPrice"
          ></v-text-field>
          <!-- <p>{{order.amount}}</p> -->
        </v-col>
      </v-form>
    </div>
    <v-btn @click="addNewOrder">Add new</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meatSelection: [],
      order: {},
      dropDownRules: [(v) => !!v.value || "Please select meat"],
      amountRules: [(v) => v > 0 || "Please add amount in grams"],
      valid: false,
    };
  },

  methods: {
    fetchData() {
      this.$http.get("http://localhost:3000/meats").then((response) => {
        this.meatSelection = response.body;
      });
    },
    calculatePrice() {
      this.order.orderPrice = (this.order.priceKg * this.order.amount) / 1000;
    },
    addNewOrder() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$emit("orderAdded", { ...this.order });

      this.order = {};
      this.valid = true;
    },
  },

  created() {
    this.fetchData();
  },
};
</script>