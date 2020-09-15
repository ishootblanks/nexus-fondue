<template>
  <div class="column">
    <p>list</p>
    <app-meat v-for="(meat) in meatList" v-bind:key="meat.id">
      <v-card style="width: 400px" class="mt-4">
        <v-card-text>
          {{meat.value}}, {{meat.priceKg}}E/kg, {{meat.description}}
          <v-btn @click="editData(meat._id)" color="gray" right icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="deleteData(meat._id)" color="gray" icon>
            <v-icon right>mdi-delete</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </app-meat>
  </div>
</template>
<script>
import Meat from "./Meat";

export default {
  props: ["meatList"],
  components: {
    appMeat: Meat,
  },
  methods: {
    deleteData(id) {
      this.$http.delete("http://localhost:3000/meats" + `/${id}`).then(
        function (response) {
          // Success
          console.log(response.data);
          this.$emit("meatDeleted");
        },
        function (response) {
          // Error
          console.log(response.data);
        }
      );
    },
    editData(id) {
      this.$http.get("http://localhost:3000/meats" + `/${id}`).then(
        function (response) {
          // Success
          this.$emit("editRequest", { ...response.data });
          console.log(response.data);
        },
        function (response) {
          // Error
          console.log(response.data);
        }
      );
    },
  },
};
</script>
<style scoped>
</style>