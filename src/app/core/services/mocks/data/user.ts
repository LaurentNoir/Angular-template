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
          icon: 'fas fa-fw fa-tachometer-alt'
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
                  url: "",
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
                  url: ""
                }
              ],
              url: ""
            }
          ]
        }    
    ]
}