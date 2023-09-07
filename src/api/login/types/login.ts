export interface ILoginRequestData {
  /** admin 或 editor */
  userName: string
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
}

export type LoginCodeResponseData = IApiResponseData<string>

export type LoginResponseData = IApiResponseData<{ token: string }>

export type UserInfoResponseData = IApiResponseData<{ userName: string; roles: string[] }>
