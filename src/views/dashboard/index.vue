<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>Recent Items</span>
    </div>

    <el-row
      v-for="item in RecentItems"
      :key="item.uniqueId"
    >
      <el-col :span="8">
        <el-card shadow="hover">
          <el-row>
            <el-col span="4">
              <el-avatar
                size="medium"
                fit="fit"
                src="logo.svg"
                @error="errorHandler"
              />
            </el-col>
            <el-col span="12">
              <div>
                <span>{{ item.displayName }}</span>
                <hr>
                <small>{{ item.entityName }}</small>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { AppDataModule } from '@/store/modules/appData'
@Component({
  name: 'Recent',
  components: {}
})
export default class extends Vue {
  get RecentItems() {
    return this.$store.getters.RecentItems
  }
}
</script>
