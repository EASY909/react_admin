import service from "../utils/request"
export function loadTable(params) {
    return service.request({
        method: params.method || "post",
        url: params.url,
        data: params.data || {}
    })
}

/**
 * 
 * @param {获取省市} data 
 */
export function getCityPicker(data) {
    return service.request({
        method: "post",
        url: "/cityPicker/",
        data
    })
}

/**
 * 角色列表
 */
export function GetRole(data = {}) {
    return service.request({
        method: "post",
        url: "/role/",
        data
    })
}

/**
 * 系统列表
 */
export function GetSystem(data = {}) {
    return service.request({
        method: "post",
        url: "/system/",
        data
    })
}


/**
 * 列表
 */
export function UserAdd(data = {}) {
    return service.request({
        method: "post",
        url: "/user/add/",
        data
    })
}

/**
 * 删除用户
 */
export function UserDel(data) {
    return service.request({
        method: "post",
        url: "/user/delete/",
        data
    })
}

/**
 * 用户禁启用
 */
export function UserActives(data) {
    return service.request({
        method: "post",
        url: "/user/actives/",
        data
    })
}

/**
 * 用户编辑
 */
export function UserEdit(data) {
    return service.request({
        method: "post",
        url: "/user/edit/",
        data
    })
}

/**
 * 按钮权限
 */
export function GetPermButton(data) {
    return service.request({
        method: "post",
        url: "/permButton/",
        data
    })
}
/**
 * 用户列表
 */
export function GetList(data) {
    return service.request({
        method: "post",
        url: "/user/getList/",
        data
    })
}
export function UserRole(data = {}) {
    return service.request({
        method: "post",
        url: "/userRole/",
        data
    })
}
