<template>
  <div class="app-container">
    <el-row
      type="flex"
      :gutter="10"
      class="filter-container"
    >
      <el-col :span="14">
        <el-input
          v-model="query.text"
          placeholder="Search for"
          size="mini"
          class="filter-item"
        />
      </el-col>
      <el-col :span="10">
        <el-select
          v-model="query.type"
          clearable
          placeholder="Select Type"
          class="filter-item"
          size="mini"
        >
          <el-option
            v-for="item in typeOptions"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>
    <div class="tree-container">
      <el-tree
        ref="elTree"
        :data="treeData"
        node-key="id"
        :filter-node-method="filterNode"
        class="tree-content"
        @node-click="handleNodeClick"
      >
        <span
          slot-scope="{node, data}"
          class="custom-tree-node"
        >
          <span>
            <b v-if="!node.isLeaf">{{ data.name }}</b>
            <div v-else>
              <img
                v-if="data.icons.length"
                :src="data.icons[0].source"
              >
              <i
                v-else
                class="el-icon-document"
              />
              {{ data.name }}
            </div>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'miniTree',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private treeData!: any[];
  @Prop({ required: false }) private typeOptions!: {
    key: string
    value: string
  }[];

  @Prop({ required: true }) private handleNodeClick!: any;

  private query = {
    text: '',
    type: ''
  };

  @Watch('query.text')
  filterText(val: string) {
    this.$refs.elTree.filter(`${val}_name`)
  }

  @Watch('query.type')
  filtertype(val: any) {
    this.$refs.elTree.filter(`${val}_type`)
  }

  filterNode(value: any, data: any) {
    if (!value) return true
    const filterData = value.split('_')
    if (filterData[1] === 'name' && !this.query.type.length) {
      return data.name.toLowerCase().includes(filterData[0].toLowerCase())
    }
    if (filterData[1] === 'type' && !this.query.text.length) {
      return data.id.toLowerCase().includes(filterData[0].toLowerCase())
    }
    return (
      data.name.toLowerCase().includes(filterData[0].toLowerCase()) ||
      data.id.toLowerCase().includes(filterData[0].toLowerCase())
    )
  }

  selectedNode = null;
  // getchilds(node) {
  //   if (node) {
  //     let types = [];
  //     try {
  //       types.push({ key: node.name, value: node.id });

  //       if (node.children && node.children.length > 0) {
  //         node.children.forEach((child) => {
  //           let rs = this.getchilds(child);
  //           rs.forEach((element) => {
  //             types.push(element);
  //           });
  //         });
  //       }
  //     } catch (err) {}
  //     return types;
  //   }
  // }

  // get typeOptions() {
  //   let types = [
  //     { name: "Release", value: "com.msp.dao.entities.Release" },
  //     { name: "Team", value: "com.msp.dao.entities.Team" },
  //   ];

  //   return types;
  // }

  private handleFilter() {
    // this.getList();
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  .el-row {
    margin: 0px !important;
  }
  .filter-container {
    background-color: #e2e3e6;
    padding: 0px 10px;
  }
  .tree-container {
    padding: 0px 10px;
    padding-top: 5px;
    position: relative;
    overflow: auto;
    height: calc(100% - 38px);
    .tree-content {
      position: relative;
    }
  }
}
</style>
