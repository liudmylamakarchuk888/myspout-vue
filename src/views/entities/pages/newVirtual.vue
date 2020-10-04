<template>
  <el-form
    ref="form"
    :rules="rules"
    class="container"
    :model="form"
  >
    <el-row
      type="flex"
      style="flex-direction: column"
    >
      <el-col style="padding: 20px">
        <el-row
          type="flex"
          justify="start"
          style="margin-bottom: 5px"
        >
          <el-form-item
            size="normal"
            prop="name"
            reset-field
          >
            <el-col :span="12">
              <el-input
                v-model="form.name"
                placeholder="Type display name here"
                style="min-width: 245px; font-size: 23px"
              />
            </el-col>
          </el-form-item>
        </el-row>
        <el-row
          type="flex"
          justify="start"
          style="margin-top: 19px;"
        >
          <el-form-item prop="description">
            <el-col :span="5">
              <el-input
                v-model="form.description"
                class="description"
                placeholder="Type description here"
                style="min-width: 245px"
              />
            </el-col>
          </el-form-item>
        </el-row>
      </el-col>
      <el-col style="height: 100%; overflow: auto">
        <div style="margin-bottom: 15px;">
          <el-row style="padding: 0 40px; padding-left: 60px">
            <el-col class="lang-title">
              Enter SQL query
            </el-col>
          </el-row>
          <el-row
            class="lang-content"
            style="font-weight: 500; padding-left: 80px"
          >
            <el-col>
              <el-row
                class="input-container"
              >
                <el-col
                  :span="2"
                  style="min-width: 113px; font-size: 15px"
                >
                  SQL Query
                </el-col>
                <el-form-item prop="hebrewDesc">
                  <el-col :span="9">
                    <el-input
                      v-model="form.sql.query"
                      type="textarea"
                      :rows="3"
                      resize="none"
                      style="min-width: 200px"
                    />
                    <div class="require-content">Rows represent objects, and columns represent properties</div>
                    <el-button type="text" style="text-decoration: underline; padding: 0;">More info</el-button>
                  </el-col>
                </el-form-item>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="2"
                  style="min-width: 113px; font-size: 15px"
                >
                  SQL connection
                </el-col>
                <el-form-item prop="hebrewDesc">
                  <el-col :span="9">
                   <el-select
                      v-model="form.sql.connection"
                      placeholder="Select"
                      size="mini"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-col>
                </el-form-item>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="2"
                  style="min-width: 113px; font-size: 15px"
                ></el-col>
                <el-col :span="9">
                  <el-button size="mini" @click="showPropertiesList=!showPropertiesList">Prepare properties list</el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <el-collapse-transition>
          <div style="margin-bottom: 15px;" v-if="showPropertiesList">
            <el-row style="padding: 0 40px; padding-left: 60px">
              <el-col class="lang-title">
                Set Properties data types
              </el-col>
            </el-row>
            <el-row
              class="lang-content"
              style="font-weight: 500; padding-left: 80px"
            >
              <el-col>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    create_date
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.create_date"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    is_ms_shipped
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.is_ms_shipped"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    is_published
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.is_published"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    is_schema_published
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.is_schema_published"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    modify_date
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.modify_date"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    name
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.name"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    object_id
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.object_id"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    parent_object_id
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.parent_object_id"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    principal_id
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.principal_id"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    schema_id
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.schema_id"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    type
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.type"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    type_desc
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.type_desc"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                  style="margin-top: 60px;"
                >
                  <el-col
                    :span="4"
                    style="min-width: 180px; font-size: 15px"
                  >
                    Select identifier property
                  </el-col>
                  <el-form-item prop="hebrewDesc">
                    <el-col :span="9">
                    <el-select
                        v-model="form.sql.properties.selectedProperty"
                        placeholder="Choose Property"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-collapse-transition>
        <div v-for="lang in languages" :key="lang.key" style="margin-bottom: 15px;">
          <el-row style="padding: 0 40px; padding-left: 60px">
            <el-col class="lang-title">
              {{lang.key}}
            </el-col>
          </el-row>
          <el-row
            class="lang-content"
            style="font-weight: 500; padding-left: 80px"
          >
            <el-col>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="2"
                  style="min-width: 113px; font-size; 15px;"
                >
                  Display name
                </el-col>
                <el-form-item
                  :prop="lang.key + 'Name'"
                  reset-field
                >
                  <el-col :span="9">
                    <el-input
                      v-model="form.lang[lang.key].name"
                      placeholder="he name"
                      size="mini"
                      style="min-width: 200px"
                    />
                  </el-col>
                </el-form-item>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="2"
                  style="min-width: 113px; font-size: 15px"
                >
                  Description
                </el-col>
                <el-form-item prop="hebrewDesc">
                  <el-col :span="9">
                    <el-input
                      v-model="form.lang.hebrew.description"
                      type="textarea"
                      :rows="2"
                      resize="none"
                      style="min-width: 200px"
                    />
                  </el-col>
                </el-form-item>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <el-collapse
          v-model="activeCollapseName"
          style="padding: 40px; padding-top: 10px"
          @change="handleChange"
        >
          <el-collapse-item
            title="Advanced Settings"
            name="4"
          >
            <div class="collapse-content">
              <div style="padding-left: 20px; padding-top: 20px">
                <el-row class="input-container">
                  <el-col
                    :span="3"
                    style="min-width: 113px; font-weight: 500"
                  >
                    Discipline
                  </el-col>
                  <el-form-item prop="advancedDiscipline">
                    <el-col :span="9">
                      <el-select
                        v-model="form.advanced.discipline"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-col
                    :span="3"
                    style="min-width: 113px; font-weight: 500"
                  >
                    Note
                  </el-col>
                  <el-form-item prop="advancedNote">
                    <el-col :span="12">
                      <el-input
                        v-model="form.advanced.note"
                        type="textarea"
                        :rows="2"
                        placeholder="Please input"
                        resize="none"
                      />
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row class="input-container">
                  <el-col
                    :span="3"
                    style="min-width: 113px; font-weight: 500"
                  >
                    System name
                  </el-col>
                  <el-form-item prop="advancedSystemName">
                    <el-col
                      :span="9"
                      style="min-width: 200px"
                    >
                      <el-input
                        :value="`Cse_` + form.name"
                        size="mini"
                      />
                      <div class="require-content">
                        Cannot contain spaces. Capitalize first letters.
                        Example:MyEntity
                      </div>
                    </el-col>
                  </el-form-item>
                </el-row>
                <div style="padding-bottom: 20px; font-weight: 500">
                  Entity Class Name
                </div>
                <el-row class="input-container">
                  <el-col
                    :span="3"
                    style="min-width: 113px; font-weight: 500"
                  >
                    SQL connection
                  </el-col>
                  <el-form-item prop="advancedSystemName">
                    <el-col :span="9">
                      <el-select
                        v-model="form.advanced.sqlConnection"
                        placeholder="Select"
                        size="mini"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-col>
                  </el-form-item>
                </el-row>
                <el-row class="input-container">
                  <el-col
                    :span="3"
                    style="min-width: 113px; font-weight: 500"
                  >
                    Database table Name
                  </el-col>
                  <el-form-item prop="advancedSystemName">
                    <el-col :span="9">
                      <el-input
                        v-model="form.advanced.tableName"
                        size="mini"
                      />
                      <div class="require-content">
                        Must begin with Cse. Cannot contain spaces. Example:
                        CseMyEntity
                      </div>
                    </el-col>
                  </el-form-item>
                </el-row>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col>
        <el-form-item>
          <el-row
            type="flex"
            justify="center"
            style="align-items: center; padding-bottom: 10px"
          >
            <el-button @click.prevent="submitForm('form')">
              Create
            </el-button>
            <div style="padding: 0 20px">
              or
            </div>
            <el-button
              type="text"
              style="text-decoration: underline"
              @click="resetForm('form')"
            >
              cancel
            </el-button>
          </el-row>
        </el-form-item>
      </el-col>
    </el-row>
    <select-icon-modal
      v-if="modal.kind === 'rootIcon' || modal.kind === 'tree'"
      v-model="modal.show"
      :icon-url="modal.data"
      :modal-ok-handler="modalOkHandler"
    />
    <relationship-modal
      v-if="modal.kind === 'relationship'"
      v-model="modal.show"
      :data="modal.data"
      :modal-ok-handler="modalOkHandler"
    />
  </el-form>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import SelectIconModal from '../components/selectIconModal.vue'
