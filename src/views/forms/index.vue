<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Availble Forms</span>
    </div>

    <el-form :inline="true" style="float:right">
      <el-form-item itemref>
        <el-input v-model="search" placeholder="Find form" />
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="selectedEntityType"
          placeholder="find form by entity"
          @change="onEntityTypeChanged"
        >
          <el-option
            v-for="item in getEntityTypeList"
            :key="item.key"
            :label="item.key"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          variant="outline-primary"
          title="create New Form"
          icon="el-icon-plus"
          @click="showNewForm = !showNewForm"
        />
        <el-dialog
          ref="newFormModel"
          :visible.sync="showNewForm"
          width="30%"
          center
          title="New Form"
          :before-close="onNewDialogClose"
        >
          <NewForm />
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
        />
        <el-button
          :disabled="!selectedRow"
          variant="outline-primary"
          icon="el-icon-view"
          title="open selected form"
          @click="onOpenClick"
        />
        <el-button
          variant="outline-danger"
          title="Delete"
          icon="el-icon-delete"
          :disabled="!selectedRow"
        />
      </el-form-item>
    </el-form>

    <el-table
      :data="tableGropuedData.filter(data => !search || data.displayName.toLowerCase().includes(search.toLowerCase()))"
      border
      stripe
      size="mini"
      highlight-current-row
      default-expand-all
      row-key="dateModified"
      @current-change="onSelectedRow"
    >
      <el-table-column type="index" :index="indexMethod" />
      <!-- <el-table-column prop="name" label="Name" sortable width="180"></el-table-column> -->
      <el-table-column prop="displayName" label="Display name" sortable />

      <el-table-column prop="dateModified" label="Date Modified" sortable>
        <template slot-scope="scope">
          <span
            v-if="scope.row.dateModified"
            style="margin-left: 10px"
          >{{ new Date(scope.row.dateModified).toDateString() }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="modifiedBy" column-key="date" label="modified By" sortable />
      <el-table-column prop="entityName" label="Entity" sortable />
    </el-table>
  </el-card>
</template>
<script lang="ts">
// import { RSA_PKCS1_PADDING } from "constants"
import { Component, Vue } from "vue-property-decorator"
import NewForm from "./components/newForm"
@Component({
  name: "forms",
  components: { NewForm },
})
export default class extends Vue {
  formInline = {
    user: "",
    region: "",
  }

  search = ""

  showNewForm = false
  tableData = []
  selectedEntityType = null
  selectedRow = null

  get formsData() {
    return this.$store.getters.Forms
  }

  onSubmit() {
    console.log("submit!")
  }

  onOpenClick() {
    if (this.selectedRow) {
      this.$router.push("designer/" + this.selectedRow.itemId)
    }
  }

  indexMethod(index) {
    return index
  }

  get hasSelectedRows() {
    return this.selectedRow != null
  }

  onSelectedRow(val) {
    this.selectedRow = val
  }

  onNewDialogClose(done) {
    this.$confirm("Are you sure to close this dialog?")
      .then((_) => {
        console.log(_)
        done()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onEntityTypeChanged(value: string) {
    console.log("selected value is " + value)
    this.tableGropuedData.filter((x) => {
      return x.itemType === value
    })
  }

  get getEntityTypeList() {
    const rs: any[] = []
    this.formsData.forEach((x) => {
      console.log("data:" + x.entityName)
      rs.push({ key: x.entityName, value: x.itemType })
    })
    console.log("entittypes = " + rs.length)
    /// return [...new Set(rs.map((item) => item.value))]
    return rs
  }

  get tableGropuedData() {
    const outofbox = this.formsData.filter((x) => {
      return x.outOfTheBox === true
    })

    const nonoutofbox = this.formsData.filter((x) => {
      return x.outOfTheBox === false
    })

    this.tableData.push({
      displayName: "Added Forms",
      children: nonoutofbox
    })
    this.tableData.push({
      displayName: "Out-of-the-box Forms",
      children: outofbox
    })

    let index = 1
    this.tableData.forEach((row) => {
      row.id = index
      index++
    })
    return this.tableData
  }
}
</script>
