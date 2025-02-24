import { Component } from '@angular/core';
import { ShoppingpageComponent } from "../shoppingpage/shoppingpage.component";
import { CartComponent } from "../cart/cart.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [ShoppingpageComponent, CartComponent, CheckoutComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