import relationshipModal from '../components/relationshipModal.vue'
import { AppCacheModule } from '@/store/modules/appCache.ts'

@Component({
  name: 'NewVirtual',
  components: { SelectIconModal, relationshipModal }
})
export default class extends Vue {
  // @Prop({ required: true }) private setLoading: any;
  private activeCollapseName = '';
  private showPropertiesList = false;
  private form = {
    name: '',
    description: '',
    sql: {
      query: '',
      connection: '',
      properties: {
        create_date: '',
        is_ms_shipped: '',
        is_published: '',
        is_schema_published: '',
        modify_date: '',
        name: '',
        object_id: '',
        parent_object_id: '',
        principal_id: '',
        schema_id: '',
        type: '',
        type_desc: '',
        selectedProperty: '',
      }
    },
    lang: {
      hebrew: {
        name: '',
        description: ''
      },
    },
    usages: {
      createMethod: 'dialog',
      checkList: []
    },
    admin: {
      manageMethod: 'list',
      uniqueName: '',
      customUrl: '',
      rootIconUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      treeIconUrl:
        './MSP/resources/images/flex/authorization-tree-document-16x16.png',
      relationship: [
        { entity: 'js admin prop', property: 'Option 1' },
        { entity: 'js admin prop--1', property: 'Option 2' }
      ]
    },
    execution: {
      enabled: false,
      table: '',
      tableData: '',
      tableStatus: '',
      tableDescription: '',
      tableOwner: '',
      activityOwner: '',
      multiLookup: ''
    },
    advanced: {
      treeLooks: false,
      discipline: '',
      note: '',
      systemName: '',
      sqlConnection: '',
      tableName: ''
    },
    tracking: false
  };

