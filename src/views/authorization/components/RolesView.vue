<template>
  <div>
    <div class="mid-sec forms-doc-sec mt-2">
      <div class="content">
        <div class="row">
          <div class="col-8">
            <b-form-input class="w-80" placeholder="find role"></b-form-input>
          </div>
          <div class="col text-right justify-content-center">
            <button class="no-border">
              <b-icon
                @click="showNewRole = !showNewRole"
                icon="plus-square"
                class="h3 mx-1"
                aria-hidden="true"
                variant="success"
              ></b-icon>
            </button>

            <b-icon
              icon="pencil-square"
              class="h3 mx-1"
              aria-hidden="true"
              variant="success"
            ></b-icon>
            <b-icon
              icon="x-square"
              class="h3 mx-1"
              aria-hidden="true"
              variant="danger"
            ></b-icon>
          </div>
        </div>
        <div class="container">
          <div class="row mt-4">
            <!-- table -->

            <b-table
              class="w-100"
              striped
              hover
              sticky-header="true"
              :items="items"
              :fields="fields"
            ></b-table>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      size="lg"
      v-model="showNewRole"
      class="modal-fullscreen1"
      title="Roles"
    >
      <new-role></new-role>
    </b-modal>
  </div>
</template>
<script>
import NewRole from "./NewRole";

export default {
  name: "RolesView",
  components: {
    "new-role": NewRole,
  },

  data() {
    return {
      showNewRole: false,
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "description",
          sortable: true,
        },
        {
          key: "product_sn",
          sortable: true,
        },
        {
          key: "icon",
          sortable: true,
        },
      ],
      items: [
        {
          description: "Dickerson",
          name: "Macdonald",
          product_sn: "product",
          icon: "circle",
        },
        { description: "Larsen", name: "Shaw" },
        { description: "Geneva", name: "Wilson" },
        { description: "Jami", name: "Carney" },
      ],
    };
  },
};
</script>

<style scoped>
.no-border {
  border: none;
  background-color: transparent !important;
}
</style>