<template>
  <v-container>
    <div>
      <p>Meat Selection</p>
      <div class="d-flex">
        <app-meat-add-form @meatAdded="fetchData"></app-meat-add-form>
        <app-meat-edit-form
          v-if="showEditDialog"
          :editFormData="editFormData"
          @patchReq="patchEditReq"
          v-show="editDisplay"
        ></app-meat-edit-form>
        <app-meat-list :meatList="meatList" @meatDeleted="fetchData" @editRequest="fetchEdit"></app-meat-list>
      </div>
      <v-btn to="/" class="ml-2">Proceed</v-btn>
    </div>
  </v-container>
</template>

<script>
import MeatList from "../components/meat/MeatList";
import MeatAddForm from "../components/meat/AddMeat";
import MeatEditForm from "../components/meat/EditMeat";

export default {
  data() {
    return {
      meatList: [],
      total: 0,
      editDisplay: false,
      editFormData: {},
      showEditDialog: false,
    };
  },
  components: {
    appMeatList: MeatList,
    appMeatAddForm: MeatAddForm,
    appMeatEditForm: MeatEditForm,
  },
  methods: {
    fetchData() {
      this.$http.get("http://localhost:3000/meats").then((response) => {
        this.meatList = response.body;
      });
    },
    fetchEdit(data) {
      this.editFormData = data;
      this.editDisplay = true;
      this.showEditDialog = true;
    },
    patchEditReq(data) {
      this.$http
        .patch("http://localhost:3000/meats" + `/${data._id}`, data)
        .then(
          function (response) {
            // Success
            console.log(response.data);
            this.editDisplay = false;
            this.editFormData = {};
            this.fetchData();
          },
          function (response) {
            // Error
            console.log(response.data);
          }
        );
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
