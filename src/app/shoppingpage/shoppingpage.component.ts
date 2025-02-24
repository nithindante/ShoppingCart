import { Component, ViewChild } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-shoppingpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './shoppingpage.component.html',
  styleUrl: './shoppingpage.component.css'
})
export class ShoppingpageComponent {
  submit(form: NgForm, item: Item) {
    this.service.changeData(form.value)
    this.service.updateCart(item, form.value)
    form.reset()
  }
  @ViewChild('itemsForm') form: any;
  constructor(private service: ItemsService) { }

  itemsArr: Item[] | undefined
  ngOnInit() {
    this.service.getDetails().subscribe((res) => {
      this.itemsArr = res
    })
  }
}
