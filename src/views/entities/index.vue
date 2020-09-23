<template>
  <el-container>
    <el-row
      type="flex"
      :gutter="10"
      class="row-bg"
      justify="center"
    >
      <el-col
        :span="6"
        class="treeview-container"
      >
        <el-row class="treeview-header">
          <el-row
            type="flex"
            :gutter="10"
            justify="center"
          >
            <el-col :span="12">
              Entities
            </el-col>
            <el-col :span="12">
              <el-row
                type="flex"
                :gutter="5"
                class="add-container"
              >
                <el-col
                  :span="8"
                  text-xs-right
                >
                  <a>New</a>
                </el-col>
                <el-col
                  :span="2"
                  text-xs-right
                >
                  |
                </el-col>
                <el-col
                  :span="14"
                  text-xs-right
                >
                  <a>New Virtual</a>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row
            type="flex"
            :gutter="10"
          >
            <el-col :span="14">
              <el-input
                v-model="entityKey"
                placeholder="Find Entity"
              />
            </el-col>
            <el-col :span="10">
              <el-input
                v-model="entityKey"
                placeholder="Please input"
              />
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <p v-if="entitiesLoading">
            loading...
          </p>
          <tree-view
            v-else
            :items="items"
          />
        </el-row>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import TreeView from '@/components/TreeView/index.vue'
import axios from 'axios'

