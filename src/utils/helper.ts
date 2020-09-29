export const CreateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}



export const getUniqueList = (inputData: any[], keyName: string, valueName: string) => {

    const rs: any[] = []

    inputData.filter((thing, i, arr) =>
        arr.findIndex(t => t[keyName] === thing[keyName]) === i
    ).forEach((x) => {
        rs.push({ key: x[keyName], value: x[valueName] })
    })

    return rs

}