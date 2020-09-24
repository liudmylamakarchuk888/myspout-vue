<template>
  <div class="container">
    <el-row
      type="flex"
      :gutter="10"
      justify="space-around"
      class="treeview-header"
    >
      <el-col :span="14">
        Entities
      </el-col>
      <el-col
        :span="10"
        style="text-align: right"
      >
        <a
          href="#"
          class="href-button"
        >New</a> |
        <a
          href="#"
          class="href-button"
        >New Virtual</a>
      </el-col>
    </el-row>
    <div class="scroll-wrap">
      <el-row>
        <mini-tree
          :tree-data="entities"
          :type-options="disciplines"
        />
      </el-row>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import MiniTree from './miniTree.vue'
import { component } from 'vue/types/umd'

@Component({
  name: 'LeftSide',
  components: { MiniTree }
})
export default class ComponentName extends Vue {
  @Prop({ default: () => [] }) private entities!: any;
  @Prop({ default: () => [] }) private disciplines!: any;

  private entityKey = '';
  private selectedDiscip: any = '';

  handleNodeClick(data: object) {
    console.log(data)
  }

  mounted() {
    console.log('Mounted left side component')
  }
}
</script>

<style lang='scss' scoped>
.container {
  .el-row {
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
  .tree-node-bold {
    font-weight: bold;
  }
  .tree-node-normal {
    font-weight: 400;
  }
  .treeview-header {
    background-color: #e2e3e6;
    margin: 0px !important;
    padding: 24px 12px;
    .href-button {
      color: #1890ff;
      text-decoration: underline;
      padding:0 4px;
      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
