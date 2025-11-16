import { ResponseModel } from "../../../../shared/models/responseModel";
import { SidebarModel } from "../../../../shared/models/user/sidebarModel";

export const sidebarResponse : ResponseModel<SidebarModel> = {
    status: true,
    message: '',
    result: [
        {
          title: 'Dashboard',
          isPage: true,
          url: '/panel',
          icon: 'fas fa-fw fa-tachometer-alt',
          dividerUp: true,
          dividerDown: true
        },
        {
          title: 'Interface',
          isPage: false,
          components: [
            {
              title: "Components",
              icon: "fas fa-fw fa-cog",
              isPage: false,
              isCollapse: false,
              items: [
                {
                  title: "Custom Components:",
                  isPage: false,
                  url: ""
                },
                {
                  title: "Buttons",
                  isPage: true,
                  url: "/panel/buttons",
                  icon: 'fas fa-fw fa-cog'
                },
                {
                  title: "Cards",
                  isPage: true,
                  url: "/panel/cards",
                  icon: 'fas fa-fw fa-wrench'
                }
              ],
              url: ""
            },
            {
              title: "Utilities",
              icon: "fas fa-fw fa-wrench",
              isPage: false,
              isCollapse: false,
              items: [
                {
                  title: "Custom Utilities:",
                  isPage: false,
                  url: ""
                },
                {
                  title: "Colors",
                  isPage: true,
                  url: "/panel/colors"
                },
                {
                  title: "Borders",
                  isPage: true,
                  url: "/panel/borders"
                },
                {
                  title: "Animations",
                  isPage: true,
                  url: ""
                },
                {
                  title: "Other",
                  isPage: true,
                  url: "/panel/other"
                }
              ],
              url: ""
            }
          ],
          dividerUp: false,
          dividerDown: true
        },
        {
          title: 'ADDONS',
          isPage: false,
          components: [
            {
              title: "Pages",
              icon: "fas fa-fw fa-folder",
              isPage: false,
              isCollapse: false,
              items: [
                {
                  title: "LOGIN SCREENS:",
                  isPage: false
                },
                {
                  title: "Login",
                  isPage: true,
                  url: "/login"
                },
                {
                  title: "Register",
                  isPage: true,
                  url: "/register"
                },
                {
                  title: "Forgot Password",
                  isPage: true,
                  url: "/forgot-password"
                },
                {
                  title: "OTHER PAGES:",
                  isPage: false
                },
                {
                  title: "404 Page",
                  isPage: true,
                  url: "/panel/404"
                },
                {
                  title: "Black Page",
                  isPage: true,
                  url: "/forgot-password"
                }
              ]
            }
          ],
          dividerUp: false,
          dividerDown: false
        },
        {
          title: 'Charts',
          isPage: true,
          url: '/charts',
          icon: 'fas fa-fw fa-chart-area',
          dividerUp: false,
          dividerDown: false
        },
        {
          title: 'Tables',
          isPage: true,
          url: '/tables',
          icon: 'fas fa-fw fa-table',
          dividerUp: false,
          dividerDown: false
        }, 
    ]
}