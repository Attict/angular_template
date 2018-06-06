import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { SharedModule } from '../shared';

const favoritesRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'favorites',
        component: FavoritesComponent
    }
]);

@NgModule({
    imports: [
        favoritesRouting,
        SharedModule,
    ],
    declarations: [
        FavoritesComponent
    ]
})
export class FavoritesModule {}