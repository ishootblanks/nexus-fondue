<template>
  <v-container>
    <div>
      <v-form>
        <p>Add meat</p>
        <v-col>
          <v-col cols="6" sm="6" md="3">
            <v-text-field label="Meat" placeholder="Meat type" outlined v-model="meat.value"></v-text-field>
          </v-col>
          <v-col cols="3" md="3">
            <v-textarea
              outlined
              label="Meat description"
              placeholder="Add some meat description."
              v-model="meat.description"
            ></v-textarea>
          </v-col>
          <v-col cols="6" sm="6" md="3">
            <v-text-field
              label="Price"
              placeholder="Price per Kilogram"
              outlined
              v-model="meat.priceKg"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="6" md="3">
            <v-text-field
              label="Picture"
              placeholder="Picture Url"
              outlined
              v-model="meat.pictureUrl"
            ></v-text-field>
          </v-col>
        </v-col>
      </v-form>
    </div>
    <v-btn @click="addNewMeat">Add new</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meat: {
        value: "",
        description: "",
        priceKg: null,
        pictureUrl: "",
        amount: null,
        orderPrice: null,
        text: "",
      },
    };
  },

  methods: {
    postData() {
      let data = { ...this.meat };
      data.text = data.value;
      this.$http.post("http://localhost:3000/meats", data).then(
        function (response) {
          // Success
          this.$emit("meatAdded");
          console.log(response.data);
        },
        function (response) {
          // Error
          console.log(response.data);
        }
      );
    },

    fetchData() {
      // this.$http.get("http://localhost:3000/meats").then((response) => {
      //   this.meatSelection = response.body;
      // });
      console.log("asa");
    },
    calculatePrice() {
      // console.log("asd");
      // this.order.orderPrice = (this.order.priceKg * this.order.amount) / 1000;
      console.log("asa");
    },
    addNewMeat() {
      this.postData();
      //   this.$emit("orderAdded", { ...this.order });

      //   this.order = {};
      // },
      console.log(this.meat);
      this.meat = {
        value: "",

        description: "",
        priceKg: null,
        pictureUrl: "",
        amount: null,
        orderPrice: 0,
      };
    },

    created() {
      // this.fetchData();
      console.log("asa");
    },
  },
};
</script>