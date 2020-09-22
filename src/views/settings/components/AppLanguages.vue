<template>
  <div class="mid-sec forms-doc-sec mt-3">
    <p>Select languages to display the site</p>
    <b-table
      ref="langTable"
      sticky-header="300px"
      striped
      hover
      selectable
      :select-mode="selectMode"
      @row-selected="onRowlangSelected"
      responsive="sm"
      :items="languages"
      :fields="fields"
    >
      <!-- <template v-slot:cell(key)="data">
      <input type="checkbox" v-model="row.item.selected"/>&nbsp;
      <b class="text-info">{{ data.languages }}</b>
      </template>-->
      <!-- A custom formatted column -->
      <!-- <template v-slot:cell(dateModified)="data">
                    <b class="text-info">{{ data.value |toDate }}</b>
      </template>-->
    </b-table>
    <b-form inline>
      <b-container fluid>
        <b-row class="my-1">
          <b-col lg="8">
            <b-button variant="default" class="mr-xs" size="sm">Set As Default</b-button>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col lg="6">
            <p>Translate solution objects (such as forms and workflows) to selected languages:</p>
          </b-col>
          <b-col lg="2">
            <b-button variant="default" class="mr-xs" size="sm">Translate Solution</b-button>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col lg="6">
            <b-button variant="link" @click="showMSPForm = !showMSPForm">MSP translation (advanced)</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
    <b-modal v-model="showMSPForm" title="MSP Translation">
      <msp-form></msp-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import MspForm from "../../Forms/components/MspForm";
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: "app-languages",
  components: { axios,MspForm },
})
export default class extends Vue {

  
      selected= []
      selectMode= "single"
      hasSelectedRows= false
      filter= null
      filterOn= []
      fields= [
        {
          key: "key",
          label: "Languages",
          sortable: false
        }
      ]
      showMSPForm= false
 
 
  get  languages() {
      return this.$store.state.AppSettings.languages;
    }
  
 
    onRowClick(row) {
      console.log(row);
    },
    onRowSelected(items) {
      this.selected = items;
      if (this.selected.length > 0) this.hasSelectedRows = true;
      else this.hasSelectedRows = false;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
 
  mounted() {}
};
</script>
<style scoped>
.container-fluid {
  padding-left: 0 !important;
}
</style>
