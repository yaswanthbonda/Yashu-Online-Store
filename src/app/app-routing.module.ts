import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { StatusComponent } from './status/status.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: 'products', component: ProductsComponent, 
      children:[
        {path: '', component: ProductsComponent},
        {path: ':id', component: ProductDetailComponent}
      ]},
    {path: 'shopping-cart', component: ShoppingCartComponent },
    {path: 'authentication', component: AuthenticationComponent},
    {path: 'contact', component: ContactComponent },
    {path: 'status', component: StatusComponent },
    {path: 'faq', component: FaqComponent }
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
