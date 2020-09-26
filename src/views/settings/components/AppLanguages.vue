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
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <!-- <el-table-column prop="name" label="Name" sortable width="180"></el-table-column> -->
          <el-table-column
            prop="key"
            label="Display Language"
            sortable
          >
            <template slot-scope="scope">
              {{ scope.row.key }}
            </template>
          </el-table-column>
        </el-table>
        <el-form inline>
          <el-container fluid>
            <el-row>
              <el-col>
                <el-button
                  variant="default"
                  class="mr-xs"
                  size="sm"
                >
                  Set As Default
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <p>Translate solution objects (such as forms and workflows) to selected languages:</p>
              </el-col>
              <el-col>
                <el-button
                  variant="default"
                  class="mr-xs"
                  size="sm"
                >
                  Translate Solution
                </el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-button
                  variant="link"
                  @click="showMSPForm = !showMSPForm"
                >
                  MSP translation (advanced)
                </el-button>
              </el-col>
            </el-row>
          </el-container>
        </el-form>
        <el-dialog
          v-model="showMSPForm"
          title="MSP Translation"
        >
        <span>model data.</span>
        </el-dialog>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { AppCacheModule } from '@/store/modules/appCache'
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
          label: 'Language',
          sortable: false
        }
      ]

      showMSPForm= false

      get languages() {
        const rs = AppCacheModule.FlexSettings
        return rs.languages
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

      handleSelectionChange(value) {
        console.log('selected ' + value)
      }
}
</script>
<style scoped>
.container-fluid {
  padding-left: 0 !important;
}
</style>
