/* eslint-disable no-undef */
<template>
  <div class="app-container">
    <el-row>
      <el-col
        v-show="showSearch"
        :span="12"
      >
        <el-input
          v-model="search.text"
          size="mini"
          placeholder="Search item"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="searchData"
        />

        <el-select
          v-model="search.type"
          size="mini"
          placeholder="Filter by Type"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option
            v-for="item in typeOptions"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="12">
        <slot name="commands" />
      </el-col>
    </el-row>

    <!-- :key="tableKey" -->
    <el-table

      :data="searchData()"
      border
      stripe

      style="width:100%"
      height="300"
      highlight-current-row
    >
      <el-table-column
        v-for="col in columns"
        :key="col.field"
        :label="col.label"
        :prop="col.field"
        :min-width="col.width"
      />
    </el-table>
  </div>
</template>

<script lang="ts">
import data from '@/views/Others/pdf/content'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'miniTable',
  components: {}

})
export default class extends Vue {
  @Prop({ required: true }) private items!: any[];
  @Prop({ required: false }) private typeOptions!: { key: string, value: string }[];
  @Prop({ required: true }) private columns!:{label:string, field:string, width:string}[];
  @Prop({ default: true, required: false }) private showSearch:boolean
  @Prop({ default: 'dataType', required: false }) private searchTypeKey:string

  @Prop({ default: 'displayName', required: false }) private searchOnField:string
   @Prop({ default: false, required: false }) private dragable:boolean

  private search= {
    text: '',
    type: ''
  }

  @Watch('search', { deep: true })

  private searchData() {
    if (this.search.text === '' && this.search.type === '') { return this.items }

    console.log('mini table searching on ' + JSON.stringify(this.search))
    const query = this.search
    let rs = this.items
    if (query.text.length > 0) {
      rs = rs.filter(data => !this.search ||
     data[this.searchOnField].toLowerCase().includes(query.text.toLowerCase()))
    }
    if (query.type.length > 0) {
      rs = rs.filter(data => !this.search ||
    data[this.searchTypeKey] === query.type) || data[this.searchTypeKey] == query.type
    }
    return rs
  }
}
</script>
