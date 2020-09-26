<template>
  <el-card class="box-card">
    <tree-table
      class="table"
      :columns="fields"
      :table-data="tableData"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import treeTable from 'vue-tree-table-component'
import { AppCacheModule } from '@/store/modules/appCache'
@Component({
  name: 'Orchestrators',
  components: { 'tree-table': treeTable }
})
export default class extends Vue {
   search={
     text: null,
     type: null
   }

   tableData =[]
     fields= [
       {
         id: 'category',
         label: 'category'

       },
       {
         id: 'displayName',
         label: 'Name'

       },
       {
         id: 'value',
         label: 'Value'

       },
       {
         id: 'description',
         label: 'description'

       }
     ]

     // @Watch('search', { deep: true })
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
       debugger
       const rs = AppCacheModule.FlexSettings
       const types = rs.propertyDataTypes
       return types
     }

     mounted() {
       this.getGroupedData()
     }

     getGroupedData() {
       let index = 1
       this.appPrefrences.forEach((row) => {
         row.indexId = index

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

<style  scoped>
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
