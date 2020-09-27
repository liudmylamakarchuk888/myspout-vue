<template>
  <el-container class="container">
    <el-row
      type="flex"
      style="flex-direction: column"
    >
      <el-col style="padding: 20px">
        <el-row
          type="flex"
          justify="start"
        >
          <el-col :span="12">
            <el-input
              v-model="entityName"
              placeholder="Type display name here"
              style="min-width: 245px; font-size: 23px"
            />
          </el-col>
        </el-row>
        <el-row
          type="flex"
          justify="start"
        >
          <el-col :span="5">
            <el-input
              v-model="description"
              class="description"
              placeholder="Type description here"
              style="min-width: 245px"
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col style="height: 100%; overflow: auto">
        <el-row style="padding: 0 40px; padding-left: 60px">
          <el-col class="hebrew-title">
            Hebrew
          </el-col>
        </el-row>
        <el-row
          class="hebrew-content"
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
              <el-col :span="9">
                <el-input
                  v-model="hebrew.name"
                  placeholder="he name"
                  size="mini"
                  style="min-width: 200px"
                />
              </el-col>
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
              <el-col :span="9">
                <el-input
                  v-model="hebrew.discription"
                  type="textarea"
                  :rows="2"
                  resize="none"
                  style="min-width: 200px"
                />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-collapse
          v-model="activeCollapseName"
          style="padding: 40px; padding-top: 20px"
          @change="handleChange"
        >
          <el-collapse-item
            title="Usages"
            name="1"
          >
            <div class="collapse-content">
              <div style="font-size: 14px; padding-bottom: 5px">
                Users can create items by:
              </div>
              <el-radio-group
                v-model="usages.createMethod"
                class="radio-group"
              >
                <el-radio :label="3">
                  Create New Item dialog box
                </el-radio>
                <el-radio :label="6">
                  Adding rows to a table
                </el-radio>
                <el-radio :label="9">
                  Administration Pages
                </el-radio>
              </el-radio-group>
              <el-checkbox-group
                v-model="usages.checkList"
                text-color="red"
                class="checkbox-group"
                style="margin-top: 30px"
              >
                <el-checkbox
                  label="Users can change item status using a workflow and integrate it to external systems (cannot be unselelcted)"
                />
                <el-checkbox
                  label="Users can attach files to items (cannot be unselected)"
                />
                <el-checkbox
                  label="Users can add items to follow list(cannot be unselected)"
                />
                <el-checkbox
                  label="Users can integrate this entity with third party integrations(cannot be unselected)"
                />
                <el-checkbox
                  label="Users can change items order inside tables"
                />
                <el-checkbox
                  label="This entity will appear in recent visited items"
                />
              </el-checkbox-group>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Administration Pages Settings"
            name="2"
          >
            <div
              class="collapse-content"
              style="font-size: 14px"
            >
              <div style="font-size: 15px">
                Administrators can manage items by:
              </div>
              <el-radio-group
                v-model="admin.manageMethod"
                class="radio-group"
              >
                <el-radio
                  :label="3"
                  style="padding-bottom: 20px; padding-top: 20px"
                >
                  List
                </el-radio>
                <el-row
                  type="flex"
                  :gutter="30"
                  class="input-container"
                >
                  <el-col
                    :span="4"
                    style="min-width: 205px"
                  >
                    <el-radio
                      :label="6"
                    >
                      Tree (This entity as root)
                    </el-radio>
                  </el-col>
                  <el-col
                    :span="2"
                    style="min-width: 100px"
                  >
                    <el-button
                      plain
                      size="mini"
                      @click="showIconModal = true"
                    >
                      Icon...
                    </el-button>
                  </el-col>
                  <el-col
                    :span="2"
                    style="min-width: 100px"
                  >
                    <el-button
                      plain
                      size="mini"
                    >
                      Define...
                    </el-button>
                  </el-col>
                </el-row>
                <el-row
                  type="flex"
                  :gutter="30"
                  class="input-container"
                >
                  <el-col
                    :span="4"
                    style="min-width: 240px"
                  >
                    <el-radio
                      :label="9"
                    >
                      Tree (Another entity is the root)
                    </el-radio>
                  </el-col>
                  <el-col
                    :span="2"
                    style="min-width: 100px"
                  >
                    <el-button
                      plain
                      size="mini"
                    >
                      Icon...
                    </el-button>
                  </el-col>
                </el-row>
                <el-row
                  type="flex"
                  :gutter="30"
                  class="input-container"
                >
                  <el-col
                    :span="4"
                    style="min-width: 240px"
                  >
                    <el-radio :label="10">
                      Custom (Input URL)
                    </el-radio>
                  </el-col>
                  <el-col
                    :span="4"
                    style="min-width: 100px"
                  >
                    <el-input
                      v-model="admin.customUrl"
                      plain
                      size="mini"
                      style="min-width: 150px"
                    />
                  </el-col>
                </el-row>
                <el-radio :label="11">
                  Configuration Items
                </el-radio>
              </el-radio-group>
              <div
                class="require-content"
                style="padding-left: 25px"
              >
                The entity will be displayed in Configuration Items section and
                not in the discipline section
              </div>
              <el-row
                class="input-container"
                type="flex"
                style="padding-left: 40px"
              >
                <el-col
                  :span="2"
                  style="min-width: 150px; font-size; 15px;"
                >
                  Unique Name property
                </el-col>
                <el-col :span="9">
                  <el-select
                    v-model="admin.selectUniqueName"
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
              </el-row>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Execution Center Integration"
            name="3"
          >
            <div class="collapse-content">
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                />
                <el-col :span="9">
                  <el-checkbox
                    v-model="execution.enabled"
                    label="Enabled for Execution Center"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  MileStones Table Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.table"
                    size="mini"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  Milestones Table DueDate Date Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.tableData"
                    size="mini"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  Milestone Table Status Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.tableStatus"
                    size="mini"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  Milestones Table Description Textarea Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.tableDiscription"
                    size="mini"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  Milestones Table Owner User Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.tableOwner"
                    size="mini"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  Activity Owner User Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.activityOwner"
                    size="mini"
                  />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px; font-weight: 500"
                >
                  Goals MultiLookup Property
                </el-col>
                <el-col :span="9">
                  <el-input
                    v-model="execution.multiLookup"
                    size="mini"
                  />
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Advanced Settings"
            name="4"
          >
            <div class="collapse-content">
              <div>
                <el-checkbox
                  v-model="advanced.checkTreeLooks"
                  label="Items are arranged in a tree (like portfolios)"
                />
              </div>
              <div style="padding-left: 20px; padding-top: 20px">
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="2"
                    style="min-width: 113px; font-weight: 500"
                  >
                    Discipline
                  </el-col>
                  <el-col :span="9">
                    <el-select
                      v-model="advanced.discipline"
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
                </el-row>
                <el-row type="flex">
                  <el-col
                    :span="2"
                    style="min-width: 113px; font-weight: 500"
                  >
                    Note
                  </el-col>
                  <el-col :span="12">
                    <el-input
                      v-model="advanced.note"
                      type="textarea"
                      :rows="2"
                      placeholder="Please input"
                      resize="none"
                    />
                  </el-col>
                </el-row>
                <el-row class="input-container">
                  <el-col
                    :span="2"
                    style="min-width: 113px; font-weight: 500"
                  >
                    System name
                  </el-col>
                  <el-col
                    :span="9"
                    style="min-width: 430px"
                  >
                    <el-input
                      v-model="advanced.systemName"
                      size="mini"
                    />
                    <div class="require-content">
                      Cannot contain spaces. Capitalize first letters.
                      Example:MyEntity
                    </div>
                  </el-col>
                </el-row>
                <div style="padding-bottom: 20px; font-weight: 500">
                  Entity Class Name
                </div>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="2"
                    style="min-width: 113px; font-weight: 500"
                  >
                    SQL connection
                  </el-col>
                  <el-col :span="9">
                    <el-select
                      v-model="advanced.sqlConnection"
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
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="2"
                    style="min-width: 113px; font-weight: 500"
                  >
                    Database table Name
                  </el-col>
                  <el-col :span="9">
                    <el-input
                      v-model="advanced.tableName"
                      size="mini"
                    />
                    <div class="require-content">
                      Must begin with Cse. Cannot contain spaces. Example:
                      CseMyEntity
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Time and progress tracking"
            name="5"
          >
            <div class="collapse-content">
              <el-row>
                <el-col>
                  <el-checkbox
                    v-model="tracking"
                    label="Include this entity in My work policies (cannot be unselected)"
                  />
                  <div
                    style="padding-left: 24px"
                    class="require-content"
                  >
                    If selected, users can track time spent on items and the
                    progress of the items via My Work
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col>
        <el-row
          type="flex"
          justify="center"
          style="align-items: center; padding-bottom: 10px"
        >
          <el-button>Create</el-button>
          <div style="padding: 0 20px">
            or
          </div>
          <el-button
            type="text"
            style="text-decoration: underline"
          >
            cancel
          </el-button>
        </el-row>
      </el-col>
    </el-row>
    <select-icon-modal
      :is-show="showIconModal"
      :icon-url="admin.rootIconUrl"
    />
  </el-container>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import SelectIconModal from './selectIconModal.vue'

