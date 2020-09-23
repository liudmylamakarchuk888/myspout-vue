<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Availble Forms</span>
    </div>

    <el-form :inline="true" style="float:right">
      <el-form-item itemref>
        <el-input v-model="search" placeholder="Find form"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="selectedEntityType"
          @change="onEntityTypeChanged"
          placeholder="find form by entity"
        >
          <el-option
            v-for="item in getEntityTypeList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          variant="outline-primary"
          @click="showNewForm = !showNewForm"
          title="create New Form"
          icon="el-icon-plus"
        ></el-button>
        <el-dialog
          :visible.sync="showNewForm"
          width="30%"
          center
          ref="newFormModel"
          title="New Form"
          :before-close="onNewDialogClose"
        >
          <NewForm></NewForm>
          <span slot="footer" class="dialog-footer">
            <el-button @click="showNewForm = false">Cancel</el-button>
            <el-button type="primary" @click="showNewForm = false">Confirm</el-button>
          </span>
        </el-dialog>
        <el-button
          :disabled="!selectedRow"
          icon="el-icon-document-copy"
          title="Copy selected Form"
          variant="outline-primary"
        ></el-button>
        <el-button
          :disabled="!selectedRow"
          variant="outline-primary"
          icon="el-icon-view"
          title="open selected form"
          @click="onOpenClick"
        ></el-button>
        <el-button
          variant="outline-danger"
          title="Delete"
          icon="el-icon-delete"
          :disabled="!selectedRow"
        ></el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableGropuedData.filter(data => !search || data.displayName.toLowerCase().includes(search.toLowerCase()))"
      border
      stripe
      size="mini"
      highlight-current-row
      @current-change="onSelectedRow"
      default-expand-all
      row-key="dateModified"
    >
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <!-- <el-table-column prop="name" label="Name" sortable width="180"></el-table-column> -->
      <el-table-column prop="displayName" label="Display name" sortable></el-table-column>

      <el-table-column prop="dateModified" label="Date Modified" sortable>
        <template slot-scope="scope">
          <span
            style="margin-left: 10px"
            v-if="scope.row.dateModified"
          >{{ new Date(scope.row.dateModified).toDateString() }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="modifiedBy" column-key="date" label="modified By" sortable></el-table-column>
      <el-table-column prop="entityName" label="Entity" sortable></el-table-column>
    </el-table>
  </el-card>
</template>
<script lang="ts">
import { RSA_PKCS1_PADDING } from "constants";
import { Component, Vue, Watch } from "vue-property-decorator";
import NewForm from "./components/newForm";
@Component({
  name: "forms",
  components: { NewForm },
})
export default class extends Vue {
  formInline = {
    user: "",
    region: "",
  };

  search = "";

  showNewForm = false;
  tableData = [];
  selectedEntityType = null;
  selectedRow = null;

  get formsData() {
    return this.$store.getters.Forms;
  }
  onSubmit() {
    console.log("submit!");
  }

  onOpenClick() {
    console.log("open clicked" + this.selectedRow);
    this.$router.push("designer/" + this.selectedRow.itemId);
  }

  indexMethod(index) {
    return index;
  }

  get hasSelectedRows() {
    return this.selectedRow != null;
  }

  onSelectedRow(val) {
    this.selectedRow = val;
  }

  onNewDialogClose(done) {
    this.$confirm("Are you sure to close this dialog?")
      .then((_) => {
        done();
      })
      .catch((_) => {});
  }

  onEntityTypeChanged(value: string) {
    console.log("selected value is " + value);
    this.tableGropuedData.filter((x) => {
      return x.itemType === value;
    });
  }

  get getEntityTypeList() {
    let rs = [];
    this.formsData.forEach((x) => {
      console.log("data:" + x.entityName);
      rs.push({ key: x.entityName, value: x.itemType });
    });
    console.log("entittypes = " + rs.length);
    return rs;
  }

  get tableGropuedData() {
    const outofbox = this.formsData.filter((x) => {
      return x.outOfTheBox === true;
    });

    const nonoutofbox = this.formsData.filter((x) => {
      return x.outOfTheBox === false;
    });

    this.tableData.push({
      displayName: "Added Forms",
      children: nonoutofbox,
    });
    this.tableData.push({
      displayName: "Out-of-the-box Forms",
      children: outofbox,
    });

    let index = 1;
    this.tableData.forEach((row: any) => {
      row.id = index;
      index++;
    });
    return this.tableData;
  }
}
</script>