  private modal = {
    show: false,
    data: null,
    kind: ''
  };

  private rules = {
    name: [
      {
        required: true,
        message: 'Please input Entity name',
        trigger: 'blur'
      }
    ],
    HebrewName: [
      {
        required: true,
        message: 'Please input hebrew name',
        trigger: 'blur'
      }
    ]
  };

  private options = [
    {
      value: 'Option1',
      label: 'Option1'
    },
    {
      value: 'Option2',
      label: 'Option2'
    },
    {
      value: 'Option3',
      label: 'Option3'
    },
    {
      value: 'Option4',
      label: 'Option4'
    },
    {
      value: 'Option5',
      label: 'Option5'
    }
  ];

  get languages() {
    if (AppCacheModule.FlexSettings.languages)
    {
      return AppCacheModule.FlexSettings.languages.filter(l => {
        return l.key !== "English"
      })
    }
    else return []
  }
  
  @Watch("languages")
  private setLangs(langAry:any) {
    const currentLangs = Object.keys(this.form.lang)
    const newLangs = langAry.filter((lang:any) => {
      return currentLangs.indexOf(lang.key) < 0
    })
    if (newLangs.length) {
      newLangs.map((l:any) => {
        this.form.lang = {...this.form.lang, [l.key]: {
          name: '',
          description: ''
        }}
        this.rules = {...this.rules, [`${l.key}Name`]:[{
            required: true,
            message: `Please input ${l.key} name`,
            trigger: 'blur'
          }
        ]}
      })
    }
  }

  handleChange(val: string) {
    console.log(val)
  }

  handleCheckedCitiesChange(value: string) {
    console.log(value)
  }

  popupModal(kind: string) {
    this.modal.show = true
    this.modal.kind = kind
    if (kind === 'rootIcon') {
      this.modal.data = this.form.admin.rootIconUrl
    } else if (kind === 'relationship') {
      this.modal.data = this.form.admin.relationship
    } else if (kind === 'tree') {
      this.modal.data = this.form.admin.treeIconUrl
    }
  }

  modalOkHandler(val: any) {
    if (this.modal.kind === 'rootIcon') {
      this.form.admin.rootIconUrl = val
    } else if (this.modal.kind === 'relationship') {
      this.form.admin.relationship = [...val]
    } else if (this.modal.kind === 'tree') {
      this.form.admin.treeIconUrl = val
    }
  }

  submitForm(formName: string) {
    this.$refs[formName].validate((valid: boolean) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }

  resetForm(formName: string) {
    this.$refs[formName].resetFields()
  }

  created() {
    this.setLangs(this.languages)
    console.log('created')
  }
}
</script>

<style lang='scss' scoped>
.container {
  margin: 0;
  color: #303133;
  display: flex;
  height: 100%;
  .description {
    width: 276px;
    input {
      border: none;
    }
  }
  .lang-title {
    font-weight: 500;
    font-size: 15px;
    padding-left: 5px;
    border-bottom: solid $borderGray 1px;
  }
  .input-container {
    align-items: center;
    & > input {
      max-width: 197px;
    }
  }
  .collapse-content {
    padding: 20px 0 0 40px;
  }
  .radio-group,
  .checkbox-group {
    display: flex;
    flex-direction: column;
    & > label {
      padding: 5px 0;
    }
  }
  .radio-group {
    .el-radio__label {
      font-weight: 500;
    }
  }
  .require-content {
    color: $placeholderText;
  }
}
</style>

<style lang='scss'>
.el-radio__label,
.el-checkbox__label {
  font-weight: 400;
}
.el-radio__input.is-checked + .el-radio__label,
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: inherit;
}
.el-radio__input.is-checked .el-radio__inner,
.el-checkbox__input.is-checked .el-checkbox__inner {
  border-color: inherit;
  background: #8a8a8a;
}
.el-radio__inner:hover,
.el-checkbox__inner:hover,
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: inherit;
}
.el-form-item {
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.el-collapse {
  border: none;
  .el-collapse-item__header {
    border-bottom: 1px solid $borderGray;
    position: relative;
    margin-left: 20px;
    background: #f9fbfd;
    font-size: 15px;
    &.is-active {
      border-bottom: 1px solid $borderGray;
    }
  }
  .el-collapse-item__content {
    background: #f9fbfd;
  }
  .el-collapse-item__wrap {
    border: none;
  }
  .el-icon-arrow-right:before {
    content: "▲";
  }
  .el-collapse-item__arrow {
    position: absolute;
    left: -20px;
    top: 50%;
    color: #8a8a8a;
    transform: rotate(90deg);
    &.is-active {
      transform: rotate(180deg);
    }
  }
  .select-icon-content {
    text-align: center;
  }
  .select-icon-images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
    justify-items: center;
  }
}
</style>
