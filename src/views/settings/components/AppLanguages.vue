<template>
  <el-card class="box-card">
    <el-row>
      <el-col>
        <p>Select languages to display the site</p>
        <el-table
          :data="languages"
          border
          stripe
          size="mini"
          highlight-current-row
          default-expand-all
          row-key="dateModified"
          @current-change="onSelectedRow"
          @row-dblclick="onRowDoubleClick"
        >
          <el-table-column
            type="index"
            :index="indexMethod"
          />
          <!-- <el-table-column prop="name" label="Name" sortable width="180"></el-table-column> -->
          <el-table-column
            prop="displayName"
            label="Display name"
            sortable
          />
        </el-table>
        <b-form inline>
          <b-container fluid>
            <b-row class="my-1">
              <b-col lg="8">
                <b-button
                  variant="default"
                  class="mr-xs"
                  size="sm"
                >
                  Set As Default
                </b-button>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col lg="6">
                <p>Translate solution objects (such as forms and workflows) to selected languages:</p>
              </b-col>
              <b-col lg="2">
                <b-button
                  variant="default"
                  class="mr-xs"
                  size="sm"
                >
                  Translate Solution
                </b-button>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col lg="6">
                <b-button
                  variant="link"
                  @click="showMSPForm = !showMSPForm"
                >
                  MSP translation (advanced)
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
        <b-modal
          v-model="showMSPForm"
          title="MSP Translation"
        >
          <msp-form />
        </b-modal>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
// import MspForm from "../../Forms/components/MspForm";
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'AppLanguages',
  components: { }
})
export default class extends Vue {
      selected= []
      selectMode= 'single'
      hasSelectedRows= false
      filter= null
      filterOn= []
      fields= [
        {
          key: 'key',
          label: 'Languages',
          sortable: false
        }
      ]

      showMSPForm= false

      get languages() {
        return this.$store.state.AppSettings.languages
      }

      onSelectedRow(row) {
        console.log(row)
      }

      onRowDoubleClick(val) {
        alert('row double clicked')
      }

      onRowSelected(items) {
        this.selected = items
        if (this.selected.length > 0) this.hasSelectedRows = true
        else this.hasSelectedRows = false
      }

      onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }

      mounted() {}
}
</script>
<style scoped>
.container-fluid {
  padding-left: 0 !important;
}
</style>
