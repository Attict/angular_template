import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { UsersComponent } from './users.component';
import { EditUserDialog } from './edit-user.dialog';

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
        UsersComponent,
        EditUserDialog
    ],
    entryComponents: [
        EditUserDialog
    ]
})
export class UsersModule {}
