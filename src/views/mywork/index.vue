<template>
  <div class="content">
    <miniTable
      :items="Forms"
      :type-options="Types"
      :columns="Columns"
    />

    <LangInput />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import miniTable from '@/components/Tables/miniTable.vue'
import LangInput from '@/components/LangInput/LangInput.vue'
@Component({
  name: 'mywork',
  components: { miniTable, LangInput }
})
export default class extends Vue {
   Forms=[]
  Columns=[
    { label: 'displayName', field: 'displayName', width: '150px' },
    { label: 'entityName', field: 'entityName', width: '150px' },
    { label: 'itemType', field: 'itemType', width: '100px' }
  ]

   Types=[]
   mounted() {
     this.Forms = this.$store.getters.Forms
     const store = this.$store.getters
     
     this.Forms.forEach(element => {
       this.Types.push({ key: element.displayName, value: Number.parseInt(element.itemType) })
     })
   }
}
</script>
