import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Admin } from './features/admin/admin';
import { NoFound } from './features/no-found/no-found';


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
            {
                path: 'color',
                loadComponent: () => import('./features/admin/color/color').then(m => m.Color)
            },
            {
                path: '**',
                component: NoFound,
                data: { main: false }
            }
        ]
    },
    {
        path: '**',
        component: NoFound,
        data: { main: true }
    }
];
