import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  template: `
    <div class="grid-container">
      <!-- <div *ngFor="let product of products" class="product-card">
        <img [src]="product.image" alt="{{ product.name }}" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} руб.</p>
      </div>
      <div *ngFor="let product of products" class="product-card">
        <app-product-card></app-product-card>
      </div> -->
      <app-product-card
        *ngFor="let product of products"
        [product]="product"
      ></app-product-card>
    </div>
  `,
  styles: [
    `
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
        width: 100%;
      }
      .product-card {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
      }
      .product-card img {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
    `,
  ],
  imports: [NgFor, ProductCardComponent],
})
export class ProductGridComponent {
  @Input() products: any[] = [];
}
