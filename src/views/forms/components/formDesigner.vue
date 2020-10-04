<template>
  <el-container
    class="elcontainer"
    size="mini"
  >
    <!-- <el-aside class="elaside">
      <el-collapse accordion>
        <el-collapse-item
          title="Properties"
          name="1"
        >
          <propertyselector />
        </el-collapse-item>
        <el-collapse-item
          title="Tables"
          name="2"
        >
          <el-row>
            <el-col>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-plus"
                title="New"
                @click="onNewPropertyClick"
              >
                New Table
              </el-button>
              <p>Drag properties on to the form.</p>
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <el-input
                v-model="search"
                placeholder="Find form"
              />
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <el-select
                v-model="selectedEntityType"
                placeholder="find form by entity"
                @change="onEntityTypeChanged"
              >
                <el-option
                  v-for="item in getEntityTypeList"
                  :key="item.key"
                  :label="item.key"
                  :value="item.value"
                />
              </el-select>
            </el-col>
          </el-row>
          <el-table
            :data="propertiesView.properties.filter(data => !search || data.displayName.toLowerCase().includes(propertiesView.search.toLowerCase()))"
            border
            stripe
            size="mini"
            highlight-current-row
            default-expand-all
            row-key="dateModified"
            @current-change="onPropertySelected"
          >
            <el-table-column
              prop="displayName"
              label="Display name"
              sortable
            />
          </el-table>
          <el-row>
            <el-col>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-plus"
                title="New"
                @click="onAllPropertyClick"
              >
                All Property
              </el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-plus"
                title="New"
                @click="onAppPrefClick"
              >
                Application Prefrences
              </el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item
          title="TableItems"
          name="3"
        >
          <miniTable />
        </el-collapse-item>
        <el-collapse-item
          title="Development"
          name="4"
        />
      </el-collapse>
    </el-aside> -->

    <el-main

      class="elmain"
    >
      <div>form designer: {{ formId }}</div>

      <!-- <miniTable></miniTable> -->
      <!-- <miniTree :treeData="entities.children"></miniTree> -->
      <el-row>
        <el-col>
          <el-form style="float:right;position:relative">
            <el-dropdown>
              <el-button
                :plain="true"
                @command="onFormAddCommand"
              >
                <i class="el-icon-plus" />
              </el-button>
              <el-dropdown-menu
                slot="dropdown"
                @command="addTab"
              >
                <el-dropdown-item>
                  Tab
                </el-dropdown-item>
                <el-dropdown-item>Section</el-dropdown-item>
                <el-dropdown-item>Report</el-dropdown-item>
                <el-divider />
                <el-dropdown-item>information Section</el-dropdown-item>
                <el-divider />
                <el-dropdown-item>integration Tab</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button
              :plain="true"
              icon="el-icon-setting"
              title="edit"
              @click="openSettings=true"
            />
            <el-button
              :plain="true"
              icon="el-icon-delete"
              title="delete"
              @click.prevent="onDeleteForm"
            />
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-tabs
            v-if="formData"
            v-model="activeTab"
            type="border-card"
            editable

            @edit="handleTabsEdit"
          >
            <el-tab-pane
              v-for="(item,index) in formData.tabs"
              :key="item.displayName"
              :label="item.displayName"
              :name="index"
            >
              <el-card
                v-for="row in item.controlsContainers"
                :key="row.displayName"
                shadow="always"
              >
                <div
                  slot="header"
                  class="clearfix"
                >
                  <el-popover
                    placement="right"
                    trigger="hover"
                  >
                    <el-form>
                      <el-button
                        :plain="true"
                        icon="el-icon-setting"
                        title="Settings "
                        @click="openSettings=true"
                      />
                      <el-button
                        :plain="true"
                        icon="el-icon-s-promotion"
                        title="Move "
                      />
                      <el-button
                        :plain="true"
                        icon="el-icon-delete"
                        title="delete"
                        @click="onItemDelete(row)"
                      />
                    </el-form>
                    <el-button
                      slot="reference"
                      type="text"
                    >
                      {{
                        row.displayName
                      }}
                    </el-button>
                  </el-popover>
                </div>
                <JsonEditor :value="row" />
              </el-card>
            </el-tab-pane>
          </el-tabs>

          <el-dialog
            title="Settings content"
            :visible.sync="openSettings"
          >
            <el-tabs
              type="border-card"
              tab-position="left"
              style="height: 200px;"
            >
              <el-tab-pane label="User">
                User
              </el-tab-pane>
              <el-tab-pane label="Config">
                Config
              </el-tab-pane>
              <el-tab-pane label="Role">
                Role
              </el-tab-pane>
              <el-tab-pane label="Task">
                Task
              </el-tab-pane>
            </el-tabs>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="openSettings = false">Cancel</el-button>
              <el-button
                type="primary"
                @click="openSettings = false"
              >Confirm</el-button>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import miniTable from '@/components/Tables/miniTable'
import miniTree from '@/components/Tables/miniTree'
import propertyselector from './propertyselector'
import JsonEditor from '@/components/JsonEditor/index.vue'
import axios from 'axios'
import { AppCacheModule } from '@/store/modules/appCache'
import { FormsModule } from '@/store/modules/FormsStore'
import { Loading, Message } from 'element-ui'
@Component({
  name: 'formDesigner',
  components: { miniTable, miniTree, propertyselector, JsonEditor }
})
export default class extends Vue {
  propertiesView = {
    properties: [],
    selectedProperty: null,
    serach: null
  };

  tabsData = {
    editableTabsValue: '2',
    editableTabs: [
    ],
    tabIndex: 2
  };

openSettings=false;
  activeTab='0'
  formId = this.$route.params.formid;

  onFormAddCommand(cmd) {
    debugger
    if (cmd == 'addTab' && this.formData) {
      const tabid = this.formData.tabs.length + 1
      this.formData.tabs.push({
        title: 'New Tab' + tabid,
        name: tabid,
        content: 'new Tab Content'
      })
    }
  }

  handleTabsEdit(targetName, action) {
    if (action === 'add') {
      const newTabName = ++this.tabsData.tabIndex + ''
      this.tabsData.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.tabsData.editableTabsValue = newTabName
    }
    if (action === 'remove') {
      const tabs = this.tabsData.editableTabs
      let activeName = this.tabsData.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.tabsData.editableTabsValue = activeName
      this.tabsData.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
  }

  // onPropertySelected(value) {}

  // onNewPropertyClick(evt) {}
  // onAllPropertyClick(evt) {}
  // onAppPrefClick(evt) {}

  get entities() {
    return AppCacheModule.Entities
  }

  onItemDelete(obj) {
    this.$confirm('This will  delete the Item you have selected.' + JSON.stringify(obj) + ' . Continue?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: 'Form Delete completed'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: 'Form Delete canceled'
      })
    })
  }

  onDeleteForm(val) {
    this.$confirm('This will  delete the form. Continue?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: 'Form Delete completed'
      })
    }).catch(() => {
      this.$message({
        type: 'info',
        message: 'Form Delete canceled'
      })
    })
  }

  formData = {};
  private async getFormData(formId: any) {
    await FormsModule.getActiveForm(formId).then((rs) => {
      this.formData = rs
    }).finally(() => {
      this.loadingInstance.close()
    })
  }

loadingInstance :any;
  private loadingConfig={
    lock: true,
    text: 'Loading...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  };

  mounted() {
    const formid = this.$route.params.formid
    debugger
    if (!formid) {
      this.$router.push('forms')
    }
    this.loadingInstance = Loading.service(this.loadingConfig)
    this.getFormData(formid)
  }
}
</script>
