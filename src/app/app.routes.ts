import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Create } from './components/create/create';
import { Shell } from './components/shell/shell';
import { Search } from './components/search/search';
import { Shells } from './components/shells/shells';
import { ShellsProducto } from './components/shells-producto/shells-producto';

export const routes: Routes = [
    {
        path:'home',
        component:Home
    },
    {
        path:'shells',
        component: Shells
    },
    {
        path: 'shells/:ids',
        component: ShellsProducto
    },
    {
        path:'new/product',
        component:Create
    },
    {
        path: 'shell/product/:id',
        component: Shell
    },
    {
        path: 'search/:name',
        component: Search
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];
