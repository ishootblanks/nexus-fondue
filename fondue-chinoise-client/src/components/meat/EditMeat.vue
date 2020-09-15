<template>
  <v-dialog v-model="showDialog" max-width="50rem">
    <v-card class="pa-4">
      <div>
        <v-form>
          <p>edit meat</p>
          <v-col>
            <v-col cols="6" sm="6" md="3">
              <v-text-field
                label="Meat"
                placeholder="Meat type"
                outlined
                v-model="editFormData.value"
              ></v-text-field>
            </v-col>
            <v-col cols="3" md="3">
              <v-textarea
                outlined
                label="Meat description"
                placeholder="Add some meat description."
                v-model="editFormData.description"
              ></v-textarea>
            </v-col>
            <v-col cols="6" sm="6" md="3">
              <v-text-field
                label="Price"
                placeholder="Price per Kilogram"
                outlined
                v-model="editFormData.priceKg"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="6" md="3">
              <v-text-field
                label="Picture"
                placeholder="Picture Url"
                outlined
                v-model="editFormData.pictureUrl"
              ></v-text-field>
            </v-col>
          </v-col>
        </v-form>
      </div>
      <v-btn @click="addEditMeat">Update info</v-btn>
      <v-btn @click="showDialog=false">Cancel</v-btn>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["editFormData"],
  data() {
    return {
      showDialog: true,
    };
  },
  methods: {
    addEditMeat() {
      this.$emit("patchReq", { ...this.editFormData });
    },
  },
};
</script>
<style scoped>
.order {
  cursor: pointer;
}
</style>