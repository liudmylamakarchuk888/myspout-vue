<template>
  <el-card
    class="box-card"
    :gatter="12"
  >
    <div
      slot="header"
      class="clearfix"
    >
      <span>Recent Items</span>
    </div>

    <el-row>
      <el-col
        v-for="item in RecentItems"
        :key="item.uniqueId"
        :span="8"
      >
        <el-card
          shadow="hover"
          :gutter='12'
        >
          <el-row>
            <el-col span="2">
              <el-avatar
                size="medium"
                fit="fit"
                src="logo.svg"
                @error="errorHandler"
              />
            </el-col>
            <el-col span="10">
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
import { AppCacheModule } from '@/store/modules/appCache'
@Component({
  name: 'Recent',
  components: {}
})
export default class extends Vue {
  get RecentItems() {
    return AppCacheModule.RecentItems;
  }
}
</script>
