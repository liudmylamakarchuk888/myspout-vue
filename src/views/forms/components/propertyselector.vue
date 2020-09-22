<template>
  <div>
    <el-row>
      <el-col>
        <el-button
          size="mini"
          type="text"
          icon="el-icon-plus"
          @click="onNewPropertyClick"
          title="New"
        >New Property</el-button>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
  name: "propertyselector",
  components: {},
})
export default class extends Vue {
  propertiesView = {
    properties: [],
    selectedProperty: null,
    serach: null,
  };
  selectedEntityType=null
  search=null;
  onPropertySelected(value) {}
  onEntityTypeChanged(value) {}
  onNewPropertyClick(evt) {}
  onAllPropertyClick(evt) {}
  onAppPrefClick(evt) {}
  get getEntityTypeList(){
    return [];
  }
}
</script>