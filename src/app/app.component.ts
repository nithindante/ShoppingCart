import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemsService } from './items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showNavbar: any
  title = 'shopping-cart';
  constructor(private service: ItemsService, private router: Router) {
    this.router.events.subscribe(() => {
      this.showNavbar = !this.router.url.includes('checkout');
    });
  }

  numbers: number = 0
  ngOnInit() {
    this.service.currentData.subscribe((data) => {
      {
        this.numbers = data
      }
    })
  }
}
