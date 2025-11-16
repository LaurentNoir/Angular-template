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
                path: 'colors',
                loadComponent: () => import('./features/admin/color/color').then(m => m.Color)
            },
            {
                path: 'borders',
                loadComponent: () => import('./features/admin/border/border').then(m => m.Border)
            },
            {
                path: 'NoFound',
                loadComponent: () => import('./features/no-found/no-found').then(m => m.NoFound)
            },
            {
                path: 'buttons',
                loadComponent: () => import('./features/admin/button/button').then(m => m.Button)
            },
            {
                path: 'cards',
                loadComponent: () => import('./features/admin/card/card').then(m => m.Card)
            },
            {
                path: 'other',
                loadComponent: () => import('./features/admin/other/other').then(m => m.Other)
            },
            {
                path: '404',
                loadComponent: () => import('./features/no-found/no-found').then(m => m.NoFound)
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
