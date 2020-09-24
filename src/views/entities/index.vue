<template>
  <el-container>
    <p v-if="leftLoading">
      Loading...
    </p>
    <el-row
      v-else
      type="flex"
      :gutter="10"
      class="entity-container"
      justify="center"
    >
      <el-col
        :span="6"
        class="card-panel-left"
      >
        <left-side
          :entities="allEntities.children"
          :disciplines="allDisciplines.disciplines"
          :handle-entity-click="handleEntityClick"
        />
      </el-col>
      <el-col
        :span="18"
        class="card-panel-right"
      >
        <right-side
          :title="`Risk`"
          :selected-entity="selectedEntity"
          :data="propertyData"
          :loading="rightLoading"
        />
        <!-- <left-side
          :entities="allEntities.children"
          :disciplines="allDisciplines.disciplines"
        ></left-side> -->
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LeftSide from './components/leftSide.vue'
import RightSide from './components/rightSide.vue'
import axios from 'axios'
import { _allEntities, _allDisciplines, _riskProperties } from './data.js'

@Component({
  name: 'Entities',
  components: { LeftSide, RightSide }
})
export default class extends Vue {
  private leftLoading = false;
  private rightLoading = false;
  private allEntities: any = _allEntities;
  private allDisciplines: any = _allDisciplines;
  private propertyData = _riskProperties;
  private selectedEntity = '';

  private async fetchEntities() {
    this.leftLoading = true
    try {
      this.allEntities = this.$store.getters.Entities
      this.allDisciplines = this.$store.getters.FlexApplicationPreferences

      // console.log(this.disciplinesList)
      this.leftLoading = false
    } catch (error) {
      console.log('entities ----', error)
    }
    this.leftLoading = false
  }

  private async fetchProperties() {
    this.rightLoading = true
    const apiUrl =
      'http://52.152.148.181:3000/api/getEntity/com.msp.dao.entities.Risk'
    try {
      this.propertyData = await axios.get(apiUrl)
      this.rightLoading = false
    } catch (e) {
      console.log(e)
      this.rightLoading = false
    }
  }

  handleEntityClick(data: any) {
    if (data.id === 'com.msp.dao.entities.Risk') {
      this.selectedEntity = data.id
      this.fetchProperties()
    }
  }
}
</script>

<style lang="scss">
.el-container {
  margin: 12px 0 0 14px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    width: 100%;
  }
  .entity-container {
    @media (max-width: 648px) {
      min-width: 640px;
    }
  }
  .card-panel-left {
    height: calc(100vh - 4.5em);
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
    min-width: 250px;
    margin-right: 8px;
  }
  .card-panel-right {
    height: calc(100vh - 4.5em);
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
    margin-left: 8px;
  }
}
</style>
