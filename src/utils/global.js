import { GetCategory } from "@/api/news.js";
import service from "@/utils/request";
export default {
    install(Vue, options) {
        Vue.prototype.confirm = function (params) {

            this.$confirm(params.content, {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                center: true
            })
                .then(() => {
                    // console.log(params.data);
                    if (params.data) {
                        params.fn && params.fn(params.data)
                    } else {
                        params.fn && params.fn()
                    }

                    // if (params.data) {
                    //     params.fn && params.fn(data)

                    // } else {
                    //     params.fn && params.fn()
                    //     console.log(params.data);
                    // }
                })
                .catch(() => {

                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }

        Vue.prototype.getCategory = function () {

            return new Promise((resolve, reject) => {
                GetCategory().then(res => {
                    let data = res.data.data.data;

                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        }

        Vue.prototype.qiniuToken = function (data) {
            return service.request({
                method: "post",
                url: "/uploadImgToken/",
                data
            })
        }

    }
}