@Component({
  name: 'NewEntity',
  components: { SelectIconModal }
})
export default class extends Vue {
  // @Prop({ required: true }) private setLoading: any;
  private entityName = '';
  private description = '';
  private activeCollapseName = '';
  private showIconModal = false;
  private hebrew = {
    name: '',
    discription: ''
  };

  private usages = {
    createMethod: 3,
    checkList: []
  };

  private admin = {
    manageMethod: 3,
    customUrl: '',
    selectUniqueName: '',
    rootIconUrl:
      'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  };

  private execution = {
    enabled: false,
    table: '',
    tableData: '',
    tableStatus: '',
    tableDiscription: '',
    tableOwner: '',
    activityOwner: '',
    multiLookup: ''
  };

  private advanced = {
    checkTreeLooks: false,
    discipline: '',
    note: '',
    systemName: '',
    sqlConnection: '',
    tableName: ''
  };

  private tracking = false;
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

  handleChange(val: string) {
    console.log(val)
  }

  handleCheckedCitiesChange(value: string) {
    console.log(value)
  }

  openIconModal(kind: string) {
    console.log(kind)
  }

  mounted() {
    console.log('Here is NewEntity!')
  }
}
</script>

<style lang='scss' scoped>
.container {
  margin: 0;
  color: #303133;
  .description {
    width: 276px;
    input {
      border: none;
    }
  }
  .hebrew-title {
    font-weight: 500;
    font-size: 15px;
    padding-left: 5px;
    border-bottom: solid #a1a5ad 1px;
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
    color: #c3bfbf;
  }
  .preview-icon {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    border: 1px solid gray;
    padding: 2px;
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
.el-collapse {
  border: none;
  .el-collapse-item__header {
    border-bottom: 1px solid #a1a5ad;
    position: relative;
    margin-left: 20px;
    background: #f9fbfd;
    font-size: 15px;
    &.is-active {
      border-bottom: 1px solid #a1a5ad;
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
