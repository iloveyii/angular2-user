import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { HobbyComponent } from "./components/hobby.component";

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'hobby',
        component: HobbyComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);