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
              @click="showNewForm = !showNewForm"
            />
            <el-dialog
              ref="newFormModel"
              :visible.sync="showNewForm"
              width="30%"
              center
              title="New Form"
              :before-close="onNewDialogClose"
            >
              ApplicationPerfrences
              <LangInput />
              <span
                slot="footer"
                class="dialog-footer"
              >
                <el-button @click="showNewForm = false">Cancel</el-button>
                <el-button
                  type="primary"
                  @click="showNewForm = false"
                >Confirm</el-button>
              </span>
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
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <vue-good-table
          :columns="fields"
          max-height="300px"
          :fixed-header="true"
          style-class="vgt-table striped bordered condensed"
          :rows="tableData"
          :group-options="{
            enabled: true,
            rowKey: 'indexId',
            collapsable: true
          }"
          :search-options="{
            enabled: true,
            externalQuery: search.text
          }"
        >
          <!-- <template slot="table-header-row" slot-scope="props">
    <span >
      {{ props.row.category }}
    </span>
  </template> -->
        </vue-good-table>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Vue, Watch } from 'vue-property-decorator'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
@Component({
  name: 'ApplicationPerfrences',
  components: { VueGoodTable }
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
         sortable: true

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

    @Watch('search')
     onSearchChanged(val, oldVal) {
       console.log('search val ' + val)
     }

    get appPrefrences() {
      return this.$store.getters.ApplicationPrefrences
    }

    get propertyDataTypes() {
      return this.$store.getters.FlexApplicationPreferences.propertyDataTypes
    }

    mounted() {
      this.getGroupedData()
    }

    onOpenClick() {
      alert('open clicked')
    }

    onNewDialogClose() {
      alert('before dialog close')
    }

    onSearchTypeChanged(data) {
      alert('on search type changed ' + data)
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

      console.log(JSON.stringify(this.tableData))
      return this.tableData
    }
}
</script>
