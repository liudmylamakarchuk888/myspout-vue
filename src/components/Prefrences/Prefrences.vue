<template>
  <el-card class="box-card">
    <el-row>
      <el-col>
        <el-form
          :inline="true"
          style="float:right"
        >
          <el-form-item>
            <el-input
              v-model="search.text"
              placeholder="Find prefrence"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="search.type"
              placeholder="find by Property type"
              @change="onSearchTypeChanged"
            >
              <el-option
                v-for="item in propertyDataTypes"
                :key="item.key"
                :label="item.key"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              variant="outline-primary"
              title="create New Form"
              icon="el-icon-plus"
              @click="showNewForm = true"
            />
            <NewPrefrences :open-dialog="showNewForm" />
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
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <vue-good-table
          :columns="fields"
          :line-numbers="true"
          :fixed-header="true"
          max-height="300px"
          :select-options="{enabled: true, selectAllByGroup: false}"
          style-class="vgt-table striped bordered condensed"
          :rows="tableData"
          :group-options="{
            enabled: true,
            rowKey: 'uuid',
            collapsable: false
          }"
          :search-options="{enabled: true, externalQuery: search.text}"
        />
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Vue, Watch } from 'vue-property-decorator'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import NewPrefrences from './components/NewPrefrences.vue'
import { AppPrefrencesModule } from '@/store/modules/AppPrefrencesMod'
import { FlexPrefrencesModule } from '@/store/modules/AppFlexPrefrencesMod'
import { AppCacheModule } from '@/store/modules/appCache'
@Component({
  name: 'Perfrences',
  components: { VueGoodTable, NewPrefrences }
})
export default class extends Vue {
   search={
     text: null,
     type: null
   }

   searchby ='';
  selectedRow=null;
  showNewForm=false;
  selectedPropertyType=null;

   tableData =[]
     fields= [
       {
         field: 'category',
         label: 'category',
         sortable: false

       },
       {
         field: 'displayName',
         label: 'Name',
         sortable: true

       },
       {
         field: 'value',
         label: 'Value',
         sortable: true

       },
       {
         field: 'description',
         label: 'description'

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

    mounted() {
      this.getGroupedData()
    }

    onOpenClick() {
      alert('open clicked')
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
