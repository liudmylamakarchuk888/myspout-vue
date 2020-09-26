<template>
  <el-container
    class="elcontainer"
    size="mini"
  >
    <el-main
      class="elmain"
      style="padding:10px"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span>Settings </span>
      </div>

      <el-collapse
        v-model="activeTab"
        style="padding:10px"

        accordion
      >
        <el-collapse-item
          title="Application Prefrences"
        >
          <Prefrences />
        </el-collapse-item>
        <el-collapse-item
          title="Display languages"
        >
          <AppLanguages />
        </el-collapse-item>
        <el-collapse-item
          title="Orchestrators"
        >
          <el-row>
            <el-col>
              Orchestrators are the components responsible for running integration operations. After installing new orchestrators, add them to this list.</b-col>
            </el-col>
          </el-row>
          <Orchestrators />
        </el-collapse-item>
        <el-collapse-item
          title="Server Health"
        >
          <el-row>
            <el-col>
              Long running operations
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Prefrences from '@/components/Prefrences/Prefrences.vue'
import AppLanguages from './components/AppLanguages.vue'
import Orchestrators from '@/components/Orchestrators/Orchestrator.vue'
@Component({
  name: 'settings',
  components: { AppLanguages, Prefrences, Orchestrators }
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

.el-collapse-item__header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #f6f6f6;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #EBEEF5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: none;
}
</style>
