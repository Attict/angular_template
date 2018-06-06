import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SharedModule } from '../shared';

const searchRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'search',
        component: SearchComponent
    }
]);

@NgModule({
    imports: [
        searchRouting,
        SharedModule,
    ],
    declarations: [
        SearchComponent
    ]
})
export class SearchModule {}