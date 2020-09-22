<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        size="mini"
        v-model="listQuery.title"
        :placeholder="$t('table.title')"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />

      <el-select
        size="mini"
        v-model="listQuery.type"
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

    <el-tree :data="list" node-key="id" ref="markupTree">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>
          <i class="el-icon-edit"></i>
          {{data.name}}
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Form } from "element-ui";

import { cloneDeep } from "lodash";
import {
  getArticles,
  getPageviews,
  createArticle,
  updateArticle,
  defaultArticleData,
} from "@/api/articles";
import { IArticleData } from "@/api/types";
import { exportJson2Excel } from "@/utils/excel";
import { formatJson } from "@/utils";

const typeOptions = [
  { key: "CN", displayName: "China" },
  { key: "US", displayName: "USA" },
  { key: "JP", displayName: "Japan" },
  { key: "EU", displayName: "Eurozone" },
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = typeOptions.reduce(
  (acc: { [key: string]: string }, cur) => {
    acc[cur.key] = cur.displayName;
    return acc;
  },
  {}
) as { [key: string]: string };

@Component({
  name: "miniTree",
  components: {},
  filters: {
    typeFilter: (type: string) => {
      return calendarTypeKeyValue[type];
    },
  },
})
export default class extends Vue {
  @Prop({ required: true }) private treeData!: string[];

  private tableKey = 0;
  private list: any[] = this.treeData;
  private total = 0;
  private listLoading = true;
  private listQuery = {
 
    title: undefined,
    type: undefined,
  };

  private typeOptions = typeOptions;



  private tempArticleData = defaultArticleData;

  private async getList() {
    this.listLoading = true;

    this.list = this.treeData.filter((x)=> {
      return  x || x.name ==this.listQuery.title});
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false;
    }, 0.5 * 1000);
  }

  private handleFilter() {
    
    this.getList();
  }

 
}
</script>
