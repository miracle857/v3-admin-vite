import { request } from "@/utils/service"

export interface Code {
  id: number
  code: string
  out?: string
  connect: boolean
}

/** 获取登录验证码 */
// export function runCode() {
//   return request({
//     url: "login/code",
//     method: "get"
//   })
// }
//
// /** 登录并返回 Token */
// export function loginApi(data: Login.ILoginRequestData) {
//   return request<Login.LoginResponseData>({
//     url: "users/login",
//     method: "post",
//     data
//   })
// }
//
// /** 获取用户详情 */
// export function getUserInfoApi() {
//   return request<Login.UserInfoResponseData>({
//     url: "users/info",
//     method: "get"
//   })
// }
