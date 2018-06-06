import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ReferencesModule } from './references/references.module';
import {
  HeaderComponent,
  FooterComponent,
  SideComponent,
  MaterialModule,
  SharedModule
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent
  ],
  imports: [
    rootRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    HomeModule,
    UsersModule,
    FavoritesModule,
    ReferencesModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
