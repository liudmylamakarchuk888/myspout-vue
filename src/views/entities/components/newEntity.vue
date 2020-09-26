<template>
  <el-container class="container">
    <el-row
      type="flex"
      style="flex-direction: column"
    >
      <el-col>
        <el-row
          type="flex"
          justify="start"
        >
          <el-col :span="12">
            <el-input
              v-model="displayName"
              class="display-name"
              placeholder="Type display name here"
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
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col style="padding: 20px 20px 0 40px; overflow: auto">
        <el-row>
          <el-col class="hebrew-title">
            Hebrew
          </el-col>
        </el-row>
        <el-row
          class="hebrew-content"
          style="font-weight: 500; padding-left: 20px;"
        >
          <el-col>
            <el-row
              class="input-container"
              type="flex"
            >
              <el-col
                :span="2"
                style="min-width: 113px"
              >
                Display name
              </el-col>
              <el-col
                :span="9"
              >
                <el-input placeholder="he name" />
              </el-col>
            </el-row>
            <el-row
              class="input-container"
              type="flex"
            >
              <el-col
                :span="2"
                style="min-width: 113px"
              >
                Description
              </el-col>
              <el-col :span="9">
                <el-input
                  v-model="note"
                  type="textarea"
                  :rows="2"
                  resize="none"
                />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-collapse
          v-model="activeNames"
          @change="handleChange"
        >
          <el-collapse-item
            title="Usages"
            name="1"
          >
            <div class="collapse-content">
              <div style="padding-bottom: 5px; font-size: 16px;">
                Users can create items by:
              </div>
              <el-radio-group
                v-model="radio"
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
                v-model="checkList"
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
            <div>
              Operation feedback: enable the users to clearly perceive their
              operations by style updates and interactive effects;
            </div>
            <div>
              Visual feedback: reflect current state by updating or rearranging
              elements of the page.
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Execution Center Integration"
            name="3"
          >
            <div class="execution-container">
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
                  style="min-width: 113px"
                >
                  MileStones Table Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                >
                  Milestones Table DueDate Date Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                >
                  Milestone Table Status Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                >
                  Milestones Table Description Textarea Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                >
                  Milestones Table Owner User Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                >
                  Activity Owner User Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
              <el-row
                class="input-container"
                type="flex"
              >
                <el-col
                  :span="5"
                  style="min-width: 113px"
                >
                  Goals MultiLookup Property
                </el-col>
                <el-col
                  :span="9"
                >
                  <el-input placeholder="he name" />
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Advanced Settings"
            name="4"
          >
            <div class="advanced-settings-container">
              <div>
                <el-checkbox
                  label="Items are arranged in a tree (like portfolios)"
                />
              </div>
              <div>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="2"
                    style="min-width: 113px"
                  >
                    Discipline
                  </el-col>
                  <el-col :span="9">
                    <el-select
                      v-model="selectedDiscipline"
                      placeholder="Select"
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
                    style="min-width: 113px"
                  >
                    Note
                  </el-col>
                  <el-col :span="12">
                    <el-input
                      v-model="note"
                      type="textarea"
                      :rows="2"
                      placeholder="Please input"
                      resize="none"
                    />
                  </el-col>
                </el-row>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="2"
                    style="min-width: 113px"
                  >
                    System name
                  </el-col>
                  <el-col :span="9">
                    <el-input />
                    <div>
                      Cannot contain spaces. Capitalize first letters.
                      Example:MyEntity
                    </div>
                  </el-col>
                </el-row>
                <div>Entity Class Name</div>
                <el-row
                  class="input-container"
                  type="flex"
                >
                  <el-col
                    :span="2"
                    style="min-width: 113px"
                  >
                    SQL connection
                  </el-col>
                  <el-col :span="9">
                    <el-select
                      v-model="selectedDiscipline"
                      placeholder="Select"
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
                    style="min-width: 113px"
                  >
                    Database table Name
                  </el-col>
                  <el-col :span="9">
                    <el-input />
                    <div>
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
            <div class="timetrack-container">
              <div>
                <el-checkbox
                  label="Include this entity in My work policies (cannot be unselected)"
                />
                <div>
                  If selected, users can track time spent on items and the
                  progress of the items via My Work
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </el-container>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'NewEntity',
  components: {}
})
export default class extends Vue {
  // @Prop({ required: true }) private setLoading: any;

  private displayName = '';
  private activeNames: any = ['1'];
  private radio = 3;
  private checkList: string[] = [];
  private selectedDiscipline = '';
  private note = '';
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

  mounted() {
    console.log('here is NewEntity!')
    // console.log(AppDataModule.FlexApplicationPreferences) // returns undefined
  }
}
</script>

<style lang='scss' scoped>
.container {
  margin: 0;
  padding: 20px 20px;
  color: #303133;
  .display-name {
  }
  .description {
    width: 276px;
    input {
      border: none;
    }
    border-bottom: solid #dfe4ed 1px;
  }
  .hebrew-title {
    font-weight: 500;
    border-bottom: solid #dfe4ed 1px;
  }
  .input-container {
    align-items: center;
    & > input {
      max-width: 197px;
    }
  }
  .collapse-content {
    padding-left: 30px;
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

}
</style>

<style lang='scss'>
</style>
