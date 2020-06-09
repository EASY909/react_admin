
import Vue from 'vue';
import store from "../store/index.js";
Vue.directive("btnPerm", {
    bind: function (el, bingind, vnode) {
        if (!bingind.def.hasbtnPerm(bingind.value)) {

            el.style.display = "none";
        }
        // console.log(bingind.hasbtnPerm(bingind.value))
    },
    hasbtnPerm(permission) {

        const button = store.getters["login/buttonPermission"]; // 请求到的数据权限
        const roles = store.getters["login/roles"]; // 获取角色 
        // 如果是超级管理员
        if (roles.includes("admin")) { return true }
        return button.indexOf(permission) != -1; //
    }
})