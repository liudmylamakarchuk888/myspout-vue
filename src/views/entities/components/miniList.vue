<template>
  <div class="list-container">
    <div v-if="Object.keys(items).length">
      <div
        v-for="(item, index) in items.properties"
        :key="index"
      >
        <el-button @click="handleClick(item)" class="list-button">
          <span class="item-content">
            <img
              v-if="iconUrl(item.dataType.value)"
              :src="require('@/assets/' + iconUrl(item.dataType.value))"
            >
            <i
              v-else
              style="padding-right: 10px"
              class="el-icon-set-up"
            />
            <span style="padding-left: 5px;">{{ item.displayName }}</span>
          </span>
        </el-button>
      </div>
    </div>
    <div
      v-else
      class="text-center"
    >
      No data
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
// import { AppDataModule } from '@/store/modules/appData.ts'
import { getPropertyDataType } from '@/models/DataType.ts'
import { EntitiesModule } from '@/store/modules/entities.ts'

@Component({
  name: 'MiniTree',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private setLoading: any;
  @Prop({ required: false }) private tabLabel: any;

  get currentEntity() {
    return EntitiesModule.getCurrentEntity
  }

  get items() {
    return EntitiesModule.properties
  }

  @Watch('currentEntity')
  private handleChange(entity: string) {
    if (entity.id === 'com.msp.dao.entities.Risk') {
      this.setLoading(this.tabLabel, true)
      EntitiesModule.setProperties('getEntity/com.msp.dao.entities.Risk')
      this.setLoading(this.tabLabel, false)
    } else {
      this.setLoading(this.tabLabel, true)
      EntitiesModule.setProperties('getEntity/com.msp.dao.entities.Risk_')
      this.setLoading(this.tabLabel, false)
    }
  }

  handleClick(item: any) {
    console.log(item)
  }

  iconUrl(key:string) {
    const dataType = getPropertyDataType(key)
    return dataType ? dataType.icon : ''
  }

  mounted() {
    console.log('here is miniList')
    // console.log(AppDataModule.FlexApplicationPreferences) // returns undefined
  }
}
</script>

<style lang='scss' scoped>
.list-container {
  .text-center {
    padding: 20px;
    text-align: center;
  }
  .item-content {
    display: flex;
    align-items: center;
    align-self: center;
  }
}
</style>
