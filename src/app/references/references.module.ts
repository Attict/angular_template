import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReferencesComponent } from './references.component';
import { SharedModule } from '../shared';

const referencesRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'references',
        component: ReferencesComponent
    }
]);

@NgModule({
    imports: [
        referencesRouting,
        SharedModule,
    ],
    declarations: [
        ReferencesComponent
    ]
})
export class ReferencesModule {}