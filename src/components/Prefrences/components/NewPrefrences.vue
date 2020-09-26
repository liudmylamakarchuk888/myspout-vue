<template>
  <el-dialog
    ref="newFormModel"
    :visible.sync="openDialog"
    width="30%"
    center
    title="New Form"
    :before-close="onNewDialogClose"
  >
    Application Perfrences
    <el-form>
      <el-form-item label="Name">
        <el-input
          v-model="form.name"
          type="text"
        />
      </el-form-item>
      <el-radio-group v-model="form.selectedPropertyType">
        <el-radio
          v-for="p in propertytypes"
          :key="p"
          :label="p"
        >
          p.key
        </el-radio>
      </el-radio-group>
    </el-form>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="openDialog = false">Cancel</el-button>
      <el-button
        type="primary"
        @click="openDialog = false"
      >Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import LangInput from '@/components/LangInput/LangInput.vue'
import { AppCacheModule } from '@/store/modules/appCache'
@Component({
  name: 'NewPerfrences',
  components: { LangInput }
})
export default class extends Vue {
@Prop({ required: true, default: false }) private openDialog:boolean;

propertytypes=[]
form={
  name: '',
  selectedPropertyType: ''

}

onNewDialogClose() {
  // alert('before dialog close')
  console.log('closing.')
}

mounted() {
  this.propertytypes = AppCacheModule.FlexSettings.propertyDataTypes
}
}
</script>
