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

        class="el-collapse"

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
          <!-- <Orchestrators /> -->
          <SearchExample />
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
import SearchExample from '@/components/Orchestrators/SearchExample.vue'
@Component({
  name: 'settings',
  components: { AppLanguages, Prefrences, Orchestrators, SearchExample }
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

<style >

//OTHER Styles

.el-collapse {
	border-top: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;

}

.el-collapse-item__header {
	display: -webkit-box;
	display: -ms-flexbox;
  display: flex;
  padding-left:20px;
  margin: 5px;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	height: 30px;
	line-height: 30px;
	background-color:rgb(233 235 239);
	color: black;
	cursor: pointer;
	border-bottom: 1px solid #EBEEF5;
	font-size: 13px;
	font-weight: 500;
	-webkit-transition: border-bottom-color .3s;
	transition: border-bottom-color .3s;
	outline: 0
}

.el-collapse-item__arrow {
  margin: 0 8px 0 auto;

	-webkit-transition: -webkit-transform .3s;
	transition: -webkit-transform .3s;
	transition: transform .3s;
	transition: transform .3s, -webkit-transform .3s;
	font-weight: 300
}

.el-collapse-item__arrow.is-active {
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg)
}

.el-collapse-item__header.focusing:focus:not(:hover) {
	color: #409EFF
}

.el-collapse-item__header.is-active {
	border-bottom-color: transparent
}

.el-collapse-item__wrap {
	will-change: height;
	background-color: #EBEEF5;
	overflow: hidden;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	border-bottom: 1px solid #EBEEF5
}

.el-collapse-item__content {
	padding-bottom: 25px;
	font-size: 13px;
	color: #303133;
	line-height: 1.769230769230769
}

.el-collapse-item:last-child {
	margin-bottom: -1px
}
</style>
