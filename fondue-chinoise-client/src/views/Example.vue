<template>
  <v-container>
    <h1>This is an example page</h1>
    <div class="d-flex justify-end">
      <v-btn @click="addItems" class="ml-2">Add</v-btn>
      <v-btn @click="addItems" class="ml-2">Add</v-btn>
    </div>

    <div v-for="(item, i) in items" :key="i">
      <v-select
        :items="availableMeat"
        label="type"
        v-model="item.type"
        return-object
      ></v-select>
      <v-text-field label="amount" v-model.number="item.amount" />
      <v-card v-if="item.type">
        <v-card-title>Description</v-card-title>
        <v-card-text>{{ item.type.description }}</v-card-text>
      </v-card>
      <div>{{ (item.type.priceKg * item.amount) / 1000 }}</div>
    </div>
    <p>{{ items }}</p>
    <hr />
    <button @click="pushData">add rabbit</button>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      availableMeat: [],
      meat: {
        value: "rabbit",
        text: "Rabbit",
        description: "Blikijev zec",
        priceKg: 16,
        orderPrice: 0,
        amount: 0,
      },
    };
  },
  methods: {
    addItems() {
      this.items.push({
        type: "",
        amount: 0,
        description: "",
        priceKg: 0,
      });
    },
    fetchData() {
      this.$http.get("http://localhost:3000/meats").then((response) => {
        this.availableMeat = response.body;
      });
    },
    pushData() {
      this.$http.post("http://localhost:3000/meats", this.meat).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
