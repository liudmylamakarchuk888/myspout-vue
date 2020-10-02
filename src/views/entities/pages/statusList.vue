<template>
  <div class="app-container">
    <div class="filter-container">
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
    </div>
    <!-- :key="tableKey" -->
    <el-table

      v-loading="listLoading"
      :data="searchData( )"
      border
      fit
      height="300px"
      size="mini"
      highlight-current-row
      style="width: 100%;"
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'StatusList',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private items!: any[];
  @Prop({ required: false }) private typeOptions!: { key: string, value: string }[];
  @Prop({ required: true }) private columns!:{label:string, field:string, width:string}[];
  // @Prop({ default: true, required: false }) private showSearch:boolean
  // @Prop({ default: 'Available List', required: false }) private title:string;
  // @Prop({ default: false, required: false }) private dragable:boolean

  private listLoading = false;
  private searchBy=''
  private search = {
    text: '',
    type: ''
  };

  get list() {
    return this.items
  }

  getData(filter) {
    return this.items.filter((f) => {
      return f.entityName.toLowerCase().includes(filter.text.toLowerCase())
    })
  }

  private async getList() {
    // this.listLoading = true
    const { data } = await this.getData(this.search)
    this.list = data

    // Just to simulate the time of the request
    // setTimeout(() => {
    //  this.listLoading = false
    // }, 0.5 * 1000)
  }

@Watch('search', { deep: true })
  private searchData() {
    /// console.log('search by ' + query)

    if (this.search.text === undefined && this.search.type === undefined) { return this.items }

    const rs = this.items.filter(data => !this.search ||
     data.displayName.toLowerCase().includes(this.search.text.toLowerCase()) ||
    data.itemType == this.search.type)

    return rs
  }
}
</script>
