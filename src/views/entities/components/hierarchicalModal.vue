<template>
  <el-dialog
    title="Hierarchical Administration Page Definition"
    :visible.sync="showIconModal"
    width="30%"
  >
    <el-row type="flex" justify="start" class="header">
      <el-button type="text" class="img-button" @click="newHandler()">
        <el-image
          src="./MSP/resources/images/flex/entity.png"
        />New...</el-button
      >
      <el-button type="text" class="img-button" @click="editHandler()"
        ><el-image
          src="./MSP/resources/images/flex/entity.png"
        />Edit...</el-button
      >
      <el-button
        type="text"
        class="img-button delete-button"
        @click="deleteHandler()"
        ><el-image
          src="./MSP/resources/images/flex/entity.png"
        />Delete...</el-button
      >
    </el-row>
    <div class="list-container">
      <div v-for="(d, index) in listData" :key="index" class="list-item">
        <el-button
          class="list-button img-button"
          style="padding-left: 40px"
          @click="listItemClick(d, index)"
          ><el-image
            :src="require('@/assets/action-16x16.png')"
            style="padding-right: 2px"
          />{{ d.entity }}</el-button
        >
      </div>
    </div>
    <el-dialog
      class="innerDialog"
      width="30%"
      title="New Hierarchy Level"
      :visible.sync="innerVisible"
      append-to-body
    >
      <div class="innerDialog-container">
        <el-row type="flex" class="innerDialog-item">
          <el-col :span="8">Entity</el-col>
          <el-col :span="10"><el-input v-model="selectListItem.entity"/></el-col>
        </el-row>
        <el-row type="flex" class="innerDialog-item">
          <el-col :span="8">Relationship Property</el-col>
          <el-col :span="16">
            <el-select
              v-model="selectListItem.property"
              placeholder="Select"
              clearable
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                size="mini"
              >
              </el-option> </el-select
          ></el-col>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="innerDialogOk()"> Ok </el-button>
        <el-button
          style="text-decoration: underline"
          type="text"
          @click="innerDialogCancel()"
        >
          cancel
        </el-button>
      </div>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outDialogOk()"> Ok </el-button>
      <el-button
        type="text"
        style="text-decoration: underline"
        @click="outDialogCancel()"
      >
        cancel
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { MessageBox } from "element-ui";

@Component({
  name: "hierarchicalModal",
  components: {},
})
export default class extends Vue {
  @Prop({ required: true }) private value!: boolean;
  @Prop({ required: true }) private data!: any;
  @Prop({ required: true }) private setIconUrl!: any;

  private innerVisible = false;
  private tempListData = [];
  private selectListItem = {
    entity: '',
    property: '',
    index: -1
  };
  private options = [
    {
      value: "Option1",
      label: "Option1",
    },
    {
      value: "Option2",
      label: "Option2",
    },
    {
      value: "Option3",
      label: "Option3",
    },
    {
      value: "Option4",
      label: "Option4",
    },
    {
      value: "Option5",
      label: "Option5",
    },
  ];
  private relationProperty = "";

  get showIconModal(): boolean {
    return this.value;
  }
  set showIconModal(value: boolean) {
    this.$emit("input", value);
  }

  get listData() {
    this.tempListData = this.data;
    return this.tempListData;
  }

  listItemClick(item:any, index: number) {
    this.selectListItem = {...item, index}
  }

  newHandler() {
    this.innerVisible = true;
    this.selectListItem = {
      index: -1,
      entity: '',
      property: '',
    }
  }
  editHandler() {
    this.innerVisible = true;
  }
  deleteHandler() {
    this.tempListData.splice(this.selectListItem.index, 1);
  }

  innerDialogCancel() {
    this.innerVisible = false;
  }
  innerDialogOk() {
    this.innerVisible = false;
    const {index, ...data} = this.selectListItem;
    if (index < 0) 
      this.tempListData.push(data);
    else 
      this.tempListData[index] = data
  }

  outDialogOk() {
    this.setIconUrl(this.tempListData);
    this.outDialogCancel();
  }
  outDialogCancel() {
    this.showIconModal = false;
    this.tempListData = []
  }
}
</script>
<style lang="scss">
.el-dialog__body {
  padding-top: 0px;
  padding-bottom: 0px;
}
.header {
  padding: 10px 20px;
  border-bottom: 1px solid $borderGray;
  margin: 0px !important;
  .img-button {
    & > span {
      display: flex;
      align-items: center;
      font-size: 14px;
      img {
        width: 20px;
        height: 20px;
        padding-right: 5px;
      }
    }
    &.delete-button {
      color: $placeholderText;
    }
  }
}
.list-container {
  padding-top: 10px;
  max-height: 250px;
  min-height: 250px;
  overflow: auto;
}
.innerDialog {
  margin: 10px 0 0 0;
  min-width: 340px !important;
  .innerDialog-container {
    padding: 20px 10px 0 10px;
    .innerDialog-item {
      margin: 10px 0px;
      font-size: 14px;
      align-items: center;
      flex-wrap: wrap;
      & > :first-child {
        min-width: 100px;
      }
      & > :last-child {
        min-width: 100px;
      }
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
.dialog-footer {
  border-top: 1px solid $borderGray;
  padding-top: 10px;
}
</style>
