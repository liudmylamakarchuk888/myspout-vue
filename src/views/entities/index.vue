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
                  :span="8"
                  text-xs-right
                >
                  <a>New</a>
                </el-col>
                <el-col
                  :span="2"
                  text-xs-right
                >
                  |
                </el-col>
                <el-col
                  :span="14"
                  text-xs-right
                >
                  <a>New Virtual</a>
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
              <el-input
                v-model="entityKey"
                placeholder="Please input"
              />
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <p v-if="entitiesLoading">
            loading...
          </p>
          <tree-view
            v-else
            :items="items"
          />
        </el-row>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TreeView from '@/components/TreeView/index.vue'
import axios from 'axios'

@Component({
  name: 'Entities',
  components: { TreeView }
})
export default class extends Vue {
  private entitiesLoading = true
  private entityKey = ''
  private allEntities=[]

  get items() {
    const result = this.allEntities.data.children.map((entity) => {
      if (entity.children && entity.children.length) {
        const children = entity.children.map((child) => {
          return { text: child.name }
        })
        return { text: `${entity.name} (${children.length})`, children }
      } else {
        return { text: `${entity.name}` }
      }
    })

    return result
  }

  private async fetchEntities() {
    this.entitiesLoading = true
    try {
      this.allEntities = await axios.get('http://52.152.148.181:3000/api/getEntities')
      console.log('entities loaded '+this.items)
    } catch (error) {
      console.log('entities ----', error)
    }
    this.entitiesLoading = false
  }

  mounted() {
    this.fetchEntities()
  }
}
</script>

<style lang="scss" scoped>
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
    overflow-y: auto;
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
  }
  .treeview-header {
    background-color: #e2e3e6;
    margin: 0px !important;
    padding: 24px 18px;
    .add-container {
      .el-col {
        text-align: center;
      }
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
}
</style>
