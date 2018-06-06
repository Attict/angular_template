import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { SharedModule } from '../shared';

const usersRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'users',
        component: UsersComponent
    }
]);

@NgModule({
    imports: [
        usersRouting,
        SharedModule,
    ],
    declarations: [
        UsersComponent
    ]
})
export class UsersModule {}