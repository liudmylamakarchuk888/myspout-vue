<template>
  <div class="container">
    <el-row class="treeview-header">
      <el-row
        type="flex"
        :gutter="10"
        justify="center"
      >
        <el-col :span="12">
          Entities
        </el-col>
        <el-col :span="12">
          <el-row
            type="flex"
            :gutter="5"
            class="add-container"
          >
            <el-col
              class="add-text"
              :span="8"
              text-right
            >
              <a
                href="#"
                class="href-button"
              >New</a>
            </el-col>
            <el-col
              class="add-text"
              :span="2"
              text-right
            >
              |
            </el-col>
            <el-col
              class="add-text"
              :span="14"
              text-right
            >
              <a
                href="#"
                class="href-button"
              >New Virtual</a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row
        type="flex"
        :gutter="10"
      >
        <el-col :span="14">
          <el-input
            v-model="entityKey"
            placeholder="Find Entity"
          />
        </el-col>
        <el-col :span="10">
          <el-select
            v-model="selectedDiscip"
            placeholder="Find discipline"
          >
            <el-option
              v-for="item in disciplines"
              :key="item.value"
              :label="item.key"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
    </el-row>
    <div class="scroll-wrap">
      <el-row>
        <el-tree
          ref="entitiesTree"
          :data="treeData"
          @node-click="handleNodeClick"
        >
          <span
            slot-scope="{node, data}"
            class="custom-tree-node"
          >
            <span>
              <img
                v-if="getTreeItemIcon(data.label, node.level).length"
                :src="getTreeItemIcon(data.label, node.level)[0]['source']"
              >
              <i
                v-else-if="
                  !getTreeItemIcon(data.label, node.level).length && node.isLeaf
                "
                class="el-icon-document"
              />
              <label
                :class="[node.isLeaf ? 'tree-node-normal' : 'tree-node-bold']"
              >{{ data.label }}</label>
            </span>
          </span>
        </el-tree>
      </el-row>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { component } from 'vue/types/umd'

@Component({
  name: 'LeftSide',
  components: {}
})
export default class ComponentName extends Vue {
  @Prop({ default: () => [] }) private entities!: any;
  @Prop({ default: () => [] }) private disciplines!: any;

  private entityKey = '';
  private selectedDiscip: any = '';
  private allEntities:any = [];
  private allDisciplines:any = [];

  get treeData() {
    const result = this.allEntities.map((entity: any) => {
      if (entity.children && entity.children.length) {
        const children = entity.children.map((child: any) => {
          return { label: child.name }
        })
        return {
          label: `${entity.name} (${children.length})`,
          children
        }
      } else {
        return { label: `${entity.name} (0)` }
      }
    })
    return result
  }

  @Watch('entityKey')
  private filterEntities(val: any) {
    console.log(val)
    // this.$refs.entitiesTree.filter(val);
    this.allEntities = []
    if (!val) this.allEntities = this.entities
    else {
      this.allEntities = this._filterEntities(val)
      console.log(this.allEntities)
    }
  }

  // filterEntities(value: any, data: any) {
  //   if (!value) return true;
  //   return data.label.indexOf(value) !== -1;
  // }

  getTreeItemIcon(label: string, level: number): any {
    const item = this._filterEntities(label, level)
    const dd = item.icons ? item.icons : []
    return dd
  }

  /* ---- search entites data
    label: entities name
    level: node level
            0: filtering
            1 or other: getting icons
   */
  _filterEntities(label: string, level = 0): any {
    label = level === 1 ? label.split(' (')[0] : label
    let res: any = []
    this.entities.filter((entity: any) => {
      if (entity.children && entity.children.length) {
        const data = entity.children.filter((child: any) => {
          if (level === 0) {
            if (child.name.indexOf(label) !== -1) return true
          } else {
            if (child.name === label) res = child
          }
          return false
        })
        if (entity.name.indexOf(label) !== -1) { res.push({ ...entity, children: data }) }
      }
      if (level === 0) {
        if (entity.name.indexOf(label) !== -1) res.push(entity)
      } else {
        if (entity.name === label) res = label
      }
      return false
    })
    return res
  }

  handleNodeClick(data: object) {
    console.log(data)
  }

  mounted() {
    this.allEntities = this.entities
  }
}
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    width: 100%;
  }
  .scroll-wrap {
    position: relative;
    height: 100%;
    overflow: auto;
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
    padding: 24px 18px;
    .add-container {
      .add-text {
        padding: 0 !important;
        text-align: right;
      }
    }
    .href-button {
      color: #1890ff;
      text-decoration: underline;
    }
  }
}
</style>
