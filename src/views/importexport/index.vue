<template>
  <div>
    <div class="mid-sec forms-doc-sec mt-3">
      <label for="log">Log:</label>
      <input type="text" id="log" class="log_body" />
    </div>
    <div class="mid-sec forms-doc-sec mt-3">
      <label for="export">Export Location</label>
      <input type="text" id="export" class="export_body" />
      <div>
        <input  id="exportCheck"
          type="checkbox"
         
          value="exportCheck"
          v-model="checkedNames"
          style="margin-left:12%"
        />
        <label for="exportCheck">Export enviroment application preference(recommended)</label>
      </div>
    </div>
    <div class="mid-sec forms-doc-sec mt-3">
      <label for="import">Import Location</label>
      <input type="text" id="import" class="export_body" />
      <div>
        <input
          type="checkbox"
          id="importCheck"
          value="importcheck"
          v-model="checkedNames"
          style="margin-left:12%"
        />
        <label for="importCheck">Import enviroment application preference</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="importCheck"
          value="importcheck"
          v-model="checkedNames"
          style="margin-left:12%"
        />
        <label for="importCheck">Backup solution configuration before importing (recommended)</label>
      </div>
      <div>
        <label
          for="exportlocation"
          style="margin-left:12%;"
        >It will be created under Export Location.</label>
      </div>
    </div>
    <hr style="width:50%;text-align:left;margin-left:0" />
    <div class="mid-sec forms-doc-sec mt-3" style>
      <div class="column">Step 1- Import DB Schema</div>
      <div class="column">Step 2 Import soluiton Configur..</div>
      <div class="column">Step 3 Reload settings</div>
      <div class="column">Export</div>
    </div>
    <br />
    <div class="mid-sec forms-doc-sec mt-3">
      <div class>Step 1 imports entities and SQL objects(views, stored procedures and fucntions).</div>
      <div class>Step 2 imports solution objects such as workflows, forms and dashboard tabs.</div>
      <div
        class
      >Step 3 applis the new solution to the web site and refereshes the Solution Designer.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'import-export',
  components: {}
})
export default class extends Vue {}
</script>