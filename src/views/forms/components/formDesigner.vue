<template>
  <el-container style="height: 100%; border: 1px solid #eee" size="mini">
    <!--  <el-aside width="275px">
       <el-collapse accordion>
        <el-collapse-item title="Properties" name="1">
          <propertyselector></propertyselector>
        </el-collapse-item>
        <el-collapse-item title="Tables" name="2">
          <el-row>
            <el-col>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-plus"
                @click="onNewPropertyClick"
                title="New"
              >New Table</el-button>
              <p>Drag properties on to the form.</p>
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <el-input v-model="search" placeholder="Find form"></el-input>
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <el-select
                v-model="selectedEntityType"
                @change="onEntityTypeChanged"
                placeholder="find form by entity"
              >
                <el-option
                  v-for="item in getEntityTypeList"
                  :key="item.key"
                  :label="item.key"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-table
            :data="propertiesView.properties.filter(data => !search || data.displayName.toLowerCase().includes(propertiesView.search.toLowerCase()))"
            border
            stripe
            size="mini"
            highlight-current-row
            @current-change="onPropertySelected"
            default-expand-all
            row-key="dateModified"
          >
            <el-table-column prop="displayName" label="Display name" sortable></el-table-column>
          </el-table>
          <el-row>
            <el-col>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-plus"
                @click="onAllPropertyClick"
                title="New"
              >All Property</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-plus"
                @click="onAppPrefClick"
                title="New"
              >Application Prefrences</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="TableItems" name="3">
          <miniTable></miniTable>
        </el-collapse-item>
        <el-collapse-item title="Development" name="4"></el-collapse-item>
      </el-collapse>
    </el-aside>-->
    <el-main>
      <div>form designer view here. {{formId}}</div>

      <!-- <miniTable></miniTable> -->
      <!-- <miniTree :treeData="entities.children"></miniTree> -->
      <el-card class="box-card">
        <el-tabs
          v-model="tabsData.editableTabsValue"
          type="border-card"
          editable
          @edit="handleTabsEdit"
          v-if="formData"
        >
          <el-tab-pane
            v-for="(item, index) in formData.tabs"
            :key="item.displayName"
            :label="item.displayName"
            :name="item.displayName"
          >
            <el-card shadow="always" v-for="row in item.controlsContainers" :key="row.displayName">
              <div slot="header" class="clearfix">
                <el-popover placement="right" trigger="hover">
                  <el-row>
                    <el-col>
                      <el-button type="text" icon="el-icon-plus" />
                      <el-button type="text" icon="el-icon-edit" />
                      <el-button type="text" icon="el-icon-delete" />
                    </el-col>
                  </el-row>
                  <el-button slot="reference" type="text">{{row.displayName}}</el-button>
                </el-popover>
              </div>

              <p>{{row}}</p>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import miniTable from "@/components/Tables/miniTable";
import miniTree from "@/components/Tables/miniTree";
import propertyselector from "./propertyselector";
import axios from "axios";
@Component({
  name: "formDesigner",
  components: { miniTable, miniTree, propertyselector },
})
export default class extends Vue {
  propertiesView = {
    properties: [],
    selectedProperty: null,
    serach: null,
  };
  tabsData = {
    editableTabsValue: "2",
    editableTabs: [
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content",
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content",
      },
    ],
    tabIndex: 2,
  };

  formId = this.$route.params.formid;

  handleTabsEdit(targetName, action) {
    if (action === "add") {
      let newTabName = ++this.tabsData.tabIndex + "";
      this.tabsData.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.tabsData.editableTabsValue = newTabName;
    }
    if (action === "remove") {
      let tabs = this.tabsData.editableTabs;
      let activeName = this.tabsData.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.tabsData.editableTabsValue = activeName;
      this.tabsData.editableTabs = tabs.filter(
        (tab) => tab.name !== targetName
      );
    }
  }

  onPropertySelected(value) {}

  onNewPropertyClick(evt) {}
  onAllPropertyClick(evt) {}
  onAppPrefClick(evt) {}

  private allEntities = [];

  get entities() {
    let data = this.$store.getters.Entities;

    return data;
  }

  formData = {};
  private async getFormData(formId) {
    return await axios
      .get("api/form/" + formId)
      .then((rs) => {
        return rs.data;
      })
      .catch((err) => {
        console.error("eeror while getting form data.");
      });
  }
  mounted() {
    const formid = this.$route.params.formid;

    this.getFormData(formid).then((rs) => {
      this.formData = rs;
    });
  }
}
</script>