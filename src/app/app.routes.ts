import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Admin } from './features/admin/admin';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },
    {
        path: 'login',
        component: Login
    },    
    {
        path: 'panel',
        component: Admin,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/admin/dashboard/dashboard').then(m => m.Dashboard)
            },
        ]
    }
];
