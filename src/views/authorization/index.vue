<template>
  <el-container
    class="elcontainer"
    size="mini"
  >
    <el-aside class="elaside">
      <miniTree
        :tree-data="nodelist"
        :type-options="typeOptions"
      />
    </el-aside>
    <el-main class="elmain">
      main view
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import miniTree from '@/components/Tables/miniTree'
@Component({
  name: 'authorization',
  components: { miniTree }
})
export default class extends Vue {
  nodelist = [];
  typeOptions: [] | undefined;
  mounted() {
    this.nodelist = this.$store.getters.AuthorizableEntities.children
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
