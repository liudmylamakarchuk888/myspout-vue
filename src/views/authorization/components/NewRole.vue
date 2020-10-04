<template>
  <div class="mid-sec forms-doc-sec mt-2">
    <b-form inline>
      <b-container fluid>
        <b-row inline>
          <b-col class="md-8">
            <b-form-group>
              <b-input-group size="sm">
                <b-form-input
                  id="filterInput"
                  v-model="filter"
                  type="search"
                  class="w-50"
                  placeholder="Type to Search"
                />

                <b-form-select
                  class="w-50"
                  :options="datatypes"
                  placeholder="filter by data type"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.no-border {
  border: none;
  background-color: transparent !important;
}
</style>
