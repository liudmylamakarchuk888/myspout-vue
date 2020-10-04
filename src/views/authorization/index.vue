<template>
  <el-container
    class="elcontainer"
    size="mini"
  >
    <el-aside class="elaside">
      <!-- <miniTree
        :tree-data="nodelist"
        :type-options="typeOptions"
        show-search="false"
        title="Authorization Tree"
      >
        <div slot="header">
          <el-form>
            <el-form-item>
              <el-button
                round
                icon="el-icon-plus"
                @click="showNew =true"
              >
                New
              </el-button>
              <el-button
                round
                @click="showRoles =true"
              >
                Roles
              </el-button>
              <el-button
                round
                @click="showProducts=true"
              >
                Products
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </miniTree> -->
    </el-aside>
    <!-- <el-dialog
      title="New Authorization tree "
      :visible.sync="showNew"
      center
    >
      <RolesView />
    </el-dialog>
    <el-dialog
      title="Roles "
      :visible.sync="showRoles"
      center
    >
      <RolesView />
    </el-dialog>
    <el-dialog
      title="Products "
      :visible.sync="showProducts"
      center
    >
      <RolesView />
    </el-dialog> -->

    <el-main class="elmain">
      <!-- <authMainView /> -->
      under construction
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import miniTree from '@/components/Tables/miniTree.vue'
import authMainView from './components/mainView.vue'
import RolesView from './components/RolesView.vue'
import { AppCacheModule } from '@/store/modules/appCache'
@Component({
  name: 'authorization',
  components: { miniTree, authMainView, RolesView }
})
export default class extends Vue {
  nodelist = [];
  typeOptions= []

showNew =false
showRoles =false
showProducts=false

mounted() {
  this.nodelist = AppCacheModule.AuthorizableEntities.children
  this.typeOptions = [
    { key: 'Release', value: 'com.msp.dao.entities.Release' },
    { key: 'Team', value: 'com.msp.dao.entities.Team' }
  ]
}
}
</script>

<style lang="scss" >
.elcontainer {
  margin: 12px 0 0 14px;
  .elaside {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    width: 100%;
  }
  .elaside {
    height: calc(100vh - 4.5em);
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
    min-width: 250px;
    margin-right: 8px;
    overflow:hidden;
  }
  .elmain {
    height: calc(100vh - 4.5em);
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
    margin-left: 8px;
  }
}
</style>
