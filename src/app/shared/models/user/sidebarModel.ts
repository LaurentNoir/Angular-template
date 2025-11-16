export interface NavItemModel{
    title: string;
    isPage: boolean;
    url?: string;
    icon?: string;
    components?: any[];
}



export type SidebarModel = (NavItemModel)[];