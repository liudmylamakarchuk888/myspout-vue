<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>Settings</span>
    </div>

    <el-collapse
      v-model="ativeName"
      accordion
    >
      <el-collapse-item
        title="Application Prefrences"
        name="1"
      >
        <ApplicationPerfrences />
      </el-collapse-item>
      <el-collapse-item title="Display languages">
        <!-- <app-languages></app-languages> -->
      </el-collapse-item>
      <el-collapse-item title="Orchestrators">
        <div class="mid-sec forms-doc-sec mt-3">
          <el-container fluid>
            <el-row>
              <el-col>
                Orchestrators are the components responsible for running integration operations. After installing new orchestrators, add them to this list.</b-col>
              </el-col>
            </el-row>
            <!-- <app-orchestrators></app-orchestrators> -->
          </el-container>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Server Health">
        <div class="mid-sec forms-doc-sec mt-1">
          <el-form inline>
            <el-container fluid>
              <el-row class="my-1">
                <el-col lg="8">
                  Long running operations
                </el-col>
              </el-row>
              <!-- <app-server-health></app-server-health> -->
            </el-container>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ApplicationPerfrences from './components/AppPrefrences.vue'
@Component({
  name: 'settings',
  components: { ApplicationPerfrences }
})
export default class extends Vue {
  prefTable: any;

  selectMode = 'single';

  langTable: any = {
    data: [],
    fields: [
      {
        key: 'displayName',
        sortable: false
      }
    ]
  };

  private selected: any;
  private hasSelectedRows: boolean|undefined;
  private totalRows: any;
  private currentPage: number|undefined;

  onRowClick(row: any) {
    console.log(row)
  }

  onRowSelected(items: any) {
    this.selected = items
    if (this.selected.length > 0) this.hasSelectedRows = true
    else this.hasSelectedRows = false
  }

  onFiltered(filteredItems: string | any[]) {
    // Trigger pagination to update the number of buttons/pages due to filtering
    this.totalRows = filteredItems.length
    this.currentPage = 1
  }

  mounted() {
   
  }
}
</script>

<style scoped>
.container-fluid {
  padding-left: 0 !important;
}
</style>
