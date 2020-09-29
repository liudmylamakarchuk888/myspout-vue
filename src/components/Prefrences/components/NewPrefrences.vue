<template>
  <el-dialog
    ref="newFormModel"
    :visible.sync="openDialog"
    center
    title="New Form"
    :before-close="onNewDialogClose"
  >
    <small>Create a new applicaton prefrence and set its value.</small>
    <el-form
      ref="prefForm"
      status-icon
      :model="form"
      :rules="rules"
      size="mini"
      inline-message
      hide-required-asterisk
      class="demo-ruleForm"
    >
      <el-row>
        <el-col>
          <el-form-item

            prop="displayName"
          >
            <el-input
              v-model="form.displayName"
              size="medium"
              autocomplete="off"
              placeholder="Type display name here."
              type="text"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item>
            <el-input
              v-model="form.descripttion"
              type="textarea"
              autosize
              size="mini"
              placeholder="Type descripttion here"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider />

      <el-row>
        <el-col :span="12">
          <span>
            Data Types </span>
          <el-divider />
          <el-form-item prop="dataType">
            <el-radio-group
              v-model="form.dataType"
              prop="dataType"
              @change="onSelectionChanged"
            >
              <el-row
                v-for="p in propertytypes"
                :key="p"
              >
                <el-col>
                  <el-radio :label="p">
                    {{ p.key }}
                  </el-radio>
                </el-col>
              </el-row>
              <br>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col>
              <span>Preview </span>
              <el-divider />
              <el-image
                v-if="form.dataType"
                max-height="50px"
                :src="getImage(form.dataType)"
              >
                <div
                  slot="placeholder"
                  class="image-slot"
                >
                  Select one from Choice to See Preview<span class="dot">...</span>
                </div>
              </el-image>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <LookupDataType :data-type="form.dataType" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          {{ form.dataType }}
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="systemName">
            <span>Advance Settings</span>
            <el-divider />
            <el-input
              v-model="form.systemName"
              type="text"
              autocomplete="off"
            />
            <small>Cannot contain spaces, Capitalize first word letters, Example MyApplicationPrefrence
            </small>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="resetForm('prefForm')">Cancel</el-button>
      <el-button
        type="primary"
        @click="submitForm('prefForm')"
      >Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import LangInput from '@/components/LangInput/LangInput.vue'
import { AppCacheModule } from '@/store/modules/appCache'
import { ApplicationPrefrence } from '@/models/ApplicationPreference'
import LookupDataType from '@/components/InputDataTypes/LookupDataType.vue'
@Component({
  name: 'NewPerfrences',
  components: { LangInput, LookupDataType }
})
export default class extends Vue {
@Prop({ required: true, default: false }) private openDialog:boolean;

private form = new ApplicationPrefrence();
propertytypes=[
  {
    key: 'Single Line of Text',
    value: '1'
  },
  {
    key: 'Date and Time',
    value: '4'
  },
  {
    key: 'Yes No',
    value: '5'
  },
  {
    key: 'Number',
    value: '6'
  },
  {
    key: 'Number with Decimal Point',
    value: '8'
  },
  {
    key: 'Lookup',
    value: '9'
  }

]

// form={
//   displayName: '',
//   description: '',
//   dataType: '',
//   systemName: ''
// }

rules= {
  displayName: [{ required: true, message: 'Please input form name', trigger: 'blur' }],
  dataType: [{ required: true, message: 'A property must be selected', trigger: 'change' }],
  systemName: [{ required: true, message: 'System name required.', trigger: 'blur' }]
}

submitForm(refForm) {
  this.$refs[refForm].validate((valid) => {
    if (valid) {
      alert('Submit success.')
      console.log('New Prefrence submit! ' + JSON.stringify(this.form))
    } else {
      console.log('error submit!!')

      return false
    }
  })
}

resetForm(refForm) {
  this.$refs[refForm].resetFields()
}

onNewDialogClose() {
  // alert('before dialog close')
  // this.$refs[refForm].validate((valid) => {
  //   if (valid) {
  //     alert('submit!')
  //   } else {
  //     console.log('error submit!!')
  //     return false
  //   }
  // })
  this.openDialog = false
}

onSelectionChanged(value) {
  this.getImage(value)
}

getImage(type) {
  return `/img/typPrv/${type.key}.png`
}

mounted() {
  // has only valid types.
}
}
</script>

<style scoped>
.el-col
{
  border:1px solid gray;
}
.el-divider--horizontal
{
  margin:0 0 10px 0;
}
.el-dialog__header {
    /* padding: 20px; */
    padding-bottom: 10px;
 background-color: beige;

}

</style>
