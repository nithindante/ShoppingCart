import { Routes } from '@angular/router';
import { ShoppingpageComponent } from './shoppingpage/shoppingpage.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'shoppingpage', component: ShoppingpageComponent },
    { path: 'cart', component: CartComponent },
    { path: 'cart/checkout', component: CheckoutComponent }
];
