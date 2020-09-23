<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        size="mini"
        :placeholder="$t('table.title')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />

      <el-select
        v-model="listQuery.type"
        size="mini"
        :placeholder="$t('table.type')"
        clearable
        class="filter-item"
        style="width: 130px"
        @change="handleFilter"
      >
        <el-option
          v-for="item in typeOptions"
          :key="item.key"
          :label="item.displayName+'('+item.key+')'"
          :value="item.key"
        />
      </el-select>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      height="300px"
      size="mini"
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column
        :label="$t('table.title')"
        min-width="150px"
      >
        <template slot-scope="{row}">
          <span
            class="link-type"
            @click="handleUpdate(row)"
          >{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <!-- <hr/>
      <el-tree
               :data="list"

               node-key="id"
               :expand-on-click-node="false"
               ref="markupTree"
               >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span >
            <i class="el-icon-edit"></i>  {{data.title}}
          </span>
        </span>
      </el-tree> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  getArticles,
  defaultArticleData
} from '@/api/articles'
import { IArticleData } from '@/api/types'

const typeOptions = [
  { key: 'CN', displayName: 'China' },
  { key: 'US', displayName: 'USA' },
  { key: 'JP', displayName: 'Japan' },
  { key: 'EU', displayName: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = typeOptions.reduce(
  (acc: { [key: string]: string }, cur) => {
    acc[cur.key] = cur.displayName
    return acc
  },
  {}
) as { [key: string]: string }

@Component({
  name: 'miniTable',
  components: {},
  filters: {
    typeFilter: (type: string) => {
      return calendarTypeKeyValue[type]
    }
  }
})
export default class extends Vue {
  private tableKey = 0;
  private list: IArticleData[] = [];
  private total = 0;
  private listLoading = true;
  private listQuery = {
    page: 1,
    limit: 20,

    title: undefined,
    type: undefined
  };

  private typeOptions = typeOptions;

  private rules = {
    type: [{ required: true, message: 'type is required', trigger: 'change' }],
    timestamp: [
      { required: true, message: 'timestamp is required', trigger: 'change' }
    ],
    title: [{ required: true, message: 'title is required', trigger: 'blur' }]
  };

  private tempArticleData = defaultArticleData;

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    const { data } = await getArticles(this.listQuery)
    this.list = data.items
    this.total = data.total
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }

  private handleFilter() {
    this.listQuery.page = 1
    this.getList()
  }

  private getSortClass(key: string) {
    const sort = this.listQuery.sort
    return sort === `+${key}` ? 'ascending' : 'descending'
  }
}
</script>
