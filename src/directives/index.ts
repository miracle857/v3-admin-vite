import {type App, Directive} from "vue"
import { permission } from "./permission"
import hljs from "highlight.js/lib/core"
import {useUserStoreHook} from "@/store/modules/user";





export const highlight: Directive = {
  updated(el, binding) {
    const { value } = binding
    const roles = useUserStoreHook().roles
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value
      const hasPermission = roles.some((role) => {
        return permissionRoles.includes(role)
      })
      if (!hasPermission) {
        el.style.display = "none"
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}



/** 挂载自定义指令 */
export function loadDirectives(app: App) {
  app.directive("permission", permission);
  app.directive("highlightjs", function (el) {
    console.log("highlightjs-----")
    const blocks = el.querySelectorAll("pre code")

    blocks.forEach((block: any) => {
      console.log(block)
      hljs.highlightBlock(block)
    })
  })
  // app.directive("highlightjs", highlight);
}
