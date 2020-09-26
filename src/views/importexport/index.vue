<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>Import Export</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
      >
        Operation button
      </el-button>
    </div>
    <el-form
      ref="form"
      :model="form"
      label-width="120px"
    >
      <el-form-item label="Log">
        <el-input
          v-model="form.log"
          type="textarea"
        />
      </el-form-item>

      <el-form-item label="Export Location">
        <el-input
          id="export"
          v-model="form.exportLocation"
          type="text"
        />
        <el-checkbox :checked="form.exportenvperf">
          Export enviroment application preference(recommended)
        </el-checkbox>
      </el-form-item>

      <el-form-item label="Import Location">
        <el-input
          id="export"
          v-model="form.importLocation"
          type="text"
        />
        <el-checkbox :checked="form.importEnvAppPref">
          Import enviroment application preference
        </el-checkbox>
        <el-checkbox :checked="form.importBkpSol">
          Backup solution configuration before importing (recommended)
        </el-checkbox>
        <pre>It will be created under Export Location.</pre>
      </el-form-item>
      <el-divider />
      <el-form-item>
        <el-button type="primary">
          Step 1- Import DB Schema
        </el-button>

        <el-button type="primary">
          Step 2 Import soluiton Configur..
        </el-button>

        <el-button type="primary">
          Step 3 Reload settings
        </el-button>
        <el-button type="primary">
          Export
        </el-button>
      </el-form-item>
      <el-divider />
      <div class="mid-sec forms-doc-sec mt-3">
        <div>
          Step 1 imports entities and SQL objects(views, stored procedures and fucntions).
        </div>
        <div>
          Step 2 imports solution objects such as workflows, forms and dashboard tabs.
        </div>
        <div>
          Step 3 applis the new solution to the web site and refereshes the Solution Designer.
        </div>
      </div>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'import-export',
  components: {}
})
export default class extends Vue {
  form={
    log: '',
    exportLocation: '',
    exportenvperf: true,
    importLocation: '',
    importEnvAppPref: true,

    importBkpSol: false
  }
}
</script>
