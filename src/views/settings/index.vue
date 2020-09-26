<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>Settings </span>
    </div>

    <el-collapse
      v-model="activeTab"
      accordion
    >
      <el-collapse-item
        title="Application Prefrences"
      >
        <ApplicationPerfrences />
      </el-collapse-item>
      <el-collapse-item
        title="Display languages"
      >
        <AppLanguages></AppLanguages> 
      </el-collapse-item>
      <el-collapse-item
        title="Orchestrators"
      >
        <el-row>
          <el-col>
            Orchestrators are the components responsible for running integration operations. After installing new orchestrators, add them to this list.</b-col>
          </el-col>
        </el-row>
        <!-- <app-orchestrators></app-orchestrators> -->
      </el-collapse-item>
      <el-collapse-item
        title="Server Health"
      >
        <el-row class="my-1">
          <el-col lg="8">
            Long running operations
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ApplicationPerfrences from './components/AppPrefrences.vue'
import AppLanguages from './components/AppLanguages.vue'
@Component({
  name: 'settings',
  components: { ApplicationPerfrences, AppLanguages }
})
export default class extends Vue {
  prefTable: any;

  selectMode = 'single';
activeTab:any=''
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
}
</script>

<style scoped>
.container-fluid {
  padding-left: 0 !important;
}
</style>
