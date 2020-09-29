import request from '@/utils/request'




export const getForms = () =>
    request({
        url: '/getForms',
        method: 'get',

    })
export const getForm = (formId: string) =>
    request({
        url: `/form/${formId}`,
        method: 'get',

    })
