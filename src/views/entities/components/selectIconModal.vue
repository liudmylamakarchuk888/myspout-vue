<template>
  <el-dialog
    title="Select Icon"
    :visible.sync="outerVisible"
    width="25%"
  >
    <el-row
      type="flex"
      style="align-items: center"
    >
      <span>Icon:</span>
      <el-image
        class="preview-icon"
        :src="iconUrl"
        fit="fill"
      />
      <el-button @click="innerVisible = true">
        select
      </el-button>
    </el-row>
    <el-dialog
      width="20%"
      style="margin: 10px 0 0 20px"
      title="Select Icon"
      :visible.sync="innerVisible"
      append-to-body
    >
      <div style="text-align: center; font-weight: bold">
        <div style="margin-bottom: 10px">
          Select an Icon for the button:
        </div>
        <div
          style="
            padding: 20px;
            border: 1px solid gray;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            column-gap: 10px;
            row-gap: 15px;
            justify-items: center;
            align-items: center;
          "
        >
          <el-button
            v-for="(icon, index) in iconsAry"
            :key="index"
          >
            <el-image
              :src="icon"
              style="width: 20px; height: 20px"
            />
          </el-button>
        </div>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="innerVisible = false">
          Ok
        </el-button>
        <el-button
          style="text-decoration: underline"
          type="text"
          @click="innerVisible = false"
        >
          cancel
        </el-button>
      </div>
    </el-dialog>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="outerVisible = false">
        Ok
      </el-button>
      <el-button
        style="text-decoration: underline"
        type="text"
        @click="outerVisible = false"
      >
        cancel
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MessageBox } from 'element-ui'

@Component({
  name: 'selectIconModal',
  components: { MessageBox }
})
export default class extends Vue {
  @Prop({ required: true }) private isShow!: boolean;
  @Prop({ required: true }) private iconUrl!: string;

  private outerVisible = this.isShow;
  private innerVisible = false;
  private iconsAry = [
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png'
  ];
}
</script>
<style lang="scss" scoped>
</style>
