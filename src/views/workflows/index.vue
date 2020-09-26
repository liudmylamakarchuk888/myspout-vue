<template>
  <div class="content">
    WorkFlows
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { AppDataModule, ApiEndpoints } from '@/store/modules/appData'
@Component({
  name: 'workflows',
  components: {}
})
export default class extends Vue {
  workflows: any[]=[]
  async mounted() {
    this.workflows = []
    // var data = await AppDataModule.getApiData(ApiEndpoints.WORKFLOWS)
    //alert('got data ' + data.length)
  }
}
</script>
