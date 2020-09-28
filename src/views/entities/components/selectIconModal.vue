<template>
  <el-dialog
    title="Select Icon"
    :visible.sync="showIconModal"
    width="25%"
  >
    <el-row
      type="flex"
      style="align-items: center"
    >
      <span>Icon:</span>
      <el-image
        class="preview-icon"
        :src="syncIconUrl"
        fit="fill"
      />
      <el-button @click="innerVisible = true">
        select
      </el-button>
    </el-row>
    <el-dialog
      class="innerDialog"
      width="20%"
      title="Select Icon"
      :visible.sync="innerVisible"
      append-to-body
    >
      <div class="innerDialog-container">
        <div class="innerDialog-title">
          Select an Icon for the button:
        </div>
        <div class="innerDialog-content">
          <el-button
            v-for="(icon, index) in iconsAry"
            :key="index"
            @click="tempIconUrl=icon"
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
        <el-button @click="innerDialogOk()">
          Ok
        </el-button>
        <el-button
          style="text-decoration: underline"
          type="text"
          @click="innerDialogCancel()"
        >
          cancel
        </el-button>
      </div>
    </el-dialog>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="outDialogOk()">
        Ok
      </el-button>
      <el-button
        style="text-decoration: underline"
        type="text"
        @click="outDialogCancel()"
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
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private value!: boolean;
  @Prop({ required: true }) private iconUrl  !: string;
  @Prop({ required: true }) private setIconUrl  !: any;

  private innerVisible = false;
  private tempIconUrl = ""
  private iconsAry = [
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/entity.png',
    './MSP/resources/images/flex/notes.png',
    './MSP/resources/images/flex/notes.png',
    './MSP/resources/images/flex/notes.png',
    './MSP/resources/images/flex/notes.png',
    './MSP/resources/images/flex/virtual_entity.png',
    './MSP/resources/images/flex/virtual_entity.png',
    './MSP/resources/images/flex/virtual_entity.png',
    './MSP/resources/images/flex/virtual_entity.png',
    './MSP/resources/images/flex/authorization-tree-document-16x16.png',
    './MSP/resources/images/flex/authorization-tree-document-16x16.png',
    './MSP/resources/images/flex/authorization-tree-document-16x16.png'
  ];

  get showIconModal():boolean {
    return this.value;
  }
  get syncIconUrl() {
    return this.tempIconUrl?this.tempIconUrl:this.iconUrl;
  }

  set showIconModal(value:boolean) {
    this.$emit('input', value);
  }

  innerDialogCancel() {
    this.innerVisible = false;
    this.tempIconUrl = this.syncIconUrl;
  }
  innerDialogOk() {
    this.innerVisible = false;
  }

  outDialogOk() {
    this.setIconUrl(this.tempIconUrl)
    this.showIconModal = false;
    setTimeout(() => {
      this.tempIconUrl = ""
    }, 1000)
  }
  outDialogCancel() {
    this.showIconModal = false;
    this.tempIconUrl = "";
  }
}
</script>
<style lang="scss" scoped>
  .preview-icon {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    border: 1px solid $borderGray;
    padding: 2px;
  }
  .innerDialog {
    margin: 10px 0 0 0;
    .innerDialog-container {
      text-align: center; 
      font-weight: bold;
      .innerDialog-title {
        margin-bottom: 10px;
      }
      .innerDialog-content {
        padding: 20px;
        border: 1px solid $borderGray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2px;
        row-gap: 15px;
        justify-items: center;
        align-items: center;
      }
    }
    .el-button + .el-button {
      margin: 0px;
    }
    .el-button--text {
      text-decoration: underline; 
      padding-left: 10px;
    }
  }
</style>
