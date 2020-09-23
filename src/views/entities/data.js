export const _allEntities = {
  attributes: [
    {
      key: 'DISCIPLINES',
      value: [
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '20'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '117'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '118'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '21'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '22'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_EPM_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '23'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '29'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_INTEGRATIONS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '33'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '120'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '121'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '119'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '30'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '25'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_RISK_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '26'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '27'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '28'
        },
        {
          key:
            'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
          value: '122'
        }
      ]
    }
  ],
  children: [
    {
      attributes: [],
      children: [
        {
          attributes: [
            {
              key: 'DISCIPLINE',
              value: {
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
          icons: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_RISK_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
      icons: [],
      name: 'Common Entities',
      parent: null,
      tooltip: 'Common Entities',
      branch: true,
      id: 'CommonEntities'
    },
    {
      attributes: [],
      children: [
        {
          attributes: [
            {
              key: 'DISCIPLINE',
              value: {
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
          id:
            'com.msp.dao.entities.cse.custom.Cse_Cse_ApprovalMatrixTemplateApprover'
        },
        {
          attributes: [
            {
              key: 'DISCIPLINE',
              value: {
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_APPROVALS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
          id:
            'com.msp.dao.entities.cse.custom.Cse_Cse_CampaignspecificEvaluation'
        },
        {
          attributes: [
            {
              key: 'DISCIPLINE',
              value: {
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
          id:
            'com.msp.dao.entities.cse.custom.Cse_Cse_OrganizationBudgetTypeConstraint'
        },
        {
          attributes: [
            {
              key: 'DISCIPLINE',
              value: {
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROCUREMENT_AND_VENDORS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PROJECTS_AND_INNOVATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_USERS_AND_ORGANIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_PRIORITIZATION_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
      icons: [],
      name: 'Customized Entities',
      parent: null,
      tooltip: 'Customized Entities',
      branch: true,
      id: 'CustomizedEntities'
    },
    {
      attributes: [],
      children: [
        {
          attributes: [
            {
              key: 'DISCIPLINE',
              value: {
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_EPM_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_COST_ITEMS_AND_INVOICES_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_INTEGRATIONS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REFERENCE_DATA_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_STRATEGIC_GOALS_AND_BUDGET_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_ACTION_ITEMS_AND_MEETINGS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_GENERAL_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_CORE_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_REQUIREMENT_MANAGEMENT_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
                key:
                  'ENTITY_DISCIPLINE_ENTITY_DISCIPLINE_TIMESHEETS_SYSTEM_NAME_CHOICE_OPTION_DISPLAY_NAME',
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
          children: [],
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
      icons: [],
      name: 'Out of the Box Entities',
      parent: null,
      tooltip: 'Out of the Box Entities',
      branch: true,
      id: 'OutOfTheBoxEntities'
    }
  ],
  icons: [],
  name: 'root',
  parent: null,
  tooltip: 'root',
  branch: true,
  id: null
}
export const _allDisciplines = {
  baseRoles: [
    {
      key: 'Employee',
      value: '1'
    },
    {
      key: 'Administrator',
      value: '6'
    },
    {
      key: 'Team Leader (Obselete)',
      value: '7'
    }
  ],
  dataTypes: [
    {
      key: 'Single Line of Text',
      value: '1'
    },
    {
      key: 'Textarea',
      value: '2'
    },
    {
      key: 'Choice',
      value: '3'
    },
    {
      key: 'Date and Time',
      value: '4'
    },
    {
      key: 'Yes No',
      value: '5'
    },
    {
      key: 'Number',
      value: '6'
    },
    {
      key: 'Large Number',
      value: '7'
    },
    {
      key: 'Number with Decimal Point',
      value: '8'
    },
    {
      key: 'Lookup',
      value: '9'
    },
    {
      key: 'Table',
      value: '10'
    },
    {
      key: 'Multi Lookup',
      value: '11'
    },
    {
      key: 'WORKFLOW_STEP',
      value: '12'
    }
  ],
  dateFormat: 'DD/MM/YYY',
  dateTimeFormat: 'DD/MM/YYY J:NN',
  systemDateFormat: 'dd/MM/yyyy',
  systemDateTimeFormat: 'dd/MM/yyyy HH:mm',
  disciplines: [
    {
      key: 'General',
      value: '29'
    },
    {
      key: 'Action items and meetings',
      value: '20'
    },
    {
      key: 'Approvals',
      value: '117'
    },
    {
      key: 'Budget',
      value: '118'
    },
    {
      key: 'Configuration Items',
      value: '83'
    },
    {
      key: 'Core',
      value: '21'
    },
    {
      key: 'Cost items and invoices',
      value: '22'
    },
    {
      key: 'EPM',
      value: '23'
    },
    {
      key: 'Impact and planning',
      value: '31'
    },
    {
      key: 'Integrations',
      value: '33'
    },
    {
      key: 'Organizational units, users and security',
      value: '24'
    },
    {
      key: 'Prioritization',
      value: '120'
    },
    {
      key: 'Procurement and Vendors',
      value: '121'
    },
    {
      key: 'Projects and Innovation',
      value: '119'
    },
    {
      key: 'Reference data',
      value: '30'
    },
    {
      key: 'Requirement Management',
      value: '25'
    },
    {
      key: 'Risk',
      value: '26'
    },
    {
      key: 'Strategic goals and budget',
      value: '27'
    },
    {
      key: 'Timesheets',
      value: '28'
    },
    {
      key: 'Users and Organization',
      value: '122'
    },
    {
      key: 'Users and security',
      value: '32'
    }
  ],
  languages: [
    {
      key: 'English',
      value: 'en'
    },
    {
      key: 'Hebrew',
      value: 'he'
    }
  ],
  logo: '/MSP/resources/images/karambit/msp_logo_gray.png',
  periodPickerTypes: [
    {
      key: 'Time',
      value: '1'
    },
    {
      key: 'day',
      value: '2'
    },
    {
      key: 'DAY_AND_TIME',
      value: '3'
    },
    {
      key: 'Week',
      value: '4'
    },
    {
      key: 'Month',
      value: '5'
    },
    {
      key: 'Quarter',
      value: '6'
    },
    {
      key: 'Year',
      value: '7'
    }
  ],
  scoreboards: [],
  skins: [
    {
      key: 'Green',
      value: 'green'
    },
    {
      key: 'Blue',
      value: 'blue'
    },
    {
      key: 'Default',
      value: 'default'
    }
  ],
  sqlConnections: [
    {
      key: 'MSP_DB',
      value: '1'
    }
  ],
  states: [
    {
      key: 'Active',
      value: '1'
    },
    {
      key: 'Inactive',
      value: '2'
    },
    {
      key: 'Deleted',
      value: '3'
    }
  ],
  textFormatting: [
    {
      key: 'NO_FORMATTING',
      value: '1'
    },
    {
      key: 'ALLOW_FORMATTING_DEFAULT',
      value: '2'
    },
    {
      key: 'ALLOW_FORMATTING_FULL_TOOLBAR',
      value: '3'
    },
    {
      key: 'FORMATTING_IN_POPUP_ONLY',
      value: '4'
    }
  ],
  translations: [
    {
      key: 'en',
      value: [
        {
          key: 'RESERVED_DB_NAME',
          value:
            'This is a reserved database column name. Type a different display name or column name'
        },
        {
          key: 'WORKFLOW_CONDITION',
          value: 'Workflow Condition'
        },
        {
          key: 'EXPAND_THIS_SECTION_BY_DEFAULT',
          value:
            'Expand this section by default if the following conditions are met'
        },
        {
          key: 'MY_WORK',
          value: 'My Work'
        },
        {
          key: 'WORKFLOW_BUTTONS',
          value: 'Workflow Buttons'
        },
        {
          key: 'USE_FOLLOWING_DISPLAY_NAME_AND_TOOLTIP',
          value:
            'Use the following display name and tooltip instead of the default settings'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_MORE_INFO',
          value: 'Do you want to delete the more info?'
        },
        {
          key: 'IS_BEFORE_STEP',
          value: 'Is before step'
        },
        {
          key: 'EDIT_WORKFLOW_FILTER',
          value: 'Edit Workflow Filter'
        },
        {
          key: 'YES_NO',
          value: 'Yes No'
        },
        {
          key: 'WORKSHEET_AUTH_TREE',
          value: 'Worksheet authorization tree'
        },
        {
          key: 'VALIDATION_FAILED',
          value: 'Validation failed'
        },
        {
          key: 'SET_TASK_GROUP_DISPLAY_NAME',
          value: "Set this Task Group's display name and description"
        },
        {
          key: 'MOVE_WORKFLOW',
          value: 'Move workflow'
        },
        {
          key: 'PERSISTENCEBASEDTO_INTEGRATION_IDENTIFIER_DISPLAY_NAME',
          value: 'Integration Identifier'
        },
        {
          key: 'USERS_WHO_PASS_THE_FOLLOWING_CONDITIONS',
          value: 'Users who pass the following conditions'
        },
        {
          key: 'GRAPHICAL_INDICATOR_NAME',
          value: 'Graphical Indicator Name'
        },
        {
          key: 'IMPORT_EXPORT',
          value: 'Import/Export'
        },
        {
          key: 'FILL_OBJECT_NAME_TRANSLATIONS',
          value: 'Fill object name translations'
        },
        {
          key: 'AUTH_NODE',
          value: 'Authorization Node'
        },
        {
          key: 'TO_LOWER_CASE',
          value: 'to'
        },
        {
          key: 'LIMIT_THE_RANGE_OF_POSSIBLE_VALUES_FOR_THIS_PROPERTY',
          value: 'Limit the range of possible values for this property'
        },
        {
          key: 'MUST_BE_AT_LEAST',
          value: 'Must be at least'
        },
        {
          key: 'SET_GROUPING_ORDER_WORKFLOW_BUTTONS_USING_LIST',
          value:
            'Set the grouping and order of workflow buttons using the list below.'
        },
        {
          key: 'STATUS_LIST',
          value: 'Status List'
        },
        {
          key: 'CONFIGURATION_SUPPORT',
          value: 'Configuration support'
        },
        {
          key: 'USE_FOLLOWING_MESSAGE_INSTTEAD_THE_DEFAULT',
          value: 'Use the following message instead of the default.'
        },
        {
          key: 'ORCHESTRATOR_HOST_NAME',
          value: 'Orchestrator Host Name'
        },
        {
          key: 'OPEN_MORE_INFO',
          value: 'Open more info'
        },
        {
          key: 'REMOVE_FROM_FAVORITES',
          value: 'Remove From Favorites'
        },
        {
          key: 'NEW_TRANSITION_CONDITION',
          value: 'New Transition Condition'
        },
        {
          key: 'USE_THE_FOLLOWING_DISPLAY',
          value:
            'Use the following display name instead of the default settings'
        },
        {
          key: 'SQL_QUERY',
          value: 'SQL Query'
        },
        {
          key: 'NEW_COLUMN_PROPERTY',
          value: 'New Column Property'
        },
        {
          key: 'DELETED',
          value: 'Deleted'
        },
        {
          key: 'DEFAULT_VALUES',
          value: 'Default Values'
        },
        {
          key: 'ACTUAL_WORK_UNLIMITED_HELP',
          value:
            'Recommended when work estimations and progress are not applicable'
        },
        {
          key: 'NO_LOOKUP_PROPERTY_FOUND',
          value: 'No lookup property found on selected entity '
        },
        {
          key: 'ACTUAL_WORK_UNLIMITED',
          value: 'Actual work (unlimited)'
        },
        {
          key: 'VALIDATIONS',
          value: 'Validations'
        },
        {
          key: 'DB_KEY_COL_NAME_HELP',
          value: 'Cannot contain spaces. Example: refEntityid'
        },
        {
          key: 'IS_LESS_THAN_OR_EQUAL_TO',
          value: 'Is less then or equal to'
        },
        {
          key: 'NEW_TASK_GROUP_TOOLTIP',
          value: 'Create a new Task Group so that users can add them together'
        },
        {
          key: 'NEW_SECTION_TOOLTIP',
          value:
            'A section can be used to group properties together on the form'
        },
        {
          key: 'NEW_INFORMATION_GROUP',
          value: 'New Information Group'
        },
        {
          key: 'ID',
          value: 'ID'
        },
        {
          key: 'NO_SELECTED_ITEM',
          value: 'Please select an item'
        },
        {
          key: 'USER_CAN_INTEGRATE_ENTITY_WITH_EXTERNAL',
          value:
            'Users can integrate this entity with third party integrations (cannot be unselected)'
        },
        {
          key: 'OPEN_WEEK_DAYS',
          value: 'Open work week days for tracking'
        },
        {
          key: 'TABLES',
          value: 'Tables'
        },
        {
          key: 'SELECT_STEP_TO_PLACE_AFTER',
          value: 'Select step to place this one after it.'
        },
        {
          key: 'SWITCH_ASSIGNEE',
          value: 'Switch Assignee'
        },
        {
          key: 'ENTER_SQL_QUERY',
          value: 'Enter SQL query'
        },
        {
          key: 'INTEGRATIONFLAG_WARNING',
          value: 'Warning'
        },
        {
          key: 'ENTITY',
          value: 'Entity'
        },
        {
          key: 'CANCEL',
          value: 'Cancel'
        },
        {
          key: 'INCLUDE_BLANK_OPTION',
          value: 'Include a blank option'
        },
        {
          key: 'ORCHESTRATOR_2_MSP_PORT',
          value: 'Orchestrator to MSP Port'
        },
        {
          key: 'ADD_NEW_TAB',
          value: 'Add New Tab'
        },
        {
          key: 'MESSAGES',
          value: 'Messages'
        },
        {
          key: 'NO_ONE',
          value: 'No one'
        },
        {
          key: 'USERS_CAN_CREATE_REPORT_BASED_ON_LOOKUP',
          value: 'Users can create reports based on the lookup entity'
        },
        {
          key: 'DROP_PROPERTIES',
          value: 'Drop Form Properties Here'
        },
        {
          key: 'WORKFLOWABLE_ASSIGNEE_USER_DISPLAY_NAME',
          value: 'Assignee User'
        },
        {
          key: 'NEW_POLICY',
          value: 'New Policy'
        },
        {
          key: 'SAVE_TRANSLATION_WORKBOOK',
          value: 'Save translation workbook'
        },
        {
          key: 'TASK_GROUPS',
          value: 'Task Groups'
        },
        {
          key: 'SHOW_TRANSITIONS',
          value: 'Show transitions'
        },
        {
          key: 'ITEMS_ARE_ARRANGED_IN_A_TREE',
          value: 'Items are arranged in a tree (like portfolios)'
        },
        {
          key: 'SELECT_ASSIGNEE_TO_THE_STEP',
          value: 'Select assignee to be responsible of this step.'
        },
        {
          key: 'SET_ENTITIES_ORDER',
          value: 'Set entities order'
        },
        {
          key: 'SAVING_OR_MOVING_PROHIBITED_IF_ITEM_IN_SET_PASSES',
          value:
            'Saving or moving the workflow will be prohibited if there is and item set which <br/>passes the conditions'
        },
        {
          key: 'OPEN_WORKSHEET_AFTER',
          value: 'Open worksheet after its finish date for only (days):'
        },
        {
          key: 'ERROR',
          value: 'ERROR'
        },
        {
          key: 'CONTROL_CANT_BE_EDITED',
          value:
            'The control is currently not editable. To enable editing add the "Everyone" role group.'
        },
        {
          key: 'DISPLAY_NAME_SINGULAR_INPUT_HELP',
          value:
            'A new entity will be created with this name. Example: My Entity'
        },
        {
          key: 'ALL_COLUMN_PROPERTIES_TOOLTIP',
          value: 'Add properties to the selected container'
        },
        {
          key: 'COPY_VALUES',
          value: 'Copy Values'
        },
        {
          key: 'EDIT_HIERARCHY_LEVEL',
          value: 'Edit Hierarchy Level'
        },
        {
          key: 'RESTRICT_EDITING_TABLE_ROWS',
          value:
            'Restrict editing rows and deleting specific rows by adding conditions.'
        },
        {
          key: 'THE_BUTTON_RETURNS_THE_FLOW_TO_LAST_STEP',
          value:
            'The button returns the workflow to the last flow step it was at.. Include the button for <br />steps like "Awaiting Customer Reply", "Impact Update".'
        },
        {
          key: 'DISPLAY_NAME_PLURAL_INPUT_HELP',
          value:
            'A new table property will be created with this name. Example: My Entities'
        },
        {
          key: 'ENVIRONMENT_APPLICATION_PREFERENCE',
          value: 'Environment Application Preference'
        },
        {
          key: 'MANDATE_USER_TO_ADD_COMMENTS',
          value: 'Mandate the user to add comments'
        },
        {
          key: 'DONE',
          value: 'Done.'
        },
        {
          key: 'NEW_TASK_GROUP',
          value: 'New Task Group...'
        },
        {
          key: 'DOES_NOT_CONTAIN',
          value: 'Does not contain'
        },
        {
          key: 'TASK_FORM',
          value: 'Task form'
        },
        {
          key: 'FOR_LAYOUT_PREVIEW_ONLY',
          value: 'For layout preview only.'
        },
        {
          key: 'IMPORTING_MSP_TRANSLATIONS',
          value: 'Importing MSP translations…'
        },
        {
          key: 'PREPARE_PROPERTIES_LIST',
          value: 'Prepare properties list'
        },
        {
          key: 'DISPLAY_NAME_SINGULAR',
          value: 'Display Name - Singular'
        },
        {
          key: 'UNIQUE_NAME_PROPERTY',
          value: 'Unique Name property:'
        },
        {
          key: 'SERVER_HEALTH',
          value: 'Server Health'
        },
        {
          key: 'REPORT_ENTITIES_ORDER',
          value: 'Report Entities Order'
        },
        {
          key: 'ADD_STEP',
          value: 'Add step'
        },
        {
          key: 'SET',
          value: 'Set'
        },
        {
          key: 'SELECTED_WORK_DAYS',
          value: 'Selected work days will be open by default for user tracking.'
        },
        {
          key: 'CHOOSE_STEP',
          value: 'Choose step'
        },
        {
          key: 'RESTRICT_EDITING_TAB',
          value:
            'Restrict editing this tab and its child controls by adding conditions'
        },
        {
          key: 'NO_RECENT_DOCUMENTS_EXPLANATION',
          value:
            'After you create and modify documents, they will be listed here.'
        },
        {
          key: 'WORKFLOW_FILTER',
          value: 'Workflow filter'
        },
        {
          key: 'NEW_TABLE',
          value: 'New Table'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_GROUP',
          value: 'Do you want to delete the group?'
        },
        {
          key: 'STOP_RULES',
          value: 'Stop Rules'
        },
        {
          key: 'TO_CAMEL_CASE',
          value: 'To'
        },
        {
          key: 'USE_THE_FOLLOWING_TO_CONFIGURE_SECTION_USING_XML',
          value: 'Use the following to configure a section using XML.'
        },
        {
          key: 'ADMIN_TIME',
          value: 'Admin Time'
        },
        {
          key: 'ALLOWED_USERS',
          value: 'allowed users'
        },
        {
          key: 'IMPORT_LOCATION',
          value: 'Import Location'
        },
        {
          key: 'KEEP_ME_SIGNED_IN',
          value: 'Keep me signed-in'
        },
        {
          key: 'XML_ACTION',
          value: 'XML Action'
        },
        {
          key: 'FROM_A_LATER_STEP_ONLY',
          value: 'From a later step only'
        },
        {
          key: 'ROW',
          value: 'Row'
        },
        {
          key: 'USER_DISPLAY_NAME',
          value: 'USER_DISPLAY_NAME'
        },
        {
          key: 'THIS_OBJECT_IS_BASED',
          value: 'This {0} is based on the entity'
        },
        {
          key: 'AUTHORIZATION_TREES',
          value: 'Authorization Trees'
        },
        {
          key: 'MILESTONES_TABLE_STATUS_DELIVERABLE_STATUS_PROPERTY',
          value: 'Milestones Table Status DeliverableStatus Property'
        },
        {
          key: 'MANDATORY_AT_WORKFLOW_TRANSITIONS',
          value: 'Mandatory at workflow transitions'
        },
        {
          key: 'TIMEOUT',
          value: 'Timeout (ms)'
        },
        {
          key: 'CHOICE_OPTIONS',
          value: 'Choice options:'
        },
        {
          key: 'SELECT_AT_LEAST_ONE_NODE',
          value: 'Select at least one node.'
        },
        {
          key: 'DROP_TABLE_PROPERTIES',
          value: 'Drop {0} Table Properties Here'
        },
        {
          key: 'THE_PROPERTY_IS_ALREADY_ON_THE_FORM',
          value:
            'The property is already on the form. Choose a property not on the form'
        },
        {
          key: 'SIDE_STEP_PANEL_TITLE',
          value: 'Side steps'
        },
        {
          key: 'TREE_ENTITY_AS_ROOT',
          value: 'Tree (This entity as root)'
        },
        {
          key: 'FOLLOWERS_ENTITY_DISPLAY_NAME',
          value: 'Follow User'
        },
        {
          key: 'USERS_CAN_VIEW_WORKSHEETS',
          value: 'Users can view worksheets of other users.'
        },
        {
          key: 'CUSTOM_LINK_HELP_TEXT',
          value:
            "To include the value of the property in the URL, type @VALUE. @VALUE of lookup properties is the item's ID. The link will be enabled when the property has a value."
        },
        {
          key: 'REPORTING',
          value: 'Reporting'
        },
        {
          key: 'MYWORKPOLICY_ENTITY_DISPLAY_NAME',
          value: 'My Work Policy'
        },
        {
          key: 'ACTION_BUTTON',
          value: 'Actions button'
        },
        {
          key: 'STATUSDTO_PREVIOUSFLOWSTEPDESCRIPTION_DISPLAY_NAME',
          value: 'Previous Flow Step Description'
        },
        {
          key: 'VIEWER_LICENSE_ROLE',
          value: 'Viewer'
        },
        {
          key: 'ADD_TAB',
          value: 'Add Tab'
        },
        {
          key: 'REFERENCE_TABLE',
          value: 'Reference Table'
        },
        {
          key: 'TRANSITION_SETTINGS_ROLE_GROUP_DESCRIPTION',
          value:
            "Use role groups to check different conditions based on the logged-in user's role."
        },
        {
          key: 'DB_COL_DATA_TYPE',
          value: 'Database column data type'
        },
        {
          key: 'MANUALLY_ADD_TRANSITIONS_OTHER_STEPS',
          value: 'I will manually add transitions to other steps'
        },
        {
          key: 'BCC',
          value: 'BCC'
        },
        {
          key: 'TUESDAY',
          value: 'Tuesday'
        },
        {
          key: 'RESUME_MAIN_FLOW_INDICATOR_TOOLTIP',
          value: 'The workflow can resume the main flow from this step.'
        },
        {
          key: 'ROW_EDITED_BY',
          value: 'Row edited by'
        },
        {
          key: 'PROPERTY_PATH',
          value: 'Property Path'
        },
        {
          key: 'ENTER_NEW_WORKFLOW_NAME',
          value: 'Enter new workflow name'
        },
        {
          key: 'FILTER_REPORT_RESULTS_SUB_TEXT',
          value: 'Only results which pass the following filter will be returned'
        },
        {
          key: 'LOGGED_IN_USER',
          value: 'Logged in user'
        },
        {
          key: 'CHOOSE_STATUS',
          value: 'Choose status'
        },
        {
          key: 'DELETE_ROLE',
          value: 'Delete Role'
        },
        {
          key: 'IS_PRIOR_TO',
          value: 'Is prior to'
        },
        {
          key: 'ADD_CONDITION_XML_ELEMENTS_INSIDE_SERVERSTEP',
          value:
            'Add [Criteria], [ActionsOnTrue] or [ActionsOnFalse] XML elements. They will automatically be placed inside a [Condition] XML element.'
        },
        {
          key: 'EVERYONE_CAN_MOVE_WORKFLOW_BECAUSE_EVERYONE_ROLE_GROUP',
          value:
            'Everyone can move the workflow because the Everyone role group has no conditions.'
        },
        {
          key: 'EDIT_ROLE_GROUP',
          value: 'Edit Role Group'
        },
        {
          key: 'STATUSDTO_PREVIOUSSTATUS_DISPLAY_NAME',
          value: 'Previous Status'
        },
        {
          key: 'PROPERTY_SYSTEM_NAME',
          value: 'Property system name'
        },
        {
          key: 'SELECT_ROLE_TO_AUTHORIZE',
          value: 'Select roles to authorize:'
        },
        {
          key: 'REMOVE_ENTITY_SUB_TITLE',
          value: 'Do you want to remove the entity?'
        },
        {
          key: 'PROPERTIES_LIST',
          value: 'Properties List'
        },
        {
          key: 'REMOVE_ENTITY_TEXT',
          value:
            "Users won't be able to track time and progress against items of this entity. Existing tracked data will not be deleted."
        },
        {
          key: 'STATUS_CONDITION',
          value: 'Status condition'
        },
        {
          key: 'IS_NOT_CONTAINED_IN',
          value: 'Is not contained in'
        },
        {
          key: 'EXPORT_ENVIRONMENT_APPLICATION_PREFERENCES',
          value: 'Export environment application preferences (recommended)'
        },
        {
          key: 'UNIQUE_SYSTEM_NAME',
          value:
            'This system name is already in use. Type a different display name or system name'
        },
        {
          key: 'DISPLAY_NAME_PLURAL',
          value: 'Display Name - Plural'
        },
        {
          key: 'FORM_SETTINGS',
          value: 'Form settings'
        },
        {
          key: 'MAXIMUM_TEXT_SIZE',
          value: 'Maximum text size'
        },
        {
          key: 'BLANK',
          value: 'Blank'
        },
        {
          key: 'WORKSHEET_WORKFLOW_TIP',
          value: 'Worksheet approval is managed by a workflow'
        },
        {
          key: 'DELETE_AUTH_NODE_SUB_TITLE',
          value: 'Do you want to delete the node?'
        },
        {
          key: 'ENABLE_DELETE_ACTION_ITEM',
          value: 'enable “Delete” action in the Edit Action Item popup form'
        },
        {
          key: 'BEGINS_WITH',
          value: 'Begins with'
        },
        {
          key: 'NODE_NAME',
          value: 'Node name'
        },
        {
          key: 'FROM_CAMEL_CASE',
          value: 'From'
        },
        {
          key: 'CREATE',
          value: 'Create'
        },
        {
          key: 'PRODUCT',
          value: 'Product'
        },
        {
          key: 'ITEM_WAS_DELETED',
          value: 'Item was deleted'
        },
        {
          key: 'MOVE_WORKFLOW_TO_A_SPECIFIC_STEP',
          value: 'Move workflow to a specific step'
        },
        {
          key: 'ENTITY_CATEGORY_CONDITION',
          value: 'Entity category condition'
        },
        {
          key: 'IS_CONTAINED_IN',
          value: 'Is contained in'
        },
        {
          key: 'CHOOSE_ASSIGNEE',
          value: 'Choose assignee'
        },
        {
          key: 'MESSAGES_TAB',
          value: 'Messages tab'
        },
        {
          key: 'NOTE_THE_FIRST_BUTTON_WILL_ALWAYS_BE_DISPLAYED_IN_FULL_SIZE',
          value: 'Note: the first button will always be displayed in full size.'
        },
        {
          key: 'ALL_TRANSITIONS_USING_THIS_BUTTON_WILL_BE_DELETED',
          value: 'All transitions using this button will be deleted as well.'
        },
        {
          key: 'BACK_BUTTON',
          value: '< Back'
        },
        {
          key: 'THE_STEP_OF',
          value: 'The step of'
        },
        {
          key: 'OPEN_COLUMN_SETTINGS',
          value: 'Open column settings'
        },
        {
          key: 'XML',
          value: 'XML'
        },
        {
          key: 'ADD_NEW_REPORT',
          value: 'Add New Report'
        },
        {
          key: 'EDIT_ITEM_SET_ACTION',
          value: 'Edit Item Set Action'
        },
        {
          key: 'NEW_TAB_TOOLTIP',
          value: 'Click on tab icon to add tab components'
        },
        {
          key: 'TO_ADDITIONAL_USERS',
          value: 'To Additional Users'
        },
        {
          key: 'REVERT',
          value: 'Revert'
        },
        {
          key: 'CALENDAR',
          value: 'Calendar'
        },
        {
          key: 'RESTRICT_EDITING_CONTROL',
          value: 'Restrict editing this control by adding conditions'
        },
        {
          key: 'DELETE_ITEM_SUB_TITLE',
          value: 'Do you want to delete this item?'
        },
        {
          key: 'DISPLAY_STEP_IN_WORKFLOW_GRAPH',
          value: 'Display step in form workflow graphs'
        },
        {
          key: 'ADDING_A_ROW_CAN_BE_DONE',
          value: 'Adding a row can be done by'
        },
        {
          key: 'OR',
          value: 'or'
        },
        {
          key: 'FOLDER_TITLE',
          value:
            'The user will be authorized if he / she is authorized to one of the nodes in the folder.'
        },
        {
          key: 'IS_PRIOR_TO_OR_EQUAL_TO',
          value: 'Is prior to or equal to'
        },
        {
          key: 'ANYONE_WHO_CAN_EDIT_THE_TABLE',
          value: 'Anyone who can edit the table'
        },
        {
          key: 'ENTITY_SYSTEM_NAME',
          value: 'Entity system name'
        },
        {
          key: 'A_FORM_WITH_ENTERED_NAME_ALREADY_EXISTS',
          value: 'A form called "{0}" already exits in the system'
        },
        {
          key: 'APPLICATION_PREFERENCE',
          value: 'Application Preference'
        },
        {
          key: 'EMPTY',
          value: 'Empty'
        },
        {
          key: 'USER_SET_IN_APP_PREF_TITLE',
          value:
            'The user will be authorized if he / she is set in an application preference.'
        },
        {
          key: 'EDIT_PROPERTY_CHANGE_CONDITION',
          value: 'Edit Property Change Condition'
        },
        {
          key: 'DOES_NOT_BEGIN_WITH',
          value: 'Does not begin with'
        },
        {
          key: 'NONE_OF_THE_ITEMS_PASS_THE_CONDITION',
          value: 'None of the items pass the condition'
        },
        {
          key: 'SET_THE_GROUPING_OF_WORKFLOW_BUTTONS_USING_THE_LIST_BELOW',
          value:
            'Set the grouping and order of workflow buttons using the list below.'
        },
        {
          key: 'USER_SET_IN_APP_PREF',
          value: 'User set in application preference'
        },
        {
          key: 'SEND_EMAIL_NOTIFICATION_WHEN',
          value: 'Send e-mail notification when'
        },
        {
          key: 'PRINT',
          value: 'Print'
        },
        {
          key: 'ENABLE_DELETE_ATTACHMENT_BUTTON',
          value: 'enable “Delete Attachment" button'
        },
        {
          key: 'ANYONE_WHO_CAN_EDIT_THE_ROW',
          value: 'Anyone who can edit the row'
        },
        {
          key: 'USERS_CAN_CHANGE_ITEM_STATUS_USING_WORKFLOW',
          value:
            'Users can change item status using a workflow and integrate it to external systems (cannot be unselected)'
        },
        {
          key: 'MSP_2_ORCHESTRATOR_PORT',
          value: 'MSP to Orchestrator Port'
        },
        {
          key: 'EXPORT_MSP_LANGUAGE_ENTRIES',
          value: 'Export MSP language entries'
        },
        {
          key: 'SYSTEM_NAME_LABEL',
          value: 'System name'
        },
        {
          key: 'ENTITY_SYSTEM_NAME_INPUT_HELP',
          value:
            'Cannot contain spaces. Capitalize first letters. Example: MyEntity'
        },
        {
          key: 'CRITERIA',
          value: 'Criteria'
        },
        {
          key: 'MANDATORY_AT_WORKFLOW_TRANSITIONS_HELP',
          value:
            'The user could save the form when the property is empty, <br/>but will have to fill it before moving to another step.'
        },
        {
          key: 'DELETE_PROPERTY',
          value: 'Delete Property'
        },
        {
          key: 'YOU_SHOUD_REMOVE_AUTHORIZATION_NODES_BEFORE_DELETING',
          value:
            'You should remove authorization nodes referencing this role before deleting it.'
        },
        {
          key: 'TYPE_A_NUMBER',
          value: 'Type a number'
        },
        {
          key: 'ATTACHMENT_MUST_EXIST_FROM_THIS_STEP',
          value: 'Attachment must exist from this step onwards'
        },
        {
          key: 'FORMAT_NUMBERS',
          value: 'Format Numbers'
        },
        {
          key: 'GENERAL_INTEGRATION',
          value: 'General Integration'
        },
        {
          key: 'DELETE_RIBBON_GROUP',
          value: 'Delete Group'
        },
        {
          key: 'USE_THE_FOLLOWING_INSTEAD_OF_THE_DEFAULT_SETTING',
          value: 'Use the following Instead of the default setting'
        },
        {
          key: 'DELETE_MY_WORK_POLICY',
          value: 'Delete My Work Policy'
        },
        {
          key: 'SELECT_ICON',
          value: 'Select Icon'
        },
        {
          key: 'WORKFLOWABLE_WORKFLOWID_DISPLAY_NAME',
          value: 'Workflow ID'
        },
        {
          key: 'NEW_ITEM_SET_ACTION',
          value: 'New Item Set Action'
        },
        {
          key: 'TYPE_TEXT',
          value: 'Type text'
        },
        {
          key: 'USE_SEPARATOR',
          value: 'Use 1,000 separator (,)'
        },
        {
          key: 'INSERT_NEW_COLUMN_PROPERTY',
          value: 'Insert New Column Property'
        },
        {
          key: 'DEFAULT_FORMAT_SETTINGS_HELP_TEXT',
          value:
            'Configure the default format of the entity in forms, dashboards and notifications'
        },
        {
          key: 'DELETE_MY_WORK_POLICY_TEXT',
          value:
            "Worksheets may have already been created using this policy. If you delete it, users won't be able to view them."
        },
        {
          key: 'CREATE_STEP_AFTER',
          value: 'Create step after'
        },
        {
          key: 'SELECTED_ELEMENT',
          value: 'Selected Element'
        },
        {
          key: 'SELECT_ENTITY',
          value: 'Entity'
        },
        {
          key: 'IATTACHMENTSSETHOLDER_ATTACHMENTS_DISPLAY_NAME',
          value: 'Attachments'
        },
        {
          key: 'ENTITIES_AND_TASK_GROUPS',
          value: 'Entities and Task Groups'
        },
        {
          key: 'LOOKUP_ENTITY',
          value: 'Lookup Entity'
        },
        {
          key: 'TABLE_LEVEL_AUTH_TIP',
          value:
            'For example, all tasks owners will be authorized to edit the requirement form.'
        },
        {
          key: 'ENTER_SQL',
          value: 'Enter a SQL query returning a single value.'
        },
        {
          key: 'ROW_FILTER',
          value: 'Row filter'
        },
        {
          key: 'ATTENDANCE',
          value: 'Attendance'
        },
        {
          key: 'LANGUAGES',
          value: 'Languages'
        },
        {
          key: 'RETURN_TO_PROPERTIES_LIST',
          value: 'Return to properties list'
        },
        {
          key: 'FIND_ENTITY',
          value: 'Find entity'
        },
        {
          key: 'LINK_TO_ENTITY_FORM',
          value: 'Link to entity form'
        },
        {
          key: 'TO_ASSIGNEE',
          value: 'To Assignee'
        },
        {
          key: 'UNIQUE_DB_COLUMN_NAME',
          value:
            'This database column name is already in use. Type a different display name or database column name'
        },
        {
          key: 'DISPLAY_IN_RESUME_MAIN_FLOW',
          value: 'Display "Resume main flow" button'
        },
        {
          key: 'MILESTONES_TABLE_STATUS_PROPERTY',
          value: 'Milestones Table Status Property'
        },
        {
          key: 'TRACKING',
          value: 'Tracking'
        },
        {
          key: 'MSP_CONNECTION_TIMEOUT',
          value: 'MSP Connection Timeout (ms)'
        },
        {
          key: 'ENTITY_CATEGORY_FOR_NEW_ROW_NOTE',
          value:
            "Note: The item's workflow rules and actions won't be performed when creating, modifying and deleting it using the table."
        },
        {
          key: 'MILESTONES_TABLE_DUEDATE_PROPERTY',
          value: 'Milestones Table DueDate Date Property'
        },
        {
          key: 'OUT_OF_THE_BOX_ENTITIES',
          value: 'Out of the Box Entities'
        },
        {
          key: 'TYPE',
          value: 'Type'
        },
        {
          key: 'NOT_MANDATORY',
          value: 'Not mandatory'
        },
        {
          key: 'ADDITIONAL_CONDITIONS',
          value: 'Additional conditions'
        },
        {
          key: 'SEND_EMAIL_NOTIFICATION_TO_THE_FOLLOWING_USERS',
          value: 'Send the e-mail notification to the following users'
        },
        {
          key: 'A_WORKFLOW_WITH_ENTERED_NAME_ALREADY_EXISTS',
          value: 'A workflow called "{0}" already exits in the system'
        },
        {
          key: 'COMPARE_A_PROPERTY_TO',
          value: 'Compare a property to another property or to a given value'
        },
        {
          key: 'SET_INITIAL_VALUE_OF_TASK',
          value: 'Set initial value to properties of tasks added to worksheets'
        },
        {
          key: 'PRESENT_EDIT_BUTTON_WITH_EDIT_TITLE',
          value:
            'present the "Edit" button with the "Edit" title, and also the "Edit Attachment Description" popup form should be "Editable"'
        },
        {
          key: 'PARTICIPANTS',
          value: 'Participants'
        },
        {
          key: 'CUSTOMIZED_ENTITIES',
          value: 'Customized Entities'
        },
        {
          key: 'AFTER_USER_CHANGES_VALUE_COPY_THIS_TO_OTHER_PROPERTY',
          value:
            'After the user changed the value of this property, copy the following values to other properties.'
        },
        {
          key: 'EDIT_WORKFLOW_CONDITION',
          value: 'Edit Workflow Condition'
        },
        {
          key: 'XML_COLUMN_TOOLTIP',
          value: 'Enters an XML column'
        },
        {
          key: 'FORMAT',
          value: 'Format'
        },
        {
          key: 'PERCENT_PREDICTED_CONSUMPTION',
          value: '% Predicted Consumption'
        },
        {
          key: 'DELETE_ITEM_TEXT',
          value: 'Note that child items will be deleted as well'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_CONTROL',
          value: 'Do you want to delete the control?'
        },
        {
          key: 'CREATE_NEW_PRODUCT',
          value: 'Create New Product'
        },
        {
          key: 'FIND_DATA_TYPE',
          value: 'Find data type'
        },
        {
          key: 'CONFIGURATION_ITEMS_SECTION',
          value: 'Configuration Items'
        },
        {
          key: 'RESET_ZOOM',
          value: 'Reset zoom'
        },
        {
          key: 'MOVE_UP',
          value: 'Move up'
        },
        {
          key: 'NAME',
          value: 'Name'
        },
        {
          key: 'AN_ILIO_WILL_BE_CREATED_AND_THEN_RUN',
          value:
            'An instance-level integration operation will be created (if not already created) and then run.'
        },
        {
          key: 'CHOOSE_A',
          value: 'Choose a'
        },
        {
          key: 'RESUME_MAIN_FLOW',
          value: 'Resume main flow'
        },
        {
          key: 'CONTROL_CANT_BE_VIEWED',
          value:
            'The control is currently not viewable. To enable viewing add the "Everyone" role group.'
        },
        {
          key: 'THE_STATE_OF_THE_ENTITY_IN_THIS_STATUS',
          value: 'The state of the entity while in this status'
        },
        {
          key: 'ATTACHMENT_SUPPORT',
          value: 'Support an attachment list for this entity.'
        },
        {
          key: 'ATTACHMENT_STOP_RULE_DESCRIPTION',
          value:
            'The user will have to attach a file before the item can be progressed'
        },
        {
          key: 'PERSISTENCEBASEDTO_CREATIONUSER_DISPLAY_NAME',
          value: 'Creation User'
        },
        {
          key: 'ATTACHMENTS_PROPERTY_DISPLAY_NAME',
          value: 'Attachments'
        },
        {
          key: 'SENIOR_NODE_TIP',
          value: 'The senior node is automatically authorized as well.'
        },
        {
          key: 'USERS_CAN_ATTACH_FILES_TO_ITEM_CANNOT_BE_UNSELECTED',
          value: 'Users can attach files to items (cannot be unselected)'
        },
        {
          key: 'EXAMPLE_PORTFOLIO_REQUIREMENT_TASK',
          value: 'Example: Portfolio / Requirement / Task'
        },
        {
          key: 'THIS_REPORT_IS_BASED',
          value: 'This report is based on the entity'
        },
        {
          key: 'USERS_ASSIGNED_TO_ROLE_TIP',
          value: 'For example, all referents.'
        },
        {
          key: 'FILTER_PARTICIPANTS',
          value: 'Filter the participants'
        },
        {
          key: 'STEP_ONE_DESCRIPTION',
          value:
            'Step 1 imports entities and SQL objects (views, stored procedures and functions).'
        },
        {
          key: 'OOB_PROPERTIES',
          value: 'Out-Of-the-box properties'
        },
        {
          key: 'WORKSAPCE_ID',
          value: 'Workspace ID'
        },
        {
          key: 'YOU_SHOUD_REMOVE_FORMS_BEFORE_DELETE',
          value:
            'You should remove froms and workflows referencing this authorization tree before deleting.'
        },
        {
          key: 'USE_THE_FOLLOWING_NAME_FORMAT_IN_MYWORK_INSTEAD_OF_THE_DEFAULT',
          value: 'Use the following name format in My Work instead of default'
        },
        {
          key: 'AVAILABLE_WORKFLOWS',
          value: 'Available workflows'
        },
        {
          key: 'SESSION_END_MESSAGE_SUB_TEXT',
          value: 'Any unsaved changes will be lost.'
        },
        {
          key: 'CREATE_APPLICATION_PREFERENCE_HEADER',
          value: 'Create a new application preference and set its value'
        },
        {
          key: 'NEW_PROPERTY_TOOLTIP',
          value: 'Create property'
        },
        {
          key: 'AUTHORIZATION_PANE_DEFAULT_TEXT',
          value: 'Select an authorization tree to view its nodes and settings'
        },
        {
          key: 'CONDITION_PROPERTY_PLACED_IN_FORM_MESSAGE',
          value:
            'You choose a property placed on the form or a formula property. Please notice that the condition will be executed once when the form is displayed, and not after changes are made to the property.'
        },
        {
          key: 'TO_DELETE_THIS_LANE_FIRST_DELETE_STEPS',
          value: 'To delete this lane, first delete all steps in it'
        },
        {
          key: 'WORKSHEET_COLUMNS_BEHAVIOUR',
          value: 'Worksheet columns behaviour'
        },
        {
          key: 'BUTTONS',
          value: 'Buttons'
        },
        {
          key: 'MOVE_TO',
          value: 'Move to '
        },
        {
          key: 'SATURDAY',
          value: 'Saturday'
        },
        {
          key: 'TABULAR_REPORTS_PROPERTY_CATEGORY',
          value: 'Tabular Reports Property Category'
        },
        {
          key: 'SELECT_WORKFLOW',
          value: 'Select workflow'
        },
        {
          key: 'SOME_SETTINGS_HAVE_INVALID_DATA',
          value:
            'Some settings have invalid data. Please fix settings marked in red.'
        },
        {
          key: 'PROPERTY_CONDITION',
          value: 'Property Condition'
        },
        {
          key: 'ITEM_INTEGRATION',
          value: 'Item Integration'
        },
        {
          key: 'SELECT_ICON_FOR_THE_BUTTON',
          value: 'Select an icon for the button'
        },
        {
          key: 'NEW_WORKFLOW',
          value: 'New Workflow'
        },
        {
          key: 'SET_TRACKING_PERMISSIONS',
          value: 'Set tracking permissions for days, tasks and attendance.'
        },
        {
          key: 'BACKUP_SOLUTION_CONFIGURATION_TIP',
          value: 'It will be created under Export Location'
        },
        {
          key: 'DAY_COLUMNS',
          value: 'Day Columns'
        },
        {
          key:
            'THE_COMPARISON_WILL_BE_DONE_USING_BOTH_DATE_AND_TIME_COMPONENTS',
          value:
            'The comparison will be done using both date and time components'
        },
        {
          key: 'PERCENT_COMPLETE_ONLY',
          value: '% Complete only'
        },
        {
          key: 'DURATION',
          value: 'Duration'
        },
        {
          key: 'OPEN_EXISTING_FORM',
          value: 'Open existing form:'
        },
        {
          key: 'ADD_A_PROPERTY_TO_THE_FORM',
          value: 'Add a property to the form'
        },
        {
          key: 'PERSISTENCEBASEDTO_TIMEUPDATED_DISPLAY_NAME',
          value: 'Time Updated'
        },
        {
          key: 'REMAINING_WORK_USER_REPORT',
          value: 'Users decrease it to report progress'
        },
        {
          key: 'ADMINISTRATOR_ROLE',
          value: 'Administrator'
        },
        {
          key: 'RESTRICT_EDITING_TABLE',
          value:
            'Restrict editing and adding rows to the table by adding conditions.'
        },
        {
          key: 'DB_COL_NAME',
          value: 'Database column name'
        },
        {
          key: 'THIS_WORKFLOW_IS_BASED_ON',
          value: 'This workflow is based on'
        },
        {
          key: 'USAGES',
          value: 'Usages'
        },
        {
          key: 'NEW_VIRTUAL_TOOLTIP',
          value: 'Create new virtual entity'
        },
        {
          key: 'USER_IS_ASSIGNED',
          value: 'User is assigned to one of the following roles'
        },
        {
          key: 'INDEXPOSITIONABLE_INDEXPOSITION_DISPLAY_NAME',
          value: 'Index Position'
        },
        {
          key: 'OVERRIDE_CONDITIONS',
          value:
            'Use the following conditions instead of inheriting conditions from'
        },
        {
          key: 'REMAINING_WORK',
          value: 'Remaining Work'
        },
        {
          key: 'PERCENT_COMPLETE_USER_REPORT',
          value: 'Users increase it to report progress'
        },
        {
          key: 'SET_INFORMATION_GROUP_DISPLAY',
          value: "Set this information group's display name"
        },
        {
          key: 'DONT_REMOVE',
          value: "Don't Remove"
        },
        {
          key: 'ATTACHMENT_DISPLAY_NAME',
          value: 'ATTACHMENT_DISPLAY_NAME'
        },
        {
          key: 'ADMIN_TIME_REPORT_FORM',
          value: 'Admin Time Report form'
        },
        {
          key: 'EXPORT',
          value: 'Export'
        },
        {
          key: 'DELETE_TAB',
          value: 'Delete tab'
        },
        {
          key: 'THE_PROPERTY_WILL_BE_INSERTED',
          value:
            'The property will be inserted at the end of the controls container'
        },
        {
          key: 'REVERT_TOOLTIP',
          value: 'Return to last saved data'
        },
        {
          key: 'EXPORT_MSP_TRANSLATIONS',
          value: 'Exporting MSP translations…'
        },
        {
          key: 'ITEM_SET',
          value: 'Item Set'
        },
        {
          key: 'FOLDER_NAME',
          value: 'Folder name'
        },
        {
          key: 'INTEGRATIONFLAG_SUCCESS',
          value: 'Success'
        },
        {
          key: 'VIEWING_WORKSHEET_FOR_EXAMPLE',
          value:
            "For example, a team leader can view his or her team members' worksheets:"
        },
        {
          key: 'REFRESH',
          value: 'Refresh'
        },
        {
          key: 'DELETE_TASK_GROUP_TITLE',
          value: 'Delete Task Group'
        },
        {
          key: 'CHOOSE_COLUMNS',
          value:
            'Choose columns for the browse table, which is displayed after double-clicking the control'
        },
        {
          key: 'ADD_THIS_INIO_TO_AN_ORC',
          value:
            'Add this integration operation to an orchestrator. It can be done with an Orchestrator Settings modal panel.'
        },
        {
          key: 'TAB',
          value: 'Tab'
        },
        {
          key: 'CONDITIONALLY',
          value: 'Conditionally'
        },
        {
          key: 'AVAILABLE_COLUMNS',
          value: 'Available columns'
        },
        {
          key: 'ADD_JAVASCRIPT_XML_ELEMENTS_INSIDE_CUSTOM',
          value:
            'Add [Javascript] XML element. It will automatically be placed inside a [ActionsOnTrue]/[Custom] XML element.'
        },
        {
          key: 'DRAG_PROPERTIES',
          value: 'Drag properties onto the form'
        },
        {
          key: 'ALLOW_ROWS_REORDER',
          value: 'Allow rows reordering'
        },
        {
          key: 'SKIP_THIS_ITEM_SET_CONDITION_IF_SET_IS_EMPTY',
          value: 'Skip this item set condition if the set is empty'
        },
        {
          key: 'ATTACHMENT_STOP_RULE_MESSAGE',
          value:
            "An attachment of type '{0}' must exist from step '{1}' onwards."
        },
        {
          key: 'DEFAULT_SKIN',
          value: 'Default Skin'
        },
        {
          key: 'CHOOSE_PROPERTY',
          value: 'Choose Property'
        },
        {
          key: 'SUNDAY',
          value: 'Sunday'
        },
        {
          key: 'DELETE_ROLE_DESCRIPTION',
          value:
            "The role's steps will be deleted. You should migrate entities at those workflow steps to other workflow steps."
        },
        {
          key: 'DEFINE',
          value: 'Define'
        },
        {
          key: 'PROPERTY_HOLDING_PLANNED_WORK',
          value: 'Work property'
        },
        {
          key: 'USER_ENTITY_DISPLAY_NAME',
          value: 'User'
        },
        {
          key: 'THE_INFORMATION_PROPERTY_CANT_BE_A_LINK',
          value: 'The information property value can be a link'
        },
        {
          key: 'LIST',
          value: 'List'
        },
        {
          key: 'MOVE_TO_MORE_INFO',
          value: 'Move to more info'
        },
        {
          key: 'DELETE_ORCHESTRATOR',
          value: 'Delete Orchestrator'
        },
        {
          key: 'TRANSITION',
          value: 'Transition'
        },
        {
          key: 'LONG_RUNNING_OPERATIONS',
          value: 'Long running operations'
        },
        {
          key: 'OBSOLETE',
          value: 'Obsolete'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_TABLE',
          value: 'Do you want to delete the table?'
        },
        {
          key: 'DROP_TABLES',
          value: 'Drop Table Properties Here'
        },
        {
          key: 'SEND_EMAIL_NOTIFICATION_WHEN_PROPERTY_VALUE_CHANGED',
          value:
            "Send the e-mail notification when the property's value was changed"
        },
        {
          key: 'USE_THE_FOLLOWING_LINK_SETTINGS',
          value:
            'Use the following link settings, instead of the default setting'
        },
        {
          key: 'PRESENT_NEW_ACTION_ITEM_SECTION',
          value: 'present the "Add New Action Item" section'
        },
        {
          key: 'HISTORY_TAB',
          value: 'History tab'
        },
        {
          key: 'REMOVE_STEP',
          value: 'Remove Step'
        },
        {
          key: 'NO_LINK',
          value: 'No link'
        },
        {
          key: 'WORK_USER_REPORT',
          value: 'Users can update work estimation'
        },
        {
          key: 'ADD_PROPERTY',
          value: 'Add Property'
        },
        {
          key: 'AUTHORIZATION_TREE',
          value: 'Authorization Tree'
        },
        {
          key: 'ALERT',
          value: 'Alert'
        },
        {
          key: 'EDIT_MOVE_WORKFLOW_ACTION',
          value: 'Edit Move Workflow Action'
        },
        {
          key: 'ADDITIONAL_CONDITIONS_OPTIONAL',
          value: 'Additional conditions (optional)'
        },
        {
          key: 'XML_CONTROL_TOOLTIP',
          value: 'Enters and XML Control'
        },
        {
          key: 'CONDITIONS_CANNOT_BE_EMPTY',
          value: 'Additional Conditions cannot be empty.'
        },
        {
          key: 'DISPLAY_ITEMS_IN_DROP_DOWN_TOOLTIP',
          value: 'Not recommended if the number of items exceeds 25'
        },
        {
          key: 'USE_THE_FOLLOWING_COLUMNS_SETTINGS',
          value:
            'Display the following properties as columns, instead of the default columns'
        },
        {
          key: 'NONE',
          value: 'None'
        },
        {
          key: 'THE_GROUP_NOT_DISPLAYED_ADD_EVERYONE',
          value:
            'The group will not be displayed. To display it, add the Everyone role group.'
        },
        {
          key: 'EVERYONE',
          value: 'Everyone'
        },
        {
          key: 'MANDATORY_TEXT_AREA',
          value: 'Type a value'
        },
        {
          key: 'NEW_VALUE_CAN_BE_EMPTY',
          value: 'New value can be empty'
        },
        {
          key: 'STOP_RULES_ARE_TRIGGERED_AFTER_ACTION_RULES',
          value: '<b>Stop rules are triggered after action rules.</b>'
        },
        {
          key: 'REMOVE',
          value: 'Remove'
        },
        {
          key: 'DISCIPLINE',
          value: 'Discipline'
        },
        {
          key: 'HALF_SIZE',
          value: 'Half size'
        },
        {
          key: 'ENTITIES_EDITOR',
          value: 'Entities'
        },
        {
          key: 'SPECIFIC_USERS',
          value: 'Specific users'
        },
        {
          key: 'MUST_BE_AT_MOST',
          value: 'Must be at most'
        },
        {
          key: 'RESTRICT_EDITING_SECTION',
          value:
            'Restrict editing this section and its child controls by adding conditions'
        },
        {
          key: 'CREATE_AND_NEW',
          value: 'Create & New'
        },
        {
          key: 'USE_THE_FOLLOWING_FORMAT',
          value:
            'Use the following format settings instead of the default settings'
        },
        {
          key: 'UNIQUE_ID',
          value: 'Set property as unique id'
        },
        {
          key: 'PROPERTIES',
          value: 'Properties'
        },
        {
          key: 'LEAVE_NEW_PROPERTY_WARNING',
          value:
            'Are you sure you want to leave this page without saving the property?'
        },
        {
          key: 'PROPERTY_SYSTEM_NAME_INPUT_HELP',
          value: 'Cannot contain spaces. Example: myProperty'
        },
        {
          key: 'HOST_NAME',
          value: 'Host Name'
        },
        {
          key: 'ACTUAL_WORK_REMAINING_WORK_AND_PERCENT_WORK_COMPLETE',
          value: 'Actual Work, Remaining Work and % Work Complete'
        },
        {
          key: 'CHANGE_COLOR',
          value: 'Change the color'
        },
        {
          key: 'NONE_LICENSE_ROLE',
          value: 'None'
        },
        {
          key: 'RETURN_TO_SETTINGS',
          value: 'Return to settings'
        },
        {
          key: 'OUT_OF_THE_BOX_POLICIES',
          value: 'Out of the Box Policies'
        },
        {
          key: 'ACTION_NAME',
          value: 'Action name'
        },
        {
          key: 'SECTION',
          value: 'Section'
        },
        {
          key: 'TIME',
          value: 'Time'
        },
        {
          key: 'COMMON_ENTITIES',
          value: 'Common Entities'
        },
        {
          key: 'FIND_APPLICATION_PREFERENCE',
          value: 'Find application preference'
        },
        {
          key: 'WILL_BE_APPENDED_TO_WORKFLOW',
          value: 'Will be appended to the workflow element'
        },
        {
          key: 'SORT_BY',
          value: 'Sort by'
        },
        {
          key: 'REMOVE_ROLE',
          value: 'Remove Role'
        },
        {
          key: 'OVERRIDE_WORKSHEET_COLUMNS',
          value:
            'Display the following worksheet columns instead of the default columns'
        },
        {
          key: 'APPROVERS',
          value: '%s approvers'
        },
        {
          key: 'EXPORT_ONLY_ENTRIES_MISSING_TRANSLATION',
          value: 'Export only entries missing translation'
        },
        {
          key:
            'ACTIONS_DEFINED_HERE_WONT_BE_PERFORMED_IF_SKIP_THIS_STEP_TO_DO_DEFINE_RULE',
          value:
            "Actions defined here won't be performed if the workflow skipped over the step. To do so, define action rule by<br/>opening <b>Workflow Settings</b>, and clicking <b>Action Rules</b>."
        },
        {
          key: 'SET_PROPERTY_VALUE',
          value: 'Set property value'
        },
        {
          key: 'EDIT_CALENDAR',
          value: 'Edit Calendar'
        },
        {
          key: 'TOTAL_ACTUAL_WORK_ATTENDANCE',
          value: 'Total actual work equals to attendance per day.'
        },
        {
          key: 'SAVE_FAILED_MESSAGE',
          value:
            'There seems to be a problem saving the changes. Please try again later, or contact your system administrator.'
        },
        {
          key: 'SELECT_AT_LEAST_ONE_OPTION',
          value: 'Select at least one option from the list.'
        },
        {
          key: 'WORKFLOWABLE_INTEGRATIONFLAG_DISPLAY_NAME',
          value: 'Integration Flag'
        },
        {
          key: 'ARE_YOU_SURE_YOU_WANT_TO_REMOVE_OBJECT_WARNING',
          value: 'Are you sure you want to remove this {0}?'
        },
        {
          key: 'SKIP_THIS_CONDITION_IF_SET_IS_EMPTY',
          value: 'Skip this condition if the set is empty'
        },
        {
          key: 'USERS_CAN_CHANGE_ITEMS_ORDER_INSIDE_TABLES',
          value: 'Users can change items order inside tables'
        },
        {
          key: 'CHOOSE_TABLE_ENTITY',
          value: 'Choose Table Entity'
        },
        {
          key: 'ITEM_SET_ACTION',
          value: 'Item Set Action'
        },
        {
          key: 'DO_YOU_WANT_TO_REMOVE',
          value: 'Do you want to remove {0} ?'
        },
        {
          key: 'ADDITIONAL_USERS',
          value: 'Additional users'
        },
        {
          key: 'CLONE',
          value: 'Clone'
        },
        {
          key: 'MOVE_TO_TABLE',
          value: 'Move to table'
        },
        {
          key: 'FORMAT_DATE_AND_TIME',
          value: 'Format Date and Time'
        },
        {
          key: 'FILL_LANGUAGE_ENTRY_TRANSLATIONS',
          value: 'Fill language entry translations'
        },
        {
          key: 'DELETING_A_ROW_CAN_BE_DONE',
          value: 'Deleting a row can be done by'
        },
        {
          key: 'CHOOSE_TWO_DIFFERENT_STEPS',
          value: 'Choose two different steps'
        },
        {
          key: 'TRIGGERING_CONDITIONS_STEP',
          value: 'Step 1/3 - Triggering conditions'
        },
        {
          key: 'NEW_VIRTUAL_ENTITY',
          value: 'New Virtual Entity'
        },
        {
          key: 'ITEM_SET_CONDITION',
          value: 'Item Set Condition'
        },
        {
          key: 'CONDITIONS',
          value: 'Conditions'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_INFORMATION_SECTION',
          value: 'Do you want to delete the information section'
        },
        {
          key: 'OLIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST',
          value:
            'OLIOs not added to any Orchestrator will run on the first Orchestrator.'
        },
        {
          key: 'NEW_WORKFLOW_SIDE_STEP',
          value: 'Add Side Step'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_APPLICATION_PREFERENCE',
          value: 'Do you want to delete the application preference?'
        },
        {
          key: 'ATTACHMENT_OF_TYPE',
          value: 'Attachment of type'
        },
        {
          key: 'TOOLTIP',
          value: 'Tooltip'
        },
        {
          key: 'IN_TREE',
          value: 'in tree'
        },
        {
          key: 'SELECT_POLICY_FROM_TREE',
          value: 'Select a My Work Policy to view its settings'
        },
        {
          key: 'WORKFLOWABLE_CURRENTSTEPID_DISPLAY_NAME',
          value: 'Current Step ID'
        },
        {
          key: 'STATUSDTO_LASTTIMESTATUSCHANGED_DISPLAY_NAME',
          value: 'Last Status Time Update'
        },
        {
          key: 'RETURN_TO_STEP',
          value: 'Return to step'
        },
        {
          key: 'RESTRICT_VIEWING_SECTION',
          value:
            'Restrict viewing this section and its child controls by adding conditions'
        },
        {
          key: 'EXPORT_LOCATION',
          value: 'Export Location'
        },
        {
          key: 'DELETE',
          value: 'Delete'
        },
        {
          key: 'PERSISTENCEBASEDTO_NAME_DISPLAY_NAME',
          value: 'Name'
        },
        {
          key: 'ACTION_ITEMS_CRUD_LEVEL_OF_CONTROL',
          value:
            'Use the following conditions to control the level of CRUD for the Action Items.'
        },
        {
          key: 'SESSION_END_MESSAGE_TEXT',
          value: 'Your session is about to expire due to inactivity.'
        },
        {
          key: 'TASK_FORMS',
          value: 'Task Forms'
        },
        {
          key: 'WORKFLOW_IS_ABOUT_TO',
          value: 'Workflow is about to'
        },
        {
          key: 'INSERT_ONLY_NUMBERS',
          value: 'Insert Numbers Only'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_STATUS',
          value: 'Do you want to delete the status?'
        },
        {
          key: 'MANDATORY_COMBO_BOX',
          value: 'Select an option from the list'
        },
        {
          key: 'NEW_CONDITION',
          value: 'New Condition'
        },
        {
          key: 'RESTRICT_VIEWING_TAB',
          value:
            'Restrict viewing this tab and its child controls by adding conditions'
        },
        {
          key: 'ADD_ENTITY',
          value: 'Add entity...'
        },
        {
          key: 'MAX_WORK_PER_DAY',
          value: 'Maximum actual work per day (hr):'
        },
        {
          key: 'NON_WORK_WEEK_DAYS',
          value: 'Non-work week days'
        },
        {
          key: 'CONFIRMATION',
          value: 'Confirmation'
        },
        {
          key: 'STEP_ONE_IMPORT_DB_SCHEMA',
          value: 'Step 1 - Import DB Schema'
        },
        {
          key: 'SELECT_INFORMATION_GROUP_TOOLTIP',
          value: 'Select information group to place property'
        },
        {
          key: 'DEFAULT_FORMAT_SETTINGS',
          value: 'Default Format Settings'
        },
        {
          key: 'UNDEFINED_ENTITY',
          value: 'undefined entity'
        },
        {
          key: 'ADD_ORCHESTRATOR',
          value: 'Add Orchestrator'
        },
        {
          key: 'WORK_WEEK_DAYS',
          value: 'Work week days'
        },
        {
          key: 'FOLLOWERS_PROPERTY_DISPLAY_NAME',
          value: 'Followers'
        },
        {
          key: 'LOGGED_IN_USER_ROLE',
          value: 'Logged in user role'
        },
        {
          key: 'MODIFIED_LABEL',
          value: 'Modified'
        },
        {
          key: 'EDIT_INSTRUCTION_LINE_HEADER',
          value: 'Edit the step instruction line'
        },
        {
          key: 'HEADER',
          value: 'Header'
        },
        {
          key: 'DELETE_GROUP',
          value: 'Delete Information Group'
        },
        {
          key: 'DELETE_TRANSITION_DESCRIPTION',
          value: 'Are you sure you want to delete this transition?'
        },
        {
          key: 'BALANCE',
          value: 'Balance'
        },
        {
          key: 'NO_ITEMS_BE_INCLUDED_IN_GROUP',
          value: 'No items will be included in the group.'
        },
        {
          key: 'NEW_GROUP',
          value: 'New Group'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_ORCHESTRATOR',
          value: 'Do you want to delete the Orchestrator?'
        },
        {
          key: 'TAB_MUST_BE_SELECTED',
          value: 'You must select a tab to move to. Please select before.'
        },
        {
          key: 'NEW_REPORT_TOOLTIP',
          value: 'A report can be used to display properties in grid'
        },
        {
          key: 'WARNING_TITLE',
          value: 'Warning'
        },
        {
          key: 'SET_TABLE_DISPLAY_NAME',
          value: "Set this table's display name and description"
        },
        {
          key: 'REPORT_ENTITIES_ORDER_SUB_HEADER',
          value:
            'Entities will be displayed in this order in quick search and report generator:'
        },
        {
          key: 'EXCLUDE_PROPERTY_FROM_REPORT_GENERATOR',
          value: 'Exclude this property from report generator'
        },
        {
          key: 'DELETE_INFORMATION_PROPERTY',
          value: 'Delete information property'
        },
        {
          key: 'STEP_THREE_RELOAD_SETTINGS',
          value: 'Step 3 - Reload Settings'
        },
        {
          key: 'ALL',
          value: 'All'
        },
        {
          key: 'DEFAULT_SCOREBOARD',
          value: 'Default Scoreboard'
        },
        {
          key: 'MODIFIED_BY',
          value: 'Modified by'
        },
        {
          key: 'STARTED_BY',
          value: 'Started by'
        },
        {
          key: 'ORCHESTRATOR_LEVEL_INTEGRATION_OPERATION',
          value: 'Orchestrator-Level Integration Operations'
        },
        {
          key: 'ACTUAL_WORK',
          value: 'Actual Work'
        },
        {
          key: 'UPDATE',
          value: 'Update'
        },
        {
          key: 'ITEM_SET_LABEL',
          value: 'Item set name'
        },
        {
          key: 'IMPORT',
          value: 'Import'
        },
        {
          key: 'FIND',
          value: 'Find'
        },
        {
          key: 'COPY_FROM',
          value: 'Copy From'
        },
        {
          key: 'SAVE_BUTTON',
          value: 'Save Button'
        },
        {
          key: 'PROGRESS_TO_THIS_STEP_ONLY_IF_CONDITIONS_SATISFIED',
          value:
            'Progress to this step only if the following conditions are satisfied. Otherwise, skip to the next step.'
        },
        {
          key: 'TASK',
          value: 'Task'
        },
        {
          key: 'SAVE',
          value: 'Save'
        },
        {
          key: 'DEFAULT_WIDTH',
          value: 'Default Width (px)'
        },
        {
          key: 'START_WITH_LETTER_NO_SPACE',
          value: 'Can only start with a-z, and contain a-z, 0-9'
        },
        {
          key: 'ROLES',
          value: 'Roles'
        },
        {
          key: 'NEW_ITEM_SET_CONDITION',
          value: 'New Item Set Condition'
        },
        {
          key: 'XML_SECTION_TOOLTIP',
          value: 'Enters an XML container'
        },
        {
          key: 'PRINT',
          value: 'Print'
        },
        {
          key: 'ADMINISTRATOR_LICENSE_ROLE',
          value: 'Administrator'
        },
        {
          key: 'LAYOUT',
          value: 'Layout'
        },
        {
          key: 'ONE_TIME',
          value: 'One time'
        },
        {
          key: 'RESTRICT_VIEWING_FROM',
          value: 'Restrict viewing this from by adding conditions'
        },
        {
          key: 'USER_ASSIGNED_TO_ROLE_TITLE',
          value: 'The user will be authorized if he / she is assigned to role.'
        },
        {
          key: 'RECOMMENDED_FOR_ACTION_RULES',
          value: 'Recommended for action rules'
        },
        {
          key: 'PRODUCT_SN',
          value: 'Product System Name'
        },
        {
          key: 'DROP_REPORT_PROPERTIES',
          value: 'Drop {0} Report Properties Here'
        },
        {
          key: 'SAVE_THIS_ITEM_AS_NEW',
          value: 'Save this item as new'
        },
        {
          key: 'ACTUAL_WORK_AGAINST_ESTIMATED_WORK',
          value: 'Actual work (against estimated work)'
        },
        {
          key: 'THURSDAY',
          value: 'Thursday'
        },
        {
          key: 'NOTES',
          value: 'Notes'
        },
        {
          key: 'WORKING_PANE_DEFAULT_TEXT',
          value: 'Select an entity to view properties and settings'
        },
        {
          key: 'PROGRESS',
          value: 'Progress'
        },
        {
          key: 'RESTRICT_VIEWING_BUTTON',
          value: 'Restrict viewing this button by adding conditions'
        },
        {
          key: 'EDITORS_LIST_TITLE',
          value: 'Please select an editor'
        },
        {
          key: 'IS_AT_FLOW_STEP',
          value: 'Is at flow step'
        },
        {
          key: 'TABLE_DISPLAY_NAME',
          value: 'Table Display Name'
        },
        {
          key: 'REMOVE_ASSIGNEE',
          value: 'Remove Assignee'
        },
        {
          key: 'RECIPIENTS',
          value: 'Recipients'
        },
        {
          key: 'PROPERTIES_IN_A_LINE',
          value: 'Properties in a line'
        },
        {
          key: 'DELETE_STEP_DESCRIPTION',
          value:
            'Entities may be at this workflow step. You should migrate them to another workflow step.'
        },
        {
          key: 'COLUMN',
          value: 'Column'
        },
        {
          key: 'ATTACHMENTS_ITEMS_CRUD_LEVEL_OF_CONTROL',
          value:
            'Use the following conditions to control the level of CRUD for the Attachments Items.'
        },
        {
          key: 'DATA_ENTRY',
          value: 'Data Entry'
        },
        {
          key: 'CUSTOM',
          value: 'Custom'
        },
        {
          key: 'DATA_TYPE',
          value: 'Data type'
        },
        {
          key: 'INCLUDE_THIS_ENTITY_IN_MY_WORK_POLICIES',
          value:
            'Include this entity in My work policies (cannot be unselected)'
        },
        {
          key: 'PROPERTIES_CAN_BE_LINKS',
          value:
            'Properties can be links to other forms, or to external pages or systems'
        },
        {
          key: 'FOLLOWING_USERS_ALLOWED_TO_STAR_THE_WORKFLOW',
          value: 'The following users may start the workflow.'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_TAB',
          value: 'Do you want to delete the tab?'
        },
        {
          key: 'ITEM_SET_ACTION_NAME',
          value: 'Item set action name'
        },
        {
          key: 'NEW_PROPERTY_CHANGE_CONDITION',
          value: 'New Property Change Condition'
        },
        {
          key: 'CHECKED',
          value: 'Checked'
        },
        {
          key: 'SELECTED_ILIOS',
          value: 'Selected ILIOs'
        },
        {
          key: 'REVERSE_LOOKUP_DISPLAY_NAME_INPUT_HELP',
          value:
            'This property will be created on the table entity as a lookup to the form entity.'
        },
        {
          key: 'FOLDER_TIP',
          value:
            'A form or workflow element authorized to a folder, is automatically authorized to all nodes inside the folder. For example, Customer Users.'
        },
        {
          key: 'LOOKUP',
          value: 'Lookup'
        },
        {
          key: 'SKIP_TO',
          value: 'Skip to '
        },
        {
          key: 'CLOSE',
          value: 'Close'
        },
        {
          key: 'SET_FORM_DISPLAY_NAME',
          value: "Set this form's display name and description"
        },
        {
          key: 'WIDTH',
          value: 'Width'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_BUTTON',
          value: 'Do you want to delete the button?'
        },
        {
          key: 'SUFFIX',
          value: 'Suffix'
        },
        {
          key: 'SQL_CONNECTION',
          value: 'SQL Connection'
        },
        {
          key: 'CREATE_NEW_BLANK_FORM',
          value: 'Create new blank form:'
        },
        {
          key: 'WORKFLOW_SETTINGS',
          value: 'open workflow settings'
        },
        {
          key: 'EXPAND',
          value: 'Expand'
        },
        {
          key: 'SESSION_ENDED_MESSAGE',
          value:
            'Your session has expired due to inactivity. Please log back in to continue.'
        },
        {
          key: 'DELETE_AUTH_TREE',
          value: 'Delete authorization tree'
        },
        {
          key: 'USERS_CAN_CREATE_ITEMS_BY',
          value: 'Users can create items by'
        },
        {
          key: 'FA_ICON',
          value: 'Font Awesome Icon'
        },
        {
          key: 'DELETE_CONTROL',
          value: 'Delete control'
        },
        {
          key: 'FORMS',
          value: 'Forms'
        },
        {
          key: 'MANDATORY_PROPERTY_TEXT_AREA',
          value: 'Select a property'
        },
        {
          key: 'ENTER_JS_CODE',
          value: 'Enter Javascript code that can be evaluated as true or false'
        },
        {
          key: 'SKIP_IF',
          value: 'Skip if'
        },
        {
          key: 'YOU_SHOUD_REMOVE_DIALOG_ROLES_BEFORE_DELETING',
          value:
            'You should remove Dialog Roles referencing this pProduct before deleting it.'
        },
        {
          key: 'ASSIGNEE',
          value: 'Assignee'
        },
        {
          key: 'MAXIMUM_AND_MINIMUM_LIMITS',
          value: 'Maximum and Minimum Limits'
        },
        {
          key: 'CHOOSE_SQL_CONNECTION',
          value: 'Choose sql connection'
        },
        {
          key: 'MOVE_TO',
          value: 'Move to '
        },
        {
          key: 'CREATE_APPROVE',
          value: 'Create / Approve'
        },
        {
          key: 'FILTER_BY_DATA_TYPE',
          value: 'Filter by data type'
        },
        {
          key: 'DELETE_AUTH_TREE_WARNING',
          value: 'Are you sure you want to remove this authorization tree?'
        },
        {
          key: 'ITEM_WAS_MODIFIED',
          value: 'Item was modified'
        },
        {
          key: 'DISPLAY',
          value: 'Display'
        },
        {
          key: 'REVERSE_LOOKUP_PRIMARY_SUB_TEXT',
          value:
            'This property will be created on the table entity as a lookup to this entity.'
        },
        {
          key: 'DEFAULT_VALUES_OF_ADMIN_TIME_REPORT',
          value: 'Default values of admin time reports'
        },
        {
          key: 'RULE_NAME',
          value: 'Rule Name'
        },
        {
          key: 'ENTER_NEW_FORM_NAME',
          value: 'Enter new form name'
        },
        {
          key: 'FORMAT_TEXT',
          value: 'Format Text'
        },
        {
          key: 'NEW_PROVIDER',
          value: 'New Provider'
        },
        {
          key: 'ADD_ENTITY_TOOLTIP',
          value:
            'Add an entity so that users can track time and progress against items of it'
        },
        {
          key: 'COPY_VALUE',
          value: 'Copy Value'
        },
        {
          key: 'EDIT_CHOICE_OPTION',
          value: 'Edit Choice Option'
        },
        {
          key: 'REVERSE_LOOKUP_SYSTEM_NAME',
          value: 'Reverse lookup system name'
        },
        {
          key: 'DATE_AND_TIME',
          value: 'Date and Time'
        },
        {
          key: 'TRANSLATE_SOLUTION',
          value: 'Translate Solution'
        },
        {
          key: 'MORE_INFO',
          value: 'More info'
        },
        {
          key: 'PROPERTY_TO_SET_VALUE_TO',
          value: 'Property to set value to'
        },
        {
          key: 'TRIGGERING_CONDITIONS_STEP_DESCRIPTION',
          value:
            "If this conditions are met, saving or moving the workflow will be prohibited.<BR/>For example: the workflow is about to progress and an attachment type wasn't added."
        },
        {
          key: 'ORDER_BY',
          value: 'Order by'
        },
        {
          key: 'TABLE_DESCRIPTION',
          value: 'Table Description'
        },
        {
          key: 'START',
          value: 'Start'
        },
        {
          key: 'INFORMATION_SECTION_HEADER',
          value: "Information Section (this header isn't displayed to users)"
        },
        {
          key: 'REPORTS',
          value: 'Reports'
        },
        {
          key: 'PERSISTENCEBASEDTO_MYWORKTASK_DISPLAY_NAME',
          value: 'My Work Task'
        },
        {
          key: 'NEW_CALENDAR',
          value: 'New Calendar'
        },
        {
          key: 'IS_AT_SIDE_STEP',
          value: 'Is at side step'
        },
        {
          key: 'SOLUTION_DESIGNER',
          value: 'Solution Designer'
        },
        {
          key: 'BACKUP_SOLUTION_CONFIGURATION',
          value: 'Backup solution configuration before importing (recommended)'
        },
        {
          key: 'TYPE_A_DATE',
          value: 'Type a date'
        },
        {
          key: 'ENTITIES',
          value: 'Entities'
        },
        {
          key: 'ASK_THE_USER_ARE_YOU_SURE',
          value: 'Ask the user "Are you sure?"'
        },
        {
          key: 'EXPORTING_SOLUTION_OBJECT_TRANSLATIONS',
          value: 'Exporting solution object translations…'
        },
        {
          key: 'PERCENT_COMPLETE_CALCULATED_AS',
          value: 'Calculated as Actual / (Remaining + Actual) * 100'
        },
        {
          key: 'RESTRICT_VIEWING_REPORT',
          value: 'Restrict viewing this report by adding conditions'
        },
        {
          key: 'EDIT',
          value: 'Edit'
        },
        {
          key: 'SHOW_ROW_HISTORY',
          value: 'Show row history'
        },
        {
          key: 'NEW_WORKFLOW_FILTER',
          value: 'New Workflow Filter'
        },
        {
          key: 'DISPLAY_ONLY_ROWS',
          value: 'Display only rows which pass the following filters'
        },
        {
          key: 'USE_ROLE_GROUPS_TO_CHECK_DIFFERENT',
          value:
            'Use role groups to check different conditions based on the role of the logged-in user.'
        },
        {
          key: 'NEW_HIERARCHY_LEVEL_TIP',
          value:
            'Note that the user will be able to create child items as this is a hierarchical entity'
        },
        {
          key: 'ROLE_FILTER',
          value: 'Role filter'
        },
        {
          key: 'INTEGRATION_OPERATION',
          value: 'Integration Operation'
        },
        {
          key: 'IMPORT_ENVIRONMENT_APPLICATION_PREFERENCES',
          value: 'Import environment application preferences'
        },
        {
          key: 'NEW_INTEGRATION_OPERATION',
          value: 'New Integration Operation'
        },
        {
          key: 'FILTER_BY_DATA_TYPE_TOOLTIP',
          value: 'Filter by data type'
        },
        {
          key: 'ACTIONS_STEP',
          value: 'Step 2/3 - Actions'
        },
        {
          key: 'NEW_ROLE_GROUP',
          value: 'New Role Group'
        },
        {
          key: 'USERS_ASSIGNED_TO_ROLE',
          value: 'Users assigned to role'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_FORM',
          value: 'Are you sure you want to permanently delete the form?'
        },
        {
          key: 'HELIX_ROLE',
          value: 'Helix Mode Role'
        },
        {
          key: 'OPTIONAL',
          value: 'Optional'
        },
        {
          key: 'OPEN_ADMIN_TIME_LINES',
          value: 'Open admin time lines for tracking'
        },
        {
          key: 'THIS_FORM_IS_BASED_ON_THE_ENTITY',
          value: 'This form is based on the entity'
        },
        {
          key: 'STATE',
          value: 'State'
        },
        {
          key: 'TO_RUN_THIS_OPERATION_CLICK_SETTINGS',
          value:
            "To run this operation on a specific Orchestrator, click Settings from the Solution Designer home page, <br/>open the Orchestrators section, and then open the Orchestrator's settings window."
        },
        {
          key: 'OF',
          value: 'of'
        },
        {
          key: 'TRANSLATE_THE_SOLUTION_TO_ADDITIONAL_LANGUAGES',
          value: 'Translate the solution to additional languages'
        },
        {
          key: 'FORM',
          value: 'Form'
        },
        {
          key: 'DO_YOU_WANT_TO_REMOVE_THE_ROLE',
          value: 'Do you want to remove the role?'
        },
        {
          key: 'PROPERTY_CHANGE_CONDITION',
          value: 'Property Change Condition'
        },
        {
          key: 'TASK_NAME_SAMPLE',
          value: 'Task Name Sample'
        },
        {
          key: 'AVAILABLE_OLIOS',
          value: 'Available OLIOs'
        },
        {
          key: 'EDITED_BY',
          value: 'Edited By'
        },
        {
          key: 'ACTION_RULE_WIZARD',
          value: 'Action Rule Wizard'
        },
        {
          key: 'MESSAGE_STEP_DESCRIPTION',
          value: 'Specify the message to display if the rule has failed.'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_PRODUCT',
          value: 'Do you want to delete this Product?'
        },
        {
          key: 'REOCCURRING',
          value: 'Reoccurring'
        },
        {
          key: 'EDIT_ITEM_SET_CONDITION',
          value: 'Edit Item Set Condition'
        },
        {
          key: 'DELETE_TASK_GROUP_SUB_TITLE',
          value: 'Are you sure you want to delete the Task Group?'
        },
        {
          key: 'OF_TYPE',
          value: 'of type'
        },
        {
          key: 'SET_TAB_DISPLAY_NAME',
          value: "Set this tab's display name and description"
        },
        {
          key: 'EDIT_THE_DISPLAY_NAME_OF_GROUP',
          value: 'Edit the display name of the ribbon group.'
        },
        {
          key: 'REPORT_TARGET_FRAME_NAME',
          value: 'Frame Name'
        },
        {
          key: 'MANDATORY',
          value: 'Mandatory'
        },
        {
          key: 'MOVE_TO_TAB',
          value: 'Move to tab'
        },
        {
          key: 'CHOOSE_WHEN_TO_MANDATE',
          value: 'Choose when to mandate the user to fill the property'
        },
        {
          key: 'TO_ENABLE_ROWS_REORDER',
          value:
            'To enable rows reordering, check "support rows reorder in entity settings in Entities Editor'
        },
        {
          key: 'DELETE_PROPERTY_WARNING',
          value: 'Are you sure you want to delete %s property?'
        },
        {
          key: 'PREDICTED_WORK',
          value: 'Predicted Work'
        },
        {
          key: 'REMAINING_WORK',
          value: 'Remaining Work'
        },
        {
          key: 'PROFESSIONAL_LICENSE_ROLE',
          value: 'Professional'
        },
        {
          key: 'RETURN_TO',
          value: 'Return to '
        },
        {
          key: 'CREATE_AND_CLOSE',
          value: 'Create & Close'
        },
        {
          key: 'STEP_TWO_DESCRIPTION',
          value:
            'Step 2 imports solution objects such as workflows, forms and dashboard tabs.'
        },
        {
          key: 'CALENDARS',
          value: 'Calendars'
        },
        {
          key: 'MORE',
          value: 'More'
        },
        {
          key: 'DELETE_WORKFLOW',
          value: 'delete this workflow'
        },
        {
          key: 'ENTITY_WILL_APPEAR_IN_RECENT_VISITED_ITEMS',
          value: 'This entity will appear in recent visited items'
        },
        {
          key: 'RUN_TYPE',
          value: 'Run type'
        },
        {
          key: 'DELETING_A_FORM_CANNOT_BE_UNDONE',
          value:
            "Existing items may be depended on this form. If you delete it, users won't be able to view them."
        },
        {
          key: 'MAX_MIN',
          value: 'Max / Min'
        },
        {
          key: 'ADDED_POLICIES',
          value: 'Added Policies'
        },
        {
          key: 'REVERSE_LOOKUP',
          value: 'Reverse Lookup'
        },
        {
          key: 'THE_CONTROL_CAN_BE_A_LINK',
          value: "The control's display name can be a link"
        },
        {
          key: 'STOP_RULE_WIZARD',
          value: 'Stop Rule Wizard'
        },
        {
          key: 'INSERT',
          value: 'Insert'
        },
        {
          key: 'PRIMARY_NAME_PROPERTY',
          value: 'Primary name property'
        },
        {
          key: 'USE_THE_FOLLOWING_VALUE',
          value: 'Use the following value instead of the default setting'
        },
        {
          key: 'TODAY',
          value: 'Today'
        },
        {
          key: 'TABLE_ROWS',
          value: 'Rows'
        },
        {
          key: 'INFORMATION_SECTION_TOOLTIP',
          value: 'Create a new information section in the tab'
        },
        {
          key: 'WORKSHEET_WEEK_START',
          value: 'Worksheet week start'
        },
        {
          key: 'RULE_NAME_STEP',
          value: 'Step 3/3 - Name'
        },
        {
          key: 'NEW_AUTH_NODE',
          value: 'New Authorization Node'
        },
        {
          key: 'IS',
          value: 'is'
        },
        {
          key: 'WORKSHEET_CONDITION',
          value: 'Worksheet Condition'
        },
        {
          key: 'ATTACHMENT_CONDITION',
          value: 'Attachment Condition'
        },
        {
          key: 'DELETE_STATUS',
          value: 'Delete Status'
        },
        {
          key: 'SIZE',
          value: 'Size'
        },
        {
          key: 'ENTITY_CATEGORY_FILTER',
          value: 'Entity category filter'
        },
        {
          key: 'APPLICATION_PREFERENCES',
          value: 'Application Preferences'
        },
        {
          key: 'MUST_BE_AFTER',
          value: 'Must be after'
        },
        {
          key: 'IS_AT_OR_BEFORE_STEP',
          value: 'Is at or before step'
        },
        {
          key: 'TO_ANY_STEP',
          value: 'To any step'
        },
        {
          key: 'ADMINISTRATION_PAGES',
          value: 'Administration Pages'
        },
        {
          key: 'GOALS_PROPERTY',
          value: 'Goals MultiLookup Property'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_SECTION',
          value: 'Do you want to delete the section?'
        },
        {
          key: 'TASK_TIME_REPORT',
          value: 'Task Time Report'
        },
        {
          key: 'HISTORY',
          value: 'History'
        },
        {
          key: 'ENDS_WITH',
          value: 'Ends with'
        },
        {
          key: 'IS_NOT_EQUAL_TO',
          value: 'Is not equal to'
        },
        {
          key: 'LOGGED_IN_USER_IS_ASSIGNED_TO_ROLE',
          value: 'Logged in user is assigned to role'
        },
        {
          key: 'NEW_WORKFLOW_CONDITION',
          value: 'New Workflow Condition'
        },
        {
          key: 'DELETE_SECTION',
          value: 'Delete section'
        },
        {
          key: 'UNFOLLOW_THIS',
          value: 'Unfollow this'
        },
        {
          key: 'DB_COLUMN_NAME_INPUT_HELP',
          value:
            'Cannot contain spaces. Capitalize first letters. Example: MyEntity'
        },
        {
          key: 'CHOICE_DESCRIPTION',
          value: 'Type each option in a separate line'
        },
        {
          key: 'ROLE',
          value: 'Role'
        },
        {
          key: 'ATTACHMENTS_TAB',
          value: 'Attachment tab'
        },
        {
          key: 'ATTACHMENTS',
          value: 'Attachments'
        },
        {
          key: 'EXCLUDE_FORM_BUTTONS',
          value: 'Exclude form buttons'
        },
        {
          key: 'AP',
          value: 'AP'
        },
        {
          key: 'DELETE_AUTH_NODE_TITLE',
          value: 'Delete authorization node'
        },
        {
          key: 'DEFAULT_COLUMNS_OF_TABLES',
          value: 'Default columns of tables of this entity'
        },
        {
          key: 'LICENSE_ROLE',
          value: 'License Role'
        },
        {
          key: 'ENTER',
          value: 'Enter'
        },
        {
          key: 'RECENT_DOCUMENTS',
          value: 'Recent documents'
        },
        {
          key: 'ADD_ROLE',
          value: 'Add Role'
        },
        {
          key: 'DRAG_ITEMS_TO_REORDER',
          value: 'Drag items to re-order'
        },
        {
          key: 'IMPORT_MSP_LANGUAGE_ENTRIES',
          value: 'Import MSP language entries'
        },
        {
          key: 'PRODUCTS',
          value: 'Products'
        },
        {
          key: 'DELETING_A_CONTROL_WILL_NOT_DELETE_FROM_DB',
          value: 'Deleting a control will not delete data from the Database.'
        },
        {
          key: 'DISPLAY_LANGUAGES',
          value: 'Display Languages'
        },
        {
          key: 'FIRST_TAB_NAME',
          value: 'First tab name'
        },
        {
          key: 'PROPERTY_FILTER',
          value: 'Property filter'
        },
        {
          key: 'DB_KEY_COL_NAME',
          value: 'Database key column name'
        },
        {
          key: 'EDIT_FORMS_HEADER',
          value: "Edit the form's header"
        },
        {
          key: 'PERSISTENCEBASEDTO_STATE_DISPLAY_NAME',
          value: 'State'
        },
        {
          key: 'TRANSLATE_SOLUTION_OBJECTS_TO_SELECTED_LANGUAGES',
          value:
            'Translate solution objects (such as forms and workflows) to selected languages'
        },
        {
          key: 'DELETE_ENTITY',
          value: 'Delete Entity'
        },
        {
          key: 'STATE_FILTER',
          value: 'State filter'
        },
        {
          key: 'CONDITION',
          value: 'Condition'
        },
        {
          key: 'PERSISTENCEBASEDTO_FOLLOWERS_DISPLAY_NAME',
          value: 'Followed by Users'
        },
        {
          key: 'CHOOSE_OPTIONS',
          value: 'Choose options'
        },
        {
          key: 'IS_GREATER_THAN',
          value: 'Is greater than'
        },
        {
          key: 'ENTER_A_UNIQUE_FORM_NAME',
          value: 'Please enter a unique form name'
        },
        {
          key: 'NEW_MOVE_WORKFLOW_ACTION',
          value: 'New Move Workflow Action'
        },
        {
          key: 'MILESTONES_TABLE_OWNER_PROPERTY',
          value: 'Milestones Table Owner User Property'
        },
        {
          key: 'AUTHORIZATION_EDITOR',
          value: 'Authorization'
        },
        {
          key: 'MY_WORK_POLICY_INFO',
          value:
            'To manage line classifications and admin time categories for this policy, click <b>Administration</b> link in the toolbar, and there click <b>Line Classification</b> or <b>Admin Time Category</b>.'
        },
        {
          key: 'NEW_ACTION_BUTTON',
          value: 'New Action Button'
        },
        {
          key: 'APPROVE',
          value: 'Approve'
        },
        {
          key: 'NEW_TASK_STYLE_TOOLTIP',
          value: 'Create a new Task Style to color the task'
        },
        {
          key: 'DISPLAY_RESUME_BUTTON',
          value: 'Display "Resume main flow" button'
        },
        {
          key: 'DAY_COLUMNS_USER_REPORT',
          value: 'Users report actual work per day'
        },
        {
          key: 'ADDED_PROPERTIES',
          value: 'Added properties'
        },
        {
          key: 'NEXT_BUTTON',
          value: 'Next >'
        },
        {
          key: 'WILL_BE_ADDED_AS_CHILD_TO_WORKFLOW',
          value: 'Will be added as child elements to the workflow element'
        },
        {
          key: 'LOGGED_IN_USER_IS_ASSIGNED',
          value: 'Logged In User is assigned to one of the following roles'
        },
        {
          key: 'IS_EMPTY',
          value: 'is empty'
        },
        {
          key: 'MESSAGE_STEP_HELP',
          value:
            "It is recommended to add the item's id in the message. Also consider explaining the cause of the stop, and the steps the user should take to continue"
        },
        {
          key: 'ALL_COLUMN_PROPERTIES',
          value: 'All Column Properties'
        },
        {
          key: 'UPDATE_ENTITY_STATUS_WHEN_ENTERING_STEP',
          value: "Update the entity's status when entering the step."
        },
        {
          key: 'TASK_FORM_TIP',
          value: 'Displayed after clicking Task Details in My Work'
        },
        {
          key: 'SAVE_SUCCESS',
          value: 'Changes were saved successfully'
        },
        {
          key: 'ENTER_DISPLAY_NAME_INFORMATION_GROUP',
          value: 'Enter the display name of the new information group'
        },
        {
          key: 'ADD_MORE_INFO_COLUMN',
          value: 'Add more info column'
        },
        {
          key: 'MOVE_TO_SIDE_STEP',
          value: 'Move to side step'
        },
        {
          key: 'STATUS_FILTER',
          value: 'Status filter'
        },
        {
          key: 'SAVE_TOOLTIP',
          value: 'Save your recent Changes'
        },
        {
          key: 'SET_AS_DEFAULT',
          value: 'Set as Default'
        },
        {
          key: 'NOT_APPLICABLE',
          value: 'Not applicable'
        },
        {
          key: 'SKIP_TO',
          value: 'Skip to '
        },
        {
          key: 'CATEGORIZABLE_ENTITYCATEGORY_DISPLAY_NAME',
          value: 'Category'
        },
        {
          key: 'CLIENT_IP',
          value: 'Client IP'
        },
        {
          key: 'SEND_NOTIFICATION_WHEN_WORKFLOW_HAS_MOVED_TO_THIS_STEP',
          value: 'Send notification when workflow has moved to this step'
        },
        {
          key: 'DESCRIPTION',
          value: 'Description'
        },
        {
          key: 'COLUMNS',
          value: 'Columns'
        },
        {
          key: 'NOTIFICATIONS',
          value: 'Notifications'
        },
        {
          key: 'ENTER_TAB_NAME',
          value: 'Enter tab name'
        },
        {
          key: 'DEVELOPMENT',
          value: 'Development'
        },
        {
          key: 'CREATE_NEW_STATUS',
          value: 'Create a new status for use in workflows'
        },
        {
          key: 'LEAVE_EMPTY_FOR_MAX',
          value: 'Leave empty for maximum system limit'
        },
        {
          key: 'ALL_PROPERTIES_TOOLTIP',
          value: 'Add properties to the form'
        },
        {
          key: 'ALL_PROPERTIES',
          value: 'All Properties'
        },
        {
          key: 'INTEGRATION',
          value: 'Integration'
        },
        {
          key: 'ENTER_SQL_WHERE',
          value: 'Enter SQL where clause'
        },
        {
          key: 'TABLE',
          value: 'Table'
        },
        {
          key: 'TYPE_ID_NUMBER',
          value: 'Type ID number'
        },
        {
          key: 'EXISTING_ENTITY',
          value: 'Existing entity'
        },
        {
          key: 'INSERT_PROPERTY',
          value: 'Insert property'
        },
        {
          key: 'DECIMAL_PLACES',
          value: 'Decimal places'
        },
        {
          key: 'MUST_BE_BEFORE',
          value: 'Must be before'
        },
        {
          key: 'APPROVAL',
          value: 'Approval'
        },
        {
          key: 'ALL_ITEMS_ARE_AVAILABLE_BECAUSE_EVERYONE',
          value:
            ': All items are available for tracking because the Everyone role group has no conditions.'
        },
        {
          key: 'SQL_FILTER',
          value: 'SQL filter'
        },
        {
          key: 'SQL_CONNECTION',
          value: 'SQL connection'
        },
        {
          key: 'APERIO_DASHBOARD',
          value: 'Aperio Dashboard'
        },
        {
          key: 'ROW_EDITING_AND_DELETING',
          value: 'Row editing and deleting'
        },
        {
          key: 'USERS_ALLOWED_TO_MOVE_WORKFLOW_TO_AND_FROM',
          value: 'Users are allowed to move the workflow to and from this step'
        },
        {
          key: 'REMAINING_WORK_AND_PERCENT_WORK_COMPLETE',
          value: 'Remaining Work and % Work Complete'
        },
        {
          key: 'EDIT_INTEGRATION_OPERATION',
          value: 'Edit Integration Operation'
        },
        {
          key: 'ITREE_PATH_DISPLAY_NAME',
          value: 'Path'
        },
        {
          key: 'CHOOSE_PROPERTY_TO_SET_VALUE_TO',
          value: 'Choose a property to set a value to:'
        },
        {
          key: 'CANNOT_DELETE_THE_SAVE_BUTTON',
          value: 'Cannot delete the Save button'
        },
        {
          key: 'OPEN_NON_WORK_WEEK_DAYS',
          value: 'Open non-work week days for tracking'
        },
        {
          key: 'CONTROL_VIEWABLE_BECAUSE_EVERYONE',
          value:
            'The control is viewable to everyone because the "Everyone" role group has no conditions.'
        },
        {
          key: 'FIND_ENTITY_TOOLTIP',
          value: 'Filter by free text'
        },
        {
          key: 'IMPORTING_SOLUTION_OBJECT_TRANSLATIONS',
          value: 'Importing solution object translations…'
        },
        {
          key: 'FIT_TO_WINDOW_TOOLTIP',
          value: 'Fit to current window [Ctrl + W]'
        },
        {
          key: 'CONTROL_EDITABLE_BECAUSE_EVERYONE',
          value:
            'The control is editable to everyone because the "Everyone" role group has no conditions.'
        },
        {
          key: 'SET_PROPERTY_MULTI_LOOKUP_OR_TABLE',
          value: 'Set property (Multi lookup or table)'
        },
        {
          key: 'EXPORT_SOLUTION_OBJECT_NAMES',
          value: 'Export solution object names'
        },
        {
          key: 'ITEM_CONDITIONS',
          value: 'Item conditions'
        },
        {
          key: 'ORCHESTRATOR',
          value: 'Orchestrator'
        },
        {
          key: 'MULTI_LOOKUP_OR_TABLE_PROPERTY',
          value: 'Multi lookup or table property'
        },
        {
          key: 'DELETE_BUTTON',
          value: 'Delete Button'
        },
        {
          key: 'ENTITYCATEGORY_DISPLAY_NAME',
          value: 'ENTITYCATEGORY_DISPLAY_NAME'
        },
        {
          key: 'DURATION_MS',
          value: 'Duration (ms)'
        },
        {
          key: 'SENIOR_ROLES_ARE_AUTHORIZED',
          value: 'Note: Senior roles are automatically authorized as well'
        },
        {
          key: 'OLD_ASSIGNEE',
          value: 'Old Assignee'
        },
        {
          key: 'ALL_ITEMS_BE_INCLUDED_IN_GROUP_BECAUSE_EVERYONE',
          value:
            ': All items will be included in the group because the Everyone role group has no conditions.'
        },
        {
          key: 'ITEM_WAS_CREATED',
          value: 'Item was created'
        },
        {
          key: 'MIN_WORK_PER_DAY',
          value: 'Minimum actual work per day (hr):'
        },
        {
          key: 'EDIT_TRANSITION_CONDITION',
          value: 'Edit Transition Condition'
        },
        {
          key: 'DISPLAY_ITEMS_IN_DROP_DOWN',
          value: 'Display items in a drop down'
        },
        {
          key: 'COLOR',
          value: 'Color'
        },
        {
          key: 'DELETE_CALENDAR',
          value: 'Delete Calendar'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_CALENDAR',
          value: 'Do you want to delete the Calendar?'
        },
        {
          key: 'COLLAPSE',
          value: 'Collapse all'
        },
        {
          key: 'FORMS_EDITOR',
          value: 'Forms'
        },
        {
          key: 'AT_LEAST_ONE_ITEM_PASS_THE_CONDITION',
          value: 'At least one item passes the conditions'
        },
        {
          key: 'WEDNESDAY',
          value: 'Wednesday'
        },
        {
          key: 'SELECTED_OLIOS',
          value: 'Selected OLIOs'
        },
        {
          key: 'FOLLOWED_ITEMS_CAN_BE_VIEWED_IN_SCOREBOARD',
          value: 'Followed items can be viewed in the scoreboard'
        },
        {
          key: 'SERVER_ADMIN',
          value: 'Server Admin'
        },
        {
          key: 'EDIT_FORM_OF',
          value: 'Edit form of'
        },
        {
          key: 'DELETE_APPLICATION_REFERENCE',
          value: 'Delete application preference'
        },
        {
          key: 'FOLDER',
          value: 'Folder'
        },
        {
          key: 'FILTER',
          value: 'Filter'
        },
        {
          key: 'MANAGE_PRODUCTS',
          value: 'Manage Products'
        },
        {
          key: 'OPEN_DAY_EXCEPTIONS',
          value: 'Open day exceptions (managed in calendars) for tracking'
        },
        {
          key: 'SAVE_TRANSLATION_WORKBOOK_UPPERCASE',
          value: 'Save Translation Workbook'
        },
        {
          key: 'NEW_VIRTUAL',
          value: 'New Virtual'
        },
        {
          key: 'IS_BEYOND_STEP',
          value: 'Is beyond step'
        },
        {
          key: 'SETTINGS',
          value: 'Settings'
        },
        {
          key: 'XML_CONTENT',
          value: 'XML Content'
        },
        {
          key: 'ADMIN_TIME_REPORT_TIP',
          value: 'Displayed when double-clicking on admin day cell in My Work'
        },
        {
          key: 'DELETE_TRANSITION',
          value: 'Delete this transition'
        },
        {
          key: 'ENABLE_MARK_COMPLETE_ACTION_ITEM',
          value:
            'enable "Mark Complete", present “Edit” button with “Edit” title and the Edit Action Item popup form should be “Editable”'
        },
        {
          key: 'ENABLE_FOR_EXECUTION_CENTER',
          value: 'Enabled for Execution Center'
        },
        {
          key: 'DB_TABLE_NAME_INPUT_HELP',
          value:
            'Must begin with Cse.Cannot contain spaces. Example: CseMyEntity'
        },
        {
          key: 'ADD_FLOW_STEP_DESCRIPTION',
          value: 'Add a step to the main flow'
        },
        {
          key: 'EMPLOYEE_ROLE',
          value: 'Employee'
        },
        {
          key: 'NO_LIMIT',
          value: 'No limit'
        },
        {
          key: 'LOGGING_TROUBLESHOOT',
          value: 'Logging Troubleshoot'
        },
        {
          key: 'BLANK_OPTION_EXAMPLES',
          value: 'Examples: "None", "Other", "Select".'
        },
        {
          key: 'MOVE_WORKFLOW_OF_ITEM',
          value: 'Move workflow of item'
        },
        {
          key: 'SHOW_PROPERTY_HISTORY',
          value: 'Show property history in tooltip'
        },
        {
          key: 'INFORMATION_GROUPS_IN_A_ROW',
          value: 'Information groups in a row'
        },
        {
          key: 'DELETING_A_MORE_INFO_WILL_NOT_DELETE_FROM_DB',
          value: 'Deleting a more info will not delete data from the Database.'
        },
        {
          key: 'SET_SECTION_DISPLAY_NAME',
          value: 'Set this section display name and description'
        },
        {
          key: 'NEW_HIERARCHY_LEVEL',
          value: 'New Hierarchy Level'
        },
        {
          key: 'NEW_VALUE',
          value: 'New Value'
        },
        {
          key: 'MAKE_SURE_NO_WORKFLOW_STEPS_ARE_USING_THE_STATUS',
          value:
            'Make sure no workflow steps are using the status before deleting it.'
        },
        {
          key: 'ADD_PROPERTY_TO_THE_INFORMATION_GROUP',
          value: 'Add property to the information group'
        },
        {
          key: 'NO_ROLE_SELECTED',
          value: 'No role selected. Press a role to select it.'
        },
        {
          key: 'MOVE_CONTROL',
          value: 'Move Control'
        },
        {
          key: 'RESERVED_SYSTEM_NAME',
          value:
            'This is a reserved system name. Type a different display name or system name'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_TREE',
          value: 'Do you want to delete the tree?'
        },
        {
          key: 'WORKSHEET_WEEK_END',
          value: 'Worksheet week end'
        },
        {
          key: 'WORKSHEET_FORM',
          value: 'Worksheet form'
        },
        {
          key: 'SELECT_AN_ENTITY_WITH_WORKFLOW',
          value: 'Select an entity with workflow'
        },
        {
          key: 'DELETE_PRODUCT',
          value: 'Delete Product'
        },
        {
          key: 'JAVASCRIPT_CONDITION',
          value: 'Javascript condition'
        },
        {
          key: 'WORK',
          value: 'Work'
        },
        {
          key: 'ILIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST',
          value:
            'ILIOs not added to any Orchestrator will run on the first Orchestrator.'
        },
        {
          key: 'ITREETABLE_SEQUENCE_DISPLAY_NAME',
          value: 'Sequence'
        },
        {
          key: 'NEW_PROPERTY',
          value: 'New Property'
        },
        {
          key: 'USER_IS_ASSIGNED_TO_ROLE',
          value: 'User is assigned to role'
        },
        {
          key: 'ATTRIBUTES',
          value: 'Attributes'
        },
        {
          key: 'PROPERTY_VALUE_IS_ABOUT_TO_CHANGE',
          value: 'Property value is about to change'
        },
        {
          key: 'ACTUAL_WORK_AND_PROGRESS',
          value: 'Actual work and progress'
        },
        {
          key: 'IF_SELECTED_USERS_CAN_TRACK_TIME_AND_PROGRES_VIA_MY_WORK',
          value:
            'If selected, users can track time spent on items and the progress of the items via My Work.'
        },
        {
          key: 'STANDARD_LICENSE_ROLE',
          value: 'Standard'
        },
        {
          key: 'WORKFLOWABLE_CURRENTSTEPDESCRIPTION_DISPLAY_NAME',
          value: 'Current Step Description'
        },
        {
          key: 'AN',
          value: 'An'
        },
        {
          key: 'INSERT_APPLICATION_PREFERENCE',
          value: 'Insert Application Preference'
        },
        {
          key: 'SUPER_USER_ROLE',
          value: 'Super User'
        },
        {
          key: 'TASK_STYLES',
          value: 'Task Styles'
        },
        {
          key: 'ARE_YOU_SURE_DELETE_WORKFLOW',
          value: 'Are you sure you want to permanently delete the workflow?'
        },
        {
          key: 'ORCHESTRATORS_COMPONENTS_FOR_RUNNING_INTEGRATION',
          value:
            'Orchestrators are the components responsible for running integration operations. After installing new orchestrators, add them to this list:'
        },
        {
          key: 'OF',
          value: 'of'
        },
        {
          key: 'PRE_WHERE',
          value: 'prewhere Clause'
        },
        {
          key: 'CREATE_ACTION_BUTTON',
          value: 'Action button...'
        },
        {
          key: 'INFORMATION',
          value: 'Information'
        },
        {
          key: 'WORKFLOWABLE_INTEGRATIONINFORMATIONS_DISPLAY_NAME',
          value: 'Integration Operations'
        },
        {
          key: 'SET_INITIAL_VALUE_OF_TASK_TIME_REPORTS',
          value:
            'Set initial value to properties of task time reports (work of task per day)'
        },
        {
          key: 'NEW_ENTITY_TOOLTIP',
          value: 'Create entity'
        },
        {
          key: 'ADD_OLIOS_TO_RUN_ON_THIS_ORC',
          value:
            'Add Orchestrator-level integration operations (OLIO) to run this on specific Orchestrator.'
        },
        {
          key: 'OVERRIDE_DEFAULT_WIDTH',
          value: 'Override default width (px)'
        },
        {
          key: 'USERS_ALLOWED_TO_APPROVE_THIS_STEP',
          value: 'Users allowed to approve this step'
        },
        {
          key: 'NEW_VALUE_CANNOT_BE_EMPTY',
          value: 'New value cannot be empty'
        },
        {
          key: 'JAVASCRIPT_FUNCTON',
          value: 'Javascript function'
        },
        {
          key: 'DO_YOU_WANT_TO_REMOVE_THE_STEP',
          value: 'Do you want to delete the step?'
        },
        {
          key: 'NEW_ITEM',
          value: 'New'
        },
        {
          key: 'DELETING_APPLICATION_PREFERENCE_WILL_REMOVE_FROM_DB',
          value:
            'Deleting an application preference will delete it from the Database.'
        },
        {
          key: 'STATUS_DISPLAY_NAME',
          value: 'STATUS_DISPLAY_NAME'
        },
        {
          key: 'ADMIN_CAN_MANAGE_ITEMS_BY',
          value: 'Administrators can manage items by'
        },
        {
          key: 'VIEW_ONLY_ROLE',
          value: 'View Only'
        },
        {
          key: 'ADD_NEW_TABLE',
          value: 'Add New Table'
        },
        {
          key: 'TO',
          value: 'To'
        },
        {
          key: 'AFTER_USER_CLICKS_BUTTON_CONFIRMATION_MESSAGE_DISPLAYED',
          value:
            'After the user clicks the button, a confirmation message can be displayed.'
        },
        {
          key: 'PROPERTY_REPORTS_HEADER',
          value:
            'To include this property in the report generator, select the entity from <b>Entities</b> list, open <b>Settings</b> tab, open <b>Reports</b> section and select <b>Users can create reports based on this entity</b> check box'
        },
        {
          key: 'USE_THE_FOLLOWING_TO_CONFIGURE_CONTROL_USING_XML',
          value: 'Use the following to configure a control using XML.'
        },
        {
          key: 'FILTER_REPORT_RESULTS',
          value: 'Filter report results'
        },
        {
          key: 'MANDATORY_LIST',
          value: 'Add at least one item to the list'
        },
        {
          key: 'ITREE_CHILDREN_DISPLAY_NAME',
          value: 'Children'
        },
        {
          key: 'THIS_ITEM_SET_CONDITION_PASSES_WHEN',
          value: 'This item set condition passes when'
        },
        {
          key: 'OR_BEYOND_IT',
          value: 'or beyond it'
        },
        {
          key: 'FRIDAY',
          value: 'Friday'
        },
        {
          key: 'IS_LATER_THAN_OR_EQUAL_TO',
          value: 'Is later than or equal to'
        },
        {
          key: 'DELETE_ENTITY_TOOLTIP',
          value: 'delete %s entity'
        },
        {
          key: 'XML_SECTION',
          value: 'XML Container'
        },
        {
          key: 'LOG',
          value: 'Log'
        },
        {
          key: 'FROMATTING',
          value: 'Formatting (bold, color, etc.)'
        },
        {
          key: 'TABLE_PROPERTY_SYSTEM_NAME',
          value: 'Table property system name'
        },
        {
          key: 'APPROVAL',
          value: 'Approval'
        },
        {
          key: 'AT_LEAST_ONE_ITEM_DOESNT_PASS_THE_CONDITION',
          value: "At least one item doesn't pass the conditions"
        },
        {
          key: 'MOVE_INFORMATION_SECTION',
          value: 'Move information section'
        },
        {
          key: 'NEW_WORKFLOW_STEP',
          value: 'New Workflow Step'
        },
        {
          key: 'WORKSHEET_USER',
          value: 'Worksheet user'
        },
        {
          key: 'SAVE_BUTTON_IS_DISPLAYED_TO',
          value: 'Save button is displayed to'
        },
        {
          key: 'EDIT_RIBBON_GROUP',
          value: 'Edit Ribbon Group'
        },
        {
          key: 'ACTIVE',
          value: 'Active'
        },
        {
          key: 'NEW_TASK_STYLE',
          value: 'New Task Style...'
        },
        {
          key: 'BACKGROUND_COLOR',
          value: 'Background color'
        },
        {
          key: 'CUSTOM_ERROR_MESSAGE',
          value: 'Custom error message'
        },
        {
          key: 'THE_ENTITY_WILL_BE_DISPLAYED_CONFIGURATION_ITEMS',
          value:
            'The entity will be displayed in Configuration Items section and not in the discipline section'
        },
        {
          key: 'MILESTONES_TABLE_PROPERTY',
          value: 'Milestones Table Property'
        },
        {
          key: 'CREATE_NEW_MY_WORK_CALENDAR',
          value: 'Create a new calendar'
        },
        {
          key: 'OPEN_INFORMATION_PROPERTY_SETTINGS',
          value: 'Open information property settings'
        },
        {
          key: 'FORM_DEFINITION_SUPPORT',
          value: 'Support configuring a form for this entity.'
        },
        {
          key: 'TRANSLATE_MSP_TO_ADDITIONAL_LANGUAGES',
          value: 'Translate MSP to additional languages'
        },
        {
          key: 'DISPLAY_ONLY_THE_ITEMS',
          value: 'Display only the items which pass the following filters'
        },
        {
          key: 'DELETE_COLUMN',
          value: 'Delete column'
        },
        {
          key: 'BUTTON',
          value: 'button'
        },
        {
          key: 'PERSISTENCEBASEDTO_UPDATEUSER_DISPLAY_NAME',
          value: 'Last Updated By'
        },
        {
          key: 'ACTUAL_WORK_AND_REMAINING_WORK',
          value: 'Actual Work and Remaining Work'
        },
        {
          key: 'SPECIFY_ACTIONS_TO_BE_PERFORMED_FOR_EACH_ITEM_OF_SET',
          value:
            'Specify actions to be performed for each of the items in the set'
        },
        {
          key: 'DB_TABLE_NAME',
          value: 'Database table name'
        },
        {
          key: 'DELETE_TASK_STYLE_TITLE',
          value: 'Delete Task Style'
        },
        {
          key: 'INFORMATION_SECTION',
          value: 'Information Section'
        },
        {
          key: 'INFORMATION_GROUP',
          value: 'Information Group'
        },
        {
          key: 'DELETE_WORKFLOW_TITLE',
          value: 'Delete Workflow'
        },
        {
          key: 'LEAVE_EMPTY_TO_AUTO_FIT',
          value: 'Leave empty to auto-fit to content. Values between 1 to 100'
        },
        {
          key: 'WORKFLOW',
          value: 'Workflow'
        },
        {
          key: 'NEW_COLUMN_PROPERTY_HEADER',
          value:
            'Create a new column property. The new column will be inserted as the last column in the table or at the end of the last More Information controls container.'
        },
        {
          key: 'STATUSDTO_PREVIOUSFLOWSTEPID_DISPLAY_NAME',
          value: 'Previous Flow Step'
        },
        {
          key: 'DISPLAYED_COLUMNS_MAX_3',
          value: 'Displayed columns (3 max)'
        },
        {
          key: 'ADD_NEW_SECTION',
          value: 'Add new section'
        },
        {
          key: 'WORKSHEET_CATEGORY',
          value: 'Worksheet Category'
        },
        {
          key: 'LINK',
          value: 'Link'
        },
        {
          key: 'SELECT_TAB_TO_MOVE_SECTION',
          value:
            'Select a tab to move the section to. The section will be inserted at the end of the tab.'
        },
        {
          key: 'ADDED',
          value: 'Added %'
        },
        {
          key: 'ADD_EVERYONE',
          value: 'Add Everyone'
        },
        {
          key: 'USERS_CAN_FILTER_ITEMS_USING',
          value: 'Users can filter items using:'
        },
        {
          key: 'TYPE_NUMBER',
          value: 'Type number'
        },
        {
          key: 'DO_NOT_DELETE',
          value: 'Do not delete'
        },
        {
          key: 'DOES_NOT_END_WITH',
          value: 'Does not end with'
        },
        {
          key: 'BY',
          value: 'By'
        },
        {
          key: 'LOOKUP_PROPERTY',
          value: 'Lookup Property'
        },
        {
          key: 'FLOW_STEP_PANEL_TITLE',
          value: 'Flow steps'
        },
        {
          key: 'SELECT_PROPERTY',
          value: 'Select property'
        },
        {
          key: 'INSTRUCTION_LINE',
          value: 'Instruction Line'
        },
        {
          key:
            'CHECK_THAT_ALL_MANDATORY_CONTROLS_HAVE_VALUE_BEFORE_MOVING_WORKFLOW',
          value:
            'Check that all mandatory controls have a value before moving the workflow'
        },
        {
          key: 'NOTIFICATION',
          value: 'Notification'
        },
        {
          key: 'REMOVE_ENTITY_TITLE',
          value: 'Remove Entity'
        },
        {
          key: 'NEW_DAY_EXCEPTION',
          value: 'New Day Exception'
        },
        {
          key: 'ATTACHMENTS_ITEMS',
          value: 'Attachments'
        },
        {
          key: 'RETURN_TO_MAIN_FLOW',
          value: 'Return to main flow'
        },
        {
          key: 'ADD_TRANSITION_HELP',
          value:
            'The transition might already exist via "Resume main flow" button, set on a side step.'
        },
        {
          key: 'APPLICATION_PREFERENCE_SYSTEM_NAME_INPUT_HELP',
          value:
            'Cannot contain spaces. Capitalize first word letters. Example: MyApplicationPreference'
        },
        {
          key: 'NEED_TO_RELOAD_SETTINGS',
          value: 'Reload Settings'
        },
        {
          key: 'DEFAULT',
          value: 'Default'
        },
        {
          key: 'SELECT_AN_ENTITY_WITH_ATTACHMENTS_SUPPORT',
          value: 'Select an entity with attachments support'
        },
        {
          key: 'SPECIFY_WHO_CAN_TRACK_TIME_AGAINST_ITEMS',
          value: 'Specify who can track time and progress against items'
        },
        {
          key: 'TRANSITION_FROM',
          value: 'Transition From'
        },
        {
          key: 'ITEM_LEVEL_INTEGRATION_OPERATION',
          value: 'Item-Level Integration Operations'
        },
        {
          key: 'SELECT_LANGUAGES_TO_DISPLAY_THE_SITE',
          value: 'Select languages to display the site'
        },
        {
          key: 'TRANSITION_CONDITION',
          value: 'Transition Condition'
        },
        {
          key: 'SQL_DESCRIPTION',
          value: 'Rows represent objects, and columns represent properties'
        },
        {
          key: 'DELETE_TABLE',
          value: 'Delete table'
        },
        {
          key: 'HOW_WORKFLOW_RESUME_STEP',
          value: 'How will the workflow resume from this step?'
        },
        {
          key: 'BUTTON_VIEWABLE_BECAUSE_EVERYONE',
          value:
            'The Button is viewable to everyone because the "Everyone" role group has no conditions.'
        },
        {
          key: 'DEFAULT_VALUE',
          value: 'Default Value'
        },
        {
          key: 'PERSISTENCEBASEDTO_MYWORKTASK_DESCRIPTION',
          value:
            'The task will hold My Work information like actual work, % work complete and remaining work.'
        },
        {
          key: 'ACTIONS',
          value: 'Actions'
        },
        {
          key: 'DAVIATION_RANGE',
          value: 'Daviation range (hr):'
        },
        {
          key: 'MY_WORK_POLICY_ASSIGNMENT_ORDER',
          value: 'My Work Policy Assignment Order'
        },
        {
          key: 'DESCENDING',
          value: 'Descending'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_INFORMATION_GROUP',
          value: 'Do you want to delete the information group'
        },
        {
          key: 'EXECUTION_CENTER_INTEGRATION',
          value: 'Execution Center Integration'
        },
        {
          key: 'ALL_ITEMS_PASS_THE_CONDITION',
          value: 'All items pass the conditions'
        },
        {
          key: 'ALWAYS_MANDATORY',
          value: 'Always mandatory'
        },
        {
          key: 'COPY',
          value: 'Copy'
        },
        {
          key: 'OPERATION',
          value: 'Operation'
        },
        {
          key: 'VIEWED_BY',
          value: 'Viewed By'
        },
        {
          key: 'REORDER_GROUPS_AND_BUTTONS_BY_DRAGGING',
          value: 'Reorder groups and buttons by dragging them.'
        },
        {
          key: 'TRACKING_PERMISSIONS',
          value: 'Tracking Permissions'
        },
        {
          key: 'ADDING_ROWS_TO_TABLE',
          value: 'Adding rows to a table'
        },
        {
          key: 'CANNOT_DELETE_LANE_WITH_STEPS',
          value: 'Cannot delete a lane with steps assigned to it'
        },
        {
          key: 'USERS_CAN_ADD_ITEMS_TO_FOLLOW_LIST_CANNOT_BE_UNSELECTED',
          value: 'Users can add items to follow list (cannot be unselected)'
        },
        {
          key: 'OPEN_WORKSHEET_BEFORE',
          value: 'Open worksheet before its start date for only (days):'
        },
        {
          key: 'CREATE_NEW_TABLE_PROPERTY',
          value: 'Create a new table property'
        },
        {
          key: 'THIS_FORM_IS_BASED_ON',
          value: 'This form is based on'
        },
        {
          key: 'FROM_A_PREVIOUS_STEP_ONLY',
          value: 'From a previous step only'
        },
        {
          key: 'ADD_SIDE_STEP_DESCRIPTION',
          value:
            'Side steps cause the workflow to pause or end. Examples: Awaiting Customer Reply, On Hold, Rejected.'
        },
        {
          key: 'SPECIFY_WHEN_TASK_NAME_HIGHLIGHTED',
          value:
            'When the following conditions pass, task name will be highlighted'
        },
        {
          key: 'OPEN_EXISTING_WORKFLOW',
          value: 'Open existing workflow:'
        },
        {
          key: 'CONNECTION',
          value: 'Connection'
        },
        {
          key: 'TO',
          value: 'To'
        },
        {
          key: 'RECENT_ITEMS',
          value: 'Recent'
        },
        {
          key: 'ITEM',
          value: 'Item'
        },
        {
          key: 'REMAINING_WORK',
          value: 'Remaining Work'
        },
        {
          key: 'CHOOSE_PLACE_AFTER',
          value: 'Choose place after'
        },
        {
          key: 'NEW_BUTTON',
          value: 'New Button'
        },
        {
          key: 'PERFORM_ACTIONS_WHEN_EXITING_STEP',
          value: 'Perform actions when exiting step:'
        },
        {
          key: 'CREATE_NEW_ROLE',
          value: 'Create a New Role'
        },
        {
          key: 'DONE_PLEASE_RELOAD_SETTINGS_IN_ORDER_FOR_CHANGES',
          value:
            'Done. Please reload settings in order for the changes to take effect.'
        },
        {
          key: 'NEED_TO_RESTART_MSP_TOOLTIP',
          value: 'To apply the changes to the web site, please restart MSP'
        },
        {
          key: 'NEW_ENTITY',
          value: 'New Entity'
        },
        {
          key: 'REJECTION',
          value: 'Rejection'
        },
        {
          key: 'ADD_ILIOS_TO_RUN_ON_THIS_ORC',
          value:
            'Add item-level integration operations (ILIO) to run this on specific Orchestrator.'
        },
        {
          key: 'USER_SET_IN_PROPERTY_TITLE',
          value: 'The user will be authorized if he / she is set in a propery.'
        },
        {
          key: 'DELETE_REPORT',
          value: 'Delete report'
        },
        {
          key: 'DIALOG',
          value: 'Dialog'
        },
        {
          key: 'CONTAINS',
          value: 'Contains'
        },
        {
          key: 'NEW_XML_SECTION',
          value: 'New XML Section'
        },
        {
          key: 'NEW_XML_CONTROL',
          value: 'New XML Control'
        },
        {
          key: 'TASKS',
          value: 'Tasks'
        },
        {
          key: 'SELECT_NEW_ASSIGNEE',
          value: 'Select New Assignee'
        },
        {
          key: 'FIND_PROPERTY',
          value: 'Find property'
        },
        {
          key: 'STEP',
          value: 'Step'
        },
        {
          key: 'ATTACHMENT_STOP_RULE',
          value: 'Attachment Stop Rule'
        },
        {
          key: 'REPORT',
          value: 'Report'
        },
        {
          key: 'AUTHENTICATION',
          value: 'Authentication'
        },
        {
          key: 'INSERT_NEW_PROPERTY',
          value: 'Insert New Property'
        },
        {
          key: 'USER_SET_IN_PROPERTY_TIP',
          value: "For example, the requirement's referent."
        },
        {
          key: 'NEW_ACTION',
          value: 'New action'
        },
        {
          key: 'PERCENT_CONSUMPTION',
          value: '% Consumption'
        },
        {
          key: 'CANNOT_DELETE_AUTOMATIC_GROUPS',
          value: 'Cannot delete automatic groups'
        },
        {
          key: 'FIRST_TAB_DEFAULT_NAME',
          value: 'Home'
        },
        {
          key: 'THIS_AUTH_TREE_IS_BASED_ON',
          value: 'This authorization tree is based on the entity'
        },
        {
          key: 'ADD_ENTITY_TO_MY_WORK_POLICY',
          value: 'Add Entity to My Work Policy'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_REPORT',
          value: 'Do you want to delete the report?'
        },
        {
          key: 'WORKSHEET_WORKFLOW',
          value: 'Worksheet workflow'
        },
        {
          key: 'XML_COLUMN',
          value: 'XML Column'
        },
        {
          key: 'APPROVED_BY',
          value: 'Approved By'
        },
        {
          key: 'UNIQUE_DISPLAY_NAME',
          value:
            'This display name is already in use. Type a different display name'
        },
        {
          key: 'TABLE_ENTITY',
          value: 'Table Entity'
        },
        {
          key: 'ENTER_A_UNIQUE_WORKFLOW_NAME',
          value: 'Please enter a unique workflow name'
        },
        {
          key: 'IS_LESS_THAN',
          value: 'Is less than'
        },
        {
          key: 'NUMBER_WITH_DECIMAL_POINT',
          value: 'Number with Decimal Point'
        },
        {
          key: 'THE_GROUP_ALWAYS_DISPLAYED_BECAUSE_EVERYONE',
          value:
            'The group will always be displayed because the Everyone role group has no conditions.'
        },
        {
          key: 'ACTION_RULE_TRIGGERING_CONDITIONS_STEP_DESCRIPTION',
          value:
            'The rule will be applied only if these conditions are met. <br/>For example, the rule will be applied when the item is cancelled.'
        },
        {
          key: 'ENTITY_CATEGORY',
          value: 'Entity Category'
        },
        {
          key: 'RUN_THIS_ACTION_ONLY_IF_CONDITIONS_ARE_SATISFIED',
          value:
            'Run this action only if the following conditions are satisfied'
        },
        {
          key: 'LOOKUP',
          value: 'Lookup'
        },
        {
          key: 'WHEN_FOLLOWING_PROPERTY_EMPTY',
          value: 'Mandatory when the following property is empty'
        },
        {
          key: 'START_WITH_LETTER',
          value: 'Can only start with a-z, and contain a-z, 0-9 and spaces'
        },
        {
          key: 'PERSISTENCEBASEDTO_ID_DISPLAY_NAME',
          value: 'ID'
        },
        {
          key: 'DISPLAY_NAME_AND_TOOLTIP',
          value: 'Display name and tooltip'
        },
        {
          key: 'USER_CAN_CREATE_REPORTS',
          value: 'Users can create reports based on this entity'
        },
        {
          key: 'LARGE_NUMBER',
          value: 'Large Number'
        },
        {
          key: 'USE_THE_FOLLOWING_XML_EXTENSIONS',
          value:
            'Use the following to add XML attributes and elements to the form XML definition file.'
        },
        {
          key: 'CONDITIONS_TO_CHECK_BEFORE_RUNNING_THE_ACTION_OPTIONAL',
          value: 'Conditions to check before running the action (optional)'
        },
        {
          key: 'OF_THE',
          value: 'of the'
        },
        {
          key: 'REPORTING_MODE_STEP_LABEL',
          value: 'Step 2 / 2 - Reporting Mode'
        },
        {
          key: 'BY_MIDDLE_SENTENCE',
          value: 'by'
        },
        {
          key: 'SELECT_TAB_TO_MOVE',
          value:
            'Select a tab to move the control to. The control will be inserted at the end of the tab.'
        },
        {
          key: 'UNIQUE_DB_TABLE_NAME',
          value:
            'This database table name is already in use. Type a different display name or database table name'
        },
        {
          key: 'SUFFIX_TOOLIP',
          value: 'You can use $ sign to access the form item object.'
        },
        {
          key: 'TAB_SETTINGS',
          value: 'Tab settings'
        },
        {
          key: 'GENERAL',
          value: 'General'
        },
        {
          key: 'DELETE_ITEM',
          value: 'Delete item'
        },
        {
          key: 'MOVE',
          value: 'Move'
        },
        {
          key: 'TIME_CREATED',
          value: 'Time Created'
        },
        {
          key: 'ADD_SIDE_STEP',
          value: 'Add side step'
        },
        {
          key: 'START_WITH_CSE',
          value: 'Can only start with Cse, and contain a-z, 0-9'
        },
        {
          key: 'ADMINISTRATION_PAGES_SETTINGS',
          value: 'Administration Pages Settings'
        },
        {
          key: 'DISPLAY_NAME',
          value: 'Display name'
        },
        {
          key: 'VALUE',
          value: 'Value'
        },
        {
          key: 'PROVIDERS',
          value: 'Providers'
        },
        {
          key: 'EDIT_BY_NOTIFICATION_TEXT',
          value:
            "The control's <u>filter</u> is based on one or more properties on the form. <br/>When they are empty, the control will not be editable."
        },
        {
          key: 'ADD_TO_FAVORITES',
          value: 'Add To Favorites'
        },
        {
          key: 'ENTITY_AND_FORMS_STEP_LABEL',
          value: 'Step 1 / 2 - Entity and Forms'
        },
        {
          key: 'PROGRESS_COLUMN_HELP',
          value:
            'Users manually update this column. <br/>The other column is updated automatically.'
        },
        {
          key: 'RESULTS_FILTER',
          value: 'Results Filter'
        },
        {
          key: 'PLACE_AFTER',
          value: 'Place After'
        },
        {
          key: 'PROPERTY',
          value: 'Property'
        },
        {
          key: 'COMMON',
          value: 'Common'
        },
        {
          key: 'DAY_EXCEPTIONS',
          value: 'Day exceptions:'
        },
        {
          key: 'TABLE_PROPERTY_SYSTEM_NAME_HELP',
          value:
            'Cannot contain spaces. Capitalize first letters. Example: MyEntities'
        },
        {
          key: 'ENTITIES_SAVE_SUCCESS',
          value: 'Your schema changes have been saved successfully'
        },
        {
          key: 'REMAINING_WORK_CALCULATED_AS',
          value: 'Calculated as (Actual / % Complete - Actual)'
        },
        {
          key: 'MANAGE_BUTTONS',
          value: 'Manage buttons'
        },
        {
          key: 'PERSISTENCEBASEDTO_TIMECREATED_DISPLAY_NAME',
          value: 'Time Created'
        },
        {
          key: 'ACTION_RULES',
          value: 'Action Rules'
        },
        {
          key: 'NEW_FORMULA',
          value: 'New Formula'
        },
        {
          key: 'STOP_RULE_DESCRIPTION',
          value:
            "Stop rules prohibit making changes to an item if conditions are met.<BR/>For example: Prohibit approving a Design step if a design document wasn't attached."
        },
        {
          key: 'CANNOT_DELETE_THE_CREATE_BUTTON',
          value: 'Cannot delete the Create button'
        },
        {
          key: 'DEFAULT_SETTINGS_AFFECT',
          value:
            'Default settings affect how the property is displayed in other forms, dashboards, notifications, etc.'
        },
        {
          key: 'SELECT_INFORMATION_GROUP',
          value: 'Select information group'
        },
        {
          key: 'CHOICE',
          value: 'Choice'
        },
        {
          key: 'ROW_LEVEL_AUTH',
          value: 'Row-level authorization'
        },
        {
          key: 'EDITABLE_LABEL_DEFAULT_TEXT',
          value: 'Type display name here'
        },
        {
          key: 'ORCHESTRATORS',
          value: 'Orchestrators'
        },
        {
          key: 'ROW_LEVEL_AUTH_TIP',
          value:
            "For example, a task's owner will be authorized to edit his / her task row."
        },
        {
          key: 'NEW_CHOICE_OPTION',
          value: 'New Choice Option'
        },
        {
          key: 'HIERARCHICAL_ADMIN_PAGE_DEFINITION',
          value: 'Hierarchical Administration Page Definition'
        },
        {
          key: 'EDITING_A_ROW_CAN_BE_DONE',
          value: 'Editing a row can be done by'
        },
        {
          key: 'READ_ONLY',
          value: 'Read only'
        },
        {
          key: 'MSP_TRANSLATION_ADVANCED',
          value: 'MSP translation (advanced)'
        },
        {
          key: 'ADD',
          value: 'Add'
        },
        {
          key: 'IMPORT_SOLUTION_OBJECTS_NAMES',
          value: 'Import solution object names'
        },
        {
          key: 'LINK_TO_ITEM',
          value: 'Link to item'
        },
        {
          key: 'ACTIONS_TO_PERFORM_AFTER_USER_CLICK',
          value: 'Actions to perform after the user clicks the button'
        },
        {
          key: 'MYWORKTASK_ENTITY_DISPLAY_NAME',
          value: 'My Work Task'
        },
        {
          key: 'SQL_QUERY_FORMULA_PROPERTY_HELP',
          value: 'Enter a SQL select query returning a single value.'
        },
        {
          key: 'NEW_STOP_RULE',
          value: 'New stop rule'
        },
        {
          key: 'ENTITY_CATEGORY_FOR_NEW_ROW',
          value: 'Entity category for new row:'
        },
        {
          key: 'TABLE_SYSTEM_NAME',
          value: 'Table system name'
        },
        {
          key: 'NOT_EMPTY',
          value: 'Must not be empty.'
        },
        {
          key:
            'USE_THE_FOLLOWING_INSTRUCTION_LINE_INSTEAD_OF_THE_DEFAULT_SETTING',
          value:
            'Use the following instruction line instead of the default settings'
        },
        {
          key: 'WORK_DAYS',
          value: 'Work days:'
        },
        {
          key: 'NEW_ASSIGNEE',
          value: 'New Assignee'
        },
        {
          key: 'OPEN_TASK_LINES',
          value:
            'Open task lines for tracking. Can be used to lock tasks for employees at certain workflow steps'
        },
        {
          key: 'WORKSHEET_FORM_TIP',
          value: 'Displayed when clicking Worksheet Details in My Work'
        },
        {
          key: 'TEXT_AREA',
          value: 'Textarea'
        },
        {
          key: 'TABLE_LEVEL_AUTH',
          value: 'Table-level authorization'
        },
        {
          key: 'WORK',
          value: 'Work'
        },
        {
          key: 'RESTRICT_EDITING_FROM',
          value: 'Restrict editing this from by adding conditions'
        },
        {
          key: 'CC',
          value: 'CC'
        },
        {
          key: 'SAVE',
          value: 'Save'
        },
        {
          key: 'INSTANCELEVELINTEGRATIONOPERATION_ENTITY_DISPLAY_NAME',
          value: 'Instance Level Integration Operation'
        },
        {
          key: 'SIMPLE_MODE',
          value: 'Simple Mode'
        },
        {
          key: 'DEFAULT_NAME_FORMAT',
          value: 'Default name format'
        },
        {
          key: 'MUST_HAVE_AT_LEAST',
          value: 'Must have at least'
        },
        {
          key: 'REF_TABLE_NAME',
          value: 'Reference table name'
        },
        {
          key: 'MSP_TRANSLATION',
          value: 'MSP Translation'
        },
        {
          key: 'ADD_TRANSITION',
          value: 'Add Transition'
        },
        {
          key: 'MOVE_COLUMN_TO_MORE_INFO',
          value: 'Move column to more info'
        },
        {
          key: 'LEAVE_EDITED_ENTITY_WARNING',
          value:
            'Are you sure you want to leave this page without saving the changes made on %s ?'
        },
        {
          key: 'DELETE_TASK_STYLE_SUB_TITLE',
          value: 'Are you sure you want to delete the Task Style?'
        },
        {
          key: 'TASK_GROUP',
          value: 'Task Group'
        },
        {
          key: 'ENABLE_CONDITION',
          value: 'Enable condition'
        },
        {
          key: 'CANNOT_DELETE_OBJECT_CAUSE_OTHER_USING_IT',
          value: 'Cannot delete object because other objects are using it.'
        },
        {
          key: 'SAVE_FAILED',
          value: 'Save failed!'
        },
        {
          key: 'ALLOW_USER_TO_ADD_COMMENTS',
          value: 'Allow the user to add comments'
        },
        {
          key: 'SPECIFY_WITH_USERS_ABLE_TO_VIEW_TASK_GROUP',
          value: 'Specify which users will be able to view this Task Group'
        },
        {
          key: 'DATABASE_KEY_COLUMN_NAME',
          value: 'Database Key Column Name'
        },
        {
          key: 'RESTRICT_VIEWING_CONTROL',
          value: 'Restrict viewing this control by adding conditions'
        },
        {
          key: 'PERFORM_ACTIONS_WHEN_ENTERING_STEP',
          value: 'Perform actions when entering step:'
        },
        {
          key: 'HIDE_PERCENT_WORK_COMPLETE',
          value: 'Hide % Work Complete buttons in My Work'
        },
        {
          key: 'DELETE_ENTITY_WARNING',
          value: 'Are you sure you want to delete %s entity?'
        },
        {
          key: 'VALUE_TO_SET',
          value: 'Value to set'
        },
        {
          key: 'AVAILABLE_ILIOS',
          value: 'Available ILIOs'
        },
        {
          key: 'MULTI_LOOKUP',
          value: 'Multi Lookup'
        },
        {
          key: 'TO_A_NON_EMPTY_VALUE',
          value: 'to a non-empty value'
        },
        {
          key: 'RELATIONSHIP_PROPERTY',
          value: 'Relationship Property'
        },
        {
          key: 'LINK_TO_TAB',
          value: 'Link to tab'
        },
        {
          key: 'MANY',
          value: 'Many'
        },
        {
          key: 'CHOOSE_DATA_TYPE',
          value: 'Choose property data type'
        },
        {
          key: 'SINGLE_LINE_PROPERTY',
          value: 'Single Line property'
        },
        {
          key: 'AUTOMATIC_ADD_THIS_TASK_GROUP_TASKS_TO_WORKSHEET',
          value: 'Automatically add tasks of this task group to worksheet weeks'
        },
        {
          key: 'TASK_TIME_REPORT_FORM',
          value: 'Task time report form'
        },
        {
          key: 'VIEWING_WORKSHEET_OF_OTHER_USERS',
          value: 'Viewing worksheet of other users'
        },
        {
          key: 'ENTITYCATEGORY_TITLE_PROPERTY_DISPLAY_NAME',
          value: 'Title'
        },
        {
          key: 'AUTO_COMPLETE_TEXT_BOX',
          value: 'Auto-complete text box'
        },
        {
          key: 'SENIOR_NODE',
          value: 'Senior node'
        },
        {
          key: 'APPROVE',
          value: 'Approve'
        },
        {
          key: 'DELETE_FORM',
          value: 'Delete form'
        },
        {
          key: 'MONDAY',
          value: 'Monday'
        },
        {
          key: 'TYPE_DATE_AND_TIME',
          value: 'Type date and time'
        },
        {
          key: 'COMPLETE_PERCENTAGE',
          value: '% Complete'
        },
        {
          key: 'DELETE_WORKFLOW_TEXT',
          value:
            "Existing items may be dependant on this workflow. If you delete it, users won't be able to view them."
        },
        {
          key: 'SELECT_IDENTIFIER_PROPERTY',
          value: 'Select identifier property'
        },
        {
          key: 'MILESTONES_TABLE_DESCRIPTION_PROPERTY',
          value: 'Milestones Table Description Textarea Property'
        },
        {
          key: 'COLUMNS_CELLS_MUST_SUM_TO',
          value: 'Columns cells must sum to'
        },
        {
          key: 'PROGRESS_COLUMN',
          value: 'Progress column'
        },
        {
          key: 'CUSTOM_INPUT_URL',
          value: 'Custom (Input URL)'
        },
        {
          key: 'SPECIFIC_APPROVERS',
          value: 'Specific Approvers'
        },
        {
          key: 'TABLE_EDITED_BY',
          value: 'Table edited by'
        },
        {
          key: 'CHILD_ELEMENTS',
          value: 'Child Elements'
        },
        {
          key: 'FOLLOW_THIS',
          value: 'Follow this'
        },
        {
          key: 'FILTER_BY_FREE_TEXT',
          value: 'Filter by free text'
        },
        {
          key: 'UNCHECKED',
          value: 'Unchecked'
        },
        {
          key: 'STEP_THREE_DESCRIPTION',
          value:
            'Step 3 applies the new solution to the web site and refreshes the Solution Designer.'
        },
        {
          key: 'OPEN_ATTENDANCE_LINES',
          value: 'Open attendance lines for tracking'
        },
        {
          key: 'PRESENT_DROP_FILES_TO_ATTACH',
          value:
            'present the "Drop files to attach" or "Browse" or "Paste URL" message and enable the "Drag and Drop" functionality'
        },
        {
          key: 'TREE_ANOTHER_ENTITY_AS_ROOT',
          value: 'Tree (Another entity is the root)'
        },
        {
          key: 'SKIP_THIS_CONDITION_IF',
          value: 'Skip this condition if'
        },
        {
          key: 'EDIT_SQL_QUERY',
          value: 'Edit SQL query'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_WORKFLOW_GRAPH',
          value: 'Do you want to delete the workflow graph'
        },
        {
          key: 'SELECT',
          value: 'select'
        },
        {
          key: 'DELETE_MORE_INFO',
          value: 'Delete more info'
        },
        {
          key: 'USER_SET_IN_PROPERTY',
          value: 'User set in property'
        },
        {
          key: 'NEW_ACTION_TOOLTIP',
          value: 'Click here to create a new action'
        },
        {
          key: 'CUSTOM_LINK',
          value: 'Custom link'
        },
        {
          key: 'FULL_SIZE',
          value: 'Full size'
        },
        {
          key: 'THIS_ENTITY_WILL_BE_AVAILABLE_TO_ALL_BECAUSE_EVERYONE',
          value:
            'This entity will be available to all users because the Everyone role group has no conditions.'
        },
        {
          key: 'ROWS',
          value: 'rows'
        },
        {
          key: 'TIME_AND_PROGRESS_TRACKING',
          value: 'Time and progress tracking'
        },
        {
          key: 'SERVER_ADMINISTRATION',
          value: 'Server administration'
        },
        {
          key: 'HIDE_LIST_BUTTON',
          value: 'Hide List Button'
        },
        {
          key: 'BASE_ROLE',
          value: 'Base Role'
        },
        {
          key: 'ADVANCED',
          value: 'Advanced'
        },
        {
          key: 'ASCENDING',
          value: 'Ascending'
        },
        {
          key: 'TRANSITION_PICKER',
          value: 'Transition Picker'
        },
        {
          key: 'CHANGE_DEFAULT_SETTINGS',
          value: 'Change default settings?'
        },
        {
          key: 'CREATE_RIBBON_GROUP',
          value: 'Create Ribbon Group'
        },
        {
          key: 'XML_EXTENSIONS',
          value: 'XML Extensions'
        },
        {
          key: 'ENTER_THE_DISPLAY_NAME_OF_GROUP',
          value: 'Enter the display name of the ribbon group.'
        },
        {
          key: 'SEPARATE_USERS_OR_EMAIL_USING_SEMI_COLONS',
          value: 'Separate users or e-mail addresses using semi colons (;)'
        },
        {
          key: 'USER_SET_IN_APP_PREF_TIP',
          value: 'For example, the CEO user.'
        },
        {
          key: 'FROM',
          value: 'From'
        },
        {
          key: 'FINISH',
          value: 'Finish'
        },
        {
          key: 'NEW_FORMULA_TOOLTIP',
          value: 'Create computed property'
        },
        {
          key: 'INTEGRATIONFLAG_FAILED',
          value: 'Failed'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_ROLE',
          value: 'Do you want to delete the role?'
        },
        {
          key: 'STATUSDTO_PREVIOUSSTEPID_DISPLAY_NAME',
          value: 'Previous Step'
        },
        {
          key: 'NUMBER',
          value: 'Number'
        },
        {
          key: 'ACTIONS_STEP_DESCRIPTION',
          value:
            'Specify which actions to perform when rule is triggered.<BR/>For example: cancel all child items.'
        },
        {
          key: 'LET_USERS_SEE_WORKFLOW_STEPS_AND_STEP_CURRENTLY_AT',
          value:
            'Let users see the workflow steps and the step the entity is currently at.'
        },
        {
          key: 'OUT_OF_THE_BOX',
          value: 'Out-of-the-Box %'
        },
        {
          key: 'DB_REF_COL_NAME',
          value: 'Database reference column name'
        },
        {
          key: 'SORT',
          value: 'Sort'
        },
        {
          key: 'IS_ABOUT_TO_CHANGE',
          value: 'is about to change'
        },
        {
          key: 'TABLE_LEVEL_AUTH_TOPIC',
          value:
            'The user will be authorized to Form or Workflow elements if he / she is set in a column.'
        },
        {
          key: 'SET_OBJECT_DISPLAY_NAME',
          value: 'Set this {0} display name and description'
        },
        {
          key: 'VIEWING_WORKSHEET_FOR_EXAMPLE_SECOND',
          value: '[Logged-in User] is equal to [User : Team : Manager]'
        },
        {
          key: 'TO_THIS_STEP',
          value: 'To this step'
        },
        {
          key: 'ACTION_ITEMS',
          value: 'Action Items'
        },
        {
          key: 'NEED_TO_RELOAD_SETTINGS_TOOLTIP',
          value:
            'To apply the changes to the web site, click Web Site, open Support menu and click Reload Settings.'
        },
        {
          key: 'NEW',
          value: 'New'
        },
        {
          key: 'REORDER_SUPPORT',
          value: 'Support rows reorder.'
        },
        {
          key: 'IS_NOT_EMPTY',
          value: 'Is not empty'
        },
        {
          key: 'EXISTING_ENTITY_BUTTON_HELPER',
          value:
            'For example: creating a table of tasks, risks and other existing entities'
        },
        {
          key: 'FIND_DISCIPLINE_TOOLTIP',
          value: 'Filter by discipline'
        },
        {
          key: 'SAVE_BUTTON_IS_VISIBLE_TO_EVERYONE_BECAUSE_EVERYONE_ROLE_GROUP',
          value:
            'The save button is visible to everyone because the Everyone role group has no conditions'
        },
        {
          key: 'RELOAD_SETTINGS',
          value: 'Reload Settings'
        },
        {
          key: 'TREE_SUPPORT',
          value:
            'Support using this entity in a tree (such as portfolios or strategic goals).'
        },
        {
          key: 'RETURNED_BY_SQL',
          value: 'returned by SQL query'
        },
        {
          key: 'WORKFLOW_SUPPORT',
          value: 'Support configuring a workflow for this entity.'
        },
        {
          key: 'CREATE_NEW_ITEM_DIALOG_BOX',
          value: 'Create New Item dialog box'
        },
        {
          key: 'CREATED_LABEL',
          value: 'Created'
        },
        {
          key: 'CONTEXT',
          value: 'Context'
        },
        {
          key: 'STEP_TWO_IMPORT_SOLUTION_CONFIGURATION',
          value: 'Step 2 - Import Solution Configuration'
        },
        {
          key: 'EXPAND_ALL',
          value: 'Expand all'
        },
        {
          key: 'NO_ITEMS_BE_AVAILABLE_FOR_TRACKING_ADD_EVERYONE',
          value:
            'No items will be available for tracking. To enable tracking, add the Everyone role group.'
        },
        {
          key: 'CHOOSE_DISCIPLINE',
          value: 'Choose discipline'
        },
        {
          key: 'CHANGE_DEFAULT',
          value: 'Change Default'
        },
        {
          key: 'ADD_CONDITION_XML_ELEMENTS',
          value: 'Add [Condition] XML elements'
        },
        {
          key: 'SAVING_CHANGES',
          value: 'Saving changes'
        },
        {
          key: 'FILTER_BY_STATE',
          value: 'Filter By State'
        },
        {
          key: 'REMOVE_THIS_ITEM_FROM_FOLLOWED',
          value: 'Remove this item from Followed Items list'
        },
        {
          key: 'NEW_ENTITY_BUTTON_HELPER',
          value: 'Create a new entity for the table'
        },
        {
          key: 'NO_TRANSITION_SELECTED',
          value:
            'No transition selected. select transition using from and to links.'
        },
        {
          key: 'OPEN_SETTINGS',
          value: 'Open settings'
        },
        {
          key: 'IS_EQUAL_TO',
          value: 'Is equal to'
        },
        {
          key: 'SYNC_WORK_PROPERTY_FROM_MY_WORK',
          value: 'Sync work property from My Work to Dialog'
        },
        {
          key: 'SELECT_OPTION',
          value: 'Select Option'
        },
        {
          key: 'MY_WORK_POLICY_ASSIGNMENT',
          value: 'My Work Policy Assignment'
        },
        {
          key: 'LOGGED_IN_USER_ROLE_FILTER',
          value: 'Logged in user role filter'
        },
        {
          key: 'MY_WORK_POLICY_ASSIGNMENT_TEXT',
          value:
            'Users passing the following conditions will be assigned to this policy.'
        },
        {
          key: 'IS_GREATER_THAN_OR_EQUAL_TO',
          value: 'Is greater than or equal to'
        },
        {
          key: 'SWITCH_ASSIGNEE_HEADER',
          value: "Switch the step's assignee to a different role:"
        },
        {
          key: 'MOVE_CONTAINER',
          value: 'Move container'
        },
        {
          key: 'DISPLAY_NAME_AND_DESCRIPTION',
          value: 'Display name and description'
        },
        {
          key: 'ACTUAL_WORK_AGAINST_ESTIMATED_WORK_HELP',
          value:
            'Recommended for reserved hours, where progress is not applicable'
        },
        {
          key: 'PORT',
          value: 'Port'
        },
        {
          key: 'TO_STEP',
          value: 'to step'
        },
        {
          key: 'TO_BE',
          value: 'to be'
        },
        {
          key: 'CHOOSE_PROPERTY_TO_COPY_VALUE_TO',
          value: 'Choose a property to copy a value to:'
        },
        {
          key: 'SELECT_FORM',
          value: 'Select form'
        },
        {
          key: 'ACTION_RULE_DESCRIPTION',
          value:
            "Action rules modify or move item's workflow.<BR/>For example: When item is cancelled, cancel all child items as well."
        },
        {
          key: 'CREATE_NEW_BLANK_WORKFLOW',
          value: 'Create new blank workflow:'
        },
        {
          key: 'ICON',
          value: 'Icon'
        },
        {
          key: 'YOU_CAN_ALSO_SET_WORKFLOW_NOTIFICATION_FROM_WE',
          value: 'You can also set workflow notifications from Workflow Editor'
        },
        {
          key: 'INTEGRATION_TAB',
          value: 'Integration tab'
        },
        {
          key: 'OR_BEFORE_IT',
          value: 'or before it'
        },
        {
          key: 'BUTTONS_CURRENTLY_IN_GROUP_WILL_MOVE_TO_FIRST_GROUP',
          value:
            'The buttons currently in the group will be moved to the first group.'
        },
        {
          key: 'REGRESS',
          value: 'Regress'
        },
        {
          key: 'DONT_DISPLAY_CONFIRMATION_MESSAGE',
          value: "Don't display confirmation message"
        },
        {
          key: 'RESET',
          value: 'Reset'
        },
        {
          key: 'STATUSDTO_STATUS_DISPLAY_NAME',
          value: 'Status'
        },
        {
          key: 'REPORT_TARGET',
          value: 'Report Target'
        },
        {
          key: 'NEED_TO_RESTART_MSP',
          value: 'Restart MSP'
        },
        {
          key: 'REPORTING_MODE',
          value: 'Reporting mode'
        },
        {
          key: 'ADVANCED_SETTINGS',
          value: 'Advanced Settings'
        },
        {
          key:
            'TO_SET_OPERATION_DURATION_THRESHOLDS_CLICK_APPLICATION_PREFERENCES',
          value:
            'To set operation duration thresholds, click <b>Application Preferences</b>, and open the <b>Troubleshooting</b> category.'
        },
        {
          key: 'CREATE_STEP_BEFORE',
          value: 'Create step before'
        },
        {
          key: 'SESSION_END',
          value: 'Session End'
        },
        {
          key: 'SELECT_APPLICATION_PREFERENCE',
          value: 'Select application Preference'
        },
        {
          key: 'FIND_DISCIPLINE',
          value: 'Find discipline'
        },
        {
          key: 'UPDATED_BY',
          value: 'Updated By'
        },
        {
          key: 'SAVE_AS_NEW',
          value: 'Save as New'
        },
        {
          key: 'WEB_SITE',
          value: 'Web Site'
        },
        {
          key: 'REFERENCE_COLUMN',
          value: 'Reference Column'
        },
        {
          key: 'ITREE_PARENT_DISPLAY_NAME',
          value: 'Parent'
        },
        {
          key: 'NAME_FORMAT',
          value: 'Name format (for searches and logging)'
        },
        {
          key: 'OPEN',
          value: 'Open'
        },
        {
          key: 'NEW_ACTION_RULE',
          value: 'New action rule'
        },
        {
          key: 'WORKSHEETS_AND_TASKS',
          value: 'Worksheets and tasks'
        },
        {
          key: 'MSP_USER_NAME',
          value: 'MSP User Name'
        },
        {
          key: 'XML_CONTROL',
          value: 'XML Control'
        },
        {
          key: 'STATE_IS',
          value: 'State is'
        },
        {
          key: 'ITREETABLE_LEVELINTREE_DISPLAY_NAME',
          value: 'Level in Tree'
        },
        {
          key: 'FORM_MUST_CONTAIN_TABS',
          value: 'Form must contain more than one tab'
        },
        {
          key: 'PERCENT_COMPLETE',
          value: '% Complete'
        },
        {
          key: 'INACTIVE',
          value: 'Inactive'
        },
        {
          key: 'DELETE_MY_WORK_POLICY_HEADER',
          value: 'Are you sure you want to permanently delete the policy?'
        },
        {
          key: 'IS_AT_OR_BEYOND_STEP',
          value: 'Is at or beyond step'
        },
        {
          key: 'SET_REPORT_DISPLAY_NAME',
          value: 'Set this report display name and description'
        },
        {
          key: 'USE_ROLE_GROUP',
          value:
            'Use role group to check different conditions based on the role of the logged-in user'
        },
        {
          key: 'EXPORT_ONLY_NAMES_MISSING_TRANSLATION',
          value: 'Export only names missing translation'
        },
        {
          key: 'NEW_FILTER',
          value: 'New Filter'
        },
        {
          key: 'REVERSE_LOOKUP_DISPLAY_NAME',
          value: 'Reverse lookup display name'
        },
        {
          key: 'YES',
          value: 'Yes'
        },
        {
          key: 'TIME_UPDATED',
          value: 'Time Updated'
        },
        {
          key: 'STATUS',
          value: 'Status'
        },
        {
          key: 'USE_THE_FOLLOWING_ITEM_FORMAT',
          value: 'Use the following Item format instead of the default'
        },
        {
          key: 'USERS_CAN_TRACK',
          value: 'Users can track'
        },
        {
          key: 'BUTTON_CANT_BE_VIEWED',
          value:
            'The Button is currently not viewable. To enable viewing add the "Everyone" role group.'
        },
        {
          key: 'CLOSE_SESSION',
          value: 'Close session'
        },
        {
          key: 'SET_INITIAL_VALUE_OF_ADMIN_TIME_REPORTS',
          value: 'Set initial value to properties of admin time reports:'
        },
        {
          key: 'EXAMPLE_INSTRUCTION_LINE',
          value:
            'Example: [Impact User : Full Name] should assess work and cost for the requirement'
        },
        {
          key: 'PROPERTIES_DATA_TYPES',
          value: 'Set properties data types'
        },
        {
          key: 'PRIMARY_PROPERTIES_FOR_BROWSING_REPORTS_NOTIFICATIONS',
          value: 'Primary properties (for browsing, reports and notifications)'
        },
        {
          key:
            'TO_RESTRICT_VIEWING_THIS_BUTTON_SELECT_TRANSITION_AND_CLICK_ALLOWED_USER',
          value:
            'To restrict viewing this button, select the transition and click <b>Allowed users</b> in <b>Transition Picker</b>'
        },
        {
          key: 'SORRY',
          value: 'Sorry...'
        },
        {
          key: 'TABLE',
          value: 'Table'
        },
        {
          key: 'EDITABLE_LABEL_DEFAULT_DESCRIPTION',
          value: 'Type description here'
        },
        {
          key: 'MY_WORK_POLICIES_ASSIGNMENT_ORDER_TEXT',
          value:
            'Users will be assigned to the first policy which passes the assignment conditions.'
        },
        {
          key: 'TASK_TIME_REPORT_FORM_TIP',
          value: 'Displayed after double-clicking a task day cell in My Work'
        },
        {
          key: 'STATUSDTO_PREVIOUSSTEPDESCRIPTION_DISPLAY_NAME',
          value: 'Previous Step Description'
        },
        {
          key: 'EXCLUDE_PROPERTY_FROM_EVENTS_GENERATOR',
          value: 'Exclude this property from events'
        },
        {
          key: 'MESSAGE_STEP',
          value: 'Step 2/3 - Message'
        },
        {
          key: 'WORKFLOWS',
          value: 'Workflows'
        },
        {
          key: 'DELETE_INFORMATION_SECTION',
          value: 'Delete information section'
        },
        {
          key: 'IS_LATER_THAN',
          value: 'Is later than'
        },
        {
          key: 'LINK_TO_ITEM_EXAMPLE',
          value: 'Example: [Detailed Planning Task : Requirement]'
        },
        {
          key: 'INTEGRATIONS',
          value: 'Integrations'
        },
        {
          key: 'XML_RULE',
          value: 'Xml Rule'
        },
        {
          key: 'ENTITY_CLASS_NAME',
          value: 'Entity Class Name'
        },
        {
          key: 'AVAILABLE_FORMS',
          value: 'Available forms'
        },
        {
          key: 'GRID_CONTAINER_PROPERTIES',
          value: '{0} {1} {2} '
        },
        {
          key: 'WHERE_CLAUSE',
          value: 'Where Clause'
        },
        {
          key: 'CANNOT_DELETE_APPROVE_BUTTONS',
          value: 'Cannot delete Approve buttons'
        },
        {
          key: 'WORKSHEET',
          value: 'Worksheet'
        },
        {
          key: 'NO',
          value: 'No'
        },
        {
          key: 'CUSTOM_NODE',
          value: 'Custom node'
        },
        {
          key: 'RESUME_MAIN_FLOW',
          value: 'Resume main flow'
        },
        {
          key: 'DELETE_INFORMATION_GROUP',
          value: 'Delete information group'
        },
        {
          key: 'DELETE_AUTH_NODE_TEXT',
          value:
            'You should remove forms and workflows referencing this authorization node before deleting. All child nodes will be deleted as well.'
        },
        {
          key: 'GENERAL',
          value: 'General'
        },
        {
          key: 'WORKFLOW_GRAPH',
          value: 'Workflow Graph'
        },
        {
          key: 'NEW_FORM',
          value: 'New Form'
        },
        {
          key: 'MOVE_DOWN',
          value: 'Move down'
        },
        {
          key: 'SOLUTION_DESIGNER_LICENSE_ROLE',
          value: 'Solution Designer'
        },
        {
          key: 'CREATED_BY',
          value: 'Created by'
        },
        {
          key: 'AUTO_ADD_TASKS_FROM_PREVIOUS_WEEK',
          value: 'Auto-add tasks from previous week'
        },
        {
          key: 'ROW_LEVEL_AUTH_TOPIC',
          value:
            'The user will be authorized only to rows which he / she is set in a column.'
        },
        {
          key: 'ADDED_APPLICATION_PREFERENCES',
          value: 'Added application preferences'
        },
        {
          key: 'REVERT_WARNING',
          value: 'All recent changes will be lost'
        },
        {
          key: 'OK',
          value: 'OK'
        },
        {
          key: 'REJECTION',
          value: 'Rejection'
        },
        {
          key: 'ACTIVITY_OWNER_PROPERTY',
          value: 'Activity Owner User Property'
        },
        {
          key: 'SINGLE_LINE_OF_TEXT',
          value: 'Single Line of Text'
        }
      ]
    },
    {
      key: 'he',
      value: [
        {
          key: 'DELETE_ROLE_DESCRIPTION',
          value:
            'השלבים של התפקיד יימחקו. אתה צריך להעביר לגופים באותם צעדי עבודה לשלבי עבודה אחרים.'
        },
        {
          key: 'ADD_SIDE_STEP_DESCRIPTION',
          value:
            'צעדי סייד לגרום זרימת העבודה כדי להשהות או הסוף. דוגמאות: מחכה לתשובת לקוחות, בהמתנה, נדחה.'
        },
        {
          key: 'IS_LATER_THAN',
          value: 'האם מאוחר מ'
        },
        {
          key: 'MANDATE_USER_TO_ADD_COMMENTS',
          value: 'המנדט למשתמש להוסיף הערות'
        },
        {
          key: 'REVERSE_LOOKUP_DISPLAY_NAME_INPUT_HELP',
          value: 'מאפיין זה ייוצר על ישות השולחן כמו בדיקת לישות הטופס.'
        },
        {
          key: 'THIS_FORM_IS_BASED_ON_THE_ENTITY',
          value: 'טופס זה מבוסס על הישות'
        },
        {
          key: 'EDIT_CALENDAR',
          value: 'לוח עריכה'
        },
        {
          key: 'HISTORY_TAB',
          value: 'חוצץ הסטוריה'
        },
        {
          key: 'NO_TRANSITION_SELECTED',
          value: 'לא נבחר מעבר שלב.השתמש בלחצני מ ועד.'
        },
        {
          key: 'REPORTING_MODE_STEP_LABEL',
          value: 'שלב 2/2 - דיווח מצב'
        },
        {
          key: 'FOLLOW_THIS',
          value: 'עקוב אחר פריט'
        },
        {
          key: 'CUSTOM_INPUT_URL',
          value: 'מותאם אישית (הכנס קישור)'
        },
        {
          key: 'CREATED_BY',
          value: ''
        },
        {
          key: 'MSP_2_ORCHESTRATOR_PORT',
          value: 'MSP כדי Orchestrator פורט'
        },
        {
          key: 'MESSAGE_STEP_HELP',
          value:
            'מומלץ להוסיף את המזהה של הפריט בהודעה. שקול גם מסביר את סיבת התחנה, ואת הצעדים המשתמש צריך לנקוט כדי להמשיך'
        },
        {
          key: 'LOOKUP',
          value: 'חיפוש יישות'
        },
        {
          key: 'DELETE_AUTH_TREE',
          value: 'מחק עץ אישורים'
        },
        {
          key: 'MANDATORY_PROPERTY_TEXT_AREA',
          value: 'חסר'
        },
        {
          key: 'CHOOSE_PROPERTY_TO_COPY_VALUE_TO',
          value: 'בחר שדה להעתיק אליו את הערך'
        },
        {
          key: 'REMOVE',
          value: 'הסר'
        },
        {
          key: 'EDIT_HIERARCHY_LEVEL',
          value: 'רמת היררכיה קיימת'
        },
        {
          key: 'SQL_DESCRIPTION',
          value: 'שורות מייצגות עצמים, ועמודות מייצגי נכסים'
        },
        {
          key: 'FOLDER_TIP',
          value:
            'טופס או תהליך עבודה אשר מאושר לתיקייה, מאשר באופן אוטומטי את כל הבנים של התיקייה הזו. לדוגמא, משתמשי לקוח.'
        },
        {
          key: 'AVAILABLE_WORKFLOWS',
          value: 'תהליכי עבודה זמינים'
        },
        {
          key: 'COMPLETE_PERCENTAGE',
          value: '% השלמה'
        },
        {
          key: 'MESSAGE_STEP_DESCRIPTION',
          value: 'ציין את המסר להציג אם הכלל נכשל.'
        },
        {
          key: 'PROPERTIES_IN_A_LINE',
          value: 'מספר אלמנטים בשורה'
        },
        {
          key: 'START_WITH_CSE',
          value: 'חסר'
        },
        {
          key: 'ACTION_RULES',
          value: 'חוקי פעולה'
        },
        {
          key: 'USE_THE_FOLLOWING_TO_CONFIGURE_CONTROL_USING_XML',
          value: 'השתמש בתוכן הבא לצורך הגדרת פקד ע"י XML.'
        },
        {
          key: 'VALIDATIONS',
          value: 'אימותים'
        },
        {
          key: 'LINK_TO_ITEM',
          value: 'קישור הפריט'
        },
        {
          key: 'USE_THE_FOLLOWING_XML_EXTENSIONS',
          value: 'השתמש בתאים הבאים להרחיב את הXML'
        },
        {
          key: 'MOVE_CONTROL',
          value: 'העבר פקד'
        },
        {
          key: 'CHOOSE_SQL_CONNECTION',
          value: 'בחר חיבור SQL'
        },
        {
          key: 'XML_EXTENSIONS',
          value: 'הרחבת XML'
        },
        {
          key: 'PROPERTY_CONDITION',
          value: 'תנאי על מאפיין'
        },
        {
          key: 'WORKFLOW_CONDITION',
          value: 'תנאי על תהליך עבודה'
        },
        {
          key: 'DISPLAY_STEP_IN_WORKFLOW_GRAPH',
          value: 'הצג שלב זה בגרף תהליך העבודה'
        },
        {
          key: 'TO_THIS_STEP',
          value: 'לשלב זה'
        },
        {
          key: 'TABLE_DESCRIPTION',
          value: 'תיאור הטבלה'
        },
        {
          key: 'TASKS',
          value: ''
        },
        {
          key: 'CRITERIA',
          value: 'Criteria'
        },
        {
          key: 'CHOOSE_PLACE_AFTER',
          value: 'בחר מקום לאחר'
        },
        {
          key: 'ALLOWED_USERS',
          value: 'משתמשים מורשים'
        },
        {
          key: 'COLUMNS_CELLS_MUST_SUM_TO',
          value: 'סכום העמודות צריך להיות'
        },
        {
          key: 'LEAVE_EDITED_ENTITY_WARNING',
          value:
            'האם אתה בטוח שברצונך לעזוב את הדף מבלי לשמור את השינויים ביישות %s?'
        },
        {
          key: 'REMOVE_STEP',
          value: 'מחיקת צעד'
        },
        {
          key: 'ADD_FLOW_STEP_DESCRIPTION',
          value: 'הוסף צעד לתהליך הראשי'
        },
        {
          key: 'PERSISTENCEBASEDTO_MYWORKTASK_DISPLAY_NAME',
          value: 'משימת גליון עבודה'
        },
        {
          key: 'NEW_DAY_EXCEPTION',
          value: 'חריגה חדשה יום'
        },
        {
          key: 'COMMON',
          value: 'מצויים'
        },
        {
          key: 'TREE_SUPPORT',
          value: 'תמוך בהצגת היישות כעץ'
        },
        {
          key: 'STEP_THREE_DESCRIPTION',
          value: 'שלב 3 חל הפתרון החדש לאתר האינטרנט ומרענן את מעצב הפתרון.'
        },
        {
          key: 'RESERVED_SYSTEM_NAME',
          value: 'חסר'
        },
        {
          key: 'ASSIGNEE',
          value: 'אחראי'
        },
        {
          key: 'ATTRIBUTES',
          value: 'מאפיינים'
        },
        {
          key: 'ALERT',
          value: 'הודעה'
        },
        {
          key: 'CANNOT_DELETE_THE_CREATE_BUTTON',
          value: 'אי אפשר למחוק את לחצן צור'
        },
        {
          key: 'ORDER_BY',
          value: 'מיון לפי'
        },
        {
          key: 'PROPERTY_PATH',
          value: 'מיקום מאפיין'
        },
        {
          key: 'SET_TABLE_DISPLAY_NAME',
          value: 'גדר שם התצוגה של הטבלה הזו ותיאור'
        },
        {
          key: 'CONFIRMATION',
          value: 'אישור'
        },
        {
          key: 'PERSISTENCEBASEDTO_INTEGRATION_IDENTIFIER_DISPLAY_NAME',
          value: 'מזהה אינטגרציה'
        },
        {
          key: 'INFORMATION_GROUPS_IN_A_ROW',
          value: 'מספר קבוצות מידע בשורה'
        },
        {
          key: 'PROPERTY_VALUE_IS_ABOUT_TO_CHANGE',
          value: 'ערך מאפיין משתנה'
        },
        {
          key: 'MY_WORK_POLICY_INFO',
          value:
            'כדי לנהל סיווגי קו וקטגוריות מנהל זמן למדיניות זו, לחץ על <b> מנהל </ b> בסרגל הכלים, ויש לחץ <b> קו סיווג </ b> או <b> קטגורית זמן Admin </ b>.'
        },
        {
          key: 'TYPE_ID_NUMBER',
          value: 'הקלד מספר מזהה'
        },
        {
          key: 'TRIGGERING_CONDITIONS_STEP_DESCRIPTION',
          value:
            'אם תנאים זו מתקיימים, החיסכון או הזזת העבודה תיאסר <BR/> לדוגמא:. העבודה היא על לקדמת סוג קובץ מצורף לא נוסף.'
        },
        {
          key: 'DB_KEY_COL_NAME',
          value: 'עמודת מפתח'
        },
        {
          key: 'TYPE_NUMBER',
          value: 'הקלד מספר'
        },
        {
          key: 'START_WITH_LETTER',
          value: 'חסר'
        },
        {
          key: 'EDIT_BY_NOTIFICATION_TEXT',
          value:
            'הפילטר של השדה מבוסס על אחד או יותר מהשדות על הדף. כאשר אחד מהשדות יהיו ריקים השדה יהיה לא עריך.'
        },
        {
          key: 'WORK',
          value: ''
        },
        {
          key: 'REMAINING_WORK_CALCULATED_AS',
          value: 'לפי חישוב (בפועל /% Complete - בפועל)'
        },
        {
          key: 'A_FORM_WITH_ENTERED_NAME_ALREADY_EXISTS',
          value: 'טופס בשם "{0}" קיים כבר במערכת'
        },
        {
          key: 'WORKSHEET_CONDITION',
          value: 'מצב גיליון'
        },
        {
          key: 'DESCRIPTION',
          value: 'תיאור'
        },
        {
          key: 'REVERSE_LOOKUP_DISPLAY_NAME',
          value: 'שם תצוגה בדיקה לאחור'
        },
        {
          key: 'DELETE_MY_WORK_POLICY_HEADER',
          value: 'האם אתה בטוח שאתה רוצה למחוק את המדיניות לצמיתות ?'
        },
        {
          key: 'SESSION_END',
          value: 'סיום חיבור'
        },
        {
          key: 'ENTER',
          value: 'הכנס'
        },
        {
          key: 'SAVE_FAILED',
          value: 'השמירה נכשלה!'
        },
        {
          key: 'DB_COL_NAME',
          value: 'שם עמודה בבסיס הנתונים'
        },
        {
          key: 'CREATE_RIBBON_GROUP',
          value: 'צור Ribbon קבוצה'
        },
        {
          key: 'CHOOSE_PROPERTY',
          value: 'בחר מאפיין'
        },
        {
          key: 'ARE_YOU_SURE_YOU_WANT_TO_REMOVE_OBJECT_WARNING',
          value: 'האם אתה בטוח שברצונך למחוק את {0} ?'
        },
        {
          key: 'CREATE_NEW_BLANK_FORM',
          value: 'צור טופס חדש:'
        },
        {
          key: 'PROFESSIONAL_LICENSE_ROLE',
          value: ''
        },
        {
          key: 'ADD_ENTITY_TOOLTIP',
          value:
            'הוספת ישות כך שמשתמשים יוכלו לעקוב אחר הזמן והתקדמות נגד פריטים של אותו'
        },
        {
          key: 'TO_STEP',
          value: 'אל שלב'
        },
        {
          key: 'LEAVE_EMPTY_FOR_MAX',
          value: 'שאר ריק עבור מגבלת מערכת מרבית'
        },
        {
          key: 'ICON',
          value: 'אייקון'
        },
        {
          key: 'YES',
          value: 'כן'
        },
        {
          key: 'RECIPIENTS',
          value: 'נמענים'
        },
        {
          key: 'LOOKUP_ENTITY',
          value: 'יישות חיפוש'
        },
        {
          key: 'RETURN_TO',
          value: 'חזור ל'
        },
        {
          key: 'ADDITIONAL_USERS',
          value: 'משתמשים נוספים'
        },
        {
          key: 'AUTH_NODE',
          value: 'אוטוריזציה חדש'
        },
        {
          key: 'ENTITY_CATEGORY_FOR_NEW_ROW_NOTE',
          value:
            'הערה: כללי זרימת העבודה של הפריט ופעולות לא יבוצעו כאשר יצירה, שינוי ומחיקתו באמצעות הטבלה.'
        },
        {
          key: 'BUTTON_VIEWABLE_BECAUSE_EVERYONE',
          value:
            'הכפתור הוא יהיה חשוף בפני כולם כי קבוצת התפקיד "כולם" אין תנאים.'
        },
        {
          key: 'IS_PRIOR_TO',
          value: 'האם קודם ל'
        },
        {
          key: 'UNDEFINED_ENTITY',
          value: 'יישות לא מוגדרת'
        },
        {
          key: 'RECOMMENDED_FOR_ACTION_RULES',
          value: 'מומלץ כללי פעולה'
        },
        {
          key: 'INTEGRATIONS',
          value: 'אינטגרציות'
        },
        {
          key: 'SKIP_IF',
          value: 'דלג אם'
        },
        {
          key: 'VIEWING_WORKSHEET_FOR_EXAMPLE_SECOND',
          value: '[משתמש שנכנס למערכת] שווה [משתמש: צוות: מנהל]'
        },
        {
          key: 'OPEN_NON_WORK_WEEK_DAYS',
          value: 'בימים הלא-עבודה בשבוע Open למעקב'
        },
        {
          key: 'CHOOSE_DISCIPLINE',
          value: 'בחר קטגוריה'
        },
        {
          key: 'SET_GROUPING_ORDER_WORKFLOW_BUTTONS_USING_LIST',
          value: 'הגדר את הקיבוץ והסדר של כפתורי עבודה באמצעות הרשימה שלמטה.'
        },
        {
          key: 'RETURNED_BY_SQL',
          value: 'חזרו על ידי שאילתת SQL'
        },
        {
          key: 'DELETE_SECTION',
          value: 'מחק מקטע'
        },
        {
          key: 'TO_RUN_THIS_OPERATION_CLICK_SETTINGS',
          value:
            'כדי להפעיל פעולה זו על Orchestrator ספציפי, לחץ על הגדרות מדף הבית פתרון מעצב, <br/> פתח את הקטע Orchestrators, ולאחר מכן לפתוח את חלון ההגדרות של Orchestrator.'
        },
        {
          key: 'PRINT',
          value: 'הדפס'
        },
        {
          key: 'TRIGGERING_CONDITIONS_STEP',
          value: 'תנאי הפעלה - שלב 1/3'
        },
        {
          key: 'MIN_WORK_PER_DAY',
          value: 'עבודה בפועל מינימום ליום (HR):'
        },
        {
          key: 'EXAMPLE_PORTFOLIO_REQUIREMENT_TASK',
          value: 'דוגמה: תיק / דרישות / המשימות'
        },
        {
          key: 'DELETING_A_FORM_CANNOT_BE_UNDONE',
          value:
            'פריטים קיימים עלולים להיות תלויים בטופס זה. מחיקתו תגרום לכך שמשתמשים לא יוכלו לצפות בהם.'
        },
        {
          key: 'SKIP_THIS_CONDITION_IF',
          value: 'דלג על התנאי אם'
        },
        {
          key: 'TRACKING',
          value: ''
        },
        {
          key: 'WORKSHEET_WEEK_END',
          value: 'תאריך סוף השבוע'
        },
        {
          key: 'PERCENT_COMPLETE_CALCULATED_AS',
          value: 'לפי חישוב בפועל / (שנותר בפועל +) * 100'
        },
        {
          key: 'ACTUAL_WORK_AND_PROGRESS',
          value: 'עבודה והתקדמות בפועל'
        },
        {
          key: 'ROW_FILTER',
          value: 'סינון'
        },
        {
          key: 'MANY',
          value: 'הרבה'
        },
        {
          key: 'DEFAULT_SCOREBOARD',
          value: 'לוח תוצאות ברירת מחדל'
        },
        {
          key: 'ATTACHMENT_STOP_RULE_DESCRIPTION',
          value: 'המשתמש יצטרך לצרף קובץ לפני הפריט ניתן התקדם'
        },
        {
          key: 'APPROVAL',
          value: 'אישור'
        },
        {
          key: 'TRANSLATE_THE_SOLUTION_TO_ADDITIONAL_LANGUAGES',
          value: 'תרגם פתרון שפות נוספות'
        },
        {
          key: 'EDIT',
          value: 'ערוך'
        },
        {
          key: 'SUNDAY',
          value: ''
        },
        {
          key: 'ATTACHMENTS_PROPERTY_DISPLAY_NAME',
          value: 'מסמכים'
        },
        {
          key: 'ALL_ITEMS_BE_INCLUDED_IN_GROUP_BECAUSE_EVERYONE',
          value: ': ייכללו כל הפריטים בקבוצה כי קבוצת התפקיד כולם אין תנאים.'
        },
        {
          key: 'RETURN_TO_MAIN_FLOW',
          value: 'החזר למחזור החיים הראשי'
        },
        {
          key: 'USER_ENTITY_DISPLAY_NAME',
          value: 'משתמש'
        },
        {
          key: 'STEP_THREE_RELOAD_SETTINGS',
          value: 'שלב 3 - הגדרות רעננות'
        },
        {
          key: 'MORE',
          value: ''
        },
        {
          key: 'DELETE_TAB',
          value: 'מחק לשונית'
        },
        {
          key: 'REMOVE_ASSIGNEE',
          value: 'מחק תפקיד'
        },
        {
          key: 'THE_PROPERTY_IS_ALREADY_ON_THE_FORM',
          value: 'המאפיין קיים בטופס, בחר מאפיין שלא קיים בטופס'
        },
        {
          key: 'BACKUP_SOLUTION_CONFIGURATION_TIP',
          value: 'הוא יווצר תחת מיקום היצוא'
        },
        {
          key: 'EXPORTING_SOLUTION_OBJECT_TRANSLATIONS',
          value: 'יצוא תרגומי אובייקט פתרון ...'
        },
        {
          key: 'SELECT_ROLE_TO_AUTHORIZE',
          value: 'בחר תפקידים לאישור:'
        },
        {
          key: 'WORKFLOWS',
          value: 'תהליכי עבודה'
        },
        {
          key: 'MSP_USER_NAME',
          value: 'שם משתמש MSP'
        },
        {
          key: 'STARTED_BY',
          value: 'Started by'
        },
        {
          key: 'WORKSHEET_CATEGORY',
          value: 'קטגוריית גליון עבודה'
        },
        {
          key: 'IS_AT_OR_BEFORE_STEP',
          value: 'האם בבית או לפני שלב'
        },
        {
          key: 'PERCENT_PREDICTED_CONSUMPTION',
          value: '% צריכה צפוי'
        },
        {
          key: 'COLUMN',
          value: 'עמודה'
        },
        {
          key: 'DELETE_MY_WORK_POLICY_TEXT',
          value:
            'דפי עבודה עשויות נוצרו כבר שימוש במדיניות זו. אם תמחק אותו, משתמשים לא יוכלו להציג אותם.'
        },
        {
          key: 'FILTER_BY_DATA_TYPE_TOOLTIP',
          value: 'חיפוש עפ"י סוג מאפיין'
        },
        {
          key: 'NEW_COLUMN_PROPERTY',
          value: 'עמודה חדשה'
        },
        {
          key: 'NEXT_BUTTON',
          value: 'הבא >'
        },
        {
          key: 'CONTROL_CANT_BE_EDITED',
          value:
            'השדה לא עריך כרגע. בשביל לאפשר עריכה אנא הוסף את תפקיד "כל אחד"'
        },
        {
          key: 'NEW_WORKFLOW_CONDITION',
          value: 'חדשות עבודת מצב'
        },
        {
          key: 'MOVE_TO_TAB',
          value: 'עבור לטאב'
        },
        {
          key: 'SELECT_ICON',
          value: 'בחר צלמית'
        },
        {
          key: 'SKIP_TO',
          value: 'דלג אל '
        },
        {
          key: 'ROLE_FILTER',
          value: 'מסנן לפי תפקיד'
        },
        {
          key: 'IMPORT_MSP_LANGUAGE_ENTRIES',
          value: 'ערכי שפת MSP היבוא'
        },
        {
          key: 'CREATE_AND_CLOSE',
          value: 'צור וסגור'
        },
        {
          key: 'VIEWER_LICENSE_ROLE',
          value: ''
        },
        {
          key: 'SINGLE_LINE_PROPERTY',
          value: 'רכוש קו יחיד'
        },
        {
          key: 'NEW_ASSIGNEE',
          value: 'אחראי חדש'
        },
        {
          key: 'DELETE_PROPERTY',
          value: 'מחק מאפיין'
        },
        {
          key: 'CLOSE',
          value: 'סגור'
        },
        {
          key: 'USER_IS_ASSIGNED',
          value: 'המשתמש הוא באחד מהתפקידים הבאים'
        },
        {
          key: 'CHOOSE_COLUMNS',
          value: 'בחר עמודות שיוצגו בטבלה המוצגת על ידי לחיצה כפולה על המאפיין'
        },
        {
          key: 'EXPAND_THIS_SECTION_BY_DEFAULT',
          value: 'הרחב את הקטע הזה כברירת מחדל אם התנאים הבאים מתקיימים'
        },
        {
          key: 'ADD_EVERYONE',
          value: 'הוסף כולם'
        },
        {
          key: 'STATUSDTO_STATUS_DISPLAY_NAME',
          value: 'סטטוס'
        },
        {
          key: 'SELECT_PROPERTY',
          value: 'בחר מאפיין'
        },
        {
          key: 'COMPARE_A_PROPERTY_TO',
          value: 'השווה מאפיין למאפיין אחר או לערך נתון'
        },
        {
          key: 'RESET',
          value: 'אתחול'
        },
        {
          key: 'ACTION_NAME',
          value: 'שם פעולה'
        },
        {
          key: 'ADMIN_CAN_MANAGE_ITEMS_BY',
          value: 'מנהלים יוכלו לנהל פריטים לפי'
        },
        {
          key: 'DOES_NOT_CONTAIN',
          value: 'לא מכיל'
        },
        {
          key: 'AP',
          value: 'AP'
        },
        {
          key: 'ACTION_ITEMS',
          value: 'Action Items'
        },
        {
          key: 'OF_THE',
          value: 'של'
        },
        {
          key: 'EXPORT_ONLY_NAMES_MISSING_TRANSLATION',
          value: 'שמות ייצוא היחיד שחסר תרגום'
        },
        {
          key: 'NEW_TABLE',
          value: 'טבלה חדשה'
        },
        {
          key: 'EDIT_WORKFLOW_CONDITION',
          value: 'תנאי זרימת עריכה'
        },
        {
          key: 'STEP_ONE_DESCRIPTION',
          value:
            'שלב 1 מייבאת גופים ועצמים SQL (תצוגות, משגרות מאוחסנות ופונקציות).'
        },
        {
          key: 'DISPLAY_ONLY_ROWS',
          value: 'הצג שורות שעוברות את המסנים הבאים'
        },
        {
          key: 'DATE_AND_TIME',
          value: 'תאריך ושעה'
        },
        {
          key: 'IMPORTING_SOLUTION_OBJECT_TRANSLATIONS',
          value: 'יבוא תרגומי אובייקט פתרון ...'
        },
        {
          key: 'NEW_ENTITY_TOOLTIP',
          value: 'צור יישות חדשה'
        },
        {
          key: 'MESSAGE_STEP',
          value: 'שלב 2/3 - הודעה'
        },
        {
          key: 'EXISTING_ENTITY_BUTTON_HELPER',
          value: 'לדוגמא: יצירה של טבלת משימות, סיכונים או יישות קיימת אחרת'
        },
        {
          key: 'NEW_CHOICE_OPTION',
          value: 'אפשרות בחירה חדשה'
        },
        {
          key: 'XML_CONTROL',
          value: 'פקד XML'
        },
        {
          key: 'ITEM_WAS_DELETED',
          value: 'פריט נמחק'
        },
        {
          key: 'IS_BEFORE_STEP',
          value: 'האם לפני הצעד'
        },
        {
          key: 'LOGGED_IN_USER_ROLE',
          value: 'ביקור אחרון תפקיד המשתמש'
        },
        {
          key: 'SELECT_FORM',
          value: 'בחר טופס'
        },
        {
          key: 'PERSISTENCEBASEDTO_MYWORKTASK_DESCRIPTION',
          value:
            'המשימה תכיל מידע "גיליון עבודה" כגון עבודה בפועל, % עבודה שהושלמה ועבודה נותרת.'
        },
        {
          key: 'VIEWED_BY',
          value: 'נצפה על ידי'
        },
        {
          key: 'APPLICATION_PREFERENCES',
          value: 'מאפייני אפליקציה'
        },
        {
          key: 'REPORT_TARGET_FRAME_NAME',
          value: 'שם מסגרת'
        },
        {
          key: 'TRANSLATE_SOLUTION_OBJECTS_TO_SELECTED_LANGUAGES',
          value: 'תרגם חפצי פתרון (כגון טפסי זרימות עבודה) כדי שפות שנבחרו'
        },
        {
          key: 'WORKSHEET_COLUMNS_BEHAVIOUR',
          value: 'התנהגות עמודות גיליון'
        },
        {
          key: 'ALLOW_ROWS_REORDER',
          value: 'אפשר שינוי סדר שורות'
        },
        {
          key: 'NEW_INFORMATION_GROUP',
          value: 'קבוצת מידע חדשה'
        },
        {
          key: 'USE_ROLE_GROUPS_TO_CHECK_DIFFERENT',
          value:
            'השתמש קבוצות התפקיד לבדוק תנאים שונים המבוססים על תפקידו של המשתמש המחובר.'
        },
        {
          key: 'DEFINE',
          value: 'הגדר'
        },
        {
          key: 'USE_THE_FOLLOWING_COLUMNS_SETTINGS',
          value: 'הצג את המאפיינים הבאים כעמודות במקום עמודות ברירת המחדל'
        },
        {
          key: 'DEFAULT_SETTINGS_AFFECT',
          value:
            'הגדרות ברירת מחדל המשפיעות על אופן הצגת המאפיין של טופס, לוח מחוונים, התראות וכדומה'
        },
        {
          key: 'WORKSHEET',
          value: 'גליון עבודה'
        },
        {
          key: 'ADD_ENTITY',
          value: ''
        },
        {
          key: 'SWITCH_ASSIGNEE_HEADER',
          value: 'לדוגמא:'
        },
        {
          key: 'TABLE_PROPERTY_SYSTEM_NAME_HELP',
          value:
            'השם אינו יכול לכלול רווחים. יש לוודא כי האות הראשונה היא אות גדולה. לדוגמא: MyEntities'
        },
        {
          key: 'EDIT_FORM_OF',
          value: 'עריכת טופס של'
        },
        {
          key: 'FOLDER',
          value: 'תיקייה'
        },
        {
          key: 'PERSISTENCEBASEDTO_TIMEUPDATED_DISPLAY_NAME',
          value: 'תאריך עדכון'
        },
        {
          key: 'AUTHORIZATION_TREE',
          value: 'עץ אוטוריזציה'
        },
        {
          key: 'ADMIN_TIME_REPORT_TIP',
          value: 'מוצג כאשר לחיצה כפולה על תא מנהל יום בעבודתי'
        },
        {
          key: 'CANNOT_DELETE_THE_SAVE_BUTTON',
          value: 'אי אפשר למחוק את לחצן שמור'
        },
        {
          key: 'SQL_QUERY',
          value: 'שאילתת SQL'
        },
        {
          key: 'TO_A_NON_EMPTY_VALUE',
          value: 'לערך לא ריק'
        },
        {
          key: 'DELETED',
          value: ''
        },
        {
          key: 'AUTHORIZATION_TREES',
          value: 'עצי אוטוריזציה'
        },
        {
          key: 'XML',
          value: 'XML'
        },
        {
          key: 'PROPERTY_HOLDING_PLANNED_WORK',
          value: 'מאפיין עבודה מתוכננת'
        },
        {
          key: 'ADMINISTRATOR_LICENSE_ROLE',
          value: ''
        },
        {
          key: 'RETURN_TO_SETTINGS',
          value: 'חזור להגדרות'
        },
        {
          key: 'REVERSE_LOOKUP_PRIMARY_SUB_TEXT',
          value: 'מאפיין זה ייוצר על ישות השולחן כמו בדיקת לישות הזאת.'
        },
        {
          key: 'SEND_EMAIL_NOTIFICATION_TO_THE_FOLLOWING_USERS',
          value: 'שלח הודעת דואר אלקטרוני למשתמשים הבאים'
        },
        {
          key: 'UNCHECKED',
          value: 'לא מסומן'
        },
        {
          key: 'RESULTS_FILTER',
          value: 'סינון תוצאות'
        },
        {
          key: 'SELECT_NEW_ASSIGNEE',
          value: 'בחר אחראי חדש'
        },
        {
          key: 'EDITORS_LIST_TITLE',
          value: 'אנא בחר עורך'
        },
        {
          key: 'OPEN_EXISTING_FORM',
          value: 'פתח טופס קיים:'
        },
        {
          key: 'ENTER_NEW_WORKFLOW_NAME',
          value: 'הכנס שם תהליך חדש'
        },
        {
          key: 'AN_ILIO_WILL_BE_CREATED_AND_THEN_RUN',
          value: 'אינטגרציה רמת-פריט תיווצר (אם לא נוצרה כבר) ותרוץ.'
        },
        {
          key: 'PROGRESS_COLUMN_HELP',
          value:
            'משתמשים לעדכן ידנית את הטור הזה. <br/> העמודה האחרת מתעדכנת באופן אוטומטי.'
        },
        {
          key: 'FIND_ENTITY_TOOLTIP',
          value: 'סנן לפי טקסט חופשי'
        },
        {
          key: 'MOVE_TO',
          value: 'העבר אל '
        },
        {
          key: 'EXCLUDE_FORM_BUTTONS',
          value: 'הסתר כפתורי טופס'
        },
        {
          key: 'NUMBER_WITH_DECIMAL_POINT',
          value: 'מספר עם נקודה עשרונית'
        },
        {
          key: 'NEW_ITEM_SET_ACTION',
          value: 'פעולה Set פריט חדש'
        },
        {
          key: 'CONFIGURATION_ITEMS_SECTION',
          value: 'פריטי תצורה'
        },
        {
          key: 'EDIT_SQL_QUERY',
          value: ''
        },
        {
          key: 'NEW_REPORT_TOOLTIP',
          value: 'דו"ח משמש להציג מאפיינים בטבלא'
        },
        {
          key: 'MAX_MIN',
          value: 'מקסימום / מינימום'
        },
        {
          key: 'MOVE',
          value: 'העבר'
        },
        {
          key: 'SELECTED_WORK_DAYS',
          value:
            'ימי עבודה נבחרים יהיו פתוחים כברירת מחדל עבור מעקב אחר משתמשים.'
        },
        {
          key: 'CREATE_NEW_ITEM_DIALOG_BOX',
          value: 'צור תיבת הדו-שיח פריט חדש'
        },
        {
          key: 'USERS_CAN_CHANGE_ITEMS_ORDER_INSIDE_TABLES',
          value: 'משתמשים יכולים לשנות פריטים להורות שולחנות בפנים'
        },
        {
          key: 'FORM_SETTINGS',
          value: 'הגדרות הטופס'
        },
        {
          key: 'SELECT_ENTITY',
          value: 'יישות'
        },
        {
          key: 'MANDATORY_AT_WORKFLOW_TRANSITIONS_HELP',
          value:
            'המשתמש יוכל לשמור את הטופס כאשר מאפיין זה ריק, אבל יהיה חייב למלא אותו לפני מעבר שלב.'
        },
        {
          key: 'MILESTONES_TABLE_DESCRIPTION_PROPERTY',
          value: 'אבני דרך שולחן תיאור Textarea נכס'
        },
        {
          key: 'OLD_ASSIGNEE',
          value: 'אחראי ישן'
        },
        {
          key: 'NEW_POLICY',
          value: 'מדיניות חדשה'
        },
        {
          key: 'BUTTON_CANT_BE_VIEWED',
          value:
            'הכפתור הוא כרגע לא ניתן לצפות. כדי לאפשר צפייה להוסיף לקבוצת התפקיד "כולם".'
        },
        {
          key: 'AUTHENTICATION',
          value: 'אימות'
        },
        {
          key: 'DELETE_AUTH_TREE_WARNING',
          value: 'האם אתה בטוח שברצונך למחוק את עץ האוטוריזציה?'
        },
        {
          key: 'PERCENT_CONSUMPTION',
          value: '% צריכה'
        },
        {
          key: 'NO',
          value: 'לא'
        },
        {
          key: 'STATUS_CONDITION',
          value: 'תנאי של מצב'
        },
        {
          key: 'TIME_CREATED',
          value: 'זמן יצירה'
        },
        {
          key: 'ADD_TRANSITION_HELP',
          value:
            'יתכן ומעבר השלב קיים כבר ע"י כפתור ה"חזרה לתהליך" שנמצא על מעבר שלב צדדי.'
        },
        {
          key: 'ADD_NEW_REPORT',
          value: 'הוסף דו"ח חדש'
        },
        {
          key: 'ROW',
          value: 'שורה'
        },
        {
          key: 'BACKGROUND_COLOR',
          value: 'צבע רקע'
        },
        {
          key: 'ADD_NEW_TAB',
          value: 'הוסף לשונית חדשה'
        },
        {
          key: 'USERS_ALLOWED_TO_APPROVE_THIS_STEP',
          value: 'משתמשים שמותר לאשר את הצעד הזה'
        },
        {
          key: 'BALANCE',
          value: 'יתרה'
        },
        {
          key: 'SELECT_APPLICATION_PREFERENCE',
          value: 'בחר מאפיין אפליקצייה'
        },
        {
          key: 'TODAY',
          value: 'היום'
        },
        {
          key: 'SEND_EMAIL_NOTIFICATION_WHEN',
          value: 'שלח הודעה בדואר אלקטרוני כאשר'
        },
        {
          key: 'REMOVE_FROM_FAVORITES',
          value: ''
        },
        {
          key: 'SELECT_ASSIGNEE_TO_THE_STEP',
          value: 'בחר אחראי עבור צעד זה.'
        },
        {
          key: 'THIS_REPORT_IS_BASED',
          value: 'דו"ח זה מבוסס על יישות'
        },
        {
          key: 'ENTER_NEW_FORM_NAME',
          value: 'הכנס שם טופס חדש'
        },
        {
          key: 'INCLUDE_BLANK_OPTION',
          value: 'כלול אפשרות ריקה'
        },
        {
          key: 'ATTACHMENT_CONDITION',
          value: 'תנאי מסמך'
        },
        {
          key: 'MANAGE_PRODUCTS',
          value: 'Manage Products'
        },
        {
          key: 'RUN_THIS_ACTION_ONLY_IF_CONDITIONS_ARE_SATISFIED',
          value: 'בצע פעולה זו רק אם התנאים הבאים מתקיימים'
        },
        {
          key: 'XML_SECTION_TOOLTIP',
          value: 'הוספת מיכל XML'
        },
        {
          key: 'DEFAULT_VALUES_OF_ADMIN_TIME_REPORT',
          value: 'ערכי ברירת מחדל של דוחות זמן מנהלתי'
        },
        {
          key: 'NO_ROLE_SELECTED',
          value: 'לא נבחר תפקיד. לחץ על תפקיד לבחירה.'
        },
        {
          key: 'LINK_TO_ENTITY_FORM',
          value: 'קישור לטופס היישות'
        },
        {
          key: 'FILTER_REPORT_RESULTS_SUB_TEXT',
          value: 'תוצאות רק שעוברות את המסנן הבא תוחזרנה'
        },
        {
          key: 'NEW_ENTITY_BUTTON_HELPER',
          value: 'צור יישות חדשה עבור הטבלה'
        },
        {
          key: 'RESTRICT_VIEWING_TAB',
          value:
            'להגביל את הצפייה כרטיסייה זו ובקרות הילד שלה על ידי הוספת תנאים'
        },
        {
          key: 'ALL',
          value: 'הכל'
        },
        {
          key: 'NEW_VALUE_CANNOT_BE_EMPTY',
          value: 'הערך אינו יכול להיות ריק'
        },
        {
          key: 'HIDE_PERCENT_WORK_COMPLETE',
          value: 'הסתר כפתורי % עבודה שהושלמה בדיווח השעות'
        },
        {
          key: 'INTEGRATION',
          value: 'אינטגרציה'
        },
        {
          key: 'LEAVE_EMPTY_TO_AUTO_FIT',
          value: 'השאר ריק כדי להתאים לתוכן. ערכים אפשריים בין 1 ל 100'
        },
        {
          key: 'BUTTONS',
          value: 'כפתורים'
        },
        {
          key: 'SESSION_END_MESSAGE_SUB_TEXT',
          value: 'שינויים שטרם נשמרו יאבדו'
        },
        {
          key: 'ADMINISTRATION_PAGES_SETTINGS',
          value: 'הגדרת עמודי ניהול'
        },
        {
          key: 'FOLDER_NAME',
          value: 'שם תיקייה'
        },
        {
          key: 'ALL_COLUMN_PROPERTIES',
          value: 'כל מאפייני הטבלה'
        },
        {
          key: 'INTEGRATIONFLAG_FAILED',
          value: 'נכשל'
        },
        {
          key: 'DELETE_ITEM_TEXT',
          value: 'בנים של פריט זה ימחקו גם כן'
        },
        {
          key: 'RESTRICT_VIEWING_REPORT',
          value: 'מנע צפייה בדו"ח זה על ידי הוספת תנאים'
        },
        {
          key: 'PROPERTY_SYSTEM_NAME',
          value: 'שם מערכת למאפיין'
        },
        {
          key: 'PERFORM_ACTIONS_WHEN_ENTERING_STEP',
          value: 'בצע פעולות בעת הזנת צעד:'
        },
        {
          key: 'EVERYONE_CAN_MOVE_WORKFLOW_BECAUSE_EVERYONE_ROLE_GROUP',
          value:
            'כל אחד יכול להזיז את העבודה בגלל שהקבוצה כולם התפקיד אין תנאים.'
        },
        {
          key: 'SET_INITIAL_VALUE_OF_TASK',
          value: 'ערך ראשוני נקבע מאפיינים של משימות להוסיף גיליונות'
        },
        {
          key: 'WILL_BE_ADDED_AS_CHILD_TO_WORKFLOW',
          value: 'יתווסף כאובייקט בן לאובייקט תהליך העבודה'
        },
        {
          key: 'NO_LIMIT',
          value: 'ללא הגבלה'
        },
        {
          key: 'DEVELOPMENT',
          value: 'פיתוח'
        },
        {
          key: 'ALL_COLUMN_PROPERTIES_TOOLTIP',
          value: 'הוסף מאפיינים לטבלה'
        },
        {
          key: 'STATUSDTO_PREVIOUSFLOWSTEPDESCRIPTION_DISPLAY_NAME',
          value: 'תיאור שלב קודם במחזור'
        },
        {
          key: 'SPECIFIC_APPROVERS',
          value: 'המשתמשים הבאים'
        },
        {
          key: 'DISPLAY_NAME_PLURAL_INPUT_HELP',
          value: 'יווצר מאפיין חדש מסוג טבלה בשם זה. דוגמא: My Entities'
        },
        {
          key: 'HOW_WORKFLOW_RESUME_STEP',
          value: 'שלב חדש בתהליך'
        },
        {
          key: 'ADD_PROPERTY',
          value: 'הוסף מאפיין'
        },
        {
          key: 'HELIX_ROLE',
          value: 'תפקיד Mode Helix'
        },
        {
          key: 'TAB',
          value: 'תווית'
        },
        {
          key: 'ADDING_ROWS_TO_TABLE',
          value: 'הוספת שורות לטבלה'
        },
        {
          key: 'SERVER_ADMINISTRATION',
          value: 'Server administration'
        },
        {
          key: 'UNIQUE_DISPLAY_NAME',
          value: 'חסר'
        },
        {
          key: 'SET_ENTITIES_ORDER',
          value: 'קבע את סדר הישויות'
        },
        {
          key: 'ENTITIES_EDITOR',
          value: 'יישויות'
        },
        {
          key: 'CHOOSE_STEP',
          value: 'בחר שלב'
        },
        {
          key: 'FIND_APPLICATION_PREFERENCE',
          value: 'חפש מאפיין אפליקציה'
        },
        {
          key: 'ATTACHMENT_DISPLAY_NAME',
          value: 'ATTACHMENT_DISPLAY_NAME'
        },
        {
          key: 'ITEM_INTEGRATION',
          value: 'אינטגרציה פריט'
        },
        {
          key: 'FORMS',
          value: 'טפסים'
        },
        {
          key: 'DELETE_TRANSITION',
          value: 'מחק את מעבר השלב'
        },
        {
          key: 'OK',
          value: 'אישור'
        },
        {
          key: 'AT_LEAST_ONE_ITEM_DOESNT_PASS_THE_CONDITION',
          value: 'לפחות אחד הפריטים לא עבר את התנאי'
        },
        {
          key: 'EXPORT_SOLUTION_OBJECT_NAMES',
          value: 'שמות עצם פתרון ייצוא'
        },
        {
          key: 'DISPLAY_NAME_AND_DESCRIPTION',
          value: 'שם תצוגה ותיאור'
        },
        {
          key: 'ADVANCED_SETTINGS',
          value: 'הגדרות מתקדמות'
        },
        {
          key: 'FILTER_BY_FREE_TEXT',
          value: 'חיפוש טקסט חופשי'
        },
        {
          key: 'EXPORT_MSP_LANGUAGE_ENTRIES',
          value: 'ערכי שפת היצוא MSP'
        },
        {
          key: 'EDIT_ITEM_SET_CONDITION',
          value: 'ערוך פריט תנאי'
        },
        {
          key: 'FOR_LAYOUT_PREVIEW_ONLY',
          value: 'לצורך תצורת עריכה בלבד.'
        },
        {
          key: 'TASK_NAME_SAMPLE',
          value: 'שם משימה לדוגמא'
        },
        {
          key: 'USERS_CAN_ADD_ITEMS_TO_FOLLOW_LIST_CANNOT_BE_UNSELECTED',
          value: 'העתק'
        },
        {
          key: 'REMOVE_THIS_ITEM_FROM_FOLLOWED',
          value: 'הסר מעקב אחר פריט.'
        },
        {
          key: 'PROPERTY_REPORTS_HEADER',
          value:
            'כדי לכלול מאפיין זה במחולל הדוחות, בחר את היישרות מהתפריט, פתח את לשונית ההגדרות וב"דוחות" סמן את התיבה שאומרת "משתמשים יכולים ליצור דוחות בהתבסס על יישות זו"'
        },
        {
          key: 'PORT',
          value: 'נמל'
        },
        {
          key: 'ACTIVITY_OWNER_PROPERTY',
          value: 'מאפייני משתמש האחראי על הפעילות'
        },
        {
          key: 'DELETE_TRANSITION_DESCRIPTION',
          value: 'האם אתה בטוח שברצונך למחוק את מעבר השלב?'
        },
        {
          key: 'ENABLE_DELETE_ACTION_ITEM',
          value: 'enable “Delete” action in the Edit Action Item popup form'
        },
        {
          key: 'VALUE',
          value: 'ערך'
        },
        {
          key: 'IS_LESS_THAN',
          value: 'האם קטן מ'
        },
        {
          key: 'ADDING_A_ROW_CAN_BE_DONE',
          value: 'הוספת שורה אפשרית עבור'
        },
        {
          key: 'ADD_A_PROPERTY_TO_THE_FORM',
          value: 'הוסף מאפיין לטופס'
        },
        {
          key: 'OPEN_WORKSHEET_AFTER',
          value: 'גליון Open לאחר תאריך הסיום שלה עבור בלבד (ימים):'
        },
        {
          key: 'PROPERTY_SYSTEM_NAME_INPUT_HELP',
          value: 'השם אינו יכול לכלול רווחים. לדוגמא: myProperty'
        },
        {
          key: 'TASK',
          value: ''
        },
        {
          key: 'SOLUTION_DESIGNER_LICENSE_ROLE',
          value: ''
        },
        {
          key: 'INFORMATION_SECTION',
          value: 'איזור מידע'
        },
        {
          key: 'FOLLOWERS_ENTITY_DISPLAY_NAME',
          value: 'משתמש עוקב'
        },
        {
          key: 'SAVE',
          value: 'שמור'
        },
        {
          key: 'STOP_RULES_ARE_TRIGGERED_AFTER_ACTION_RULES',
          value: '<B> עצור כללים מופעלים לאחר כללי פעולה. </ B>'
        },
        {
          key: 'PRESENT_NEW_ACTION_ITEM_SECTION',
          value: 'present the "Add New Action Item" section'
        },
        {
          key: 'DAY_COLUMNS_USER_REPORT',
          value: 'משתמשים מדווחים עבודה בפועל ליום'
        },
        {
          key: 'UPDATED_BY',
          value: 'עודכן ע"י'
        },
        {
          key: 'ROW_LEVEL_AUTH_TIP',
          value: 'לדוגמא, בעל משימה יוכל לערוך את שורת המשימה שלו\\שלה.'
        },
        {
          key: 'REVERT_TOOLTIP',
          value: 'חזור למצב השמור הקודם'
        },
        {
          key: 'PERSISTENCEBASEDTO_STATE_DISPLAY_NAME',
          value: 'מצב רשומה'
        },
        {
          key: 'USERS_WHO_PASS_THE_FOLLOWING_CONDITIONS',
          value: 'משתמשים אשר עונים על התנאים הבאים'
        },
        {
          key: 'THIS_ITEM_SET_CONDITION_PASSES_WHEN',
          value: 'תנאי סט זה מתקיים כאשר'
        },
        {
          key: 'NO_SELECTED_ITEM',
          value: 'אנא בחר רכיב'
        },
        {
          key: 'EXECUTION_CENTER_INTEGRATION',
          value: 'אינטגרציה ביצוע מרכז'
        },
        {
          key: 'OPEN_DAY_EXCEPTIONS',
          value: 'חריגי יום פתוחים (המנוהלים לוחות שנה) למעקב'
        },
        {
          key: 'DISPLAY_ONLY_THE_ITEMS',
          value: 'הכנס מאפיין'
        },
        {
          key: 'LOGGING_TROUBLESHOOT',
          value: 'פתרון בעיות רישום'
        },
        {
          key: 'TABLE',
          value: 'טבלה'
        },
        {
          key: 'REFERENCE_COLUMN',
          value: 'עמודת קישור'
        },
        {
          key: 'INSERT_APPLICATION_PREFERENCE',
          value: 'הכנס מאפיין אפליקציה'
        },
        {
          key: 'BLANK_OPTION_EXAMPLES',
          value: 'לדוגמא: "ללא", "אחר", "בחר".'
        },
        {
          key: 'DELETE_BUTTON',
          value: 'מחק כפתור'
        },
        {
          key: 'FORM',
          value: 'טופס'
        },
        {
          key: 'USE_THE_FOLLOWING_INSTEAD_OF_THE_DEFAULT_SETTING',
          value: 'השתמש בהגדרות הבאות במקום בהגדרות ברירת המחדל'
        },
        {
          key: 'TYPE',
          value: 'סוג'
        },
        {
          key: 'OPEN_MORE_INFO',
          value: 'פתח מידע נוסף'
        },
        {
          key: 'SELECT_TAB_TO_MOVE',
          value:
            'בחר לשונית על מנת להעביר את הפקד אליה. הפקד יתווסף לסוף הלשונית.'
        },
        {
          key: 'CHOOSE_STATUS',
          value: 'בחר מצב'
        },
        {
          key: 'DO_YOU_WANT_TO_REMOVE_THE_ROLE',
          value: 'האם מעונינים להסיר את התפקיד?'
        },
        {
          key: 'ACTION_RULE_TRIGGERING_CONDITIONS_STEP_DESCRIPTION',
          value:
            'הכלל יחול רק אם התנאים מתקיימים. <br/> לדוגמה, הכלל יחול כאשר הוא ביטל את הפריט.'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_TAB',
          value: 'האם מעונינים למחוק את הטאב?'
        },
        {
          key: 'FORM_DEFINITION_SUPPORT',
          value: 'תמוך בהתאמת היישות לטפסים'
        },
        {
          key: 'USE_THE_FOLLOWING_ITEM_FORMAT',
          value: 'השתמש בהגדרות האלמנט הבא במקום בהגדרות ברירת מחדל'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_GROUP',
          value: 'האם מעונינים למחוק את הקבוצה?'
        },
        {
          key: 'IS_GREATER_THAN_OR_EQUAL_TO',
          value: 'האם גדול מ או שווה ל'
        },
        {
          key: 'RECENT_DOCUMENTS',
          value: 'מסמכים אחרונים'
        },
        {
          key: 'WORKFLOWABLE_CURRENTSTEPID_DISPLAY_NAME',
          value: 'שלב נוכחי'
        },
        {
          key: 'PROPERTY_TO_SET_VALUE_TO',
          value: 'נכס להגדיר ערך'
        },
        {
          key: 'COPY_FROM',
          value: 'העתק מ'
        },
        {
          key: 'AFTER_USER_CLICKS_BUTTON_CONFIRMATION_MESSAGE_DISPLAYED',
          value: 'לאחר שהמשתמש לוחץ על הכפתור, הודעת אישור ניתן להציג.'
        },
        {
          key: 'SENIOR_ROLES_ARE_AUTHORIZED',
          value: 'הערה: תפקידי אב מאושרים באופן אוטומטי גם כן.'
        },
        {
          key: 'STOP_RULES',
          value: 'כללים עצורים'
        },
        {
          key: 'REVERSE_LOOKUP_SYSTEM_NAME',
          value: 'שם מערכת בדיקה לאחור'
        },
        {
          key: 'FORMAT_NUMBERS',
          value: 'סגנון מספרי'
        },
        {
          key: 'CONNECTION',
          value: 'חיבור'
        },
        {
          key: 'THE_STATE_OF_THE_ENTITY_IN_THIS_STATUS',
          value: 'המדינה של בעוד ישות בסטטוס הזה'
        },
        {
          key: 'SELECT_STEP_TO_PLACE_AFTER',
          value: 'בחר שלב אשר שלב זה ימוקם לאחריו.'
        },
        {
          key: 'XML_RULE',
          value: 'כלל Xml'
        },
        {
          key: 'WORKSAPCE_ID',
          value: 'מזהה Workspace'
        },
        {
          key: 'UPDATE_ENTITY_STATUS_WHEN_ENTERING_STEP',
          value: 'עדכן את מצב הישות בכניסה לצעד.'
        },
        {
          key: 'AUTOMATIC_ADD_THIS_TASK_GROUP_TASKS_TO_WORKSHEET',
          value: 'הוסף משימות מקבוצת משימה זו באופן אוטומטי לכל גליון שבועי'
        },
        {
          key: 'MYWORKTASK_ENTITY_DISPLAY_NAME',
          value: 'משימת גיליון עבודה'
        },
        {
          key: 'TRACKING_PERMISSIONS',
          value: 'הרשאות מעקב'
        },
        {
          key: 'ACTUAL_WORK_UNLIMITED_HELP',
          value: 'מומלץ כאשר הערכות עבודה והתקדמות אינן ישימות'
        },
        {
          key: 'XML_CONTROL_TOOLTIP',
          value: 'הוספת פקד XML'
        },
        {
          key: 'DATABASE_KEY_COLUMN_NAME',
          value: 'עמודת מפתח'
        },
        {
          key: 'IS_GREATER_THAN',
          value: 'האם גדול מ'
        },
        {
          key: 'APPLICATION_PREFERENCE_SYSTEM_NAME_INPUT_HELP',
          value:
            'השם אינו יכול לכלול רווחים. יש לוודא כי האות הראשונה היא אות גדולה. לדוגמא: MyApplicationPreference'
        },
        {
          key: 'THIS_ENTITY_WILL_BE_AVAILABLE_TO_ALL_BECAUSE_EVERYONE',
          value:
            'ישות זו תהיה זמינה לכל המשתמשים כי קבוצת התפקיד כולם אין תנאים.'
        },
        {
          key: 'TYPE_A_NUMBER',
          value: 'הכנס מספר'
        },
        {
          key: 'AN',
          value: ''
        },
        {
          key: 'CHILD_ELEMENTS',
          value: 'אלמנטים בנים'
        },
        {
          key: 'LINK_TO_TAB',
          value: 'קישור ללשונית'
        },
        {
          key: 'RETURN_TO_STEP',
          value: 'חזור לשלב'
        },
        {
          key: 'STEP_TWO_IMPORT_SOLUTION_CONFIGURATION',
          value: 'שלב 2 - תצורת הפתרון יבוא'
        },
        {
          key: 'FINISH',
          value: 'סיום'
        },
        {
          key: 'LOG',
          value: 'תיעוד'
        },
        {
          key: 'STATUSDTO_PREVIOUSSTEPID_DISPLAY_NAME',
          value: 'השלב הקודם'
        },
        {
          key: 'PERSISTENCEBASEDTO_ID_DISPLAY_NAME',
          value: 'מזהה'
        },
        {
          key: 'DELETE_PRODUCT',
          value: 'Delete Product'
        },
        {
          key: 'SKIP_THIS_ITEM_SET_CONDITION_IF_SET_IS_EMPTY',
          value: 'דלג על התנאי אם הסט ריק'
        },
        {
          key: 'DISPLAY_ITEMS_IN_DROP_DOWN',
          value: 'הצג אפשרויות ברשימת פריטים'
        },
        {
          key: 'FORM_MUST_CONTAIN_TABS',
          value: 'הטופס חייב להכיל יותר מלשונית אחת'
        },
        {
          key: 'ALL_ITEMS_PASS_THE_CONDITION',
          value: 'כל הפריטים עברו את התנאי'
        },
        {
          key: 'FOLLOWED_ITEMS_CAN_BE_VIEWED_IN_SCOREBOARD',
          value: 'ניתן לצפות בפריטים שסומנו למעקב באמצעות לוח המצב.'
        },
        {
          key: 'NEW_VIRTUAL',
          value: 'יישות וירטואלית חדשה'
        },
        {
          key: 'IMPORT_LOCATION',
          value: 'מיקום היבוא'
        },
        {
          key: 'XML_SECTION',
          value: 'מיכל XML'
        },
        {
          key: 'ACTUAL_WORK_AND_REMAINING_WORK',
          value: 'עבודה בפועל ועבודה נותרת'
        },
        {
          key: 'TABLE',
          value: 'טבלה'
        },
        {
          key: 'USER_CAN_CREATE_REPORTS',
          value: 'משתמשים יוכלו ליצור דוח לפי בהתבסס על ישות זו'
        },
        {
          key: 'FOLLOWERS_PROPERTY_DISPLAY_NAME',
          value: 'משתמשים עוקבים'
        },
        {
          key: 'LIST',
          value: 'רשימה'
        },
        {
          key: 'SELECT_ICON_FOR_THE_BUTTON',
          value: 'בחר סמל עבור הכפתור'
        },
        {
          key: 'ATTACHMENT_SUPPORT',
          value: 'תמוך ברשימת מסמכים ליישות'
        },
        {
          key: 'FILTER_BY_STATE',
          value: 'סינון לפי מצב'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_FORM',
          value: 'האם אתה בטוח שברצונך למחוק את הטופס לצמיתות?'
        },
        {
          key: 'RESTRICT_VIEWING_SECTION',
          value: 'להגביל את הצפייה בפרק זה ובקרות הילד שלה על ידי הוספת תנאים'
        },
        {
          key: 'RESTRICT_EDITING_SECTION',
          value: 'הגבל עורך את הקטע הזה ובקרות הילד שלה על ידי הוספת תנאים'
        },
        {
          key: 'NUMBER',
          value: 'מספר'
        },
        {
          key: 'STATUSDTO_PREVIOUSFLOWSTEPID_DISPLAY_NAME',
          value: 'השלב הקודם במחזור'
        },
        {
          key: 'ASK_THE_USER_ARE_YOU_SURE',
          value: 'שאל את המשתמש "האם אתה בטוח?"'
        },
        {
          key: 'NONE_LICENSE_ROLE',
          value: ''
        },
        {
          key: 'TIME_UPDATED',
          value: 'זמן עדכון'
        },
        {
          key: 'CUSTOM_NODE',
          value: 'צומת מותאם אישית'
        },
        {
          key: 'WHERE_CLAUSE',
          value: 'Where Clause'
        },
        {
          key: 'EDIT_THE_DISPLAY_NAME_OF_GROUP',
          value: 'ערוך את השם לתצוגה של קבוצת הסרט.'
        },
        {
          key: 'ADDITIONAL_CONDITIONS_OPTIONAL',
          value: 'תנאים נוספים (אופציונאלי)'
        },
        {
          key: 'IS_LESS_THAN_OR_EQUAL_TO',
          value: 'האם קטן מ או שווה ל'
        },
        {
          key: 'DOES_NOT_END_WITH',
          value: 'לא מסתיים ב'
        },
        {
          key: 'MSP_CONNECTION_TIMEOUT',
          value: 'MSP חיבור Timeout (ms)'
        },
        {
          key: 'ADD_NEW_TABLE',
          value: 'הוסף טבלא חדשה'
        },
        {
          key: 'NEW_GROUP',
          value: 'קבוצה חדשה'
        },
        {
          key: 'PERCENT_COMPLETE',
          value: 'אחוז השלמה'
        },
        {
          key: 'USER_SET_IN_PROPERTY_TIP',
          value: 'לדוגמא, רפרנט הדרישה.'
        },
        {
          key: 'WORKFLOWABLE_ASSIGNEE_USER_DISPLAY_NAME',
          value: 'משתמש מוקצה'
        },
        {
          key: 'USERS_ASSIGNED_TO_ROLE',
          value: 'משתמשים בתפקיד'
        },
        {
          key: 'DROP_TABLE_PROPERTIES',
          value: 'זרוק את מאפייני טבלא {0} כאן'
        },
        {
          key: 'ITEMS_ARE_ARRANGED_IN_A_TREE',
          value: 'פריטים מסודרים על עץ (כמו תיקים)'
        },
        {
          key: 'NOT_APPLICABLE',
          value: 'לא ישים'
        },
        {
          key: 'CC',
          value: 'CC'
        },
        {
          key: 'PERSISTENCEBASEDTO_CREATIONUSER_DISPLAY_NAME',
          value: 'משתמש יוצר'
        },
        {
          key: 'SELECT_WORKFLOW',
          value: 'בחר תהליך עבודה'
        },
        {
          key: 'STOP_RULE_WIZARD',
          value: 'עצור כלל אשף'
        },
        {
          key: 'REPORTS',
          value: 'דיווחים'
        },
        {
          key: 'USE_THE_FOLLOWING_LINK_SETTINGS',
          value: 'השתמש בהגדרות קישור הבאות במקום הגדרות ברירת המחדל'
        },
        {
          key: 'FORMAT_TEXT',
          value: 'סגנון טקסט'
        },
        {
          key: 'DB_COL_DATA_TYPE',
          value: 'סוג שדה ב-DB'
        },
        {
          key: 'ENTER_A_UNIQUE_WORKFLOW_NAME',
          value: 'הכנס שם תהליך עבודה חדש'
        },
        {
          key: 'ADD_ILIOS_TO_RUN_ON_THIS_ORC',
          value:
            'להוסיף פעולות אינטגרציה ברמת פריט (איליו) כדי להפעיל את זה על Orchestrator הספציפי.'
        },
        {
          key: 'PROPERTY_FILTER',
          value: 'מסנן של מאפיין'
        },
        {
          key: 'WORKFLOWABLE_WORKFLOWID_DISPLAY_NAME',
          value: 'מזהה תהליך'
        },
        {
          key: 'WORKSHEET_FORM_TIP',
          value: 'מוצג כאשר לחיצת פרטי גיליון בעבודתי'
        },
        {
          key: 'INFORMATION_GROUP',
          value: 'קבוצת מידע'
        },
        {
          key: 'AT_LEAST_ONE_ITEM_PASS_THE_CONDITION',
          value: 'לפחות אחד הפריטים עבר את התנאי'
        },
        {
          key: 'PERSISTENCEBASEDTO_TIMECREATED_DISPLAY_NAME',
          value: 'זמן יצירה'
        },
        {
          key: 'ACTIONS_TO_PERFORM_AFTER_USER_CLICK',
          value: 'פעולות לביצוע לאחר שהמשתמש לוחץ על הכפתור'
        },
        {
          key: 'DELETE_MORE_INFO',
          value: 'מחק מידע נוסף'
        },
        {
          key: 'USERS_CAN_ATTACH_FILES_TO_ITEM_CANNOT_BE_UNSELECTED',
          value: 'משתמשים יכולים לצרף קבצי פריטים (לא יכול להיות שלא נבחר)'
        },
        {
          key: 'EDIT_MOVE_WORKFLOW_ACTION',
          value: 'ערוך פעולת תהליך עבודה'
        },
        {
          key: 'AVAILABLE_ILIOS',
          value: 'ILIOs זמינים'
        },
        {
          key: 'ACTION_RULE_DESCRIPTION',
          value:
            'פעולת כללים לשנות או להעביר תהליך עבודה של פריט <BR/> לדוגמא:. כאשר הפריט מתבטל, לבטל את כל פריטי הילד גם כן.'
        },
        {
          key: 'EMPLOYEE_ROLE',
          value: 'עובד'
        },
        {
          key: 'IS_CONTAINED_IN',
          value: 'האם מוכל ב'
        },
        {
          key: 'CALENDARS',
          value: 'לוחות שנה'
        },
        {
          key: 'REPORTING_MODE',
          value: ''
        },
        {
          key: 'EDIT_CHOICE_OPTION',
          value: 'ערוך אפשרות בחירה'
        },
        {
          key: 'TIME_AND_PROGRESS_TRACKING',
          value: 'מעקב דיווח שעות והתקדמות'
        },
        {
          key: 'SERVER_HEALTH',
          value: ''
        },
        {
          key: 'DURATION_MS',
          value: 'משך (ms)'
        },
        {
          key: 'WORKSHEET_WORKFLOW',
          value: 'עבודת גיליון'
        },
        {
          key: 'USERS_CAN_CHANGE_ITEM_STATUS_USING_WORKFLOW',
          value:
            'משתמשים יוכלו לשנות את הסטטוס בעזרת תהליך-עבודה ולסנכרן אותו למערכות חיצוניות (לא ניתן לביטול)'
        },
        {
          key: 'SHOW_ROW_HISTORY',
          value: 'היסטוריה בשורת צג'
        },
        {
          key: 'SIMPLE_MODE',
          value: 'מצב פשוט'
        },
        {
          key: 'DAY_EXCEPTIONS',
          value: 'חריגי יום:'
        },
        {
          key: 'USE_FOLLOWING_MESSAGE_INSTTEAD_THE_DEFAULT',
          value: 'השתמש ההודעה הבאה במקום ברירת המחדל.'
        },
        {
          key: 'USER_ASSIGNED_TO_ROLE_TITLE',
          value: 'המשתמש יקבל אישור אם הוא \\ היא מוגדר בתפקיד.'
        },
        {
          key: 'USERS_ASSIGNED_TO_ROLE_TIP',
          value: 'לדוגמא, כל הרפרנטים.'
        },
        {
          key: 'ALL_TRANSITIONS_USING_THIS_BUTTON_WILL_BE_DELETED',
          value: 'כל המעברים באמצעות לחצן זה יימחקו גם כן.'
        },
        {
          key: 'INACTIVE',
          value: ''
        },
        {
          key: 'NEW_COLUMN_PROPERTY_HEADER',
          value:
            'יצירת נכס עמודה חדשה. הטור החדש יוכנס כמו הטור האחרון בטבלה או בסוף של המידע שעבר עוד בקרות מיכל.'
        },
        {
          key: 'INTEGRATIONFLAG_SUCCESS',
          value: 'הצלחה'
        },
        {
          key: 'A_WORKFLOW_WITH_ENTERED_NAME_ALREADY_EXISTS',
          value: 'תהליך עבודה בשם "{0}" קיים כבר במערכת'
        },
        {
          key: 'REMAINING_WORK',
          value: 'עבודה נותרת'
        },
        {
          key: 'WORKSHEET_USER',
          value: 'משתמש גליון עבודה'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_CONTROL',
          value: 'האם מעונינים למחוק את הפקד?'
        },
        {
          key: 'RESUME_MAIN_FLOW',
          value: 'המשך מחזור חיים'
        },
        {
          key: 'LOGGED_IN_USER_IS_ASSIGNED',
          value: 'משתמש המחובר מוקצה אחד מהתפקידים הבאים'
        },
        {
          key: 'ADD_MORE_INFO_COLUMN',
          value: 'הוספת עמודה לפרטים נוספים'
        },
        {
          key: 'DELETE_CALENDAR',
          value: 'מחיקת לוח שנה'
        },
        {
          key: 'WORKSHEETS_AND_TASKS',
          value: 'דפי עבודה ומשימות'
        },
        {
          key: 'ITREE_PATH_DISPLAY_NAME',
          value: 'מסלול'
        },
        {
          key: 'DELETE_TASK_STYLE_TITLE',
          value: 'מחק סגנון המשימות'
        },
        {
          key: 'HOST_NAME',
          value: 'שם מארח'
        },
        {
          key: 'NEW_BUTTON',
          value: 'לחצן חדש'
        },
        {
          key: 'PROPERTY_CHANGE_CONDITION',
          value: 'תנאי שינוי מאפיין'
        },
        {
          key: 'DB_TABLE_NAME',
          value: 'שם טבלא בבסיס הנתונים'
        },
        {
          key: 'NEW_PROVIDER',
          value: 'ספק חדש'
        },
        {
          key: 'OVERRIDE_CONDITIONS',
          value: 'השתמש התנאים הבאים במקום יורש תנאים מ'
        },
        {
          key: 'OUT_OF_THE_BOX_POLICIES',
          value: 'מדינויות קיימות'
        },
        {
          key: 'TREE_ANOTHER_ENTITY_AS_ROOT',
          value: 'עץ (יישות אחרת כשורש העץ)'
        },
        {
          key: 'SET',
          value: 'גדר'
        },
        {
          key: 'SENIOR_NODE',
          value: 'צומת אב'
        },
        {
          key: 'LAYOUT',
          value: 'מערך'
        },
        {
          key: 'NEED_TO_RELOAD_SETTINGS_TOOLTIP',
          value: 'ע"מ להחיל את השינויים יש לטעון הגדרות מערכת'
        },
        {
          key: 'OVERRIDE_WORKSHEET_COLUMNS',
          value: 'הצג את עמודות הגיליון הבאות במקום מספר העמודות מחדל'
        },
        {
          key: 'INSERT_PROPERTY',
          value: 'הכנס מאפיין'
        },
        {
          key: 'DELETE_FORM',
          value: 'מחק טופס'
        },
        {
          key: 'ENTER_DISPLAY_NAME_INFORMATION_GROUP',
          value: 'הכנס שם תצוגה עבור קבוצת המידע'
        },
        {
          key: 'ADD_ROLE',
          value: 'הוסף תפקיד חדש'
        },
        {
          key: 'RECENT_ITEMS',
          value: 'לאחרונה'
        },
        {
          key: 'EXAMPLE_INSTRUCTION_LINE',
          value: 'לדוגמא:'
        },
        {
          key: 'NO_LINK',
          value: 'ללא קישור'
        },
        {
          key: 'ACTION_ITEMS_CRUD_LEVEL_OF_CONTROL',
          value:
            'Use the following conditions to control the level of CRUD for the Action Items.'
        },
        {
          key: 'ENABLE_MARK_COMPLETE_ACTION_ITEM',
          value:
            'enable "Mark Complete", present “Edit” button with “Edit” title and the Edit Action Item popup form should be “Editable”'
        },
        {
          key: 'SEND_EMAIL_NOTIFICATION_WHEN_PROPERTY_VALUE_CHANGED',
          value: 'שלח הודעת דואר אלקטרוני כאשר שוויו של הנכס שונתה'
        },
        {
          key: 'SET_OBJECT_DISPLAY_NAME',
          value: 'קבע את שם התצוגה והתיאור של {0}'
        },
        {
          key: 'DESCENDING',
          value: 'סדר עולה'
        },
        {
          key: 'WORK_WEEK_DAYS',
          value: 'ימי עבודה בשבוע'
        },
        {
          key: 'ROW_EDITED_BY',
          value: 'שורה נערכה על ידי'
        },
        {
          key: 'NEW_CONDITION',
          value: 'תנאי חדש'
        },
        {
          key: 'FIND',
          value: 'למצוא'
        },
        {
          key: 'SELECTED_ELEMENT',
          value: 'הפריט הנבחר'
        },
        {
          key: 'YOU_CAN_ALSO_SET_WORKFLOW_NOTIFICATION_FROM_WE',
          value: 'ניתן גם להגדיר הודעות זרימת עבודה מתוך עורך Workflow'
        },
        {
          key: 'DELETE_CONTROL',
          value: 'מחק פקד'
        },
        {
          key: 'CUSTOM_ERROR_MESSAGE',
          value: 'הודעת שגיאה מותאמת אישית'
        },
        {
          key: 'OR_BEYOND_IT',
          value: 'או מחוצה לו'
        },
        {
          key: 'SAVE_BUTTON_IS_VISIBLE_TO_EVERYONE_BECAUSE_EVERYONE_ROLE_GROUP',
          value: 'על הלחצן השמור גלויה לכולם כי קבוצת התפקיד כולם אין תנאים'
        },
        {
          key: 'DB_REF_COL_NAME',
          value: 'שם שדה מקושר'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_SECTION',
          value: 'האם מעונינים למחוק את  הסעיף?'
        },
        {
          key: 'TRANSITION_FROM',
          value: 'המעבר'
        },
        {
          key: 'REMOVE_ENTITY_TITLE',
          value: 'סר ישות'
        },
        {
          key: 'NEW_VIRTUAL_TOOLTIP',
          value: 'צור יישות וירטואלית חדשה'
        },
        {
          key: 'RELATIONSHIP_PROPERTY',
          value: 'מאפיין יחס'
        },
        {
          key: 'ATTACHMENT_STOP_RULE_MESSAGE',
          value: "מסמך מסוג '{0}' חייב להיות קיים משלב '{1}' והלאה."
        },
        {
          key: 'SELECT_AT_LEAST_ONE_OPTION',
          value: 'בחר לפחות אפשרות אחת מהרשימה.'
        },
        {
          key: 'LICENSE_ROLE',
          value: ''
        },
        {
          key: 'ENTITY_CATEGORY',
          value: 'קטגוריית ישות'
        },
        {
          key: 'ONE_TIME',
          value: 'חד פעמי'
        },
        {
          key: 'CONDITION',
          value: 'תנאי'
        },
        {
          key: 'CHOOSE_WHEN_TO_MANDATE',
          value: 'בחר מתי להכריח את המשתמש למלא את השדה'
        },
        {
          key: 'WEDNESDAY',
          value: ''
        },
        {
          key: 'SATURDAY',
          value: ''
        },
        {
          key: 'EXPAND',
          value: 'להרחיב'
        },
        {
          key: 'APPROVERS',
          value: '%s מאשרים'
        },
        {
          key: 'DISPLAY_RESUME_BUTTON',
          value: 'הצגת כפתור "המשך תהליך עבודה עיקרי"'
        },
        {
          key: 'NOTES',
          value: 'הערות'
        },
        {
          key: 'NONE',
          value: 'ללא'
        },
        {
          key: 'OF',
          value: 'של'
        },
        {
          key: 'CUSTOM_LINK_HELP_TEXT',
          value:
            'על מנת לכלול את ערך המאפיין בקישור, כתוב @VALUE, הקישור יהיה פעיל כשלמאפיין יהיה ערך.'
        },
        {
          key: 'TABLE_SYSTEM_NAME',
          value: 'שם מערכת שולחן'
        },
        {
          key: 'OR',
          value: 'או'
        },
        {
          key: 'UNFOLLOW_THIS',
          value: 'בטל מעקב אחר פריט'
        },
        {
          key: 'SAVE_AS_NEW',
          value: 'שמור כחדש'
        },
        {
          key: 'MY_WORK_POLICY_ASSIGNMENT',
          value: 'הקצאת מדיניות העבודה שלי'
        },
        {
          key: 'CLIENT_IP',
          value: 'כתובת רשת'
        },
        {
          key: 'DELETE_INFORMATION_PROPERTY',
          value: 'מחק מאפיין מידע'
        },
        {
          key: 'ORCHESTRATORS_COMPONENTS_FOR_RUNNING_INTEGRATION',
          value:
            'Orchestrators הם הרכיבים אחראים להפעלת פעולות אינטגרציה. לאחר התקנת Orchestrators החדש, להוסיף אותם לרשימה זו:'
        },
        {
          key: 'NEW_PROPERTY_CHANGE_CONDITION',
          value: 'תנאי שינוי מאפיין חדש'
        },
        {
          key: 'MANDATORY_LIST',
          value: 'חסר'
        },
        {
          key: 'NEW_PROPERTY',
          value: 'מאפיין חדש'
        },
        {
          key: 'IN_TREE',
          value: 'בעץ'
        },
        {
          key: 'NEW_ENTITY',
          value: 'יישות חדשה'
        },
        {
          key: 'DISPLAY_ITEMS_IN_DROP_DOWN_TOOLTIP',
          value: 'לא מומלץ עבור יותר מ 25 פריטים'
        },
        {
          key: 'ITEM_CONDITIONS',
          value: 'תנאי פריט'
        },
        {
          key: 'NO_RECENT_DOCUMENTS_EXPLANATION',
          value: 'לאחר שתיצור ותעדכן מסמכים, הם יראו כאן.'
        },
        {
          key: 'CHOOSE_PROPERTY_TO_SET_VALUE_TO',
          value: 'בחר נכס כדי להגדיר ערך ל:'
        },
        {
          key: 'EDITING_A_ROW_CAN_BE_DONE',
          value: 'עריכת שורה אפשרית עבור'
        },
        {
          key: 'SORT',
          value: 'מיון'
        },
        {
          key: 'PROPERTIES_DATA_TYPES',
          value: 'הגדרת מאפייני סוגי נתונים'
        },
        {
          key: 'DB_TABLE_NAME_INPUT_HELP',
          value:
            'השם צריך להתחיל עם תחילית Cse. השם אינו יכול לכלול רווחים. דוגמא: CseMyEntity'
        },
        {
          key: 'TRANSLATE_MSP_TO_ADDITIONAL_LANGUAGES',
          value: 'תרגם MSP לשפות נוספות'
        },
        {
          key: 'CONTAINS',
          value: 'מכיל'
        },
        {
          key: 'NEW_TRANSITION_CONDITION',
          value: 'ניו מעבר מצב'
        },
        {
          key: 'WORKING_PANE_DEFAULT_TEXT',
          value: 'בחר ישות על מנת לראות מאפיינים והגדרות'
        },
        {
          key: 'HIERARCHICAL_ADMIN_PAGE_DEFINITION',
          value: 'עמוד הגדרת היררכיית אדמיניסטרציה'
        },
        {
          key: 'DONE',
          value: ''
        },
        {
          key: 'MOVE_INFORMATION_SECTION',
          value: 'העבר איזור מידע'
        },
        {
          key: 'MAXIMUM_AND_MINIMUM_LIMITS',
          value: 'גבול עליון ותחתון'
        },
        {
          key: 'SHOW_PROPERTY_HISTORY',
          value: 'צג היסטורית רכוש tooltip'
        },
        {
          key: 'NEED_TO_RESTART_MSP_TOOLTIP',
          value: 'ע"מ להחיל את השינויים באתר, אנא הפעל מחדש את האפליקציה'
        },
        {
          key: 'BCC',
          value: 'BCC'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_TREE',
          value: 'האם מעונינים למחוק את העץ?'
        },
        {
          key: 'FILTER',
          value: 'סינון'
        },
        {
          key: 'TYPE_A_DATE',
          value: 'הכנס תאריך'
        },
        {
          key: 'OOB_PROPERTIES',
          value: 'מאפייני ונילה'
        },
        {
          key: 'HIDE_LIST_BUTTON',
          value: 'Hide List Button'
        },
        {
          key: 'BACK_BUTTON',
          value: '< הקודם'
        },
        {
          key: 'ADDITIONAL_CONDITIONS',
          value: 'תנאים נוספים (אופציונאלי)'
        },
        {
          key: 'SORT_BY',
          value: 'מיון לפי'
        },
        {
          key: 'SAVING_OR_MOVING_PROHIBITED_IF_ITEM_IN_SET_PASSES',
          value:
            'שמירה או הזזת העבודה ייאסר אם יש סט פריט אשר <br/> עובר את התנאים'
        },
        {
          key: 'OBSOLETE',
          value: 'מיושן'
        },
        {
          key: 'DEFAULT_NAME_FORMAT',
          value: 'סגנון שם ברירת מחדל'
        },
        {
          key: 'TOOLTIP',
          value: 'טקסט עזר'
        },
        {
          key: 'REOCCURRING',
          value: 'רב פעמי'
        },
        {
          key: 'COPY_VALUES',
          value: 'העתק ערכים'
        },
        {
          key: 'LOGGED_IN_USER',
          value: 'משתמש מחובר'
        },
        {
          key: 'WORKFLOWABLE_CURRENTSTEPDESCRIPTION_DISPLAY_NAME',
          value: 'תיאור השלב הנוכחי'
        },
        {
          key: 'SQL_QUERY_FORMULA_PROPERTY_HELP',
          value: 'הכנס שאילתת מאגר מידע המחזירה תוצאה אחת.'
        },
        {
          key: 'CUSTOM_LINK',
          value: 'קישור מותאם'
        },
        {
          key: 'MOVE_TO_TABLE',
          value: 'מעבר לטבלה'
        },
        {
          key: 'STEP_TWO_DESCRIPTION',
          value:
            'שלב 2 יבוא חפצי פתרון כגון זרימות עבודה, טפסים וכרטיסיות לוח מחוונים.'
        },
        {
          key: 'ASCENDING',
          value: 'סדר עולה'
        },
        {
          key: 'DEFAULT_FORMAT_SETTINGS',
          value: 'הגדרות פורמט ברירת מחדל'
        },
        {
          key: 'REMAINING_WORK_AND_PERCENT_WORK_COMPLETE',
          value: 'עבודה נותרת ואחוז עבודה שהושלמה'
        },
        {
          key: 'RULE_NAME',
          value: 'שם החוק'
        },
        {
          key: 'USERS_CAN_CREATE_ITEMS_BY',
          value: 'משתמשים יכולים ליצור פריטים על ידי'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_PRODUCT',
          value: 'האם מעונינים למחוק מוצר זה?'
        },
        {
          key: 'GENERAL',
          value: 'כללי'
        },
        {
          key: 'ENTITY_CATEGORY_FILTER',
          value: 'מסנן לפי סוג יישות'
        },
        {
          key: 'RESTRICT_EDITING_TABLE_ROWS',
          value: 'הגבל עריכת שורות ומחיקים שורות ספציפיות על ידי הוספת תנאים.'
        },
        {
          key: 'TRANSITION_PICKER',
          value: 'בוחר מעברי שלב'
        },
        {
          key: 'EDIT_TRANSITION_CONDITION',
          value: 'מצב מעבר ערוך'
        },
        {
          key: 'FA_ICON',
          value: 'Font Awesome Icon'
        },
        {
          key: 'NEW_VALUE',
          value: 'ערך חדש'
        },
        {
          key: 'SPECIFIC_USERS',
          value: 'משתמשים ספציפיים'
        },
        {
          key: 'CLONE',
          value: 'שכפל'
        },
        {
          key: 'PREDICTED_WORK',
          value: 'עבודה צפויה'
        },
        {
          key: 'MYWORKPOLICY_ENTITY_DISPLAY_NAME',
          value: 'מדיניות גליון עבודה'
        },
        {
          key: 'DELETE_AUTH_NODE_TITLE',
          value: 'מחיקת צומת אוטוריזציה'
        },
        {
          key: 'TOTAL_ACTUAL_WORK_ATTENDANCE',
          value: 'עבודה בפועל סה"כ שווה נוכחות ליום.'
        },
        {
          key: 'ANYONE_WHO_CAN_EDIT_THE_ROW',
          value: 'משתמש שיכול לערוך שורה'
        },
        {
          key: 'THIS_FORM_IS_BASED_ON',
          value: 'טופס זה מבוסס על'
        },
        {
          key: 'SET_REPORT_DISPLAY_NAME',
          value: 'הגדר שם תצוגה ותיאור עבור דוח זה'
        },
        {
          key: 'SELECT_AN_ENTITY_WITH_WORKFLOW',
          value: 'בחר ישות עם זרימת עבודה'
        },
        {
          key: 'WILL_BE_APPENDED_TO_WORKFLOW',
          value: 'יתווסף לאובייקט תהליך העבודה'
        },
        {
          key: 'VIEWING_WORKSHEET_FOR_EXAMPLE',
          value:
            'לדוגמא, מנהיג צוות יכול להציג גיליונות עבודה החברים שלו או קבוצתה:'
        },
        {
          key: 'CONTEXT',
          value: 'הקשר'
        },
        {
          key: 'PERCENT_COMPLETE_ONLY',
          value: 'אחוז השלמה בלבד'
        },
        {
          key: 'USER_SET_IN_APP_PREF_TIP',
          value: 'לדוגמא, משתמש המנכ"ל'
        },
        {
          key: 'NEW_PROPERTY_TOOLTIP',
          value: 'צור מאפיין'
        },
        {
          key: 'LOGGED_IN_USER_ROLE_FILTER',
          value: 'ביקור אחרון תפקיד המשתמש מסנן'
        },
        {
          key: 'TIMEOUT',
          value: 'Timeout (ms)'
        },
        {
          key: 'ACTUAL_WORK_AGAINST_ESTIMATED_WORK',
          value: 'עבודה בפועל (נגד עבודה מוערכת)'
        },
        {
          key: 'TUESDAY',
          value: ''
        },
        {
          key: 'WORKSHEET_WEEK_START',
          value: 'תאריך תחילת השבוע'
        },
        {
          key: 'ROWS',
          value: 'שורות'
        },
        {
          key: 'LINK_TO_ITEM_EXAMPLE',
          value: 'דוגמא: [המשימות לתכנון מפורטות: דרישה]'
        },
        {
          key: 'FIT_TO_WINDOW_TOOLTIP',
          value: 'התאמה החלון הנוכחי [Ctrl + W]'
        },
        {
          key: 'ADMINISTRATION_PAGES',
          value: 'עמודי ניהול'
        },
        {
          key: 'REVERT_WARNING',
          value: 'כל השינויים האחרונים ימחקו'
        },
        {
          key: 'DELETE_STATUS',
          value: 'מחק סטטוס'
        },
        {
          key: 'DONE_PLEASE_RELOAD_SETTINGS_IN_ORDER_FOR_CHANGES',
          value: 'בוצע. טען הגדרות על מנת שהשינויים ייכנסו לתוקף.'
        },
        {
          key: 'IS_PRIOR_TO_OR_EQUAL_TO',
          value: 'האם קודם ל או שווה ל'
        },
        {
          key: 'OR_BEFORE_IT',
          value: 'או לפני זה'
        },
        {
          key: 'MOVE_WORKFLOW_OF_ITEM',
          value: 'תהליך עבודה של'
        },
        {
          key: 'DELETE_APPLICATION_REFERENCE',
          value: 'מחק מאפיין אפליקצייה'
        },
        {
          key: 'OPEN_EXISTING_WORKFLOW',
          value: 'פתח תהליך עבודה קיים:'
        },
        {
          key: 'MANDATORY_AT_WORKFLOW_TRANSITIONS',
          value: 'חובה במעבר שלב במחזור החיים'
        },
        {
          key: 'IATTACHMENTSSETHOLDER_ATTACHMENTS_DISPLAY_NAME',
          value: 'מסמכים'
        },
        {
          key: 'CONDITIONS_CANNOT_BE_EMPTY',
          value: 'תנאים נוספים לא יכולים להיות ריקים.'
        },
        {
          key: 'DO_YOU_WANT_TO_REMOVE',
          value: 'האם מעונינים להסיר את {0} ?'
        },
        {
          key: 'SAVING_CHANGES',
          value: 'שמירת שינויים'
        },
        {
          key: 'TABLE_PROPERTY_SYSTEM_NAME',
          value: 'שם מערכת מאפיין הטבלה'
        },
        {
          key: 'ENTITY_SYSTEM_NAME_INPUT_HELP',
          value:
            'השם אינו יכול לכלול רווחים. יש לוודא כי האות הראשונה היא אות גדולה. לדוגמא: MyEntity'
        },
        {
          key: 'ANYONE_WHO_CAN_EDIT_THE_TABLE',
          value: 'משתמש שיכול לערוך את הטבלה'
        },
        {
          key: 'SELECT_LANGUAGES_TO_DISPLAY_THE_SITE',
          value: 'בשפות בוחרים להציג את האתר'
        },
        {
          key: 'DELETE_STEP_DESCRIPTION',
          value:
            'ישויות יכולות להיות בשלב זרימת עבודה זו. עליך להעביר אותם למקום אחר צעד עבודה.'
        },
        {
          key: 'ADD_NEW_SECTION',
          value: 'הוסף איזור חדש'
        },
        {
          key: 'USE_THE_FOLLOWING_TO_CONFIGURE_SECTION_USING_XML',
          value: 'השתמש בתוכן הבא לצורך הגדרת מיכל ע"י XML.'
        },
        {
          key: 'SAVE_THIS_ITEM_AS_NEW',
          value: 'שמור פריט זה כחדש'
        },
        {
          key: 'FIRST_TAB_DEFAULT_NAME',
          value: 'בית'
        },
        {
          key: 'DELETE_GROUP',
          value: 'מחק קבוצת מידע'
        },
        {
          key: 'ADDED',
          value: '% שהוספו'
        },
        {
          key: 'MY_WORK_POLICY_ASSIGNMENT_ORDER',
          value: 'צו תיחום מדיניות העבודה שלי'
        },
        {
          key: 'TABULAR_REPORTS_PROPERTY_CATEGORY',
          value: 'טבלאי דוחות קטגורית נכס'
        },
        {
          key: 'ENTITIES_AND_TASK_GROUPS',
          value: 'ישויות וקבוצות המשימות'
        },
        {
          key: 'ARE_YOU_SURE_DELETE_WORKFLOW',
          value: 'האם אתה בטוח שאתה רוצה למחוק את תהליך העבודה לצמיתות?'
        },
        {
          key: 'MILESTONES_TABLE_STATUS_DELIVERABLE_STATUS_PROPERTY',
          value: "אבני דרך הטבלה 'סטטוס DeliverableStatus נכס"
        },
        {
          key: 'DELETING_A_ROW_CAN_BE_DONE',
          value: 'מחיקת שורה אפשרית עבור'
        },
        {
          key: 'DELETE_ITEM_SUB_TITLE',
          value: 'האם מעונינים למחוק פריט זה?'
        },
        {
          key: 'MY_WORK_POLICIES_ASSIGNMENT_ORDER_TEXT',
          value: 'משתמשים יוקצו הפוליסה הראשונה אשר מעבירה את תנאי ההקצאה.'
        },
        {
          key: 'ENTITIES',
          value: 'ישויות'
        },
        {
          key: 'SET_INITIAL_VALUE_OF_TASK_TIME_REPORTS',
          value:
            'ערך ראשוני נקבע מאפיינים של דיווחים בזמן משימה (עבודה של משימה ליום)'
        },
        {
          key: 'NOTE_THE_FIRST_BUTTON_WILL_ALWAYS_BE_DISPLAYED_IN_FULL_SIZE',
          value: 'הערה: על הכפתור הראשון תמיד יוצג בגודל מלא.'
        },
        {
          key: 'ENTER_TAB_NAME',
          value: 'הזן את שם הכרטיסייה'
        },
        {
          key: 'CREATE_NEW_MY_WORK_CALENDAR',
          value: 'צור לוח שנה חדש'
        },
        {
          key: 'AFTER_USER_CHANGES_VALUE_COPY_THIS_TO_OTHER_PROPERTY',
          value:
            'לאחר שהמשתמש שינה את ערך השדה הנוכחי, העתק את הערכים הבאים לשדות אחרים.'
        },
        {
          key: 'DELETE_COLUMN',
          value: 'מחק עמודה'
        },
        {
          key: 'FILL_LANGUAGE_ENTRY_TRANSLATIONS',
          value: 'מלאו תרגומי כניסת שפה'
        },
        {
          key: 'REF_TABLE_NAME',
          value: 'שם טבלה מקושרת'
        },
        {
          key: 'TASK_GROUP',
          value: ''
        },
        {
          key: 'SIZE',
          value: 'גודל'
        },
        {
          key: 'YES_NO',
          value: 'כן לא'
        },
        {
          key: 'TO',
          value: 'ל'
        },
        {
          key: 'NEW_XML_CONTROL',
          value: 'פקד XML חדש'
        },
        {
          key: 'ADD_STEP',
          value: 'הוסף שלב חדש'
        },
        {
          key: 'OPEN_ADMIN_TIME_LINES',
          value: 'קווי הזמן להרחיב מנהל למעקב'
        },
        {
          key: 'ENTER_SQL',
          value: 'הזן שאילתת SQL החזרת ערך בודד.'
        },
        {
          key: 'VIEW_ONLY_ROLE',
          value: 'צפייה בלבד'
        },
        {
          key: 'REPORT_ENTITIES_ORDER_SUB_HEADER',
          value: 'הישויות יוצגו בסדר זה בחיפוש המהיר ובמחולל הדוחות:'
        },
        {
          key: 'REMOVE_ENTITY_SUB_TITLE',
          value: 'האם מעונינים להסיר את הישות?'
        },
        {
          key: 'NOTIFICATION',
          value: 'Notification'
        },
        {
          key: 'SET_FORM_DISPLAY_NAME',
          value: 'הגדר שם התצוגה של הטופס הזה ותיאור'
        },
        {
          key: 'OPEN_WORKSHEET_BEFORE',
          value: 'גיליון פתוח לפני תאריך ההתחלה שלו בלבד (ימים):'
        },
        {
          key: 'ENTER_A_UNIQUE_FORM_NAME',
          value: 'הכנס שם טופס ייחודי'
        },
        {
          key: 'VALUE_TO_SET',
          value: 'ערך להגדיר'
        },
        {
          key: 'PRESENT_EDIT_BUTTON_WITH_EDIT_TITLE',
          value:
            'present the "Edit" button with the "Edit" title, and also the "Edit Attachment Description" popup form should be "Editable"'
        },
        {
          key: 'ORCHESTRATORS',
          value: 'Orchestrators'
        },
        {
          key: 'TIME',
          value: ''
        },
        {
          key: 'DATA_ENTRY',
          value: 'רשומת מידע'
        },
        {
          key: 'REMAINING_WORK_USER_REPORT',
          value: 'משתמש להקטין אותה לדווח על התקדמות'
        },
        {
          key: 'STATE',
          value: ''
        },
        {
          key: 'NEW_FORMULA',
          value: 'שדה מחושב חדש'
        },
        {
          key: 'CONTROL_CANT_BE_VIEWED',
          value:
            'השדה לא ניתן לצפייה כרגע. בשביל לאפשר צפייה אנא הוסף את תפקיד "כל אחד"'
        },
        {
          key: 'CHOICE',
          value: 'בחירה'
        },
        {
          key: 'TASK_FORM',
          value: 'טופס המשימות'
        },
        {
          key: 'LIMIT_THE_RANGE_OF_POSSIBLE_VALUES_FOR_THIS_PROPERTY',
          value: 'הגבל את הערכים האפשריים עבור מאפיין זה'
        },
        {
          key: 'SECTION',
          value: 'מקטע'
        },
        {
          key: 'ACTIONS',
          value: 'פעולות'
        },
        {
          key: 'SIDE_STEP_PANEL_TITLE',
          value: 'רשימת פעולות'
        },
        {
          key: 'SYNC_WORK_PROPERTY_FROM_MY_WORK',
          value: 'נכס העבודה Sync מהעבודה שלי כדי דיאלוג'
        },
        {
          key: 'ILIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST',
          value:
            'איליוס לא להוסיף לכל Orchestrator יפעל על Orchestrator הראשון.'
        },
        {
          key: 'SELECT',
          value: 'בחר'
        },
        {
          key: 'SQL_FILTER',
          value: 'מסנן שאילתה'
        },
        {
          key: 'CHOOSE_TWO_DIFFERENT_STEPS',
          value: 'בחר שני צעדים שונים'
        },
        {
          key: 'CANNOT_DELETE_AUTOMATIC_GROUPS',
          value: 'אי אפשר למחוק את הקבוצות אוטומטיות'
        },
        {
          key: 'LOGGED_IN_USER_IS_ASSIGNED_TO_ROLE',
          value: 'משתמש שמחובר מוקצה תפקיד'
        },
        {
          key: 'BY',
          value: 'באמצעות'
        },
        {
          key: 'NO_LOOKUP_PROPERTY_FOUND',
          value: 'אין רכוש בדיקה למצוא את ישות שנבחרה'
        },
        {
          key: 'DEFAULT',
          value: 'ברירת מחדל'
        },
        {
          key: 'EDIT_INSTRUCTION_LINE_HEADER',
          value: 'ערוך את שורת הכוונה של השלב'
        },
        {
          key: 'NEW_FILTER',
          value: 'מסנן חדש'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_WORKFLOW_GRAPH',
          value: 'האם מעוניינים למחוק את תהליך העבודה?'
        },
        {
          key: 'EMPTY',
          value: 'ריק'
        },
        {
          key: 'DELETE_PROPERTY_WARNING',
          value: '?האם אתה בטוח שברצונך למחוק את המאפיין %s'
        },
        {
          key: 'REPORT_ENTITIES_ORDER',
          value: 'סדר יישויות בדוח'
        },
        {
          key: 'CONDITIONS_TO_CHECK_BEFORE_RUNNING_THE_ACTION_OPTIONAL',
          value: 'תנאי לבדוק לפני הפעלת הפעולה (אופציונלי)'
        },
        {
          key: 'WORKFLOW_IS_ABOUT_TO',
          value: 'מחזור חיים עומד'
        },
        {
          key: 'IMPORT_ENVIRONMENT_APPLICATION_PREFERENCES',
          value: 'העדפות יישום סביבת יבוא'
        },
        {
          key: 'ADD_JAVASCRIPT_XML_ELEMENTS_INSIDE_CUSTOM',
          value:
            'הוספת אלמנט XML [Javascript]. זה יוצב באופן אוטומטי בתוך אלמנט XML [ActionsOnTrue] / [Custom].'
        },
        {
          key: 'RESUME_MAIN_FLOW_INDICATOR_TOOLTIP',
          value: 'זרימת העבודה יכולה לחדש את הזרימה העיקרית של שלב זה.'
        },
        {
          key: 'ACTUAL_WORK_REMAINING_WORK_AND_PERCENT_WORK_COMPLETE',
          value: 'עבודה בפועל, עבודה נותרת ואחוז עבודה שהושלמה'
        },
        {
          key: 'CLOSE_SESSION',
          value: 'סגור חיבור'
        },
        {
          key: 'TO_DELETE_THIS_LANE_FIRST_DELETE_STEPS',
          value: 'לביצוע מחיקה, מחק תחילה את כל השלבים הקשורים לנתיב זה'
        },
        {
          key: 'WORK_DAYS',
          value: 'ימי עבודה:'
        },
        {
          key: 'EDIT_RIBBON_GROUP',
          value: 'ערוך Ribbon קבוצה'
        },
        {
          key: 'RESTRICT_EDITING_TAB',
          value: 'הגבל עריכה לשונית זו ובקרות הילד שלה על ידי הוספת תנאים'
        },
        {
          key: 'MANDATORY_COMBO_BOX',
          value: 'חסר'
        },
        {
          key: 'ADD_PROPERTY_TO_THE_INFORMATION_GROUP',
          value: 'הוסף מאפיין לקבוצת המידע'
        },
        {
          key: 'NEW_STOP_RULE',
          value: 'כלל עצירה חדשה'
        },
        {
          key: 'TO_LOWER_CASE',
          value: 'אל'
        },
        {
          key: 'DEFAULT_FORMAT_SETTINGS_HELP_TEXT',
          value:
            'הגדרות פורמט ברירת המחדל של היישות עבור טפסים, לוח המחוונים ונוטיפיקציות'
        },
        {
          key: 'OPEN_INFORMATION_PROPERTY_SETTINGS',
          value: 'פתח הגדרות מאפיין מידע'
        },
        {
          key: 'OVERRIDE_DEFAULT_WIDTH',
          value: 'רוחב ברירת מחדל דרוס (פיקסלים)'
        },
        {
          key: 'UNIQUE_DB_COLUMN_NAME',
          value: 'חסר'
        },
        {
          key: 'NEW_TASK_GROUP',
          value: 'משימה חדשה קבוצה ...'
        },
        {
          key: 'SET_TRACKING_PERMISSIONS',
          value: 'הרשאות מעקב גדר במשך ימים, משימות ונוכחות.'
        },
        {
          key: 'FROMATTING',
          value: "עיצוב (מודגש, צבע, וכו ')"
        },
        {
          key: 'WARNING_TITLE',
          value: 'אזהרה'
        },
        {
          key: 'RESERVED_DB_NAME',
          value: 'חסר'
        },
        {
          key: 'MESSAGES',
          value: 'הודעות'
        },
        {
          key: 'REMOVE_ENTITY_TEXT',
          value:
            'משתמשים לא יוכלו לעקוב אחר הזמן והתקדמות נגד פריטים של ישות זו. נתונים במעקב קיימים לא יימחקו.'
        },
        {
          key: 'STEP',
          value: 'שלב'
        },
        {
          key: 'COMMON_ENTITIES',
          value: 'ישויות נפוצות'
        },
        {
          key: 'STATUSDTO_PREVIOUSSTEPDESCRIPTION_DISPLAY_NAME',
          value: 'תיאור שלב קודם'
        },
        {
          key: 'OLIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST',
          value: 'OLIOs לא להוסיף לכל Orchestrator יפעל על Orchestrator הראשון.'
        },
        {
          key: 'USER_SET_IN_APP_PREF_TITLE',
          value: 'המשתמש יקבל אישור אם הוא \\ היא מוגדר בהגדרות אפליקצייה.'
        },
        {
          key:
            'TO_SET_OPERATION_DURATION_THRESHOLDS_CLICK_APPLICATION_PREFERENCES',
          value:
            'כדי להגדיר ספי משך פעולה, לחץ על <b> העדפות יישום </ b>, ולפתוח את <b> פתרון הבעיות </ b> בקטגוריה.'
        },
        {
          key: 'SUFFIX_TOOLIP',
          value: 'אתה יכול להשתמש $ סימן לגשת לאובייקט פריט הטופס.'
        },
        {
          key:
            'ACTIONS_DEFINED_HERE_WONT_BE_PERFORMED_IF_SKIP_THIS_STEP_TO_DO_DEFINE_RULE',
          value:
            'פעולות שהוגדרו כאן לא תבוצענה אם תהליך העבודה פוסחת על הצעד. לשם כך, מגדיר את כלל פעולה על ידי <br/> פתיחה <b> הגדרות Workflow </ b>, ולחיצה על <b> פעולה החוקית </ b>.'
        },
        {
          key: 'ENABLE_FOR_EXECUTION_CENTER',
          value: 'מופעל על מרכז ביצוע'
        },
        {
          key: 'INSERT_ONLY_NUMBERS',
          value: 'מספרים הכניסו רק'
        },
        {
          key: 'PRIMARY_NAME_PROPERTY',
          value: 'רכוש שם ראשי'
        },
        {
          key: 'ADVANCED',
          value: 'מתקדם'
        },
        {
          key: 'REORDER_GROUPS_AND_BUTTONS_BY_DRAGGING',
          value: 'סדר מחדש קבוצות כפתורים ידי גרירתם.'
        },
        {
          key: 'SPECIFY_WHO_CAN_TRACK_TIME_AGAINST_ITEMS',
          value: 'ציין מי יכול לעקוב אחר הזמן והתקדמות נגד פריטים'
        },
        {
          key: 'SET_INFORMATION_GROUP_DISPLAY',
          value: 'ערוך את שם התצוגה של קבוצת מידע זו'
        },
        {
          key: 'EDIT_PROPERTY_CHANGE_CONDITION',
          value: 'ערוך תנאי שינוי מאפיין'
        },
        {
          key: 'MANAGE_BUTTONS',
          value: 'ניהול לחצנים'
        },
        {
          key: 'NEW_HIERARCHY_LEVEL',
          value: 'רמת היררכיה חדשה'
        },
        {
          key: 'DRAG_PROPERTIES',
          value: 'גרור מאפיינים אל תוך הטופס'
        },
        {
          key: 'SENIOR_NODE_TIP',
          value: 'צומת האב מאושר באופן אוטומטי.'
        },
        {
          key: 'ROW_LEVEL_AUTH',
          value: 'הרשאה ברמת עמודה'
        },
        {
          key: 'VIEWING_WORKSHEET_OF_OTHER_USERS',
          value: 'גיליון צופה של משתמשים אחרים'
        },
        {
          key: 'ITEM_WAS_CREATED',
          value: 'פריט נוצר'
        },
        {
          key: 'PRODUCTS',
          value: 'Products'
        },
        {
          key: 'WEB_SITE',
          value: 'אתר אינטרנט'
        },
        {
          key: 'MILESTONES_TABLE_PROPERTY',
          value: 'אבני דרך שולחן נכס'
        },
        {
          key: 'REVERT',
          value: 'שחזר'
        },
        {
          key: 'ACTUAL_WORK_AGAINST_ESTIMATED_WORK_HELP',
          value: 'מומלץ לשעות שמורות, שבו ההתקדמות אינה ישימה'
        },
        {
          key: 'COPY_VALUE',
          value: 'העתק ערך'
        },
        {
          key: 'ACTIONS_STEP_DESCRIPTION',
          value:
            'ציינו אילו פעולות לבצע כאשר הכלל מופעל <BR/> לדוגמא:. לבטל את כל פריטי הילד.'
        },
        {
          key: 'CATEGORIZABLE_ENTITYCATEGORY_DISPLAY_NAME',
          value: 'קטגוריה'
        },
        {
          key: 'REORDER_SUPPORT',
          value: 'תמוך בשינוי סדר השורות בטבלה'
        },
        {
          key: 'MANDATORY',
          value: 'חובה'
        },
        {
          key: 'MOVE_WORKFLOW_TO_A_SPECIFIC_STEP',
          value: 'מעביר תהליך עבודה לשלב ספציפי'
        },
        {
          key: 'OPEN_TASK_LINES',
          value:
            'קווי פתח משימה למעקב. ניתן להשתמש בו כדי לנעול משימות לעובדים על צעדי עבודה מסוימים'
        },
        {
          key: 'MODIFIED_LABEL',
          value: 'השתנה'
        },
        {
          key: 'CALENDAR',
          value: ''
        },
        {
          key: 'PERCENT_COMPLETE_USER_REPORT',
          value: 'משתמש להגדילו לדווח על ההתקדמות'
        },
        {
          key:
            'USE_THE_FOLLOWING_INSTRUCTION_LINE_INSTEAD_OF_THE_DEFAULT_SETTING',
          value: 'שימוש בקו ההנחיה הבאה במקום את הגדרות ברירת המחדל'
        },
        {
          key: 'DONT_DISPLAY_CONFIRMATION_MESSAGE',
          value: 'אל תציג הודעת אישור'
        },
        {
          key: 'ADD_ENTITY_TO_MY_WORK_POLICY',
          value: 'הוסף ישות במדיניות העבודה שלי'
        },
        {
          key: 'EXCLUDE_PROPERTY_FROM_REPORT_GENERATOR',
          value: 'אל תכלול את הנכס הזה הדו"ח מחולל'
        },
        {
          key: 'NEW_ROLE_GROUP',
          value: 'קבוצת תפקידים חדשה'
        },
        {
          key: 'ACTUAL_WORK',
          value: 'עבודה בפועל'
        },
        {
          key: 'STATUS_FILTER',
          value: 'מסנן לפי סטטוס'
        },
        {
          key: 'SPECIFY_ACTIONS_TO_BE_PERFORMED_FOR_EACH_ITEM_OF_SET',
          value: 'ציינו פעולות שיש לבצע עבור כל אחד הפריטים בערכה'
        },
        {
          key: 'FILTER_PARTICIPANTS',
          value: 'Filter the participants'
        },
        {
          key: 'DELETE_AUTH_NODE_SUB_TITLE',
          value: 'האם מעונינים למחוק את הצומת?'
        },
        {
          key: 'YOU_SHOUD_REMOVE_FORMS_BEFORE_DELETE',
          value:
            'מומלץ להסיר טפסים ותהליכי עבודה המקושרים לעץ האישורים לפני מחיקה.'
        },
        {
          key: 'NEW_AUTH_NODE',
          value: 'צומת אוטוריזציה חדש'
        },
        {
          key: 'DISPLAY_LANGUAGES',
          value: 'שפות'
        },
        {
          key: 'UNIQUE_SYSTEM_NAME',
          value: 'חסר'
        },
        {
          key: 'USERS_ALLOWED_TO_MOVE_WORKFLOW_TO_AND_FROM',
          value: 'משתמשים מורשים לעבור את תהליך העבודה וממנה הצעד הזה'
        },
        {
          key: 'SAVE_SUCCESS',
          value: 'השינויים שביצעת נשמרו בהצלחה'
        },
        {
          key: 'FOLDER_TITLE',
          value:
            'המשתמש יקבל אישור אם הוא \\ היא קיבל אישור לאחד מהצמתים בתיקייה.'
        },
        {
          key: 'RESTRICT_VIEWING_CONTROL',
          value: 'להגביל את הצפייה שליטה זו על ידי הוספת תנאים'
        },
        {
          key: 'SET_THE_GROUPING_OF_WORKFLOW_BUTTONS_USING_THE_LIST_BELOW',
          value: 'הגדר את הקיבוץ והסדר של כפתורי עבודה באמצעות הרשימה שלמטה.'
        },
        {
          key: 'STANDARD_LICENSE_ROLE',
          value: ''
        },
        {
          key: 'CREATE_NEW_ROLE',
          value: 'צור תפקיד חדש'
        },
        {
          key: 'IS_AT_OR_BEYOND_STEP',
          value: 'האם בבית או מעבר שלב'
        },
        {
          key: 'DEFAULT_SKIN',
          value: 'תצוגת ברירת מחדל'
        },
        {
          key: 'ALLOW_USER_TO_ADD_COMMENTS',
          value: 'אפשר למשתמש להוסיף הערות'
        },
        {
          key: 'SELECT_INFORMATION_GROUP',
          value: 'בחר קבוצת מידע'
        },
        {
          key: 'RESTRICT_VIEWING_FROM',
          value: 'להגביל את הצפייה הזו על ידי הוספת תנאים'
        },
        {
          key:
            'CHECK_THAT_ALL_MANDATORY_CONTROLS_HAVE_VALUE_BEFORE_MOVING_WORKFLOW',
          value:
            'בדוק שכל שולטת החובה להיות בעל ערך לפני שעברתי את תהליך העבודה'
        },
        {
          key: 'MOVE_COLUMN_TO_MORE_INFO',
          value: 'העבר עמודה למידע נוסף'
        },
        {
          key: 'NEED_TO_RELOAD_SETTINGS',
          value: 'טען הגדרות מערכת'
        },
        {
          key: 'STATUSDTO_PREVIOUSSTATUS_DISPLAY_NAME',
          value: 'סטטוס קודם'
        },
        {
          key: 'IS_NOT_EMPTY',
          value: 'האם לא ריק'
        },
        {
          key: 'SQL_CONNECTION',
          value: 'חיבור SQL'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_REPORT',
          value: 'האם מעונינים למחוק את הדו"ח?'
        },
        {
          key: 'DELETE_TASK_GROUP_TITLE',
          value: 'מחק קבוצת משימות'
        },
        {
          key: 'CUSTOMIZED_ENTITIES',
          value: 'ישויות שעברו התאמה'
        },
        {
          key: 'USERS_CAN_CREATE_REPORT_BASED_ON_LOOKUP',
          value: 'משתמשים יכולים ליצור דוח המבוסס על היישות של המאפיין'
        },
        {
          key: 'EDITABLE_LABEL_DEFAULT_TEXT',
          value: 'הקלד כאן את השם'
        },
        {
          key: 'TO',
          value: ''
        },
        {
          key: 'SKIP_TO',
          value: 'דלג אל '
        },
        {
          key: 'TRANSITION',
          value: 'מעבר שלב'
        },
        {
          key: 'THE_BUTTON_RETURNS_THE_FLOW_TO_LAST_STEP',
          value:
            'הכפתור מחזיר את זרימת העבודה לשלב הזרימה האחרונה היה ב .. כלול את כפתור צעדי /> <br כמו "מחכה לתשובת לקוחות", "עדכון אימפקט".'
        },
        {
          key: 'DELETE_ORCHESTRATOR',
          value: 'מחק מתזמר'
        },
        {
          key: 'THIS_OBJECT_IS_BASED',
          value: '{0} זה מבוסס על'
        },
        {
          key: 'DELETE_MY_WORK_POLICY',
          value: 'מחק מדיניות של דיווח שעות'
        },
        {
          key: 'NEW_FORMULA_TOOLTIP',
          value: 'צור שדה מחושב'
        },
        {
          key: 'RUN_TYPE',
          value: 'סוג הרצה'
        },
        {
          key: 'EDIT_WORKFLOW_FILTER',
          value: 'מסנן Workflow הערוך'
        },
        {
          key: 'WORKSHEET_FORM',
          value: 'טופס גיליון'
        },
        {
          key: 'IS_ABOUT_TO_CHANGE',
          value: 'משתנה'
        },
        {
          key: 'SUFFIX',
          value: ''
        },
        {
          key: 'CONTROL_EDITABLE_BECAUSE_EVERYONE',
          value: 'השדה עריך לכולם מאחר ותפקיד "כל אחד" ללא תנאים'
        },
        {
          key: 'MAX_WORK_PER_DAY',
          value: 'עבודה בפועל מקסימלי ליום (HR):'
        },
        {
          key: 'REVERSE_LOOKUP',
          value: 'בדיקה לאחור'
        },
        {
          key: 'NEW_ACTION_BUTTON',
          value: 'לחצן פעולה חדש'
        },
        {
          key: 'WHEN_FOLLOWING_PROPERTY_EMPTY',
          value: 'כאשר השדה הנ"ל ריק'
        },
        {
          key: 'PREPARE_PROPERTIES_LIST',
          value: 'הכן רשימת מאפיינים'
        },
        {
          key: 'COLOR',
          value: 'צבע'
        },
        {
          key: 'DEFAULT_VALUE',
          value: 'ערך ברירת מחדל'
        },
        {
          key: 'SETTINGS',
          value: 'הגדרות'
        },
        {
          key: 'TABLES',
          value: 'טבלאות'
        },
        {
          key: 'ENTITY_CLASS_NAME',
          value: 'שם מחלקת היישות'
        },
        {
          key: 'ATTACHMENTS_ITEMS',
          value: 'Attachments'
        },
        {
          key: 'COLUMNS',
          value: 'עמודות'
        },
        {
          key: 'ORCHESTRATOR_LEVEL_INTEGRATION_OPERATION',
          value: 'Orchestrator ברמת תפעול אינטגרציה'
        },
        {
          key: 'ITEM_LEVEL_INTEGRATION_OPERATION',
          value: 'ברמת פריט אינטגרציה ותפעול'
        },
        {
          key: 'ENTITY_CATEGORY_FOR_NEW_ROW',
          value: 'בקטגורית ישות בשורה חדשה:'
        },
        {
          key: 'DEFAULT_VALUES',
          value: 'ערכי ברירת מחדל'
        },
        {
          key: 'CREATE_APPROVE',
          value: 'יצירה \\ אישור'
        },
        {
          key: 'CREATE_STEP_AFTER',
          value: 'ליצור שלב אחרי'
        },
        {
          key: 'MSP_TRANSLATION',
          value: 'תרגום MSP'
        },
        {
          key: 'ATTACHMENT_MUST_EXIST_FROM_THIS_STEP',
          value: 'חייבים לצרף מסמכים משלב זה ואילך'
        },
        {
          key: 'DELETE_TABLE',
          value: 'מחק טבלה'
        },
        {
          key: 'THE_INFORMATION_PROPERTY_CANT_BE_A_LINK',
          value: 'ערך מאפיין המידע יכול להיות קישור'
        },
        {
          key: 'WORKFLOW_FILTER',
          value: 'מסנן לפי תהליך עבודה'
        },
        {
          key: 'INSERT',
          value: 'הוסף'
        },
        {
          key: 'CHANGE_DEFAULT_SETTINGS',
          value: 'האם לשנות הגדרות ברירת מחדל?'
        },
        {
          key: 'ADDED_POLICIES',
          value: 'מדינויות נוספות'
        },
        {
          key: 'ADDED_PROPERTIES',
          value: 'מאפיינים שהוספו'
        },
        {
          key: 'APPROVE',
          value: 'אשר'
        },
        {
          key: 'LOOKUP',
          value: 'חיפוש יישות'
        },
        {
          key: 'FORMS_EDITOR',
          value: 'טפסים'
        },
        {
          key: 'SELECTED_ILIOS',
          value: 'איליוס הנבחר'
        },
        {
          key: 'INSERT_NEW_PROPERTY',
          value: 'יצירת מאפיין חדש'
        },
        {
          key: 'SORRY',
          value: 'מצטערים...'
        },
        {
          key: 'IS_BEYOND_STEP',
          value: 'האם מעבר צעד'
        },
        {
          key: 'JAVASCRIPT_CONDITION',
          value: "תנאי ג'אווה סקריפט"
        },
        {
          key: 'AVAILABLE_COLUMNS',
          value: 'עמודות זמינות'
        },
        {
          key: 'MOVE_WORKFLOW',
          value: 'תהליך עבודה'
        },
        {
          key: 'IMPORT_SOLUTION_OBJECTS_NAMES',
          value: 'שמות עצם פתרון יבוא'
        },
        {
          key: 'TASK_FORM_TIP',
          value: 'מוצג לאחר לחיצה על פרטי משימה בדיווח שעות'
        },
        {
          key: 'SQL_CONNECTION',
          value: 'חיבור למאגר המידע'
        },
        {
          key: 'CREATE_STEP_BEFORE',
          value: 'ליצור שלב לפני'
        },
        {
          key: 'IS_NOT_EQUAL_TO',
          value: 'האם לא שווה ל'
        },
        {
          key: 'EDIT_INTEGRATION_OPERATION',
          value: 'עריכת אינטגרציה מבצע'
        },
        {
          key: 'NEW_ACTION_RULE',
          value: 'כלל פעולה חדש'
        },
        {
          key: 'TYPE_DATE_AND_TIME',
          value: 'הכנס תאריך וזמן'
        },
        {
          key: 'EXPORT_LOCATION',
          value: 'מיקום היצוא'
        },
        {
          key: 'LEAVE_NEW_PROPERTY_WARNING',
          value: 'האם אתה בטוח שברצונך לעזוב את הדף מבלי לשמור את המאפיין?'
        },
        {
          key: 'FOLLOWING_USERS_ALLOWED_TO_STAR_THE_WORKFLOW',
          value: 'המשתמשים הבאים עשויים להתחיל את העבודה.'
        },
        {
          key: 'SELECT_OPTION',
          value: 'בחר אפשרות'
        },
        {
          key: 'MUST_HAVE_AT_LEAST',
          value: 'חייב לפחות'
        },
        {
          key: 'MY_WORK_POLICY_ASSIGNMENT_TEXT',
          value: 'גולשים המעבירים את התנאים הבאים יוקצו מדיניות זו.'
        },
        {
          key: 'OPEN_SETTINGS',
          value: 'פתח הגדרות'
        },
        {
          key: 'DELETE_WORKFLOW_TITLE',
          value: 'מחיקת תהליך עבודה'
        },
        {
          key: 'NEW_VIRTUAL_ENTITY',
          value: 'יישות וירטואלית חדשה'
        },
        {
          key: 'NEW',
          value: 'חדש'
        },
        {
          key: 'CONDITIONALLY',
          value: 'מותנה'
        },
        {
          key: 'ALL_ITEMS_ARE_AVAILABLE_BECAUSE_EVERYONE',
          value: ': כל הפריטים זמינים למעקב בגלל שבקבוצת התפקיד כולם אין תנאים.'
        },
        {
          key: 'DELETE_WORKFLOW_TEXT',
          value:
            'פריטים קיימים עלולים להיות קשורים לתהליך עבודה זה. מחיקתו עלולה למנוע צפייה בהם.'
        },
        {
          key: 'PROGRESS_TO_THIS_STEP_ONLY_IF_CONDITIONS_SATISFIED',
          value:
            'התקדמות לשלב זה רק אם מתקיימים שני התנאים הבאים מתקיימים. אחרת, דלג לשלב הבא.'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_MORE_INFO',
          value: 'האם למחוק את המידע הנוסף?'
        },
        {
          key: 'MESSAGES_TAB',
          value: 'חוצץ הודעות'
        },
        {
          key: 'MANDATORY_TEXT_AREA',
          value: 'חסר'
        },
        {
          key: 'ALL_PROPERTIES_TOOLTIP',
          value: 'הוסף מאפיינים לטופס'
        },
        {
          key: 'NEW_SECTION_TOOLTIP',
          value: 'מקטע משמש לקבץ מאפיינים על הטופס'
        },
        {
          key: 'CREATE_ACTION_BUTTON',
          value: 'כפתור פעולה'
        },
        {
          key: 'MUST_BE_AT_LEAST',
          value: 'חייב להיות לפחות'
        },
        {
          key: 'ENTITY_SYSTEM_NAME',
          value: 'שם מערכת ליישות'
        },
        {
          key: 'USE_THE_FOLLOWING_DISPLAY',
          value: 'השתמש בהגדרות אלו במקום בברירת המחדל'
        },
        {
          key: 'DELETE_WORKFLOW',
          value: 'מחק את תהליך העבודה'
        },
        {
          key: 'NO_ITEMS_BE_INCLUDED_IN_GROUP',
          value: 'אין פריטים ייכללו בקבוצה.'
        },
        {
          key: 'APPROVED_BY',
          value: 'אושר על ידי'
        },
        {
          key: 'DISPLAY_NAME',
          value: 'שם תצוגה'
        },
        {
          key: 'FIND_DATA_TYPE',
          value: 'מצא סוג הנתונים'
        },
        {
          key: 'ENTITY',
          value: 'ישות'
        },
        {
          key: 'RESET_ZOOM',
          value: 'אפס מרחק מתצוגה'
        },
        {
          key: 'RESTRICT_EDITING_TABLE',
          value: 'הגבל עריכה והוספת שורות לטבלה על ידי הוספת תנאים.'
        },
        {
          key: 'CREATE_APPLICATION_PREFERENCE_HEADER',
          value: 'צור העדפת יישום חדשה ולהגדיר את הערך שלו'
        },
        {
          key: 'EXCLUDE_PROPERTY_FROM_EVENTS_GENERATOR',
          value: 'אל תכלול נכס זה מאירועים'
        },
        {
          key: 'JAVASCRIPT_FUNCTON',
          value: 'פונקציית javascript'
        },
        {
          key: 'AUTO_ADD_TASKS_FROM_PREVIOUS_WEEK',
          value: 'הוסף אוטומטית משימות משבוע קודם'
        },
        {
          key: 'NEW_HIERARCHY_LEVEL_TIP',
          value: 'המשתמש יוכל ליצור פריטים כבנים ליישות זו מכיוון שהיא היררכית'
        },
        {
          key: 'USERS_CAN_TRACK',
          value: 'משתמשים יכולים לעקוב אחר'
        },
        {
          key: 'KEEP_ME_SIGNED_IN',
          value: 'השאר אותי מחובר'
        },
        {
          key: 'ENTER_JS_CODE',
          value: "הכנס קוד ג'אווה סקריפט שמחזיר אמת או שקר"
        },
        {
          key: 'USE_SEPARATOR',
          value: 'השתמש במפריד אלפים (,)'
        },
        {
          key: 'DO_YOU_WANT_TO_REMOVE_THE_STEP',
          value: 'האם מעונינים למחוק את השלב?'
        },
        {
          key: 'ENTER_THE_DISPLAY_NAME_OF_GROUP',
          value: 'הזן את שם התצוגה של קבוצת הסרט.'
        },
        {
          key: 'MUST_BE_AT_MOST',
          value: 'חייב להיות לכל היותר'
        },
        {
          key: 'USER_SET_IN_APP_PREF',
          value: 'משתמש מוגדר במאפיין מערכת'
        },
        {
          key: 'NEW_WORKFLOW_STEP',
          value: 'שלב חדש בתהליך'
        },
        {
          key: 'ROW_LEVEL_AUTH_TOPIC',
          value: 'המשתמש יקבל אישור רק לשורות אשר הוא \\ היא מוגדר בעמודה.'
        },
        {
          key: 'MOVE_DOWN',
          value: 'הזז מטה'
        },
        {
          key: 'EDIT_ROLE_GROUP',
          value: 'ערוך קבוצת תפקידים'
        },
        {
          key: 'SELECT_INFORMATION_GROUP_TOOLTIP',
          value: 'בחר קבוצת מידע להצגת המאפיין'
        },
        {
          key: 'MOVE_CONTAINER',
          value: 'העבר מיכל'
        },
        {
          key: 'INTEGRATION_OPERATION',
          value: 'פעולות אינטגרציה ברמת המופע'
        },
        {
          key: 'MILESTONES_TABLE_DUEDATE_PROPERTY',
          value: 'נכס תאריך אבני דרך שולחן DUEDATE'
        },
        {
          key: 'PROPERTIES_LIST',
          value: 'רשימת מאפיינים'
        },
        {
          key: 'PRIMARY_PROPERTIES_FOR_BROWSING_REPORTS_NOTIFICATIONS',
          value: 'מאפיינים ראשיים (עבור גלישה, דוחות והודעות)'
        },
        {
          key: 'APERIO_DASHBOARD',
          value: 'לוח המחוונים'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_ROLE',
          value: 'האם מעונינים למחוק את התפקיד?'
        },
        {
          key: 'OF',
          value: 'של'
        },
        {
          key: 'MOVE_TO',
          value: 'העבר אל '
        },
        {
          key: 'CREATED_LABEL',
          value: 'נוצר'
        },
        {
          key: 'NEW_INTEGRATION_OPERATION',
          value: 'ניו אינטגרציה מבצע'
        },
        {
          key: 'TO_ENABLE_ROWS_REORDER',
          value:
            'כדי לאפשר שורות סידור מחדש, לבדוק "שורות תמיכה לסדר מחדש במסגרות ישות בישויות עורך'
        },
        {
          key: 'CHOOSE_A',
          value: 'בחר'
        },
        {
          key: 'ADDED_APPLICATION_PREFERENCES',
          value: 'מאפייני אפליקצייה שנוספו'
        },
        {
          key: 'PRINT',
          value: 'הדפס'
        },
        {
          key: 'EXPORT_ENVIRONMENT_APPLICATION_PREFERENCES',
          value: 'העדפות יישום סביבת יצוא (מומלץ)'
        },
        {
          key: 'CHANGE_COLOR',
          value: 'שנה צבע'
        },
        {
          key: 'USER_IS_ASSIGNED_TO_ROLE',
          value: 'המשתמש הוא בתפקיד'
        },
        {
          key: 'NEW_TAB_TOOLTIP',
          value: 'לחץ על צלמית הלשונית על מנת להוסיף רכיבי לשונית'
        },
        {
          key: 'IS_EMPTY',
          value: 'ריק'
        },
        {
          key: 'FILL_OBJECT_NAME_TRANSLATIONS',
          value: 'מלאו צורות שונות של שם עצם'
        },
        {
          key: 'FIND_ENTITY',
          value: 'מצא ישות'
        },
        {
          key: 'ALWAYS_MANDATORY',
          value: 'חובה תמיד'
        },
        {
          key: 'READ_ONLY',
          value: 'קריאה בלבד'
        },
        {
          key: 'CONFIGURATION_SUPPORT',
          value: 'תמיכה בקונפיג'
        },
        {
          key: 'FROM',
          value: 'מ'
        },
        {
          key: 'INCLUDE_THIS_ENTITY_IN_MY_WORK_POLICIES',
          value: 'כלול יישות זו בהגדרות דיווחי שעות'
        },
        {
          key: 'THURSDAY',
          value: ''
        },
        {
          key: 'BACKUP_SOLUTION_CONFIGURATION',
          value: 'בצע גיבוי לפני ביצוע פעולת היבוא (מומלץ)'
        },
        {
          key: 'MOVE_TO_MORE_INFO',
          value: 'מעבר לפרטים נוספים'
        },
        {
          key: 'SWITCH_ASSIGNEE',
          value: 'החלף תפקיד'
        },
        {
          key: 'CREATE_NEW_STATUS',
          value: ''
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_ORCHESTRATOR',
          value: 'האם מעונינים למחוק את המתזמר?'
        },
        {
          key: 'WORKFLOW_GRAPH',
          value: 'גרף תהליך עבודה'
        },
        {
          key: 'TABLE_LEVEL_AUTH_TIP',
          value: 'לדוגמא, כל בעל משימה יורשה לערוך את טופס הדרישה.'
        },
        {
          key: 'DEFAULT_WIDTH',
          value: 'רוחב ברירת מחדל (פיקסלים)'
        },
        {
          key: 'ITREE_PARENT_DISPLAY_NAME',
          value: 'אב'
        },
        {
          key: 'ORCHESTRATOR',
          value: 'Orchestrator'
        },
        {
          key: 'MONDAY',
          value: ''
        },
        {
          key: 'APPROVAL',
          value: 'אישור'
        },
        {
          key: 'DELETING_A_MORE_INFO_WILL_NOT_DELETE_FROM_DB',
          value: 'מחיקת מידע נוסף לא תמחק נתונים ממסד הנתונים.'
        },
        {
          key: 'REPORTING',
          value: 'דיווח'
        },
        {
          key: 'REMOVE_ROLE',
          value: 'מחיקת תפקיד'
        },
        {
          key: 'START_WITH_LETTER_NO_SPACE',
          value: 'חסר'
        },
        {
          key: 'PERSISTENCEBASEDTO_FOLLOWERS_DISPLAY_NAME',
          value: 'משתמשים עוקבים'
        },
        {
          key: 'THE_GROUP_ALWAYS_DISPLAYED_BECAUSE_EVERYONE',
          value: 'הקבוצה יוצגה תמיד כי קבוצת התפקיד כולם אין תנאים.'
        },
        {
          key: 'USE_THE_FOLLOWING_VALUE',
          value: 'השתמש בערך הבא במקום ערך ברירת המחדל'
        },
        {
          key: 'ITEM_WAS_MODIFIED',
          value: 'פריט שונה'
        },
        {
          key: 'DELETE_ENTITY_WARNING',
          value: '?האם אתה בטוח שברצונך למחוק את היישות %s'
        },
        {
          key: 'DISPLAY_NAME_SINGULAR_INPUT_HELP',
          value: 'תיווצר יישות חדשה בשם זה. דוגמא: My Entity'
        },
        {
          key: 'CHOICE_DESCRIPTION',
          value: 'הקלד כל אפשרות בשורה נפרדת'
        },
        {
          key: 'THE_ENTITY_WILL_BE_DISPLAYED_CONFIGURATION_ITEMS',
          value: 'הישות יוצגה בסעיף פריטי תצורה ולא בסעיף המשמעת'
        },
        {
          key: 'NEED_TO_RESTART_MSP',
          value: 'הפעל מחדש את האפליקציה'
        },
        {
          key: 'THE_CONTROL_CAN_BE_A_LINK',
          value: 'שם התצוגה של מאפיין זה יכול להיות קישור'
        },
        {
          key: 'ROLE',
          value: 'תפקיד'
        },
        {
          key: 'WORKSHEET_AUTH_TREE',
          value: 'עץ אישור גיליון'
        },
        {
          key: 'WORKFLOWABLE_INTEGRATIONFLAG_DISPLAY_NAME',
          value: 'דגל אינטגרציה'
        },
        {
          key: 'DONT_REMOVE',
          value: 'אל תסיר'
        },
        {
          key: 'YOU_SHOUD_REMOVE_AUTHORIZATION_NODES_BEFORE_DELETING',
          value: 'אתה צריך להסיר צומת אישור פניית התפקיד הזה לפני מחיקתה.'
        },
        {
          key: 'LOOKUP_PROPERTY',
          value: 'נכס בדיקה'
        },
        {
          key: 'ATTACHMENTS_TAB',
          value: 'חוצץ מסמכים'
        },
        {
          key: 'COLLAPSE',
          value: 'צמצם עץ'
        },
        {
          key: 'OPEN',
          value: ''
        },
        {
          key: 'WIDTH',
          value: 'רוחב'
        },
        {
          key: 'FULL_SIZE',
          value: 'גודל מלא'
        },
        {
          key: 'SET_AS_DEFAULT',
          value: 'נקבע כברירת מחדל'
        },
        {
          key: 'OUT_OF_THE_BOX',
          value: '% מהקופסא'
        },
        {
          key: 'TABLE_ROWS',
          value: 'שורות'
        },
        {
          key: 'SET_TAB_DISPLAY_NAME',
          value: 'קבע את שם התצוגה והתיאור של לשונית זאת'
        },
        {
          key: 'SKIP_THIS_CONDITION_IF_SET_IS_EMPTY',
          value: 'דלג על התנאי אם הסט ריק'
        },
        {
          key: 'SHOW_TRANSITIONS',
          value: 'מעברי צג'
        },
        {
          key: 'NONE_OF_THE_ITEMS_PASS_THE_CONDITION',
          value: 'אף אחד מהפריטים לא עבר את התנאי'
        },
        {
          key: 'REPORT',
          value: 'דו"ח'
        },
        {
          key: 'MOVE_UP',
          value: 'הזז מעלה'
        },
        {
          key: 'PRODUCT_SN',
          value: 'Product System Name'
        },
        {
          key: 'INDEXPOSITIONABLE_INDEXPOSITION_DISPLAY_NAME',
          value: 'מיקום'
        },
        {
          key: 'STOP_RULE_DESCRIPTION',
          value:
            'עצור הכללים אוסרים על ביצוע שינויים לפריט אם התנאים מתקיימים <BR/> לדוגמה:. לאסור אישור צעד עיצוב אם מסמך העיצוב לא צורף.'
        },
        {
          key: 'IS_AT_FLOW_STEP',
          value: 'האם בשלב זרימה'
        },
        {
          key: 'TABLE_ENTITY',
          value: 'יישות הטבלה'
        },
        {
          key: 'UNIQUE_DB_TABLE_NAME',
          value: 'חסר'
        },
        {
          key: 'GRID_CONTAINER_PROPERTIES',
          value: '{2} {1} {0}'
        },
        {
          key: 'MODIFIED_BY',
          value: 'השתנה על ידי'
        },
        {
          key: 'DELETE',
          value: 'מחק'
        },
        {
          key: 'DAVIATION_RANGE',
          value: 'מגוון Daviation (HR):'
        },
        {
          key: 'ACTIVE',
          value: ''
        },
        {
          key: 'IS_AT_SIDE_STEP',
          value: 'האם בשלב לוואי'
        },
        {
          key: 'OUT_OF_THE_BOX_ENTITIES',
          value: 'ישויות שלא עברו התאמה'
        },
        {
          key: 'ACTION_BUTTON',
          value: 'כפתור פעולה'
        },
        {
          key: 'ENTITYCATEGORY_TITLE_PROPERTY_DISPLAY_NAME',
          value: 'כותרת'
        },
        {
          key: 'DISPLAYED_COLUMNS_MAX_3',
          value: 'עמודות מוצגות (3 מקסימום)'
        },
        {
          key: 'DECIMAL_PLACES',
          value: 'מיקום דסימלי'
        },
        {
          key: 'SUPER_USER_ROLE',
          value: 'משתמש סופר'
        },
        {
          key: 'LANGUAGES',
          value: 'שפות'
        },
        {
          key: 'TASK_TIME_REPORT_FORM_TIP',
          value: 'מוצג לאחר לחיצה כפולה על תא משימה בדיווח שעות'
        },
        {
          key: 'OPEN_COLUMN_SETTINGS',
          value: 'אפשרויות עמודה'
        },
        {
          key: 'ATTACHMENT_STOP_RULE',
          value: 'כלל לעצירת הוספת מסמך'
        },
        {
          key: 'NEW_ACTION',
          value: 'פעולה חדשה'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_CALENDAR',
          value: 'האם מעונינים למחוק את הלוח שנה ?'
        },
        {
          key: 'USER_CAN_INTEGRATE_ENTITY_WITH_EXTERNAL',
          value: 'העתק'
        },
        {
          key: 'AUTHORIZATION_EDITOR',
          value: 'עצי הרשאות'
        },
        {
          key: 'ADD_TO_FAVORITES',
          value: ''
        },
        {
          key: 'CONDITIONS',
          value: 'תנאים'
        },
        {
          key: 'IS_EQUAL_TO',
          value: 'האם שווה ל'
        },
        {
          key: 'MUST_BE_AFTER',
          value: 'חייב להיות אחרי'
        },
        {
          key: 'SET_PROPERTY_MULTI_LOOKUP_OR_TABLE',
          value: 'רכוש גדר (בדיקה או שולחן רב)'
        },
        {
          key: 'PROGRESS',
          value: 'להתקדם'
        },
        {
          key: 'BEGINS_WITH',
          value: 'מתחיל ב'
        },
        {
          key: 'INTEGRATIONFLAG_WARNING',
          value: 'אזהרה'
        },
        {
          key: 'CHOOSE_OPTIONS',
          value: 'בחר אפשרויות'
        },
        {
          key: 'DELETING_APPLICATION_PREFERENCE_WILL_REMOVE_FROM_DB',
          value: 'מחיקת העדפת יישום יהיה למחוק אותו ממסד הנתונים.'
        },
        {
          key: 'RESUME_MAIN_FLOW',
          value: 'המשך מחזור חיים'
        },
        {
          key: 'STATE_FILTER',
          value: 'מסנן לפי מצב'
        },
        {
          key: 'DB_COLUMN_NAME_INPUT_HELP',
          value:
            'השם אינו יכול לכלול רווחים. יש לוודא כי האות הראשונה היא אות גדולה. לדוגמא: MyEntity'
        },
        {
          key: 'LONG_RUNNING_OPERATIONS',
          value: 'פעולות ממושכות'
        },
        {
          key: 'DATA_TYPE',
          value: 'סוג שדה'
        },
        {
          key: 'ENABLE_DELETE_ATTACHMENT_BUTTON',
          value: 'enable “Delete Attachment" button'
        },
        {
          key: 'ADMIN_TIME_REPORT_FORM',
          value: 'טופס דווח זמן Admin'
        },
        {
          key: 'BY_MIDDLE_SENTENCE',
          value: 'על ידי'
        },
        {
          key: 'WORKFLOW_SUPPORT',
          value: 'תמוך במנוע חוקים עבור היישות'
        },
        {
          key: 'IS_LATER_THAN_OR_EQUAL_TO',
          value: 'האם מאוחר מ או שווה ל'
        },
        {
          key: 'YOU_SHOUD_REMOVE_DIALOG_ROLES_BEFORE_DELETING',
          value:
            'You should remove Dialog Roles referencing this pProduct before deleting it.'
        },
        {
          key: 'BLANK',
          value: 'ריק'
        },
        {
          key: 'DELETE_TASK_GROUP_SUB_TITLE',
          value: 'האם אתה בטוח שאתה רוצה למחוק את קבוצת המשימות ?'
        },
        {
          key: 'NEW_ITEM_SET_CONDITION',
          value: 'פריט חדש מצב הגדר'
        },
        {
          key: 'ATTACHMENT_OF_TYPE',
          value: 'סוג מסמך'
        },
        {
          key: 'TASK_STYLES',
          value: 'סגנונות משימה'
        },
        {
          key: 'STATUS_DISPLAY_NAME',
          value: 'STATUS_DISPLAY_NAME'
        },
        {
          key: 'XML_COLUMN',
          value: 'עמודת XML'
        },
        {
          key: 'ADD_TAB',
          value: 'הוסף לשונית'
        },
        {
          key: 'XML_CONTENT',
          value: 'תכולת XML'
        },
        {
          key: 'WORKFLOWABLE_INTEGRATIONINFORMATIONS_DISPLAY_NAME',
          value: 'פעולות אינטגרציה ברמת המופע'
        },
        {
          key: 'ATTENDANCE',
          value: ''
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_BUTTON',
          value: 'האם מעונינים למחוק את הכפתור?'
        },
        {
          key: 'DELETE_AUTH_NODE_TEXT',
          value:
            'מומלץ להסיר קישורים לצומת זה מטפסים ותהליכי עבודה לפני המחיקה. כל צומת בן ימחק גם כן.'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_TABLE',
          value: 'האם מעונינים למחוק את טבלה?'
        },
        {
          key: 'FORMAT',
          value: 'תבנית'
        },
        {
          key: 'FLOW_STEP_PANEL_TITLE',
          value: 'רשימת תהליכים'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_APPLICATION_PREFERENCE',
          value: 'האם מעונינים למחוק את מאפיין האפליקציה?'
        },
        {
          key: 'SOLUTION_DESIGNER',
          value: 'מעצב פיתרון'
        },
        {
          key: 'PARTICIPANTS',
          value: 'Participants'
        },
        {
          key: 'USE_THE_FOLLOWING_NAME_FORMAT_IN_MYWORK_INSTEAD_OF_THE_DEFAULT',
          value: 'השתמש בהגדרות הבאות במקום בהגדרות ברירת המחדל'
        },
        {
          key: 'GENERAL',
          value: 'כללי'
        },
        {
          key: 'ENTITY_AND_FORMS_STEP_LABEL',
          value: 'שלב 1/2 - Entity וטפסים'
        },
        {
          key: 'WORK',
          value: 'עבודה'
        },
        {
          key: 'CHOOSE_DATA_TYPE',
          value: 'בחר סוג נתונים רכוש'
        },
        {
          key: 'REFRESH',
          value: ''
        },
        {
          key: 'PRESENT_DROP_FILES_TO_ATTACH',
          value:
            'present the "Drop files to attach" or "Browse" or "Paste URL" message and enable the "Drag and Drop" functionality'
        },
        {
          key: 'PROPERTIES_CAN_BE_LINKS',
          value:
            'מאפיינים יכולים להיות קישור לטפסים אחרים, לדפים חיצוניים או מערכות חיצוניות'
        },
        {
          key: 'EDIT_FORMS_HEADER',
          value: 'ערוך את כותרת הטופס'
        },
        {
          key: 'ENTITY_CATEGORY_CONDITION',
          value: 'תנאי של קטגורית ישות'
        },
        {
          key: 'CHOOSE_ASSIGNEE',
          value: 'בחר נמחה'
        },
        {
          key: 'ADD_TRANSITION',
          value: 'הוסף מעבר שלב'
        },
        {
          key: 'SAVE_TRANSLATION_WORKBOOK',
          value: 'חוברת תרגום שמורה'
        },
        {
          key: 'THIS_AUTH_TREE_IS_BASED_ON',
          value: 'עץ האוטוריזציה זה מבוסס על ישות'
        },
        {
          key: 'TRANSLATE_SOLUTION',
          value: 'תרגם פתרון'
        },
        {
          key: 'UNIQUE_NAME_PROPERTY',
          value: 'מאפיין שם ייחודי:'
        },
        {
          key: 'NEW_ITEM',
          value: 'חדש'
        },
        {
          key: 'ALL_PROPERTIES',
          value: 'כל המאפיינים'
        },
        {
          key: 'IMPORT_EXPORT',
          value: 'יבוא\\יצוא'
        },
        {
          key: 'UNIQUE_ID',
          value: 'גדר רכוש כפי מזהה ייחודי'
        },
        {
          key: 'NEW_MOVE_WORKFLOW_ACTION',
          value: 'פעולת תהליך עבודה חדשה'
        },
        {
          key: 'AVAILABLE_FORMS',
          value: 'טפסים זמינים'
        },
        {
          key: 'REJECTION',
          value: 'דחייה'
        },
        {
          key: 'EXPORT_ONLY_ENTRIES_MISSING_TRANSLATION',
          value: 'ערכי ייצוא היחיד שחסר תרגום'
        },
        {
          key: 'ENTITYCATEGORY_DISPLAY_NAME',
          value: 'ENTITYCATEGORY_DISPLAY_NAME'
        },
        {
          key: 'TASK_FORMS',
          value: 'טפסי המשימות'
        },
        {
          key: 'SESSION_END_MESSAGE_TEXT',
          value: 'החיבור למערכת עומד להסתיים עקב אי-שימוש במערכת'
        },
        {
          key: 'EDITABLE_LABEL_DEFAULT_DESCRIPTION',
          value: 'הקלד כאן את התיאור'
        },
        {
          key: 'ERROR',
          value: 'שגיאה'
        },
        {
          key: 'CANNOT_DELETE_LANE_WITH_STEPS',
          value: 'לא ניתן למחוק נתיב המכיל שלבים'
        },
        {
          key: 'TABLE_EDITED_BY',
          value: 'טבלה נערכה על ידי'
        },
        {
          key: 'NEW_XML_SECTION',
          value: 'מיכל XML חדש'
        },
        {
          key: 'SELECT_IDENTIFIER_PROPERTY',
          value: 'בחר מאפיין מזהה'
        },
        {
          key: 'LARGE_NUMBER',
          value: 'מספר גדול'
        },
        {
          key: 'MAKE_SURE_NO_WORKFLOW_STEPS_ARE_USING_THE_STATUS',
          value: 'ודא שאין צעדי עבודה משתמשים המעמד לפני מחיקתה.'
        },
        {
          key: 'DELETE_RIBBON_GROUP',
          value: 'מחק קבוצה'
        },
        {
          key: 'CANNOT_DELETE_APPROVE_BUTTONS',
          value: 'לא יכול למחוק את אישור כפתורים'
        },
        {
          key: 'MSP_TRANSLATION_ADVANCED',
          value: 'תרגום MSP (מתקדם)'
        },
        {
          key: 'SAVE_TOOLTIP',
          value: 'שמור את השינויים האחרונים'
        },
        {
          key: 'OPERATION',
          value: 'פעולה'
        },
        {
          key: 'REJECTION',
          value: 'דחייה'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_STATUS',
          value: 'האם מעונינים למחוק את הסטטוס?'
        },
        {
          key: 'THE_PROPERTY_WILL_BE_INSERTED',
          value: 'המאפיין יתווסף בסוף המיכל הראשי'
        },
        {
          key: 'MULTI_LOOKUP_OR_TABLE_PROPERTY',
          value: 'מאפיין בחירה מרובה או טבלה'
        },
        {
          key: 'WORKSHEET_WORKFLOW_TIP',
          value: 'אישור גיליון מנוהל על ידי זרימת עבודה'
        },
        {
          key: 'THE_GROUP_NOT_DISPLAYED_ADD_EVERYONE',
          value: 'הקבוצה לא יוצגה. כדי להציג אותו, להוסיף את קבוצת התפקיד כולם.'
        },
        {
          key: 'EXPORT_MSP_TRANSLATIONS',
          value: 'יצוא תרגומי MSP ...'
        },
        {
          key: 'DISPLAY_NAME_AND_TOOLTIP',
          value: 'שם תצוגה ו tooltip'
        },
        {
          key: 'CREATE_NEW_TABLE_PROPERTY',
          value: 'צור מאפיין חדש מסוג טבלה'
        },
        {
          key: 'ADMINISTRATOR_ROLE',
          value: 'מנהל'
        },
        {
          key: 'REMAINING_WORK',
          value: ''
        },
        {
          key: 'MORE_INFO',
          value: 'מידע נוסף'
        },
        {
          key: 'SAVE_BUTTON',
          value: 'כפתור שמירה'
        },
        {
          key: 'INFORMATION_SECTION_TOOLTIP',
          value: 'צור איזור מידע חדש בלשונית'
        },
        {
          key: 'INSERT_NEW_COLUMN_PROPERTY',
          value: 'יצירת מאפיין חדש בטבלה'
        },
        {
          key: 'DELETE_ITEM',
          value: 'מחק פריט'
        },
        {
          key: 'GOALS_PROPERTY',
          value: 'מטרות MultiLookup נכס'
        },
        {
          key: 'DRAG_ITEMS_TO_REORDER',
          value: 'גרור פריטים על מנת לסדר מחדש'
        },
        {
          key: 'DELETE_INFORMATION_GROUP',
          value: 'מחק קבוצת מידע'
        },
        {
          key: 'TASK_GROUPS',
          value: 'קבוצת משימות'
        },
        {
          key: 'STATUS',
          value: 'סטטוס'
        },
        {
          key: 'FROM_CAMEL_CASE',
          value: 'מ'
        },
        {
          key:
            'TO_RESTRICT_VIEWING_THIS_BUTTON_SELECT_TRANSITION_AND_CLICK_ALLOWED_USER',
          value:
            'כדי להגביל את צפיית לחצן זה, בחר את המעבר ולחץ על <b> משתמשים מורשים </ b> <b> מעבר פיקר </ b>'
        },
        {
          key: 'TEXT_AREA',
          value: 'טקסט מורחב'
        },
        {
          key: 'BUTTON',
          value: 'כפתור'
        },
        {
          key: 'IMPORT',
          value: 'יבא'
        },
        {
          key: 'ITEM_SET_CONDITION',
          value: 'תנאי סט'
        },
        {
          key: 'ROW_EDITING_AND_DELETING',
          value: 'עריכה ומחיקת שורות'
        },
        {
          key: 'MILESTONES_TABLE_STATUS_PROPERTY',
          value: 'נכס מעמד שולחן אבני דרך'
        },
        {
          key: 'USE_THE_FOLLOWING_FORMAT',
          value: 'השתמש בהגדרות הבאות במקום הגדרות ברירת מחדל'
        },
        {
          key: 'ADMIN_TIME',
          value: ''
        },
        {
          key: 'AUTO_COMPLETE_TEXT_BOX',
          value: 'תיבת השלמה אוטומטית'
        },
        {
          key: 'TO_ASSIGNEE',
          value: 'ל- ASSIGNEE'
        },
        {
          key: 'NO_ONE',
          value: 'אף אחד'
        },
        {
          key: 'ADD_ORCHESTRATOR',
          value: 'להוסיף רכיב אינטגרציה'
        },
        {
          key: 'EXPORT',
          value: 'יצא'
        },
        {
          key: 'ATTACHMENTS_ITEMS_CRUD_LEVEL_OF_CONTROL',
          value:
            'Use the following conditions to control the level of CRUD for the Attachments Items.'
        },
        {
          key: 'SET_SECTION_DISPLAY_NAME',
          value: 'הגדר שם תצוגה ותיאור עבור חלק זה'
        },
        {
          key: 'NEW_WORKFLOW_SIDE_STEP',
          value: 'שלב חדש בתהליך העבודה'
        },
        {
          key: 'NOT_EMPTY',
          value: 'לא יכול להיות ריק.'
        },
        {
          key: 'ADD',
          value: 'הוסף'
        },
        {
          key: 'DB_KEY_COL_NAME_HELP',
          value: 'השם אינו יכול לכלול רווחים. לדוגמא: refEntityid'
        },
        {
          key: 'NOTIFICATIONS',
          value: ''
        },
        {
          key: 'ACTIONS_STEP',
          value: 'שלב 2/3 - פעולות'
        },
        {
          key: 'FROM_A_LATER_STEP_ONLY',
          value: 'מ בשלב מאוחר יותר רק'
        },
        {
          key: 'CANCEL',
          value: 'בטל'
        },
        {
          key: 'SET_INITIAL_VALUE_OF_ADMIN_TIME_REPORTS',
          value: 'גדר ערך ראשוני מאפיינים של דיווחים בזמן ניהול:'
        },
        {
          key: 'REFERENCE_TABLE',
          value: 'טבלת קישור'
        },
        {
          key: 'TAB_MUST_BE_SELECTED',
          value: 'עליך לבחור כרטיסייה כדי לעבור. אנא בחר לפני.'
        },
        {
          key: 'INFORMATION_SECTION_HEADER',
          value: 'איזור מידע (כותרת זו אינה מוצגת למשתמשים)'
        },
        {
          key: 'REPORT_TARGET',
          value: 'דווח יעד'
        },
        {
          key: 'USERS_CAN_FILTER_ITEMS_USING',
          value: 'משתמשים יכולים לסנן לפי:'
        },
        {
          key: 'SESSION_ENDED_MESSAGE',
          value:
            'חיבור למערכת הסתיים עקב אי-שימוש במערכת. נא בצע כניסה מחדש להמשך עבודה.'
        },
        {
          key: 'DOES_NOT_BEGIN_WITH',
          value: 'לא מתחיל ב'
        },
        {
          key: 'SAVE',
          value: 'שמור'
        },
        {
          key: 'TABLE_LEVEL_AUTH',
          value: 'הרשאה ברמת טבלה'
        },
        {
          key: 'INSTANCELEVELINTEGRATIONOPERATION_ENTITY_DISPLAY_NAME',
          value: 'פעולת אינטגרציה ספציפית'
        },
        {
          key: 'HALF_SIZE',
          value: 'חצי מידה'
        },
        {
          key: 'APPROVE',
          value: 'אשר'
        },
        {
          key: 'NAME_FORMAT',
          value: 'שם בתבנית (לחיפושים ורישום)'
        },
        {
          key: 'ACTUAL_WORK_UNLIMITED',
          value: 'עבודה בפועל (ללא הגבלה)'
        },
        {
          key: 'ITREE_CHILDREN_DISPLAY_NAME',
          value: 'ילדים'
        },
        {
          key: 'DELETE_TASK_STYLE_SUB_TITLE',
          value: 'האם אתה בטוח שאתה רוצה למחוק את סגנון המשימות ?'
        },
        {
          key: 'USE_FOLLOWING_DISPLAY_NAME_AND_TOOLTIP',
          value: 'השתמש בשם התצוגה הבאה tooltip במקום את הגדרות ברירת המחדל'
        },
        {
          key: 'NEW_TASK_GROUP_TOOLTIP',
          value: 'צור קבוצת משימה חדשה, כך שמשתמש יכול להוסיף אותם ביחד'
        },
        {
          key: 'FILTER_REPORT_RESULTS',
          value: 'תוצאות דוח מסנן'
        },
        {
          key: 'ENABLE_CONDITION',
          value: 'אפשר תנאי'
        },
        {
          key: 'CHOOSE_TABLE_ENTITY',
          value: 'בחר יישות לטבלה'
        },
        {
          key: 'USAGES',
          value: 'שימושים'
        },
        {
          key: 'PROGRESS_COLUMN',
          value: 'טור התקדמות'
        },
        {
          key: 'XML_ACTION',
          value: 'פעולת XML'
        },
        {
          key: 'ITEM_SET_ACTION_NAME',
          value: 'פריט שם ​​פעולה מוגדרת'
        },
        {
          key: 'INSTRUCTION_LINE',
          value: 'שורת הכוונה'
        },
        {
          key: 'CUSTOM',
          value: 'מותאם אישית'
        },
        {
          key: 'NO_ITEMS_BE_AVAILABLE_FOR_TRACKING_ADD_EVERYONE',
          value:
            'אין פריטים יהיו זמינים למעקב. כדי לאפשר מעקב, להוסיף את קבוצת התפקיד כולם.'
        },
        {
          key: 'EDIT_ITEM_SET_ACTION',
          value: 'ערוך פריט פעולת Set'
        },
        {
          key: 'RULE_NAME_STEP',
          value: 'שלב 3/3 - שם'
        },
        {
          key: 'CONTROL_VIEWABLE_BECAUSE_EVERYONE',
          value: 'השדה ניתן לצפייה לכלום מאחר ותפקיד "כל אחד" ללא תנאים'
        },
        {
          key: 'STATUSDTO_LASTTIMESTATUSCHANGED_DISPLAY_NAME',
          value: 'תאריך עידכון סטטוס אחרון'
        },
        {
          key: 'DIALOG',
          value: 'דיאלוג'
        },
        {
          key: 'OF_TYPE',
          value: 'מסוג'
        },
        {
          key: 'USERS_CAN_VIEW_WORKSHEETS',
          value: 'משתמשים יכולים להציג גליונות עבודה של משתמשים אחרים.'
        },
        {
          key: 'BUTTONS_CURRENTLY_IN_GROUP_WILL_MOVE_TO_FIRST_GROUP',
          value: 'לחצנים כרגע בקבוצה יועברו לקבוצה הראשונה.'
        },
        {
          key: 'NOT_MANDATORY',
          value: 'לא חובה'
        },
        {
          key: 'PERSISTENCEBASEDTO_NAME_DISPLAY_NAME',
          value: 'שם'
        },
        {
          key: 'ITEM_SET',
          value: 'סט'
        },
        {
          key: 'AUTHORIZATION_PANE_DEFAULT_TEXT',
          value: 'בחר עץ סמכויות לצפייה בצמתים ובהגדרות שלו'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_INFORMATION_SECTION',
          value: 'האם מעונינים למחוק את איזור המידע?'
        },
        {
          key: 'CREATE_NEW_PRODUCT',
          value: 'Create New Product'
        },
        {
          key: 'SELECT_AN_ENTITY_WITH_ATTACHMENTS_SUPPORT',
          value: 'בחר ישות עם תמיכה לצרף קבצים'
        },
        {
          key: 'TYPE_TEXT',
          value: 'הכנס טקסט'
        },
        {
          key:
            'THE_COMPARISON_WILL_BE_DONE_USING_BOTH_DATE_AND_TIME_COMPONENTS',
          value: 'ההשוואה תיעשה באמצעות שני תאריך רכיבי זמן'
        },
        {
          key: 'REMAINING_WORK',
          value: 'עבודה נותרת'
        },
        {
          key: 'FILTER_BY_DATA_TYPE',
          value: 'חיפוש עפ"י סוג מאפיין'
        },
        {
          key: 'SINGLE_LINE_OF_TEXT',
          value: 'שורה יחידה של טקסט'
        },
        {
          key: 'NEW_CALENDAR',
          value: 'לוח שנה חדשה'
        },
        {
          key: 'SAVE_TRANSLATION_WORKBOOK_UPPERCASE',
          value: 'שמור תרגום חוברת עבודה'
        },
        {
          key: 'MOVE_TO_SIDE_STEP',
          value: 'העבר לשלב צדדי'
        },
        {
          key: 'BASE_ROLE',
          value: ''
        },
        {
          key: 'DELETE_INFORMATION_SECTION',
          value: 'מחק איזור מידע'
        },
        {
          key: 'USE_ROLE_GROUP',
          value:
            'השתמש תפקיד בקבוצה לבדוק תנאים שונים המבוססים על תפקידו של המשתמש המחובר'
        },
        {
          key: 'MAXIMUM_TEXT_SIZE',
          value: 'גודל טקסט מכסימלי'
        },
        {
          key: 'DELETE_REPORT',
          value: 'מחק דו"ח'
        },
        {
          key: 'DISCIPLINE',
          value: 'קטגוריה'
        },
        {
          key: 'IS',
          value: 'הוא'
        },
        {
          key: 'ITEM_SET_ACTION',
          value: 'פריט סט פעולה'
        },
        {
          key: 'RESTRICT_EDITING_CONTROL',
          value: 'הגבל עריכת שליטה זו על ידי הוספת תנאים'
        },
        {
          key: 'MANUALLY_ADD_TRANSITIONS_OTHER_STEPS',
          value: 'שלב חדש בתהליך'
        },
        {
          key: 'CANNOT_DELETE_OBJECT_CAUSE_OTHER_USING_IT',
          value: 'לא ניתן למחוק פריט זה כי פריטים אחרים משתמשים בו.'
        },
        {
          key: 'MUST_BE_BEFORE',
          value: 'חייב להיות לפני'
        },
        {
          key: 'DELETE_ROLE',
          value: 'מחיקת תפקיד'
        },
        {
          key: 'THE_STEP_OF',
          value: 'השלב של'
        },
        {
          key: 'SELECTED_OLIOS',
          value: 'OLIOs הנבחר'
        },
        {
          key: 'TABLE_LEVEL_AUTH_TOPIC',
          value:
            'המשתמש יקבל אישור לטופס או תהליך עבודה אם הוא \\ היא מוגדר בעמודה.'
        },
        {
          key: 'VALIDATION_FAILED',
          value: 'ולידציה נכשלה'
        },
        {
          key: 'STEP_ONE_IMPORT_DB_SCHEMA',
          value: 'שלב 1 - ייבוא ​​DB סכימת'
        },
        {
          key: 'FIRST_TAB_NAME',
          value: 'שם לכרטיסייה הראשונה'
        },
        {
          key: 'IMPORTING_MSP_TRANSLATIONS',
          value: 'יבוא תרגומי MSP ...'
        },
        {
          key: 'DROP_TABLES',
          value: 'זרוק רכיבי טבלא כאן'
        },
        {
          key: 'HISTORY',
          value: 'היסטוריה'
        },
        {
          key: 'ADD_OLIOS_TO_RUN_ON_THIS_ORC',
          value:
            'להוסיף פעולות אינטגרצית Orchestrator ברמה (אוליו) כדי להפעיל את זה על Orchestrator הספציפי.'
        },
        {
          key: 'ENTER_SQL_QUERY',
          value: 'הכנס שאילתת SQL'
        },
        {
          key: 'FORMAT_DATE_AND_TIME',
          value: 'סגנון תאריך ושעה'
        },
        {
          key: 'PROPERTIES',
          value: 'מאפיינים'
        },
        {
          key: 'TO_CAMEL_CASE',
          value: 'עד'
        },
        {
          key: 'WORKFLOW_SETTINGS',
          value: 'פתח את הגדרות תהליך העבודה'
        },
        {
          key: 'TASK_TIME_REPORT',
          value: 'דווח זמן משימות'
        },
        {
          key: 'DURATION',
          value: 'משך'
        },
        {
          key: 'CREATE_NEW_BLANK_WORKFLOW',
          value: 'צור תהליך עבודה חדש:'
        },
        {
          key: 'IF_SELECTED_USERS_CAN_TRACK_TIME_AND_PROGRES_VIA_MY_WORK',
          value:
            'אם מסומן, משתמשים יכולים לעקוב אחר דיווח שעות והתקדמות של פריטים מיישות זו ב My Work'
        },
        {
          key: 'SOME_SETTINGS_HAVE_INVALID_DATA',
          value: 'חלק מההגדרות לא עברו בדיקת תקינות. נא תקן את ההגדרות באדום'
        },
        {
          key: 'NEW_ACTION_TOOLTIP',
          value: 'לחץ כאן כדי ליצור פעולה חדשה'
        },
        {
          key: 'INFORMATION',
          value: 'מידע'
        },
        {
          key: 'TRANSITION_CONDITION',
          value: 'תנאי מעבר שלב'
        },
        {
          key: 'RETURN_TO_PROPERTIES_LIST',
          value: 'חזור לרשימת המאפיינים'
        },
        {
          key: 'COPY',
          value: 'העתק'
        },
        {
          key: 'EDITED_BY',
          value: 'נערך על ידי'
        },
        {
          key: 'TABLE_DISPLAY_NAME',
          value: 'שם תצוגה לטבלה'
        },
        {
          key: 'DELETING_A_CONTROL_WILL_NOT_DELETE_FROM_DB',
          value: 'מחיקה מלאה לא תמחק נתונים ממסדים הנתונים.'
        },
        {
          key: 'MILESTONES_TABLE_OWNER_PROPERTY',
          value: 'נכס משתמש אבני דרך שולחן בעלים'
        },
        {
          key: 'SERVER_ADMIN',
          value: 'מנהל שרת'
        },
        {
          key: 'TO_BE',
          value: 'להיות'
        },
        {
          key: 'APPLICATION_PREFERENCE',
          value: 'מאפיין אפליקציה'
        },
        {
          key: 'IS_NOT_CONTAINED_IN',
          value: 'האם לא מוכל ב'
        },
        {
          key: 'PRE_WHERE',
          value: 'prewhere Clause'
        },
        {
          key: 'EXPAND_ALL',
          value: 'הרחב עץ'
        },
        {
          key: 'ADD_SIDE_STEP',
          value: 'הוסף שלב לוואי'
        },
        {
          key: 'NEW_VALUE_CAN_BE_EMPTY',
          value: 'הערך יכול להיות ריק'
        },
        {
          key: 'ITREETABLE_SEQUENCE_DISPLAY_NAME',
          value: 'רצף'
        },
        {
          key: 'UPDATE',
          value: 'עדכון'
        },
        {
          key: 'NAME',
          value: 'שם'
        },
        {
          key: 'GENERAL_INTEGRATION',
          value: 'אינטגרציה כללית'
        },
        {
          key: 'ENTITY_WILL_APPEAR_IN_RECENT_VISITED_ITEMS',
          value: 'ישות זו תופיע פריטים ביקר לאחרונה'
        },
        {
          key: 'SPECIFY_WHEN_TASK_NAME_HIGHLIGHTED',
          value: 'כשתנאים אלו עוברים, משימות יהיו מסומנות'
        },
        {
          key: 'CONDITION_PROPERTY_PLACED_IN_FORM_MESSAGE',
          value:
            'בחרת בשדה שנמצא על הדף או שדה מחושב. אנא שים לב שהתנאי מחושב פעם אחת כאשר הדף נטען ולא אחרי שינויים לשדה.'
        },
        {
          key: 'OPEN_WEEK_DAYS',
          value: 'ימים בשבוע עבודה פתוחים למעקב'
        },
        {
          key: 'RESTRICT_VIEWING_BUTTON',
          value: 'להגביל את הצפייה כפתור זה על ידי הוספת תנאים'
        },
        {
          key: 'LINK',
          value: 'קישור'
        },
        {
          key: 'DROP_REPORT_PROPERTIES',
          value: 'זרוק את מאפייני דוח {0} כאן'
        },
        {
          key: 'WORKFLOW_BUTTONS',
          value: 'לחצני Workflow'
        },
        {
          key: 'SYSTEM_NAME_LABEL',
          value: 'שם מערכת'
        },
        {
          key: 'REGRESS',
          value: 'לחזור אחורה'
        },
        {
          key: 'ITEM',
          value: 'פריט'
        },
        {
          key: 'CREATE',
          value: 'צור'
        },
        {
          key: 'ORCHESTRATOR_2_MSP_PORT',
          value: 'Orchestrator כדי MSP פורט'
        },
        {
          key: 'NON_WORK_WEEK_DAYS',
          value: 'ימים ללא עבודה בשבוע'
        },
        {
          key: 'RELOAD_SETTINGS',
          value: 'טען הגדרות מערכת'
        },
        {
          key: 'EVERYONE',
          value: 'כולם'
        },
        {
          key: 'DO_NOT_DELETE',
          value: 'אל תמחק'
        },
        {
          key: 'DAY_COLUMNS',
          value: 'עמודות יום'
        },
        {
          key: 'CHECKED',
          value: 'מסומן'
        },
        {
          key: 'SEPARATE_USERS_OR_EMAIL_USING_SEMI_COLONS',
          value: 'משתמשים הפרד או כתובות דואר אלקטרוני באמצעות -נקודתיים (;)'
        },
        {
          key: 'ID',
          value: 'מזהה'
        },
        {
          key: 'HEADER',
          value: 'כותרת'
        },
        {
          key: 'CHOICE_OPTIONS',
          value: 'אפרויות בחירה:'
        },
        {
          key: 'TO_ANY_STEP',
          value: 'לכל צעד'
        },
        {
          key: 'DISPLAY_NAME_PLURAL',
          value: 'שם תצוגה - רבים'
        },
        {
          key: 'INTEGRATION_TAB',
          value: 'חוצץ אינטגרציה'
        },
        {
          key: 'WORKFLOW',
          value: 'תהליך עבודה'
        },
        {
          key: 'PRODUCT',
          value: 'Product'
        },
        {
          key: 'MY_WORK',
          value: ''
        },
        {
          key: 'NEW_FORM',
          value: 'טופס חדש'
        },
        {
          key: 'ADD_THIS_INIO_TO_AN_ORC',
          value:
            'הוספת מבצע אינטגרציה זו אל Orchestrator. זה יכול להיעשות עם פאנל מודאלי הגדרות Orchestrator.'
        },
        {
          key: 'SAVE_FAILED_MESSAGE',
          value:
            'נראה שיש בעיה בשמירת השינויים, אנא נסע שוב מאוחר יותר, או פנה אל מנהל הרשת.'
        },
        {
          key: 'ATTACHMENTS',
          value: 'מסמכים'
        },
        {
          key: 'ACTION_RULE_WIZARD',
          value: 'אשף חוקי פעולה'
        },
        {
          key: 'ADD_CONDITION_XML_ELEMENTS_INSIDE_SERVERSTEP',
          value:
            'Add [Criteria], [ActionsOnTrue] or [ActionsOnFalse] XML elements. They will automatically be placed inside a [Condition] XML element.'
        },
        {
          key: 'ENDS_WITH',
          value: 'מסתיים ב'
        },
        {
          key: 'SET_TASK_GROUP_DISPLAY_NAME',
          value: 'גדר שם התצוגה של קבוצת משימות זה ותיאור'
        },
        {
          key: 'WORK_USER_REPORT',
          value: 'משתמשים יכולים לעדכן הערכת העבודה'
        },
        {
          key: 'PERFORM_ACTIONS_WHEN_EXITING_STEP',
          value: 'בצע פעולות בעת יציאת צעד:'
        },
        {
          key: 'DO_YOU_WANT_TO_DELETE_THE_INFORMATION_GROUP',
          value: 'האם מעונינים למחוק את קבוצת המידע?'
        },
        {
          key: 'DROP_PROPERTIES',
          value: 'זרוק מאפייני טופס כאן'
        },
        {
          key: 'SELECT_TAB_TO_MOVE_SECTION',
          value:
            'בחר לשונית על מנת להעביר את האיזור אליה. האיזור יתווסף לסוף הלשונית.'
        },
        {
          key: 'ORCHESTRATOR_HOST_NAME',
          value: 'שם המארח Orchestrator'
        },
        {
          key: 'PERSISTENCEBASEDTO_UPDATEUSER_DISPLAY_NAME',
          value: 'עודכן ע"י'
        },
        {
          key: 'TRANSITION_SETTINGS_ROLE_GROUP_DESCRIPTION',
          value:
            'השתמש בקבוצות תפקידים כדי לקבוע תנאים שונים בהתבסס על המשתמש הנוכחי.'
        },
        {
          key: 'FIND_DISCIPLINE',
          value: 'מצא קטגוריה'
        },
        {
          key: 'EXISTING_ENTITY',
          value: 'יישות קיימת'
        },
        {
          key: 'ROLES',
          value: 'תפקידים'
        },
        {
          key: 'FIND_DISCIPLINE_TOOLTIP',
          value: 'סנן לפי קטגוריה'
        },
        {
          key: 'DISPLAY',
          value: 'תצוגה'
        },
        {
          key: 'LET_USERS_SEE_WORKFLOW_STEPS_AND_STEP_CURRENTLY_AT',
          value:
            'מציג למשתמש את גרף תרשים הזרימה ואת השלב הנוכחי בו נמצאת היישות.'
        },
        {
          key: 'GRAPHICAL_INDICATOR_NAME',
          value: 'שם אינדיקטור גרפי'
        },
        {
          key: 'MULTI_LOOKUP',
          value: 'חיפוש יישויות'
        },
        {
          key: 'STATUS_LIST',
          value: 'רשימת מצב'
        },
        {
          key: 'START',
          value: 'התחלה'
        },
        {
          key: 'AVAILABLE_OLIOS',
          value: 'OLIOs זמינים'
        },
        {
          key: 'FROM_A_PREVIOUS_STEP_ONLY',
          value: 'מנקודת שלב קודם רק'
        },
        {
          key: 'USER_DISPLAY_NAME',
          value: 'USER_DISPLAY_NAME'
        },
        {
          key: 'TAB_SETTINGS',
          value: 'הגדרות הלשונית'
        },
        {
          key: 'SEND_NOTIFICATION_WHEN_WORKFLOW_HAS_MOVED_TO_THIS_STEP',
          value: 'שלח הודעה כאשר זרימת העבודה עברה שלב זה'
        },
        {
          key: 'CREATE_AND_NEW',
          value: 'צור וחדש'
        },
        {
          key: 'SELECT_AT_LEAST_ONE_NODE',
          value: 'בחר לפחות אופציה אחת.'
        },
        {
          key: 'NODE_NAME',
          value: 'שם הצומת'
        },
        {
          key: 'FIND_PROPERTY',
          value: 'חפש מאפיין'
        },
        {
          key: 'DEFAULT_COLUMNS_OF_TABLES',
          value: 'עמודות ברירת המחדל מתוך טבלאות המקושרות ליישות הנוכחית'
        },
        {
          key: 'TASK_TIME_REPORT_FORM',
          value: 'טופס דיווח משימה זמן'
        },
        {
          key: 'SELECT_POLICY_FROM_TREE',
          value: 'בחר מדיניות העבודה שלי כדי להציג את ההגדרות שלה'
        },
        {
          key: 'FRIDAY',
          value: ''
        },
        {
          key: 'DISPLAY_NAME_SINGULAR',
          value: 'שם תצוגה - יחיד'
        },
        {
          key: 'NEW_TASK_STYLE_TOOLTIP',
          value: 'ליצור סגנון משימה חדשה כדי לצבוע את המשימה'
        },
        {
          key: 'THIS_WORKFLOW_IS_BASED_ON',
          value: 'עבודה זו מבוססת על'
        },
        {
          key: 'STATE_IS',
          value: 'המצב הוא'
        },
        {
          key: 'SET_PROPERTY_VALUE',
          value: 'קבע ערך מאפיין'
        },
        {
          key: 'NEW_WORKFLOW_FILTER',
          value: 'מסנן Workflow חדש'
        },
        {
          key: 'TO_ADDITIONAL_USERS',
          value: 'למשתמשים נוספים'
        },
        {
          key: 'OPEN_ATTENDANCE_LINES',
          value: 'קווי נוכחות Open למעקב'
        },
        {
          key: 'SAVE_BUTTON_IS_DISPLAYED_TO',
          value: 'מוצג לחצן שמור כדי'
        },
        {
          key: 'TREE_ENTITY_AS_ROOT',
          value: 'עץ (יישות זו כשורש העץ)'
        },
        {
          key: 'CHANGE_DEFAULT',
          value: 'שנה ברירת מחדל'
        },
        {
          key: 'DELETE_ENTITY',
          value: 'מחק יישות'
        },
        {
          key: 'PLACE_AFTER',
          value: 'מקם אחרי'
        },
        {
          key: 'RESTRICT_EDITING_FROM',
          value: 'הגבל עריכה זה על ידי הוספת תנאים'
        },
        {
          key: 'ITEM_SET_LABEL',
          value: 'תנאי מסמך'
        },
        {
          key: 'SPECIFY_WITH_USERS_ABLE_TO_VIEW_TASK_GROUP',
          value: 'ציין אילו משתמשים יוכלו להציג משימות זו קבוצה'
        },
        {
          key: 'ENVIRONMENT_APPLICATION_PREFERENCE',
          value: 'מאפיין אפליקציה תשתיתי'
        },
        {
          key: 'PROVIDERS',
          value: 'ספקים'
        },
        {
          key: 'OPTIONAL',
          value: 'אופציונאלי'
        },
        {
          key: 'DELETE_ENTITY_TOOLTIP',
          value: 'מחק את היישות %s'
        },
        {
          key: 'XML_COLUMN_TOOLTIP',
          value: 'הוספת עמודת XML'
        },
        {
          key: 'DISPLAY_IN_RESUME_MAIN_FLOW',
          value: 'שלב חדש בתהליך'
        },
        {
          key: 'USER_SET_IN_PROPERTY',
          value: 'משתמש המוגדר במאפיין'
        },
        {
          key: 'USER_SET_IN_PROPERTY_TITLE',
          value: 'המשתמש יקבל אישור אם הוא \\ היא מוגדר במאפיין.'
        },
        {
          key: 'NEW_WORKFLOW',
          value: 'נוהל עבודה חדשה'
        },
        {
          key: 'ENTER_SQL_WHERE',
          value: 'הכנס שאילתת SQL'
        },
        {
          key: 'ITREETABLE_LEVELINTREE_DISPLAY_NAME',
          value: 'רמה בעץ'
        },
        {
          key: 'NEW_TASK_STYLE',
          value: 'משימה חדשה סגנון ...'
        },
        {
          key: 'ENTITIES_SAVE_SUCCESS',
          value: 'השיוניים שביצעת בסכמה נשמרו בהצלחה'
        },
        {
          key: 'ADD_CONDITION_XML_ELEMENTS',
          value: 'להוסיף [מצב] רכיבי XML'
        },
        {
          key: 'PROPERTY',
          value: 'נכס'
        }
      ]
    }
  ],
  virtualEntityDataTypes: [
    {
      key: 'Textarea',
      value: '2'
    },
    {
      key: 'Date and Time',
      value: '4'
    },
    {
      key: 'Yes No',
      value: '5'
    },
    {
      key: 'Number',
      value: '6'
    },
    {
      key: 'Large Number',
      value: '7'
    },
    {
      key: 'Number with Decimal Point',
      value: '8'
    },
    {
      key: 'Lookup',
      value: '9'
    }
  ],
  workflowButtonsRelativePath:
    '/MSP/resources/images/karambit/workflow_ribbon/half/',
  propertyDataTypes: [
    {
      key: 'Single Line of Text',
      value: '1'
    },
    {
      key: 'Textarea',
      value: '2'
    },
    {
      key: 'Choice',
      value: '3'
    },
    {
      key: 'Date and Time',
      value: '4'
    },
    {
      key: 'Yes No',
      value: '5'
    },
    {
      key: 'Number',
      value: '6'
    },
    {
      key: 'Large Number',
      value: '7'
    },
    {
      key: 'Number with Decimal Point',
      value: '8'
    },
    {
      key: 'Lookup',
      value: '9'
    },
    {
      key: 'Table',
      value: '10'
    },
    {
      key: 'Multi Lookup',
      value: '11'
    }
  ],
  providerTypes: [
    'ADProvider',
    'ExcelProvider',
    'ExchangeProvider',
    'FileSystemProvider',
    'FTPProvider',
    'MSPProvider',
    'MSProjectProvider',
    'QCProvider',
    'ShellProvider',
    'SimpleExcelProvider',
    'SQLProvider',
    'STMTProvider',
    'TFSProvider',
    'WSProvider',
    'XMLProvider'
  ],
  currentLocale: 'en',
  loggedInUserFullName: 'Administrator'
}
