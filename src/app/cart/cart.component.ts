import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  setDefaultValues() {
    this.service.removeCart()
    this.service.removeData()
  }
  changes(i: any, event: any) {
    this.cartItemsArr[i].quantity = event.target.value
    let cartNum = this.getTotalQuantity()
    this.service.updateNavCart(cartNum)
    this.totalAmount = 0
    this.getTotal()
  }
  deleteItem(i: number) {
    this.cartItemsArr.splice(i, 1)
    let cartNum = this.getTotalQuantity()
    this.totalAmount = 0
    this.getTotal()
    this.service.subtractData({ 'quantity': cartNum })
  }

  totalAmount: number = 0;
  constructor(private service: ItemsService) { }
  cartItemsArr: Array<any> = []
  ngOnInit() {
    this.service.itemsData.subscribe((res) => {
      this.cartItemsArr = res
    })
    this.getTotal()

  }

  private getTotal() {
    for (let i = 0; i < this.cartItemsArr.length; i++) {
      this.totalAmount = ((this.totalAmount + (this.cartItemsArr[i].price * this.cartItemsArr[i].quantity)))
    }
  }

  private getTotalQuantity() {
    let cartNum = 0
    this.cartItemsArr.forEach((ele) => {
      cartNum = Number(ele.quantity) + cartNum
    })
    return cartNum
  }
}
