import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { BrandsComponent } from './brands/brands.component';
import { DealsComponent } from './deals/deals.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'maps', component:MapsComponent},
  {path: 'deals', component:DealsComponent},
  {path: 'brands', component:BrandsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    BrandsComponent,
    DealsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
