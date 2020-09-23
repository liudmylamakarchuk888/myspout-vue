<template>
  <el-container>
    <el-row
      type="flex"
      :gutter="10"
      class="row-bg"
      justify="center"
    >
      <el-col
        :span="6"
        class="treeview-container"
      >
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
                  v-for="item in disciplinesList"
                  :key="item.value"
                  :label="item.key"
                  :value="item.value"
                  filterable
                />
              </el-select>
            </el-col>
          </el-row>
        </el-row>
        <div class="scroll-wrap">
          <el-row>
            <p v-if="loading">
              loading...
            </p>
            <el-tree
              ref="entitiesTree"
              :data="entitiesList"
              :filter-node-method="filterEntities"
              @node-click="handleNodeClick"
            >
              <span
                slot-scope="{node, data}"
                class="custom-tree-node"
              >
                <span>
                  <img
                    v-if="existIcons(data.label, node.level).length"
                    :src="existIcons(data.label, node.level)[0]['source']"
                  >
                  <i
                    v-else-if="
                      !existIcons(data.label, node.level).length && node.isLeaf
                    "
                    class="el-icon-document"
                  />
                  <label
                    :class="[
                      node.isLeaf ? 'tree-node-normal' : 'tree-node-bold'
                    ]"
                  >{{
                    node.isLeaf
                      ? data.label
                      : `${data.label} (${node.childNodes.length})`
                  }}</label>
                </span>
              </span>
            </el-tree>
          </el-row>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import axios from 'axios'
import { _allEntities, _allDisciplines } from './data.js'

@Component({
  name: 'Entities',
  components: {}
})
export default class extends Vue {
  private loading = false;
  private entityKey = '';
  private selectedDiscip: any = '';
  private allEntities: any = [];
  private allDisciplines: any = [];

  get entitiesList() {
    const result = this.allEntities.children.map((entity: any) => {
      if (entity.children && entity.children.length) {
        const children = entity.children.map((child: any) => {
          return { label: child.name }
        })
        return {
          label: `${entity.name}`,
          icon: '',
          children
        }
      } else {
        return { label: `${entity.name}` }
      }
    })

    return result
  }

  get disciplinesList(): any {
    return this.allDisciplines.disciplines
  }

  existIcons(label: string, level: number) {
    label = level === 1 ? label.split(' (')[0] : label
    let icons:any = []
    this.allEntities.children.filter((entity: any) => {
      if (entity.children && entity.children.length) {
        entity.children.filter((child: any) => {
          if (child.name === label) icons = child.icons
          return false
        })
        return false
      }
      if (entity.name === label) icons = entity.icons
      return false
    })
    return icons
  }

  handleNodeClick(data: object) {
    console.log(data)
  }

  @Watch('entityKey')
  private emitEntitiesFilter(val: any) {
    this.$refs.entitiesTree.filter(val)
  }

  filterEntities(value: any, data: any) {
    if (!value) return true
    return data.label.indexOf(value) !== -1
  }

  private async fetchEntities() {
    this.loading = true
    try {
      this.allEntities = await axios.get(
        'http://52.152.148.181:3000/api/getEntities'
      )
      this.allDisciplines = await axios.get(
        'http://52.152.148.181:3000/api/getFlexApplicationPreferences'
      )

      // console.log(this.disciplinesList)
      this.loading = false
    } catch (error) {
      console.log('entities ----', error)
    }
    this.loading = false
  }

  mounted() {
    this.fetchEntities()
  }
}
</script>

<style lang="scss" scoped>
.tree-node-bold {
  font-weight: bold;
}
.tree-node-normal {
  font-weight: 400;
}
.el-container {
  margin: 12px 0 0 14px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    width: 100%;
  }
  .treeview-container {
    height: calc(100vh - 4.5em);
    // overflow: auto;
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
    min-width: 250px !important;
    display: flex;
    flex-direction: column;
    .scroll-wrap {
      position: relative;
      height: 100%;
      overflow: auto;
    }
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
  .el-tree-node__content {
    cursor: default !important;
  }
}
</style>
