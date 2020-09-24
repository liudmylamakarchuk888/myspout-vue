<template>
  <el-container>
    <el-row>
      <el-col>
        <p>{{ title }}</p>
      </el-col>
      <el-col>
        <el-input placeholder="Type discription here" />
      </el-col>
      <el-col>
        <el-tabs
          type="card"
          @tab-click="handleClick"
        >
          <el-tab-pane label="User">
            User
          </el-tab-pane>
          <el-tab-pane label="Config">
            Config
          </el-tab-pane>
          <el-tab-pane label="Role">
            Role
          </el-tab-pane>
          <el-tab-pane label="Task">
            Task
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-container>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'RightSide',
  components: {

  }
})
export default class ComponentName extends Vue {
  @Prop({ default: () => 'no title' }) private title!: string;

  private activeName = 'first'

  handleClick(tab:any, event:any) {
    console.log(tab.label)
    // console.log(tab, event);
  }
}
</script>

<style lang='scss' scoped>

</style>
