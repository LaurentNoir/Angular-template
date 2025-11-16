export interface NavItemModel{
    dividerUp: boolean;
    dividerDown: boolean;
    title: string;
    isPage: boolean;
    url?: string;
    icon?: string;
    components?: any[];
}



export type SidebarModel = (NavItemModel)[];