<template>
  <div>
    <el-row>
      <el-col>
        <el-button
          size="mini"
          type="text"
          icon="el-icon-plus"
          title="New"
          @click="onNewPropertyClick"
        >
          New Property
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'propertyselector',
  components: {}
})
export default class extends Vue {
  propertiesView = {
    properties: [],
    selectedProperty: null,
    serach: null
  };

  selectedEntityType=null
  search=null;
  onPropertySelected(value:any) { console.log(value) }
  onEntityTypeChanged(value:any) { console.log(value) }
  onNewPropertyClick(evt:any) { console.log(evt) }
  onAllPropertyClick(evt:any) { console.log(evt) }
  onAppPrefClick(evt:any) { console.log(evt) }
  get getEntityTypeList() {
    return []
  }
}
</script>
