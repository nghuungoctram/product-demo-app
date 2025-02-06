import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'shop-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shop-container">
      <h2>ANGULAR Shop Information</h2>
      <div class="shop-grid">
        <div class="shop-item" *ngFor="let shop of shops">
          <img [src]="shop.img" [alt]="shop.name" />
          <h3>{{ shop.name }}</h3>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .shop-container {
      padding: 20px;
      text-align: center;
    }
    .shop-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin-top: 20px;
    }
    .shop-item {
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
    .shop-item img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
  `]
})
export class ShopInfoComponent implements OnInit, OnChanges {
  shops = [
    { name: 'Shop A', img: 'https://newfreshfoods.com.vn/datafiles/3/2021-02-27/16830840369778_ghe-xanh-song.jpg' },
    { name: 'Shop B', img: 'https://newfreshfoods.com.vn/datafiles/3/2021-02-27/16830840369778_ghe-xanh-song.jpg' },
    { name: 'Shop C', img: 'https://newfreshfoods.com.vn/datafiles/3/2021-02-27/16830840369778_ghe-xanh-song.jpg' }
  ];

  ngOnInit() {
    console.log('ShopInfoComponent initialized');
  }

  ngOnChanges() {
    console.log('ShopInfoComponent changes detected');
  }
}
