<template>
  <el-form>
    <el-row
      class="mb-2"
      cols="6"
    >
      <el-col cols="6">
        <el-form-input
          ref="input"
          class=" font-weight-bold"
          value="Type Display Name Here"
          @click="selectAll"
        />
      </el-col>
    </el-row>

    <el-row class="mb-4">
      <el-col cols="6">
        <el-form-input
          class="no-border"
          placeholder="type description here"
        />
      </el-col>
    </el-row>

    <el-row class="no-gutters ml-4 md-center mt-6">
      <el-col
        md="auto"
        class="mt-2"
      >
        <span>System Name</span>
      </el-col>
      <el-col
        cols="3"
        class="ml-4"
      >
        <el-form-input />
      </el-col>
    </el-row>

    <el-row class="no-gutters mt-4 ml-2">
      <el-col
        v-if="!collapsed"
        cols="12"
        md="auto"
        @click="onCollapse"
      >
        <b-icon
          id="caret-icon"
          v-b-toggle.Settings
          icon="caret-down-fill"
          aria-hidden="true"
        />
      </el-col>
      <el-col
        v-if="collapsed"
        cols="12"
        md="auto"
        @click="onCollapse"
      >
        <b-icon
          id="caret-icon"
          v-b-toggle.Settings
          icon="caret-right-fill"
          aria-hidden="true"
        />
      </el-col>
      <el-col
        col
        lg="11"
        class="ml-1"
      >
        <span style="font-size:12px"><b>Advanced Settings</b></span>
        <hr id="AdvancHR">
      </el-col>
    </el-row>
    <el-row class="no-gutters md-center">
      <el-collapse
        id="Settings"
        accordion="Set-accordion"
        role="tabpanel"
      >
        <b-card-body class="ml-6">
          <el-row class="no-gutters ml-4 md-center">
            <el-col
              md="auto"
              class="mt-2"
            >
              <span>System Name</span>
            </el-col>
            <el-col
              cols="6"
              class="ml-4"
            >
              <el-form-input />
            </el-col>
          </el-row>
        </b-card-body>
      </el-collapse>
    </el-row>
    <div>
      <el-row>
        <el-col
          md="6"
          offset-md="3"
        >
          <b-button variant="outline-primary">
            Add
          </b-button>
          <span class="ml-2"> or</span><span class="ml-2">    Cancel</span>
        </el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>

export default {
  Data() {
    return {

    }
  },

  methods: {
    selectAll() {
      this.$refs.input.select()
    }
  },
  validations: {
    inputText: {

    }
  }
}
</script>
