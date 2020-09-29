<template>
  <el-container>
    <el-main>
    <miniTable
      :items="Forms"
      :type-options="Types"
      :columns="Columns"
    />

    <LangInput />
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import miniTable from '@/components/Tables/miniTable.vue'
import LangInput from '@/components/LangInput/LangInput.vue'
import { AppCacheModule } from '@/store/modules/appCache'
@Component({
  name: 'mywork',
  components: { miniTable, LangInput }
})
export default class extends Vue {
   Forms=[]
  Columns=[
    { label: 'Display Name', field: 'displayName', width: '150px' },
    { label: 'Entity Name', field: 'entityName', width: '150px' },
    { label: 'Item Type', field: 'itemType', width: '100px' }
  ]

   Types=[]
   mounted() {
     this.Forms = AppCacheModule.Forms

     this.Forms.forEach(element => {
       this.Types.push({ key: element.displayName, value: Number.parseInt(element.itemType) })
     })
   }
}
</script>
