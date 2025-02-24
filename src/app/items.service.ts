import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private dataSource = new BehaviorSubject<any>(null);
  private itemsSource = new BehaviorSubject<Item[]>([])
  itemsData = this.itemsSource.asObservable();
  currentData = this.dataSource.asObservable();
  constructor(private http: HttpClient) { }
  myNum: number = 0


  itemsArr: Array<Item> = []
  getDetails(): Observable<Item[]> {
    return this.http.get<Item[]>('https://fakestoreapi.com/products')
  }

  changeData(data: any) {
    if (this.myNum) {
      this.myNum = this.myNum + data.quantity
      this.dataSource.next(this.myNum);
    }
    else {
      this.dataSource.next(data.quantity);
      this.myNum = data.quantity
    }
  }

  subtractData(data: any) {
    if (this.myNum) {
      this.myNum = data.quantity
      this.dataSource.next(this.myNum);
    }
    else {
      this.dataSource.next(data.quantity);
      this.myNum = data.quantity
    }
  }

  updateNavCart(value: any) {
    this.dataSource.next(value)
  }

  updateCart(data: any, value: any) {
    data.quantity = value.quantity
    this.itemsArr.push(data)
    this.itemsSource.next(this.itemsArr)
  }

  removeCart() {
    this.itemsArr = []
    this.itemsSource.next(this.itemsArr)
  }

  removeData() {
    this.myNum = 0
    this.dataSource.next(this.myNum);
  }
}