@Component({
  name: 'Entities',
  components: { TreeView }
})
export default class extends Vue {
  private entitiesLoading = true
  private entityKey = ''
  private allEntities = {
    attributes: [
      {
        key: 'DISCIPLINES',
        value: [
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '20'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '117'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '118'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '21'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '22'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_EPM_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '23'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '29'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_INTEGRATIONS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '33'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '120'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '121'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '119'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '30'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '25'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_RISK_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '26'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '27'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '28'
          },
          {
            key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
            value: '122'
          }
        ]
      }
    ],
    children: [
      {
        attributes: [

        ],
        children: [
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '25'
                }
              },
              {
                key: 'TABLE',
                value: 'Releases'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Release'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Release'
              }
            ],
            name: 'Release',
            parent: null,
            tooltip: 'Release',
            branch: false,
            id: 'com.msp.dao.entities.Release'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '25'
                }
              },
              {
                key: 'TABLE',
                value: 'Requirements'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Requirement'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Requirement'
              }
            ],
            name: 'Requirement',
            parent: null,
            tooltip: 'Requirement',
            branch: false,
            id: 'com.msp.dao.entities.Requirement'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_RISK_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '26'
                }
              },
              {
                key: 'TABLE',
                value: 'Risks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Risk'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk'
              }
            ],
            name: 'Risk',
            parent: null,
            tooltip: 'Risk',
            branch: false,
            id: 'com.msp.dao.entities.Risk'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '122'
                }
              },
              {
                key: 'TABLE',
                value: 'Teams'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Team'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Team'
              }
            ],
            name: 'Team',
            parent: null,
            tooltip: 'Team',
            branch: false,
            id: 'com.msp.dao.entities.Team'
          }
        ],
        icons: [

        ],
        name: 'Common Entities',
        parent: null,
        tooltip: 'Common Entities',
        branch: true,
        id: 'CommonEntities'
      },
      {
        attributes: [

        ],
        children: [
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseAcceptanceCriterias'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_AcceptanceCriteria'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Acceptance Criteria'
              }
            ],
            name: 'Acceptance Criteria',
            parent: null,
            tooltip: 'Acceptance Criteria',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_AcceptanceCriteria'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseAcceptanceCriteriaStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_AcceptanceCriteriaStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Acceptance Criteria Status'
              }
            ],
            name: 'Acceptance Criteria Status',
            parent: null,
            tooltip: 'Acceptance Criteria Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_AcceptanceCriteriaStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'AdminTimeCategories'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'AdminTimeCategory'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Admin Time Category'
              }
            ],
            name: 'Admin Time Category',
            parent: null,
            tooltip: 'Admin Time Category',
            branch: false,
            id: 'com.msp.dao.entities.AdminTimeCategory'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '117'
                }
              },
              {
                key: 'TABLE',
                value: 'CseApprovalMatrixTemplates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ApprovalMatrixTemplate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Approval Matrix Template'
              }
            ],
            name: 'Approval Matrix Template',
            parent: null,
            tooltip: 'Approval Matrix Template',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ApprovalMatrixTemplate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseApprovalMatrixTemplateApprovers'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_ApprovalMatrixTemplateApprover'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Approval Matrix Template Approver'
              }
            ],
            name: 'Approval Matrix Template Approver',
            parent: null,
            tooltip: 'Approval Matrix Template Approver',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_ApprovalMatrixTemplateApprover'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '117'
                }
              },
              {
                key: 'TABLE',
                value: 'CseApprovalMatrixTemplateTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ApprovalMatrixTemplateType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Approval Matrix Template Type'
              }
            ],
            name: 'Approval Matrix Template Type',
            parent: null,
            tooltip: 'Approval Matrix Template Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ApprovalMatrixTemplateType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '117'
                }
              },
              {
                key: 'TABLE',
                value: 'CseApprovalStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ApprovalStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Approval Status'
              }
            ],
            name: 'Approval Status',
            parent: null,
            tooltip: 'Approval Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ApprovalStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseApprovers'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Approver'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Approver'
              }
            ],
            name: 'Approver',
            parent: null,
            tooltip: 'Approver',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Approver'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseAssessmentCriterias'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_AssessmentCriteria'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Assessment Criteria'
              }
            ],
            name: 'Assessment Criteria',
            parent: null,
            tooltip: 'Assessment Criteria',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_AssessmentCriteria'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseBaseCalendars'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_BaseCalendar'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Base Calendar'
              }
            ],
            name: 'Base Calendar',
            parent: null,
            tooltip: 'Base Calendar',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_BaseCalendar'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseBudgetAlignments'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_BudgetAlignment'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Budget Alignment'
              }
            ],
            name: 'Budget Alignment',
            parent: null,
            tooltip: 'Budget Alignment',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_BudgetAlignment'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseBudgetRAGStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_BudgetRAGStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Budget RAG Status'
              }
            ],
            name: 'Budget RAG Status',
            parent: null,
            tooltip: 'Budget RAG Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_BudgetRAGStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseBudgetSources'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_BudgetSource'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Budget Source'
              }
            ],
            name: 'Budget Source',
            parent: null,
            tooltip: 'Budget Source',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_BudgetSource'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseBudgetTypeConstraints'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_BudgetTypeConstraint'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Budget Type Constraint'
              }
            ],
            name: 'Budget Type Constraint',
            parent: null,
            tooltip: 'Budget Type Constraint',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_BudgetTypeConstraint'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '118'
                }
              },
              {
                key: 'TABLE',
                value: 'CseBusinessPlanRanges'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_BusinessPlanRange'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Business Plan Range'
              }
            ],
            name: 'Business Plan Range',
            parent: null,
            tooltip: 'Business Plan Range',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_BusinessPlanRange'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCampaignspecificEvaluations'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_CampaignspecificEvaluation'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Campaign-specific Evaluation'
              }
            ],
            name: 'Campaign-specific Evaluation',
            parent: null,
            tooltip: 'Campaign-specific Evaluation',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_CampaignspecificEvaluation'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '118'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCapexOpexs'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_CapexOpex'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Capex/Opex'
              }
            ],
            name: 'Capex/Opex',
            parent: null,
            tooltip: 'Capex/Opex',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_CapexOpex'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCashflows'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Cashflow'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Cashflow'
              }
            ],
            name: 'Cashflow',
            parent: null,
            tooltip: 'Cashflow',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Cashflow'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '118'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCashflowTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_CashflowType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Cashflow Type'
              }
            ],
            name: 'Cashflow Type',
            parent: null,
            tooltip: 'Cashflow Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_CashflowType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseChangeRequestTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ChangeRequestType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Change Request Type'
              }
            ],
            name: 'Change Request Type',
            parent: null,
            tooltip: 'Change Request Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ChangeRequestType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseChecklists'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Checklist'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Checklist'
              }
            ],
            name: 'Checklist',
            parent: null,
            tooltip: 'Checklist',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Checklist'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseChecklistStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ChecklistStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Checklist Status'
              }
            ],
            name: 'Checklist Status',
            parent: null,
            tooltip: 'Checklist Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ChecklistStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseChecklistSteps'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_ChecklistStep'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Checklist Step'
              }
            ],
            name: 'Checklist Step',
            parent: null,
            tooltip: 'Checklist Step',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_ChecklistStep'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseChecklistTemplates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ChecklistTemplate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Checklist Template'
              }
            ],
            name: 'Checklist Template',
            parent: null,
            tooltip: 'Checklist Template',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ChecklistTemplate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseChecklistTemplateTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ChecklistTemplateType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Checklist Template Type'
              }
            ],
            name: 'Checklist Template Type',
            parent: null,
            tooltip: 'Checklist Template Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ChecklistTemplateType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseContacts'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Contact'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Contacts'
              }
            ],
            name: 'Contacts',
            parent: null,
            tooltip: 'Contacts',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Contact'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseContracts'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Contract'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Contract'
              }
            ],
            name: 'Contract',
            parent: null,
            tooltip: 'Contract',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Contract'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseContractChangeRequests'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ContractChangeRequest'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Contract Change Request'
              }
            ],
            name: 'Contract Change Request',
            parent: null,
            tooltip: 'Contract Change Request',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ContractChangeRequest'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '120'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCostLevels'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_CostLevel'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Cost Level'
              }
            ],
            name: 'Cost Level',
            parent: null,
            tooltip: 'Cost Level',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_CostLevel'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCountries'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Country'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Country'
              }
            ],
            name: 'Country',
            parent: null,
            tooltip: 'Country',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Country'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseCriteriaWeights'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_CriteriaWeight'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Criteria Weight'
              }
            ],
            name: 'Criteria Weight',
            parent: null,
            tooltip: 'Criteria Weight',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_CriteriaWeight'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: null
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DNSprintsAndReleases'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/virtual-entity16x16.png',
                tooltip: 'DN Sprints And Releases'
              }
            ],
            name: 'DN Sprints And Releases',
            parent: null,
            tooltip: 'DN Sprints And Releases',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DNSprintsAndReleases'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDayOverrides'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DayOverride'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Day Override'
              }
            ],
            name: 'Day Override',
            parent: null,
            tooltip: 'Day Override',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DayOverride'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDayOverrideWorkingTimes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DayOverrideWorkingTime'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Day Override Working Time'
              }
            ],
            name: 'Day Override Working Time',
            parent: null,
            tooltip: 'Day Override Working Time',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DayOverrideWorkingTime'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDemandActivities'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DemandActivity'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: true
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Demand Activity'
              }
            ],
            name: 'Demand Activity',
            parent: null,
            tooltip: 'Demand Activity',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DemandActivity'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDemandActivityAssignmentss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DemandActivityAssignments'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Demand Activity Assignments'
              }
            ],
            name: 'Demand Activity Assignments',
            parent: null,
            tooltip: 'Demand Activity Assignments',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DemandActivityAssignments'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDemandActivityDependenciess'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DemandActivityDependencies'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Demand Activity Dependencies'
              }
            ],
            name: 'Demand Activity Dependencies',
            parent: null,
            tooltip: 'Demand Activity Dependencies',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DemandActivityDependencies'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDemandChargebacks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DemandChargeback'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Demand Chargeback'
              }
            ],
            name: 'Demand Chargeback',
            parent: null,
            tooltip: 'Demand Chargeback',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DemandChargeback'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDemandPriorities'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DemandPriority'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Demand Priority'
              }
            ],
            name: 'Demand Priority',
            parent: null,
            tooltip: 'Demand Priority',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DemandPriority'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDetailedTasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_DetailedTask'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: true
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Detailed Task'
              }
            ],
            name: 'Detailed Task',
            parent: null,
            tooltip: 'Detailed Task',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_DetailedTask'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDetailedTaskTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DetailedTaskType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Detailed Task Type'
              }
            ],
            name: 'Detailed Task Type',
            parent: null,
            tooltip: 'Detailed Task Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DetailedTaskType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '118'
                }
              },
              {
                key: 'TABLE',
                value: 'CseEstimateResponseTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_EstimateResponseType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Estimate Response Type'
              }
            ],
            name: 'Estimate Response Type',
            parent: null,
            tooltip: 'Estimate Response Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_EstimateResponseType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseGoalAlignments'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_GoalAlignment'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Goal Alignment'
              }
            ],
            name: 'Goal Alignment',
            parent: null,
            tooltip: 'Goal Alignment',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_GoalAlignment'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseGoalConstraints'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_GoalConstraint'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Goal Constraint'
              }
            ],
            name: 'Goal Constraint',
            parent: null,
            tooltip: 'Goal Constraint',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_GoalConstraint'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseHRConstraints'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_HRConstraint'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'HR Constraint'
              }
            ],
            name: 'HR Constraint',
            parent: null,
            tooltip: 'HR Constraint',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_HRConstraint'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseHRbusinessprocesss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_HRbusinessprocess'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'HR business process'
              }
            ],
            name: 'HR business process',
            parent: null,
            tooltip: 'HR business process',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_HRbusinessprocess'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseHighLevelEstimations'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_HighLevelEstimation'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'High Level Estimation'
              }
            ],
            name: 'High Level Estimation',
            parent: null,
            tooltip: 'High Level Estimation',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_HighLevelEstimation'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseHighLevelMilestones'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_HighLevelMilestone'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'High Level Milestone'
              }
            ],
            name: 'High Level Milestone',
            parent: null,
            tooltip: 'High Level Milestone',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_HighLevelMilestone'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseHighLevelMilestoneStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_HighLevelMilestoneStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'High Level Milestone Status'
              }
            ],
            name: 'High Level Milestone Status',
            parent: null,
            tooltip: 'High Level Milestone Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_HighLevelMilestoneStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseIdeas'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Idea'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Idea'
              }
            ],
            name: 'Idea',
            parent: null,
            tooltip: 'Idea',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Idea'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseInnovationCampaigns'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_InnovationCampaign'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Innovation Campaign'
              }
            ],
            name: 'Innovation Campaign',
            parent: null,
            tooltip: 'Innovation Campaign',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_InnovationCampaign'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseLineItemTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_LineItemType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Line Item Type'
              }
            ],
            name: 'Line Item Type',
            parent: null,
            tooltip: 'Line Item Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_LineItemType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseLinkTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_LinkType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Link Type'
              }
            ],
            name: 'Link Type',
            parent: null,
            tooltip: 'Link Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_LinkType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseLinkedTasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_LinkedTask'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Linked Task'
              }
            ],
            name: 'Linked Task',
            parent: null,
            tooltip: 'Linked Task',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_LinkedTask'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseMilestoneTemplates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_MilestoneTemplate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Milestone Template'
              }
            ],
            name: 'Milestone Template',
            parent: null,
            tooltip: 'Milestone Template',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_MilestoneTemplate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseMyWorkMonthAggregates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_MyWorkMonthAggregate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'My Work Month Aggregate'
              }
            ],
            name: 'My Work Month Aggregate',
            parent: null,
            tooltip: 'My Work Month Aggregate',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_MyWorkMonthAggregate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'MyWorkTimeReports'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'MyWorkTimeReport'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'My Work Time Report'
              }
            ],
            name: 'My Work Time Report',
            parent: null,
            tooltip: 'My Work Time Report',
            branch: false,
            id: 'com.msp.dao.entities.MyWorkTimeReport'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseNegotiationHistories'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_NegotiationHistory'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Negotiation History'
              }
            ],
            name: 'Negotiation History',
            parent: null,
            tooltip: 'Negotiation History',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_NegotiationHistory'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseNegotiationTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_NegotiationType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Negotiation Type'
              }
            ],
            name: 'Negotiation Type',
            parent: null,
            tooltip: 'Negotiation Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_NegotiationType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOfferingGrades'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_OfferingGrade'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Offering Grade'
              }
            ],
            name: 'Offering Grade',
            parent: null,
            tooltip: 'Offering Grade',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_OfferingGrade'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOfferingss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Offerings'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Offerings'
              }
            ],
            name: 'Offerings',
            parent: null,
            tooltip: 'Offerings',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Offerings'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOnboardingPhases'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_OnboardingPhase'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Onboarding Phase'
              }
            ],
            name: 'Onboarding Phase',
            parent: null,
            tooltip: 'Onboarding Phase',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_OnboardingPhase'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOnboardingTemplates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_OnboardingTemplate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Onboarding Template'
              }
            ],
            name: 'Onboarding Template',
            parent: null,
            tooltip: 'Onboarding Template',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_OnboardingTemplate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOnboardingTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_OnboardingType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Onboarding Type'
              }
            ],
            name: 'Onboarding Type',
            parent: null,
            tooltip: 'Onboarding Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_OnboardingType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOrganizationBudgetTypeConstraints'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_OrganizationBudgetTypeConstraint'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Organization Budget Type Constraint'
              }
            ],
            name: 'Organization Budget Type Constraint',
            parent: null,
            tooltip: 'Organization Budget Type Constraint',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_OrganizationBudgetTypeConstraint'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '122'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOrganizationUnits'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_OrganizationUnit'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Organization Unit'
              }
            ],
            name: 'Organization Unit',
            parent: null,
            tooltip: 'Organization Unit',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_OrganizationUnit'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseOutlineBudgetPlans'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_OutlineBudgetPlan'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Outline Budget Plan'
              }
            ],
            name: 'Outline Budget Plan',
            parent: null,
            tooltip: 'Outline Budget Plan',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_OutlineBudgetPlan'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '118'
                }
              },
              {
                key: 'TABLE',
                value: 'CsePlanResolutions'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_PlanResolution'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Plan Resolution'
              }
            ],
            name: 'Plan Resolution',
            parent: null,
            tooltip: 'Plan Resolution',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_PlanResolution'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CsePossibleResponses'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_PossibleResponse'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Possible Response'
              }
            ],
            name: 'Possible Response',
            parent: null,
            tooltip: 'Possible Response',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_PossibleResponse'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '120'
                }
              },
              {
                key: 'TABLE',
                value: 'CsePrioritizationDecisions'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_PrioritizationDecision'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Prioritization Decision'
              }
            ],
            name: 'Prioritization Decision',
            parent: null,
            tooltip: 'Prioritization Decision',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_PrioritizationDecision'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseProjectBudgetSummaries'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ProjectBudgetSummary'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Project Budget Summary'
              }
            ],
            name: 'Project Budget Summary',
            parent: null,
            tooltip: 'Project Budget Summary',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ProjectBudgetSummary'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseProjectClassifications'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ProjectClassification'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Project Classification'
              }
            ],
            name: 'Project Classification',
            parent: null,
            tooltip: 'Project Classification',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ProjectClassification'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseProjectComponents'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ProjectComponent'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Project Component'
              }
            ],
            name: 'Project Component',
            parent: null,
            tooltip: 'Project Component',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ProjectComponent'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseDemandActivityStatusUpdates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_DemandActivityStatusUpdate'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Project Status Update'
              }
            ],
            name: 'Project Status Update',
            parent: null,
            tooltip: 'Project Status Update',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_DemandActivityStatusUpdate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CsePublishStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_PublishStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Publish Status'
              }
            ],
            name: 'Publish Status',
            parent: null,
            tooltip: 'Publish Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_PublishStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseQualificationStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_QualificationStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Qualification Status'
              }
            ],
            name: 'Qualification Status',
            parent: null,
            tooltip: 'Qualification Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_QualificationStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseQuestions'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Question'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Question'
              }
            ],
            name: 'Question',
            parent: null,
            tooltip: 'Question',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Question'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRAGStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RAGStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'RAG Status'
              }
            ],
            name: 'RAG Status',
            parent: null,
            tooltip: 'RAG Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RAGStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRatings'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Rating'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Rating'
              }
            ],
            name: 'Rating',
            parent: null,
            tooltip: 'Rating',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Rating'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRenewals'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Renewal'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Renewal'
              }
            ],
            name: 'Renewal',
            parent: null,
            tooltip: 'Renewal',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Renewal'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRenewalTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RenewalType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Renewal Type'
              }
            ],
            name: 'Renewal Type',
            parent: null,
            tooltip: 'Renewal Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RenewalType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRenewalTypeTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RenewalTypeType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Renewal Type Category'
              }
            ],
            name: 'Renewal Type Category',
            parent: null,
            tooltip: 'Renewal Type Category',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RenewalTypeType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRenewalstatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Renewalstatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Renewal status'
              }
            ],
            name: 'Renewal status',
            parent: null,
            tooltip: 'Renewal status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Renewalstatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRequestforEstimates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_RequestforEstimate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Request for Estimate'
              }
            ],
            name: 'Request for Estimate',
            parent: null,
            tooltip: 'Request for Estimate',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_RequestforEstimate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRequirementTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RequirementType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Requirement Type'
              }
            ],
            name: 'Requirement Type',
            parent: null,
            tooltip: 'Requirement Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RequirementType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseResourceFTEgaps'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ResourceFTEgaps'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Resource FTE gaps'
              }
            ],
            name: 'Resource FTE gaps',
            parent: null,
            tooltip: 'Resource FTE gaps',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ResourceFTEgaps'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseResourcess'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_Resources'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Resources'
              }
            ],
            name: 'Resources',
            parent: null,
            tooltip: 'Resources',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_Resources'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRiskIssues'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RiskIssue'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk Issue'
              }
            ],
            name: 'Risk Issue',
            parent: null,
            tooltip: 'Risk Issue',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RiskIssue'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRiskIssueStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RiskIssueStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk Issue Status'
              }
            ],
            name: 'Risk Issue Status',
            parent: null,
            tooltip: 'Risk Issue Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RiskIssueStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '120'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRiskLevels'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RiskLevel'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk Level'
              }
            ],
            name: 'Risk Level',
            parent: null,
            tooltip: 'Risk Level',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RiskLevel'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRiskRAGStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RiskRAGStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk RAG Status'
              }
            ],
            name: 'Risk RAG Status',
            parent: null,
            tooltip: 'Risk RAG Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RiskRAGStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRollouts'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Rollout'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Rollout'
              }
            ],
            name: 'Rollout',
            parent: null,
            tooltip: 'Rollout',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Rollout'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseRolloutTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_RolloutType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Rollout Type'
              }
            ],
            name: 'Rollout Type',
            parent: null,
            tooltip: 'Rollout Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_RolloutType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseScheduleRAGStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ScheduleRAGStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Schedule RAG Status'
              }
            ],
            name: 'Schedule RAG Status',
            parent: null,
            tooltip: 'Schedule RAG Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ScheduleRAGStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseScopeRAGStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ScopeRAGStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Scope RAG Status'
              }
            ],
            name: 'Scope RAG Status',
            parent: null,
            tooltip: 'Scope RAG Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ScopeRAGStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '122'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSkills'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Skill'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Skill'
              }
            ],
            name: 'Skill',
            parent: null,
            tooltip: 'Skill',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Skill'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '122'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSkillLevels'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_SkillLevel'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Skill Level'
              }
            ],
            name: 'Skill Level',
            parent: null,
            tooltip: 'Skill Level',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_SkillLevel'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseStaffReports'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_StaffReport'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Staff Report'
              }
            ],
            name: 'Staff Report',
            parent: null,
            tooltip: 'Staff Report',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_StaffReport'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseStepEvents'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_StepEvent'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Step Event'
              }
            ],
            name: 'Step Event',
            parent: null,
            tooltip: 'Step Event',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_StepEvent'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseGoals'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Goal'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Strategic goal'
              }
            ],
            name: 'Strategic goal',
            parent: null,
            tooltip: 'Strategic goal',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Goal'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSuppliersVendors'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_SupplierVendor'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Supplier / Vendor'
              }
            ],
            name: 'Supplier / Vendor',
            parent: null,
            tooltip: 'Supplier / Vendor',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_SupplierVendor'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSurveies'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Survey'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Survey'
              }
            ],
            name: 'Survey',
            parent: null,
            tooltip: 'Survey',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Survey'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSurveyResponses'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_SurveyResponse'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Survey Response'
              }
            ],
            name: 'Survey Response',
            parent: null,
            tooltip: 'Survey Response',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_SurveyResponse'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '121'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSurveyTemplates'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_SurveyTemplate'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Survey Template'
              }
            ],
            name: 'Survey Template',
            parent: null,
            tooltip: 'Survey Template',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_SurveyTemplate'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseSystems'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_System'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'System'
              }
            ],
            name: 'System',
            parent: null,
            tooltip: 'System',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_System'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseTshirtSizes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_TshirtSize'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'T-shirt Size'
              }
            ],
            name: 'T-shirt Size',
            parent: null,
            tooltip: 'T-shirt Size',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_TshirtSize'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '119'
                }
              },
              {
                key: 'TABLE',
                value: 'CseTaskItemTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_TaskItemType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Task Item Type'
              }
            ],
            name: 'Task Item Type',
            parent: null,
            tooltip: 'Task Item Type',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_TaskItemType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseTaskStatuss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_TaskStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Task Status'
              }
            ],
            name: 'Task Status',
            parent: null,
            tooltip: 'Task Status',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_TaskStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseTasklevelScheduleChanges'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_TasklevelScheduleChanges'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Task-level Schedule Changes'
              }
            ],
            name: 'Task-level Schedule Changes',
            parent: null,
            tooltip: 'Task-level Schedule Changes',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_TasklevelScheduleChanges'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '118'
                }
              },
              {
                key: 'TABLE',
                value: 'CseUnitss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Units'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Units'
              }
            ],
            name: 'Units',
            parent: null,
            tooltip: 'Units',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Units'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '122'
                }
              },
              {
                key: 'TABLE',
                value: 'Users'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'User'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'User'
              }
            ],
            name: 'User',
            parent: null,
            tooltip: 'User',
            branch: false,
            id: 'com.msp.dao.entities.User'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseValidResponses'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_ValidResponse'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Valid Response'
              }
            ],
            name: 'Valid Response',
            parent: null,
            tooltip: 'Valid Response',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_ValidResponse'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '120'
                }
              },
              {
                key: 'TABLE',
                value: 'CseValueLevels'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_ValueLevel'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Value Level'
              }
            ],
            name: 'Value Level',
            parent: null,
            tooltip: 'Value Level',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_ValueLevel'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseVendorNegotiations'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_Cse_VendorNegotiation'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Vendor Negotiation'
              }
            ],
            name: 'Vendor Negotiation',
            parent: null,
            tooltip: 'Vendor Negotiation',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_Cse_VendorNegotiation'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseWorkdayAvailabilities'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_WorkdayAvailability'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Workday Availability'
              }
            ],
            name: 'Workday Availability',
            parent: null,
            tooltip: 'Workday Availability',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_WorkdayAvailability'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseWorksheetAttendanceGapss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_WorksheetAttendanceGaps'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Worksheet Attendance Gaps'
              }
            ],
            name: 'Worksheet Attendance Gaps',
            parent: null,
            tooltip: 'Worksheet Attendance Gaps',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_WorksheetAttendanceGaps'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'CseWorksheetDailyAttendanceGapss'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Cse_WorksheetDailyAttendanceGaps'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Worksheet Daily Attendance Gaps'
              }
            ],
            name: 'Worksheet Daily Attendance Gaps',
            parent: null,
            tooltip: 'Worksheet Daily Attendance Gaps',
            branch: false,
            id: 'com.msp.dao.entities.cse.custom.Cse_WorksheetDailyAttendanceGaps'
          }
        ],
        icons: [

        ],
        name: 'Customized Entities',
        parent: null,
        tooltip: 'Customized Entities',
        branch: true,
        id: 'CustomizedEntities'
      },
      {
        attributes: [

        ],
        children: [
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '21'
                }
              },
              {
                key: 'TABLE',
                value: 'Attachments'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Attachment'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Attachment'
              }
            ],
            name: 'Attachment',
            parent: null,
            tooltip: 'Attachment',
            branch: false,
            id: 'com.msp.dao.entities.Attachment'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '30'
                }
              },
              {
                key: 'TABLE',
                value: 'AttachmentTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'AttachmentType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Attachment Type'
              }
            ],
            name: 'Attachment Type',
            parent: null,
            tooltip: 'Attachment Type',
            branch: false,
            id: 'com.msp.dao.entities.AttachmentType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '27'
                }
              },
              {
                key: 'TABLE',
                value: 'BudgetPlans'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'BudgetPlan'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Budget Plan'
              }
            ],
            name: 'Budget Plan',
            parent: null,
            tooltip: 'Budget Plan',
            branch: false,
            id: 'com.msp.dao.entities.BudgetPlan'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '27'
                }
              },
              {
                key: 'TABLE',
                value: 'refBudgetPlanPortfolios'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'BudgetPlanPortfolio'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Budget Plan Portfolio Link'
              }
            ],
            name: 'Budget Plan Portfolio Link',
            parent: null,
            tooltip: 'Budget Plan Portfolio Link',
            branch: false,
            id: 'com.msp.dao.entities.BudgetPlanPortfolio'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '27'
                }
              },
              {
                key: 'TABLE',
                value: 'CapacityHR'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'CapacityHR'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Capacity HR'
              }
            ],
            name: 'Capacity HR',
            parent: null,
            tooltip: 'Capacity HR',
            branch: false,
            id: 'com.msp.dao.entities.CapacityHR'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '21'
                }
              },
              {
                key: 'TABLE',
                value: 'CapacityMoney'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'CapacityMoney'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Capacity Money'
              }
            ],
            name: 'Capacity Money',
            parent: null,
            tooltip: 'Capacity Money',
            branch: false,
            id: 'com.msp.dao.entities.CapacityMoney'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '25'
                }
              },
              {
                key: 'TABLE',
                value: 'CodeVersions'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'CodeVersion'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Code Version'
              }
            ],
            name: 'Code Version',
            parent: null,
            tooltip: 'Code Version',
            branch: false,
            id: 'com.msp.dao.entities.CodeVersion'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '22'
                }
              },
              {
                key: 'TABLE',
                value: 'CostItems'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'CostItem'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Cost Item'
              }
            ],
            name: 'Cost Item',
            parent: null,
            tooltip: 'Cost Item',
            branch: false,
            id: 'com.msp.dao.entities.CostItem'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '30'
                }
              },
              {
                key: 'TABLE',
                value: 'Currencies'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Currency'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Currency'
              }
            ],
            name: 'Currency',
            parent: null,
            tooltip: 'Currency',
            branch: false,
            id: 'com.msp.dao.entities.Currency'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'DayPlanners'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'DayPlanner'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Day Planner'
              }
            ],
            name: 'Day Planner',
            parent: null,
            tooltip: 'Day Planner',
            branch: false,
            id: 'com.msp.dao.entities.DayPlanner'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '20'
                }
              },
              {
                key: 'TABLE',
                value: 'Decisions'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Decision'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Decision'
              }
            ],
            name: 'Decision',
            parent: null,
            tooltip: 'Decision',
            branch: false,
            id: 'com.msp.dao.entities.Decision'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'DeliverableStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'DeliverableStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Deliverable Status'
              }
            ],
            name: 'Deliverable Status',
            parent: null,
            tooltip: 'Deliverable Status',
            branch: false,
            id: 'com.msp.dao.entities.DeliverableStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'TasksImpactAssessment'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'TaskImpactAssessment'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Detailed Planning Task'
              }
            ],
            name: 'Detailed Planning Task',
            parent: null,
            tooltip: 'Detailed Planning Task',
            branch: false,
            id: 'com.msp.dao.entities.TaskImpactAssessment'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'GanttTableSchedulingModes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'GanttTableSchedulingModes'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Gantt Table Scheduling Modes'
              }
            ],
            name: 'Gantt Table Scheduling Modes',
            parent: null,
            tooltip: 'Gantt Table Scheduling Modes',
            branch: false,
            id: 'com.msp.dao.entities.GanttTableSchedulingModes'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'GenericTasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'GenericTask'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Generic Task'
              }
            ],
            name: 'Generic Task',
            parent: null,
            tooltip: 'Generic Task',
            branch: false,
            id: 'com.msp.dao.entities.GenericTask'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_EPM_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '23'
                }
              },
              {
                key: 'TABLE',
                value: 'Hammocks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Hammock'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Hammock'
              }
            ],
            name: 'Hammock',
            parent: null,
            tooltip: 'Hammock',
            branch: false,
            id: 'com.msp.dao.entities.Hammock'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'InstanceLevelIntegrationOperations'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'InstanceLevelIntegrationOperation'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Instance Level Integration Operation'
              }
            ],
            name: 'Instance Level Integration Operation',
            parent: null,
            tooltip: 'Instance Level Integration Operation',
            branch: false,
            id: 'com.msp.dao.entities.InstanceLevelIntegrationOperation'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '22'
                }
              },
              {
                key: 'TABLE',
                value: 'Invoices'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Invoice'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Invoice'
              }
            ],
            name: 'Invoice',
            parent: null,
            tooltip: 'Invoice',
            branch: false,
            id: 'com.msp.dao.entities.Invoice'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '22'
                }
              },
              {
                key: 'TABLE',
                value: 'InvoiceTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'InvoiceType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Invoice Type'
              }
            ],
            name: 'Invoice Type',
            parent: null,
            tooltip: 'Invoice Type',
            branch: false,
            id: 'com.msp.dao.entities.InvoiceType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'LineClassifications'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'LineClassification'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Line Classification'
              }
            ],
            name: 'Line Classification',
            parent: null,
            tooltip: 'Line Classification',
            branch: false,
            id: 'com.msp.dao.entities.LineClassification'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '20'
                }
              },
              {
                key: 'TABLE',
                value: 'Meetings'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Meeting'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Meeting'
              }
            ],
            name: 'Meeting',
            parent: null,
            tooltip: 'Meeting',
            branch: false,
            id: 'com.msp.dao.entities.Meeting'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '30'
                }
              },
              {
                key: 'TABLE',
                value: 'MeetingTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'MeetingType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Meeting Type'
              }
            ],
            name: 'Meeting Type',
            parent: null,
            tooltip: 'Meeting Type',
            branch: false,
            id: 'com.msp.dao.entities.MeetingType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '30'
                }
              },
              {
                key: 'TABLE',
                value: 'MilestoneTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'MilestoneType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Milestone Type'
              }
            ],
            name: 'Milestone Type',
            parent: null,
            tooltip: 'Milestone Type',
            branch: false,
            id: 'com.msp.dao.entities.MilestoneType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'EPMTasksAssignmentData'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'EPMTaskAssignmentData'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'My Work Actual Data (ETAD)'
              }
            ],
            name: 'My Work Actual Data (ETAD)',
            parent: null,
            tooltip: 'My Work Actual Data (ETAD)',
            branch: false,
            id: 'com.msp.dao.entities.EPMTaskAssignmentData'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'MyWorkTasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'MyWorkTask'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'My Work Task'
              }
            ],
            name: 'My Work Task',
            parent: null,
            tooltip: 'My Work Task',
            branch: false,
            id: 'com.msp.dao.entities.MyWorkTask'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'EPMTasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'EPMTask'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'My Work Task (EPMTask)'
              }
            ],
            name: 'My Work Task (EPMTask)',
            parent: null,
            tooltip: 'My Work Task (EPMTask)',
            branch: false,
            id: 'com.msp.dao.entities.EPMTask'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'PaymentTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'PaymentType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Payment Type'
              }
            ],
            name: 'Payment Type',
            parent: null,
            tooltip: 'Payment Type',
            branch: false,
            id: 'com.msp.dao.entities.PaymentType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '25'
                }
              },
              {
                key: 'TABLE',
                value: 'PrioritizationStatus'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'PrioritizationStatus'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Prioritization Status'
              }
            ],
            name: 'Prioritization Status',
            parent: null,
            tooltip: 'Prioritization Status',
            branch: false,
            id: 'com.msp.dao.entities.PrioritizationStatus'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '21'
                }
              },
              {
                key: 'TABLE',
                value: 'PriorityTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'PriorityType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Priority Type'
              }
            ],
            name: 'Priority Type',
            parent: null,
            tooltip: 'Priority Type',
            branch: false,
            id: 'com.msp.dao.entities.PriorityType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '22'
                }
              },
              {
                key: 'TABLE',
                value: 'PurchaseOrders'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'PurchaseOrder'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Purchase Order'
              }
            ],
            name: 'Purchase Order',
            parent: null,
            tooltip: 'Purchase Order',
            branch: false,
            id: 'com.msp.dao.entities.PurchaseOrder'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '25'
                }
              },
              {
                key: 'TABLE',
                value: 'refRequirementsReferredUsers'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'RequirementReferredUser'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Refer for futher investigation'
              }
            ],
            name: 'Refer for futher investigation',
            parent: null,
            tooltip: 'Refer for futher investigation',
            branch: false,
            id: 'com.msp.dao.entities.RequirementReferredUser'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_INTEGRATIONS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '33'
                }
              },
              {
                key: 'TABLE',
                value: 'RestIntegrations'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'RestIntegration'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Rest Integration'
              }
            ],
            name: 'Rest Integration',
            parent: null,
            tooltip: 'Rest Integration',
            branch: false,
            id: 'com.msp.dao.entities.RestIntegration'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '30'
                }
              },
              {
                key: 'TABLE',
                value: 'RiskProbabilities'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'RiskProbability'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk Probability'
              }
            ],
            name: 'Risk Probability',
            parent: null,
            tooltip: 'Risk Probability',
            branch: false,
            id: 'com.msp.dao.entities.RiskProbability'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '30'
                }
              },
              {
                key: 'TABLE',
                value: 'RiskSeverities'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'RiskSeverity'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Risk Severity'
              }
            ],
            name: 'Risk Severity',
            parent: null,
            tooltip: 'Risk Severity',
            branch: false,
            id: 'com.msp.dao.entities.RiskSeverity'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'Goals'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Goal'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'SEC goal'
              }
            ],
            name: 'SEC goal',
            parent: null,
            tooltip: 'SEC goal',
            branch: false,
            id: 'com.msp.dao.entities.Goal'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '27'
                }
              },
              {
                key: 'TABLE',
                value: 'refSystemsBudgetaryLines'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'SystemBudgetaryLineProperty'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Service - Budgetary Line Link'
              }
            ],
            name: 'Service - Budgetary Line Link',
            parent: null,
            tooltip: 'Service - Budgetary Line Link',
            branch: false,
            id: 'com.msp.dao.entities.SystemBudgetaryLineProperty'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '21'
                }
              },
              {
                key: 'TABLE',
                value: 'StatusTypes'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'StatusType'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Status Type'
              }
            ],
            name: 'Status Type',
            parent: null,
            tooltip: 'Status Type',
            branch: false,
            id: 'com.msp.dao.entities.StatusType'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'refStepCheckListsItems'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'StepCheckListItem'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Step Checklist Item'
              }
            ],
            name: 'Step Checklist Item',
            parent: null,
            tooltip: 'Step Checklist Item',
            branch: false,
            id: 'com.msp.dao.entities.StepCheckListItem'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '27'
                }
              },
              {
                key: 'TABLE',
                value: 'refStrategicGoalsAlignments'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'StrategicGoalAlignment'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Strategic Goal Alignment'
              }
            ],
            name: 'Strategic Goal Alignment',
            parent: null,
            tooltip: 'Strategic Goal Alignment',
            branch: false,
            id: 'com.msp.dao.entities.StrategicGoalAlignment'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '20'
                }
              },
              {
                key: 'TABLE',
                value: 'Tasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Task'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Task'
              }
            ],
            name: 'Task',
            parent: null,
            tooltip: 'Task',
            branch: false,
            id: 'com.msp.dao.entities.Task'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '29'
                }
              },
              {
                key: 'TABLE',
                value: 'refScenariosTasks'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'ScenariosTask'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Template Tasks'
              }
            ],
            name: 'Template Tasks',
            parent: null,
            tooltip: 'Template Tasks',
            branch: false,
            id: 'com.msp.dao.entities.ScenariosTask'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '21'
                }
              },
              {
                key: 'TABLE',
                value: 'UnitOfMeasure'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'UnitOfMeasure'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Unit Of Measure'
              }
            ],
            name: 'Unit Of Measure',
            parent: null,
            tooltip: 'Unit Of Measure',
            branch: false,
            id: 'com.msp.dao.entities.UnitOfMeasure'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '25'
                }
              },
              {
                key: 'TABLE',
                value: 'Urgencies'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Urgency'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Urgency'
              }
            ],
            name: 'Urgency',
            parent: null,
            tooltip: 'Urgency',
            branch: false,
            id: 'com.msp.dao.entities.Urgency'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'WorkEstimation'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'WorkEstimation'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Work Estimation'
              }
            ],
            name: 'Work Estimation',
            parent: null,
            tooltip: 'Work Estimation',
            branch: false,
            id: 'com.msp.dao.entities.WorkEstimation'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'Worksheets'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'Worksheet'
              },
              {
                key: 'WORKFLOWABLE',
                value: true
              },
              {
                key: 'CATEGORIZABLE',
                value: true
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Worksheet'
              }
            ],
            name: 'Worksheet',
            parent: null,
            tooltip: 'Worksheet',
            branch: false,
            id: 'com.msp.dao.entities.Worksheet'
          },
          {
            attributes: [
              {
                key: 'DISCIPLINE',
                value: {
                  key: 'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
                  value: '28'
                }
              },
              {
                key: 'TABLE',
                value: 'WorksheetAttendance'
              },
              {
                key: 'SYSTEM_NAME',
                value: 'WorksheetAttendance'
              },
              {
                key: 'WORKFLOWABLE',
                value: false
              },
              {
                key: 'CATEGORIZABLE',
                value: false
              },
              {
                key: 'TIME_AND_PROGRESS_TRACKING_ATTRIBUTE',
                value: false
              }
            ],
            children: [

            ],
            icons: [
              {
                source: '/MSP/resources/images/flex/entity16x16.png',
                tooltip: 'Worksheet Attendance'
              }
            ],
            name: 'Worksheet Attendance',
            parent: null,
            tooltip: 'Worksheet Attendance',
            branch: false,
            id: 'com.msp.dao.entities.WorksheetAttendance'
          }
        ],
        icons: [

        ],
        name: 'Out of the Box Entities',
        parent: null,
        tooltip: 'Out of the Box Entities',
        branch: true,
        id: 'OutOfTheBoxEntities'
      }
    ],
    icons: [

    ],
    name: 'root',
    parent: null,
    tooltip: 'root',
    branch: true,
    id: null
  }

  get items() {
    const result = this.allEntities.children.map((entity) => {
      if (entity.children && entity.children.length) {
        const children = entity.children.map((child) => {
          return { text: child.name }
        })
        return { text: `${entity.name} (${children.length})`, children }
      } else {
        return { text: `${entity.name}` }
      }
    })

    return result
  }

  private async fetchEntities() {
    this.entitiesLoading = true
    try {
      this.allEntities = await axios.get('http://52.152.148.181:3000/api/getEntities')
      console.log(this.items)
    } catch (error) {
      console.log('entities ----', error)
    }
    this.entitiesLoading = false
  }

  mounted() {
    this.fetchEntities()
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  margin: 12px 0 0 14px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    width: 100%;
  }
  .treeview-container {
    height: calc(100vh - 4.5em);
    overflow-y: auto;
    border: 1px solid e2e3e6;
    box-shadow: 1px 1px 10px #525050;
    padding: 0 !important;
  }
  .treeview-header {
    background-color: #e2e3e6;
    margin: 0px !important;
    padding: 24px 18px;
    .add-container {
      .el-col {
        text-align: center;
      }
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
}
</style>
