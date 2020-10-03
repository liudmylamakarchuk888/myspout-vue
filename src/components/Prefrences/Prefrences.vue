<template>
  <el-card class="box-card">
    <el-row>
      <el-col>
        <miniTable
          :columns="fields"
          :items="appPrefrences"
          :type-options="propertyDataTypes"
          :search-type-key="'dataType'"
          :search-on-field="'displayName'"
        >
          <el-form
            slot="commands"
            :inline="true"
            style="float:right"
          >
            <el-form-item>
              <el-button
                variant="outline-primary"
                title="create New Form"
                icon="el-icon-plus"
                @click="showNewForm = !showNewForm"
              />
              <el-dialog
                :ref="dialog"
                :before-close="beforeNewFormClose"
                :visible.sync="showNewForm"
                title="Application Prefrence"
              >
                <NewPrefrences :ref="dialog" />
              </el-dialog>

              <el-button
                :disabled="!selectedRow"
                icon="el-icon-document-copy"
                title="Copy selected Form"
                variant="outline-primary"
              />
              <el-button
                :disabled="!selectedRow"
                variant="outline-primary"
                icon="el-icon-view"
                title="open selected form"
                @click="onOpenClick"
              />
              <el-button
                variant="outline-danger"
                title="Delete"
                icon="el-icon-delete"
                :disabled="!selectedRow"
              />
            </el-form-item>
          </el-form>
        </miniTable>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Vue, Watch } from 'vue-property-decorator'
import NewPrefrences from './components/NewPrefrences.vue'
import { AppPrefrencesModule } from '@/store/modules/AppPrefrencesMod'
import { FlexPrefrencesModule } from '@/store/modules/AppFlexPrefrencesMod'
import { AppCacheModule } from '@/store/modules/appCache'
import miniTable from '@/components/Tables/miniTable.vue'
@Component({
  name: 'Perfrences',
  components: { NewPrefrences, miniTable }
})
export default class extends Vue {
   search={
     text: null,
     type: null
   }

  dialog={} as any
   searchby ='';
  selectedRow=null;
  showNewForm=false;
  selectedPropertyType=null;
  selectedPrefrence={}
   tableData =[]
     fields= [
       {
         field: 'category',
         label: 'category',
         sortable: false,
         width: '150px'

       },
       {
         field: 'displayName',
         label: 'Name',
         sortable: true,
         width: '200px'
       },
       {
         field: 'value',
         label: 'Value',
         sortable: true,
         width: '200px'
       },
       {
         field: 'description',
         label: 'description',
         width: '300px'
       }
     ]

    @Watch('search', { deep: true })
     onSearchChanged(val, oldVal) {
       console.log('search val ' + val)
     }

    get appPrefrences() {
      // return this.$store.getters.ApplicationPrefrences
      // debugger
      const pref = AppCacheModule.Prefrences
      return pref
    }

    get propertyDataTypes() {
      // return this.$store.getters.FlexApplicationPreferences.propertyDataTypes

      const rs = AppCacheModule.FlexSettings
      const types = rs.propertyDataTypes
      return types
    }

    prefrences=[] as any;

    mounted() {
      this.prefrences = AppCacheModule.Prefrences as any[]
      this.getGroupedData()
    }

    onOpenClick() {
      alert('open clicked')
    }

    beforeNewFormClose() {
      this.$confirm('Are you sure to close this dialog?')
        .then((_) => {
          this.showNewForm = false
        })
        .catch((_) => {})
    }

    onSearchTypeChanged(data) {
      alert('on search type changed ' + data)
    }

    getGroupedData() {
      let index = 1
      this.appPrefrences.forEach((row) => {
        row.uuid = index

        index = index + 1
      })
      const result = this.appPrefrences.reduce(function(r, a) {
        r[a.category] = r[a.category] || []
        r[a.category].push(a)
        return r
      }, Object.create(null))

      Object.entries(result).forEach((e) => {
        this.tableData.push({
          category: e[0],
          children: e[1]

        })
      })

      return this.tableData
    }
}
</script>

<style >
table.vgt-table{
  font-size: smaller;
  border-collapse: collapse;
  background-color: white;
  width: 100%;
  max-width: 100%;
  max-height: 70%;
  overflow: auto;
  table-layout: auto;
  border: 1px solid $border-color;
  & td {
    padding: .75em .75em .75em .75em;
    vertical-align: top;
    border-bottom:  1px solid $border-color;
    color: $text-color;
  }
  & tr.clickable {
    cursor: pointer;
    &:hover{
      background-color: $highlight-color;
    }
  }
}
</style>
