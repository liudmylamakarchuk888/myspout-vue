import request from '@/utils/request'



export const getFormsApplicationPreferences = () =>
    request({
        url: '/getFormsApplicationPreferences',
        method: 'get',

    })
export const getMyWorkPolicies = () =>
    request({
        url: '/getMyWorkPolicies',
        method: 'get',

    })

export const getEntities = () =>
    request({
        url: '/getEntities',
        method: 'get',

    })

export const getOrchestrators = () =>
    request({
        url: '/getOrchestrators',
        method: 'get',

    })

export const getAuthorizableEntities = () =>
    request({
        url: '/getAuthorizableEntities',
        method: 'get',

    })

export const getWorkflows = () =>
    request({
        url: '/getWorkflows',
        method: 'get',

    })



export const recentItems = () =>
    request({
        url: '/recentItems',
        method: 'get',

    })


export const getFlexApplicationPreferences = () =>
    request({
        url: '/getFlexApplicationPreferences',
        method: 'get',

    })


export const getMyWorkCalendars = () =>
    request({
        url: '/getMyWorkCalendars',
        method: 'get',

    })


export const getEntityRelationshipIcons = () =>
    request({
        url: '/getEntityRelationshipIcons',
        method: 'get',

    })


export const getAvailableOrchestratorIlios = () =>
    request({
        url: '/getAvailableOrchestratorIlios',
        method: 'get',

    })

export const getAvailableOrchestratorOlios = () =>
    request({
        url: '/getAvailableOrchestratorOlios',
        method: 'get',

    })


export const getIconsInFolder = () =>
    request({
        url: '/getIconsInFolder',
        method: 'get',

    })

export const getDialogRoles = () =>
    request({
        url: '/getDialogRoles',
        method: 'get',

    })


export const getProducts = () =>
    request({
        url: '/getProducts',
        method: 'get',

    })

export const getApplicationPreferences = () =>
    request({
        url: '/getApplicationPreferences',
        method: 'get',

    })


export const getDisplayLanguages = () =>
    request({
        url: '/getDisplayLanguages',
        method: 'get',

    })

//

export const getEntityDataByQueryString = (entityId: string) =>
    request({
        url: '/getEntityDataByQueryString/' + entityId,
        method: 'get'
    })

export const getEntityDataByQueryString1 = (entityId: string, queryString: string, pageSize: number) =>
    request({
        url: '/getEntityDataByQueryString',
        method: 'get',
        params: [{ entityId: entityId, queryString: queryString, pageSize: pageSize }]
    })



// export const getUserInfo = (data: any) =>
//   request({
//     url: '/users/info',
//     method: 'post',
//     data
//   })

// export const getUserByName = (username: string) =>
//   request({
//     url: `/users/${username}`,
//     method: 'get'
//   })

// export const updateUser = (username: string, data: any) =>
//   request({
//     url: `/users/${username}`,
//     method: 'put',
//     data
//   })

// export const deleteUser = (username: string) =>
//   request({
//     url: `/users/${username}`,
//     method: 'delete'
//   })

// export const login = (data: any) =>
//   request({
//     url: '/users/login',
//     method: 'post',
//     data
//   })

// export const logout = () =>
//   request({
//     url: '/users/logout',
//     method: 'post'
//   })

// export const register = (data: any) =>
//   request({
//     url: '/users/register',
//     method: 'post',
//     data
//   })
