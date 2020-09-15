<template>
  <v-container>
    <div>
      <p>Customer component</p>
      <v-form ref="form">
        <v-col class="col-12 d-flex flex-column justify-space-around align-center">
          <v-row cols="4" sm="6" md="3">
            <v-text-field
              label="Full Name"
              placeholder
              outlined
              v-model="orderInfo.name"
              :rules="inputRules"
              validate-on-blur
            ></v-text-field>
          </v-row>
          <v-row cols="6" sm="6" md="3">
            <v-text-field
              label="Address"
              placeholder
              outlined
              v-model="orderInfo.address"
              :rules="inputRules"
              validate-on-blur
            ></v-text-field>
          </v-row>
          <v-row cols="6" sm="6" md="3">
            <v-text-field
              label="E-mail"
              placeholder
              outlined
              v-model="orderInfo.email"
              :rules="emailRules"
              validate-on-blur
            ></v-text-field>
          </v-row>
          <v-row cols="6" sm="6" md="3">
            <v-text-field
              label="Phone"
              placeholder
              outlined
              v-model="orderInfo.phone"
              :rules="inputRules"
              validate-on-blur
            ></v-text-field>
          </v-row>

          <v-radio-group row cols="6" sm="6" md="3" v-model="orderInfo.orderType">
            <v-radio label="Pick up" value="pickUp"></v-radio>
            <v-radio label="Home Delivery" value="homeDelivery"></v-radio>
          </v-radio-group>
          <v-row>
            <v-col cols="12" lg="12" sm="6" md="4">
              <v-menu
                v-model="orderInfo.menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="orderInfo.date"
                    :label="calendarLabel"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="inputRules"
                    validate-on-blur
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="orderInfo.date"
                  :min="today"
                  @input="orderInfo.menu2= false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
      </v-form>
    </div>
    <v-btn @click="pushToStore" class="ml-2">Proceed</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orderInfo: {
        name: "",
        address: "",
        email: "",
        phone: "",
        orderType: "pickUp",
        calendarLabel: "",
        menu2: false,
        date: new Date().toISOString().substr(0, 10),
      },
      inputRules: [(v) => !!v || "This field is required"],
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
        (v) => !!v || "This field is required",
      ],
    };
  },
  components: {},
  methods: {
    pushToStore() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$store.dispatch("updateOrderInfo", this.orderInfo);
      this.$router.push("/overview");
    },
  },
  computed: {
    today() {
      const newDate = new Date().toISOString();
      return newDate;
    },
    calendarLabel() {
      if (this.orderInfo.orderType == "pickUp") {
        return "Date of pick up";
      }
      return "Date of delivery";
    },
  },
  created() {
    this.orderInfo = this.$store.state.orderInfo;
  },
};
</script>
