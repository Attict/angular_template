import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { EulaDialog } from './eula.dialog'; 
import { ForgotDialog } from './forgot.dialog';
import { SharedModule } from '../shared';

const loginRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
]);

@NgModule({
    imports: [
        loginRouting,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        EulaDialog, // TODO: Deleteme
        ForgotDialog
    ],
    entryComponents: [
        EulaDialog,
        ForgotDialog
    ]
})
export class LoginModule {}