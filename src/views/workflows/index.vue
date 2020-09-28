<template>
  <el-container class="elcontainer">
    <el-main class="elmain">
      <Perfrences></Perfrences>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { AppDataModule, ApiEndpoints } from '@/store/modules/appData'
import Perfrences from '@/components/Prefrences/Prefrences.vue'
@Component({
  name: 'workflows',
  components: { Perfrences }
})
export default class extends Vue {
  workflows: any[]=[]
  async mounted() {
    this.workflows = []
  }
}
</script>
