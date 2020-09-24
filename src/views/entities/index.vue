<template>
  <el-container>
    <el-row
      type="flex"
      :gutter="15"
      class="row-bg"
      justify="center"
    >
      <el-col
        :span="6"
        class="treeview-container"
      >
        <left-side
          :entities="allEntities.children"
          :disciplines="allDisciplines.disciplines"
        />
      </el-col>
      <el-col :span="18">
        <right-side :title="Risk" />
        <!-- <left-side
          :entities="allEntities.children"
          :disciplines="allDisciplines.disciplines"
        ></left-side> -->
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import LeftSide from './components/leftSide.vue'
import RgithSide from './components/rightSide.vue'
import axios from 'axios'
import { _allEntities, _allDisciplines } from './data.js'

@Component({
  name: 'Entities',
  components: { LeftSide, RgithSide }
})
export default class extends Vue {
  private loading = false;
  private allEntities: any = _allEntities;
  private allDisciplines: any = _allDisciplines;

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
    // this.fetchEntities();
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
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
    min-width: 250px;
  }
}
</style>
