<template>
  <div class="mid-sec forms-doc-sec mt-3">
    <div class="container">
      <!-- <div class="row">
              <el-form-item class="w-50" placeholder="Type Description Here"></el-form-item>
            </div>-->
      <div class="row">
        <el-form-item
          class="no-border"
          placeholder="type description here"
        />
      </div>
      <div class="row">
        <!-- tabs starts from here -->
        <div class="w-100 py-3">
          <el-card no-body>
            <el-tabs
              pills
              card
            >
              <el-tab
                title="Authorization Tree"
                active
              >
                <el-card-text>
                  <div class="row">
                    <div class="col">
                      <el-form-item
                        class="w-100"
                        placeholder="find in Tree"
                      />
                    </div>

                    <div class="col text-right aligh-middle">
                      <el-button
                        variant="outline-primary"
                        class="mr-xs"
                        size="sm"
                        @click="showNewForm = !showNewForm"
                      >
                        <el-icon
                          icon="file-plus"
                          aria-hidden="true"
                        />New
                      </el-button>
                      <el-button
                        variant="outline-primary"
                        class="mr-xs"
                        size="sm"
                      >
                        <el-icon
                          icon="pencil-square"
                          aria-hidden="true"
                        />Edit
                      </el-button>
                      <el-button variant="outline-danger">
                        <el-icon
                          icon="trash-fill"
                          aria-hidden="true"
                        />Delete
                      </el-button>

                      <!-- modal starts from here -->
                      <el-modal
                        v-model="showNewForm"
                        size="lg"
                        class="modal-fullscreen1"
                        title="New Authorization Node"
                      >
                        <new-authorization-node :step="step" />

                        <template v-slot:modal-footer="{}">
                          <el-button
                            v-if="step == 1"
                            size="sm"
                            variant="success"
                            @click="step = 2"
                          >
                            Next
                          </el-button>
                          <el-button
                            v-if="step == 2"
                            size="sm"
                            variant="success"
                            @click="step = 1"
                          >
                            Back
                          </el-button>
                          <el-button
                            size="sm"
                            variant="success"
                            @click="finish()"
                          >
                            Finish
                          </el-button>
                          <el-button
                            size="sm"
                            variant="danger"
                            @click="cancel()"
                          >
                            Cancel
                          </el-button>
                        </template>
                      </el-modal>
                    </div>
                  </div>

                  <div class="container mt-3">
                    <div class="row px-5 py-1 hover">
                      <el-icon icon="person" />
                      <label> Administrator (Role)</label>
                    </div>
                  </div>
                </el-card-text>
              </el-tab>
              <!-- new tab -->
              <el-tab title="Settings">
                <el-container>
                  <el-row>
                    <el-col cols="4">
                      The Authorization tree is based on the entity:
                    </el-col>
                    <el-col cols="2">
                      {{ jsonData.systemName }}
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col cols="4">
                      System Name:
                    </el-col>
                    <el-col cols="2">
                      {{ jsonData.systemName }}
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col cols="4">
                      Created By:
                    </el-col>
                    <el-col cols="2">
                      {{ jsonData.createdBy }}
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col cols="4">
                      Created:
                    </el-col>
                    <el-col cols="2">
                      {{ jsonData.dateCreated }}
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col cols="4">
                      Modified By:
                    </el-col>
                    <el-col cols="2">
                      {{ jsonData.modifiedBy }}
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col cols="4">
                      Modified:
                    </el-col>
                    <el-col cols="2">
                      {{ jsonData.dateModified }}
                    </el-col>
                  </el-row>
                </el-container>
              </el-tab>
            </el-tabs>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import miniTree from '@/components/Tables/miniTree.vue'
@Component({
  name: 'authMainView',
  components: { miniTree }
})
export default class extends Vue {
  jsonData = {};
  showNewForm = false;
  showRoleForm = false;
  newAuth = false;
  customAuth = false;
  mainAuth = true;

  step = 1;
  authData = {};
  tree = {
    label: 'A cool folder',
    children: [
      {
        label: 'A cool sub-folder 1',
        children: [
          { label: 'A cool sub-sub-folder 1' },
          { label: 'A cool sub-sub-folder 2' }
        ]
      },
      { label: 'This one is not that cool' }
    ]
  };

  mounted() {
    this.authData = this.$store.getters.AuthorizableEntities
  }
}
</script>
