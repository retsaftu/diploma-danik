import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFiltersComponent } from '../ui/product-filter.component';
import { ProductGridComponent } from '../ui/product-grid.component';
import { CartService } from 'src/app/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    ProductFiltersComponent,
    ProductGridComponent,
    RouterLink,
  ],
  template: `
    <div class="container">
      <header class="logo-container">
        <h1>DANIKROSSY</h1>
        <a [routerLink]="['/products']" class="button fancy-button">Products</a>
      </header>

      <div class="cart-container">
        <div class="cart-item" *ngFor="let item of items">
          <div>
            <span>{{ item.name }}</span> <br />
            <span>{{ item.price | currency }}</span>
          </div>

          <div class="product-image">
            <img
              [src]="item.image"
              alt="OFF-white Red Edition"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div class="total">
        <h3>Total: {{ getTotal() | currency }}</h3>
      </div>

      <button class="button" (click)="onPurchase()">Purchase</button>

      <div *ngIf="orderStatus" class="order-status">
        {{ orderStatus }}
      </div>
    </div>
  `,
  styles: [
    `
      .product-image {
        height: 50px;
        width: 50%;
        transform: translate(0, -1.5rem);
        transition: transform 500ms ease-in-out;
        filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
      }
      .product-image img {
        max-width: 100%;
        height: 50px;
        margin-top: 10px;
      }
      .container {
        color: white;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(180deg, #fa5a00 0%, #530000 100%);
        color: #000;
      }

      .product-grid {
        width: 80%;
        display: flex;
        justify-content: center;
        overflow-y: auto;
        height: 70%;
      }
      .product-grid::-webkit-scrollbar {
        display: none;
      }
      .logo-container {
        color: #fff8f8;
        font-family: 'Luckiest Guy';
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 20px;
      }

      .profile-btn {
        background-color: #ff9900;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }

      .cart-item:hover .product-image {
        transform: translate(-1.5rem, -3.5rem) rotate(-20deg);
      }

      .cart-item {
        padding: 1rem;
        width: 350px;
        height: 100px;
        box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
        border-radius: 0.9rem;
        background-color: #fff;
        color: var(--text);
        font-family: 'Montserrat', sans-serif;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cart-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: auto;
        max-height: 50vh; /* Ограничение высоты для контейнера */
      }

      .cart-container::-webkit-scrollbar {
        display: none;
      }

      .total {
        margin-top: 20px;
        font-size: 18px;
      }

      .order-status {
        margin-top: 20px;
        font-size: 18px;
        color: green;
      }

      .button {
        background-color: #ff9900;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
      }
    `,
  ],
})
export class CartComponent {
  cartService = inject(CartService);
  items = this.cartService.getItems();
  orderStatus: string | null = null;

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  onPurchase(): void {
    const order = {
      items: this.items,
      date: new Date().toISOString(),
    };

    // Get existing orders from local storage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    // Add the new order
    orders.push(order);
    // Save back to local storage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear the cart
    this.items = this.cartService.clearCart();

    // Display order status
    this.orderStatus = 'Your order has been submitted successfully!';
  }
}
