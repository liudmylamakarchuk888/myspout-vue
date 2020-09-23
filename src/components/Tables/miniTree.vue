<template>
  <div class="app-container">
    <div class="filter-container">
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
    </div>
 
    <el-tree
      ref="elTree"
      :data="treeData"
      node-key="id"
      @node-click="handleNodeClick"
      :filter-node-method="filterNode"
    >
      <span slot-scope="{node, data}" class="custom-tree-node">
        <span>
          <i class="el-icon-edit" />
          {{ data.name }}
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "miniTree",
  components: {},
})
export default class extends Vue {
  @Prop({ required: true }) private treeData!: any[];
  @Prop({ required: false }) private typeOptions!: {
    key: string;
    value: string;
  }[];

  private query = {
    text: undefined,
    type: undefined,
  };

  @Watch("query.text")
  filterText(val) {
    this.$refs.elTree.filter(val);
  }

  @Watch("query.type")
  filtertype(val) {
    this.$refs.elTree.filter(val);
  }

  filterNode(value, data) {
    if (!value) return true;
    return (
      data.name.toLowerCase().includes(value.toLowerCase()) ||
      data.id.toLowerCase().includes(value.toLowerCase())
    );
  }
  selectedNode = null;
  handleNodeClick(data) {
    console.log(data);
    this.selectedNode = data;
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
    //this.getList();
  }
}
</script>
