<template>
  <div>
    <el-row>
      <el-col :span="14">
        <span>{{ title }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <slot name="header" />
      </el-col>
    </el-row>
    <el-row
      v-if="showSearch"
      type="flex"
      :gutter="10"
      justify="space-around"
      class="treeview-header"
    >
      <el-col>
        <el-input
          v-model="query.text"
          size="mini"
          placeholder="Search for"
          style="width: 200px;"
          class="filter-item"
        />

        <el-select
          v-model="query.type"
          size="mini"
          placeholder="Select Type"
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
    </el-row>
    <div class="scroll-wrap">
      <div class="tree-container">
        <el-tree
          ref="elTree"
          class="tree-content"
          :data="treeData"
          node-key="id"
          default-expand-all
          highlight-current
          :filter-node-method="filterNode"
          @node-click="handleNodeClick"
        >
          <span
            slot-scope="{node, data}"
            class="custom-tree-node"
          >
            <span>
              <!-- <i v-if="data.children.length >0" class="el-icon-plus"/>
          <i v-else class='el-icon-edit' /> -->
              <i class="el-icon-edit" />
              {{ data.name }}
            </span>
          </span>
        </el-tree>
      </div>
    </div>

    </el-row>
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
  @Prop({ required: false }) private typeOptions!: { key: string, value: string }[];
  @Prop({ default: true, required: false }) private showSearch:boolean|undefined
  @Prop({ default: 'Available List', required: false }) private title:string|undefined;
  @Prop({ default: false, required: false }) private dragable:boolean|undefined

  private query = {
    text: undefined,
    type: undefined
  };

  @Watch('query.text')
  filterText(val) {
    this.$refs.elTree.filter(val)
  }

  @Watch('query.type')
  filtertype(val) {
    this.$refs.elTree.filter(val)
  }

  filterNode(value, data) {
    if (!value) return true
    return (
      data.name.toLowerCase().includes(value.toLowerCase()) ||
      data.id.toLowerCase().includes(value.toLowerCase())
    )
  }

  selectedNode = null;
  handleNodeClick(data) {
    console.log(data)
    this.selectedNode = data
  }
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
    height: 100%;
    overflow: auto;
    .tree-content {
      position: relative;
      overflow: auto;
    }
  }
  .scroll-wrap {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
}
</style>
