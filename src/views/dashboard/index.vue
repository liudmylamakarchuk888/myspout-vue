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
    <div>
      <el-card
        v-for="item in RecentItems"
        :key="item.uniqueId"
        shadow="hover"
        :span="8"
      >
        <el-row>
          <el-col :span="2">
            <el-avatar
              shape="square"
              :src="getImage(item.itemType)"
              @error="errorHandler"
            >
              <img
                height="32px"
                src="/img/objTyp/1.png"
                alt="entity"
              >
            </el-avatar>
          </el-col>
          <el-col :span="9">
            <span>{{ item.displayName }}</span>
            <hr>
            <small>{{ item.entityName }}</small>
          </el-col>
        </el-row>
      </el-card>
    </div>
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
    return AppCacheModule.RecentItems
  }

  errorHandler() {
    return true
  }

  getImage(itemType) {
    return `/img/objTyp/${itemType}.png`
  }
}
</script>
