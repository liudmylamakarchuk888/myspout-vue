<template>
  <!-- <el-dialog
    ref="newFormModel"
    :visible.sync="openDialog"
    center
    title="New Form"
    :before-close="onNewDialogClose"
  > -->
  <div>
    <small>Create a new applicaton prefrence and set its value.</small>
    <el-form
      v-if="form"
      ref="prefForm"
      label-position="left"
      status-icon
      :model="form"
      :rules="rules"
      inline-message
      hide-required-asterisk
      class="demo-ruleForm"
    >
      <el-row>
        <el-col>
          <el-form-item prop="displayName">
            <el-input
              v-model="form.displayName"
              autocomplete="off"
              placeholder="Type display name here."
              style="min-width: 245px; font-size: 16px"
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
              style="min-width: 245px; font-size: 10px"
              placeholder="Type descripttion here"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider />

      <el-row>
        <el-col :span="12">
          <span> Data Types </span>
          <el-divider />
          <el-form-item prop="dataType">
            <el-radio-group
              v-model="form.dataType"
              prop="dataType"
              @change="onSelectionChanged"
            >
              <el-row
                v-for="p in propertytypes"
                :key="p.value"
              >
                <el-col>
                  <el-radio :label="p.value">
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
                  Select one from Choice to See Preview<span
                    class="dot"
                  >...</span>
                </div>
              </el-image>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <LookupDataType
            v-if="form.dataType == 9"
            :entityid.sync="form.lookupEntityId"
            :lookupvalue.sync="form.lookupValueName"
          />
          <SingleLineDataType v-else />
          {{ form }}
          {{ lookupData }}
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <span>Advance Settings</span>
          <el-divider />
          <el-form-item
            prop="systemName"
            label="System Name"
          >
            <el-input
              v-model="form.systemName"
              type="text"
              autocomplete="off"
            />
            <small>Cannot contain spaces, Capitalize first word letters, Example
              MyApplicationPrefrence
            </small>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="primary"
        @click="submitForm('prefForm')"
      >Add</el-button>
      <el-button @click="onNewDialogClose">Cancel</el-button>
    </span>
    <!-- </el-dialog> -->
  </div>
</template>

<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import LangInput from '@/components/LangInput/LangInput.vue'
import { AppCacheModule } from '@/store/modules/appCache'
import { ApplicationPrefrence } from '@/models/ApplicationPreference'
import LookupDataType from '@/components/InputDataTypes/LookupDataType.vue'
import SingleLineDataType from '@/components/InputDataTypes/SingleLineDataType.vue'
@Component({
  name: 'NewPerfrences',
  components: { LookupDataType, SingleLineDataType }
})
export default class extends Vue {
  // @Prop({ required: true, default: false })
  // private openDialog!: boolean

  private form =new ApplicationPrefrence();
  propertytypes = [
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
  ];

  // form={
  //   displayName: '',
  //   description: '',
  //   dataType: '',
  //   systemName: ''
  // }

  rules = {
    displayName: [
      { required: true, message: 'Please input form name', trigger: 'blur' }
    ],
    dataType: [
      {
        required: true,
        message: 'A property must be selected',
        trigger: 'change'
      }
    ],
    systemName: [
      { required: true, message: 'System name required.', trigger: 'blur' }
    ]
  };

  submitForm(refForm) {
    this.$refs[refForm].validate((valid) => {
      if (valid) {
        alert('Submit success.')
        debugger
        console.log('saving prefrences ' + JSON.stringify(this.form))
        AppCacheModule.Prefrences.push(this.form)
        this.$refs[refForm].close()
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
    console.log('on close called.')
    resetForm('prefForm')
  }

  onSelectionChanged(value) {
    debugger
    this.getImage(value)
  }

  getImage(type) {
    const property = this.propertytypes.find((x) => x.value === type)
    return `/img/typPrv/${property.key}.png`
  }

  mounted() {
    // has only valid types.
  }
}
</script>

<style >
.el-row {
  margin-bottom: 0px;
  width: 100%;
}
.el-col {
  /* border:1px solid gray;*/
}
.el-form-item--min.el-form-item .el-form-item--mini .el-form-item {
  margin-bottom: 8px;
}
.el-form-item__content {
  line-height: 30px;
  width: 100%;
}
.el-form--inline .el-form-item {
  display: contents;
  margin-right: 10px;
  vertical-align: top;
}
.el-divider--horizontal {
  margin: 0 0 10px 0;
}
.el-dialog__header {
  padding: 0px;
  padding-bottom: 0px;
  background-color: beige;
}
.el-dialog__headerbtn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
}
</style>
