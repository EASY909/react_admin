import service from "../utils/request"

/**
 * 验证码
 */
export function getSms(data){
   return service.request({
        method: 'post',
        url: '/getSms/',
        data: data
      })
}

 /**
  * 获取用户
  */

  
/**
 * 获取用户角色
 */
export function getUserRole(data = {}){
  return service.request({
      method: "post",
      url: "/userRole/",
      data
  })
}



  /**
   * 登录
   */
    export function Login(data){
      return service.request({
        method: 'post',
        url: '/login/',
        data: data
      })
    }

   /**
    * 注册
    */

    export function Register(data){
      return service.request({
        method: 'post',
        url: '/register/',
        data: data
      })
    }