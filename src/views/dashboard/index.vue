<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Recent Items</span>
    </div>

    <el-row v-for="item in RecentItems" :key="item.uniqueId">
      <el-col :span="8">
        <el-card shadow="hover">
          <el-row>
            <el-col span="4">
              <el-avatar size="medium" fit="fit" src="logo.svg" @error="errorHandler"/>
            </el-col>
            <el-col span="12">
              <div>
                <span>{{ item.displayName }}</span>
                <hr>
                <small>{{ item.entityName }}</small>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { AppDataModule } from "@/store/modules/appData";
@Component({
  name: "Recent",
  components: {},
})
export default class extends Vue {
  private recentItems = [
    {
      createdBy: "Administrator",
      dateCreated: 1519749701967,
      dateModified: 1600245972290,
      displayName: "Project",
      itemId: "cse_waterfallProject",
      modifiedBy: "Administrator",
      uniqueId: "4_cse_waterfallProject",
      entityName: "Demand Activity",
      entitySystemName: null,
      itemType: 4,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1600173743227,
      dateModified: 1600174094286,
      displayName: "JS_NewForm",
      itemId: "cse_JS_NewForm",
      modifiedBy: "Administrator",
      uniqueId: "3_cse_JS_NewForm",
      entityName: "Team",
      entitySystemName: "Team",
      itemType: 3,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1523969560858,
      dateModified: 1595845565365,
      displayName: "Agile Project",
      itemId: "cse_agileProject",
      modifiedBy: "Administrator",
      uniqueId: "3_cse_agileProject",
      entityName: "Demand Activity",
      entitySystemName: "Cse_DemandActivity",
      itemType: 3,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1525200552960,
      dateModified: 1595845127224,
      displayName: "Innovation Campaign",
      itemId: "cse_innovationCampaign",
      modifiedBy: "Administrator",
      uniqueId: "3_cse_innovationCampaign",
      entityName: "Innovation Campaign",
      entitySystemName: "Cse_InnovationCampaign",
      itemType: 3,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1518464045728,
      dateModified: 1595165398746,
      displayName: "Outline Budget Plan",
      itemId: "cse_outlineBudgetPlan",
      modifiedBy: "Administrator",
      uniqueId: "2_cse_outlineBudgetPlan",
      entityName: "Outline Budget Plan",
      entitySystemName: "Cse_OutlineBudgetPlan",
      itemType: 2,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1518463454667,
      dateModified: 1594300921978,
      displayName: "Outline Budget Plan",
      itemId: "cse_outlineBudgetPlan",
      modifiedBy: "Administrator",
      uniqueId: "3_cse_outlineBudgetPlan",
      entityName: "Outline Budget Plan",
      entitySystemName: "Cse_OutlineBudgetPlan",
      itemType: 3,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1518376360577,
      dateModified: 1594291927043,
      displayName: "Outline Budget Plan",
      itemId: "com.msp.dao.entities.cse.custom.Cse_OutlineBudgetPlan",
      modifiedBy: "Administrator",
      uniqueId: "1_com.msp.dao.entities.cse.custom.Cse_OutlineBudgetPlan",
      entityName: "Outline Budget Plan",
      entitySystemName: "com.msp.dao.entities.cse.custom.Cse_OutlineBudgetPlan",
      itemType: 1,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1518752321013,
      dateModified: 1593330902623,
      displayName: "Demand Activity",
      itemId: "com.msp.dao.entities.cse.custom.Cse_DemandActivity",
      modifiedBy: "Administrator",
      uniqueId: "1_com.msp.dao.entities.cse.custom.Cse_DemandActivity",
      entityName: "Demand Activity",
      entitySystemName: "com.msp.dao.entities.cse.custom.Cse_DemandActivity",
      itemType: 1,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1544520183019,
      dateModified: 1589184090138,
      displayName: "Maintenance Project",
      itemId: "cse_maintenanceProject",
      modifiedBy: "Administrator",
      uniqueId: "3_cse_maintenanceProject",
      entityName: "Demand Activity",
      entitySystemName: "Cse_DemandActivity",
      itemType: 3,
      outOfTheBox: false,
    },
    {
      createdBy: "Administrator",
      dateCreated: 1518786490003,
      dateModified: 1588831596760,
      displayName: "Budget Request",
      itemId: "cse_budgetRequest",
      modifiedBy: "Administrator",
      uniqueId: "3_cse_budgetRequest",
      entityName: "Demand Activity",
      entitySystemName: "Cse_DemandActivity",
      itemType: 3,
      outOfTheBox: false,
    },
  ];
  get RecentItems() {
    return this.recentItems;
  }
}
</script>
