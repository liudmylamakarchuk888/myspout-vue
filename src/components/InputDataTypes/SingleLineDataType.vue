<template>
  <div>
    <el-row v-if="dataType=1">
      <el-col>
        <el-input
          type="text"
          placeholder="input your text here."
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'SingleLineDataType'
})
export default class extends Vue {
}
</script>
