<template>
  <el-container style="height: 100%; border: 1px solid #eee" size="mini">
    <el-aside width="275px">
      <miniTree :treeData="nodelist" :typeOptions="typeOptions"></miniTree>
    </el-aside>
    <el-main>main view</el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import miniTree from "@/components/Tables/miniTree";
@Component({
  name: "authorization",
  components: { miniTree },
})
export default class extends Vue {
  nodelist = [];
  typeOptions: [] | undefined;
  mounted() {
    this.nodelist = this.$store.getters.AuthorizableEntities.children;
    this.typeOptions = [
      { key: "Release", value: "com.msp.dao.entities.Release" },
      { key: "Team", value: "com.msp.dao.entities.Team" },
    ];
  }
}
</script>
