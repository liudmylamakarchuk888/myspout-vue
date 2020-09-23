<template>
  <div role="tablist">
    <b-card
      no-body
      class="mb-1"
    >
      <b-card-header
        v-b-toggle.appPrefrences
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button variant="Link">
          Application Prefrences
        </b-button>
      </b-card-header>
      <b-collapse
        id="appPrefrences"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <!-- <app-prefrences></app-prefrences> -->
        </b-card-body>
      </b-collapse>

      <b-card-header
        v-b-toggle.tabDisplayLangs
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button variant="Link">
          Display languages
        </b-button>
      </b-card-header>
      <b-collapse
        id="tabDisplayLangs"
        accordion="my-tabDisplayLangs"
        role="tabpanel"
      >
        <b-card-body>
          <!-- <app-languages></app-languages> -->
        </b-card-body>
      </b-collapse>

      <b-card-header
        v-b-toggle.tablOrchestrators
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button variant="Link">
          Orchestrators
        </b-button>
      </b-card-header>
      <b-collapse
        id="tablOrchestrators"
        accordion="my-tablOrchestrators"
        role="tabpanel"
      >
        <b-card-body>
          <div class="mid-sec forms-doc-sec mt-3">
            <b-container fluid>
              <b-row>
                <b-col>Orchestrators are the components responsible for running integration operations. After installing new orchestrators, add them to this list.</b-col>
              </b-row>
              <!-- <app-orchestrators></app-orchestrators> -->
            </b-container>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header
        v-b-toggle.tabServerHealth
        header-tag="header"
        class="p-1"
        role="tab"
      >
        <b-button variant="Link">
          Server Health
        </b-button>
      </b-card-header>
      <b-collapse
        id="tabServerHealth"
        accordion="my-tabServerHealth"
        role="tabpanel"
      >
        <b-card-body>
          <div class="mid-sec forms-doc-sec mt-1">
            <b-form inline>
              <b-container fluid>
                <b-row class="my-1">
                  <b-col lg="8">
                    Long running operations
                  </b-col>
                </b-row>
                <!-- <app-server-health></app-server-health> -->
              </b-container>
            </b-form>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'settings',
  components: {}
})
export default class extends Vue {
  prefTable: any;

  selectMode = 'single';

  langTable: any = {
    data: [],
    fields: [
      {
        key: 'displayName',
        sortable: false
      }
    ]
  };

  private selected: any;
  private hasSelectedRows: boolean|undefined;
  private totalRows: any;
  private currentPage: number|undefined;

  onRowClick(row: any) {
    console.log(row)
  }

  onRowSelected(items: any) {
    this.selected = items
    if (this.selected.length > 0) this.hasSelectedRows = true
    else this.hasSelectedRows = false
  }

  onFiltered(filteredItems: string | any[]) {
    // Trigger pagination to update the number of buttons/pages due to filtering
    this.totalRows = filteredItems.length
    this.currentPage = 1
  }

  mounted() {
    console.log('recent items ' + this.$store.state.recentItems.length)
  }
}
</script>

<style scoped>
.container-fluid {
  padding-left: 0 !important;
}
</style>
