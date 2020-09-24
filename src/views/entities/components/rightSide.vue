<template>
  <el-container>
    <el-row>
      <el-col>
        <p>{{ title }}</p>
      </el-col>
      <el-col>
        <el-input placeholder="Type discription here" />
      </el-col>
    </el-row>
    <el-row>
      <el-col />
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
  @Prop({ default: () => 'fdsa' }) private title!: string;
}
</script>

<style lang='scss' scoped>

</style>
