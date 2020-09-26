<template>
  <el-container>
    <div v-show="loading">
      Loading...
    </div>
    <el-row
      v-show="!loading"
      class="app-container"
    >
      <el-col>
        <p>{{ currentEntity.name }}</p>
      </el-col>
      <el-col>
        <el-row
          type="flex"
          justify="start"
        >
          <el-col :span="5">
            <el-input
              v-model="description"
              style="border-bottom: solid #dfe4ed 1px"
              class="description"
              placeholder="Type description here"
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col style="padding-top: 20px; overflow: hidden">
        <el-tabs
          type="card"
          class="tab-container"
          @tab-click="handleClick"
        >
          <!-- <el-tab-pane :label="`Properies List (${data.properties.length})`"> -->
          <el-tab-pane :label="`Properies List`">
            <el-row style="padding-top: 10px; hegith: 100%">
              <el-col class="list-header">
                <el-row type="flex">
                  <el-col
                    style="padding-left: 30px"
                    :span="18"
                  >
                    <el-button
                      type="text"
                      style="text-decoration: underline"
                    >
                      New
                    </el-button>
                    |
                    <el-button
                      type="text"
                      style="text-decoration: underline; margin: 0"
                    >
                      New Formula
                    </el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-row>
                      <el-col :span="12">
                        <el-input
                          v-model="propertyQuery.text"
                          size="mini"
                          placeholder="Find property"
                        />
                      </el-col>
                      <el-col :span="12">
                        <el-select
                          v-model="propertyQuery.type"
                          size="mini"
                          placeholder="Find by data type"
                          style="padding-left: 10px"
                          clearable
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="list-body">
                <mini-list
                  :set-loading="setLoading"
                  :tab-label="`properies`"
                />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Status List">
            Role
          </el-tab-pane>
          <el-tab-pane label="Settings">
            Task
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MiniList from './miniList.vue'
import { EntitiesModule } from '@/store/modules/entities.ts'

@Component({
  name: 'RightSide',
  components: {
    MiniList
  }
})
export default class extends Vue {
  private description = '';
  private loading = false
  // private loadingList = {
  //   properties: false
  //   // status: false,
  //   // settings: false
  // }
  private options = [
    {
      value: 'Option1',
      label: 'Option1'
    },
    {
      value: 'Option2',
      label: 'Option2'
    },
    {
      value: 'Option3',
      label: 'Option3'
    },
    {
      value: 'Option4',
      label: 'Option4'
    },
    {
      value: 'Option5',
      label: 'Option5'
    }
  ];

  private propertyQuery = {
    text: '',
    type: ''
  };

  get currentEntity() {
    return EntitiesModule.getCurrentEntity
  }

  // get loading() {
  //   const status = [...new Set(Object.values(this.loadingList))];
  //   console.log(status)
  //   return status.length !== 1 ? true: status[0]
  // }

  setLoading(componentId:string, status: boolean) {
    this.loading = status
  }

  handleClick(tab: any) {
    console.log(tab.label)
    // console.log(tab, event);
  }
}
</script>

<style lang='scss'>
.el-container {
  position: relative;
  height: 100%;
  margin: 0;
  .description {
    width: 276px;
    input {
      border: none;
    }
  }
  .app-container {
    display: flex;
    flex-direction: column;
    .tab-container {
      height: 100%;
    }
    .el-tabs__header {
      margin: 0px;
    }
    .el-tabs__content {
      height: calc(100% - 41px);
      border: 1px solid #dfe4ed;
      border-top: none;
      .el-tab-pane {
        height: 100%;
        & > div.el-row {
          height: 100%;
        }
        .list-body {
          overflow: auto;
          height: calc(100% - 36px);
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
