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
        <el-button
          type="text"
          style="text-decoration: underline"
          @click="setRightSideViewId('newEntity')"
        >
          New
        </el-button>
        |
        <el-button
          type="text"
          style="text-decoration: underline; margin: 0;"
          @click="setRightSideViewId('newVirtual')"
        >
          New Virtual
        </el-button>
      </el-col>
    </el-row>
    <div class="scroll-wrap">
      <mini-tree
        :tree-data="entities"
        :type-options="disciplines"
        :handle-node-dbclick="handleEntityDbclick"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import MiniTree from '../components/miniTree.vue'

@Component({
  name: 'LeftSide',
  components: { MiniTree }
})
export default class extends Vue {
  @Prop({ required: true }) private entities!: any;
  @Prop({ required: true }) private disciplines!: any;
  @Prop({ required: true }) private handleEntityDbclick!: any;
  @Prop({ required: true }) private setRightSideViewId: any;

  private entityKey = '';
  private selectedDiscip: any = '';

  mounted() {
    console.log('Mounted left side component')
  }
}
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
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
  }
  .scroll-wrap {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
}
</style>
