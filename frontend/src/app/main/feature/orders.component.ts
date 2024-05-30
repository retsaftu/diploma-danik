import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <header class="logo-container">
        <h1>DANIKROSSY</h1>
        <a [routerLink]="['/products']" class="button fancy-button">Products</a>
      </header>

      <div class="orders-container" *ngIf="orders.length; else noOrders">
        <div class="order-item" *ngFor="let order of orders">
          <h3>Order Date: {{ order.date | date : 'short' }}</h3>
          <ul>
            <li *ngFor="let item of order.items">
              {{ item.name }} - {{ item.price | currency }}
            </li>
          </ul>
          <p>Total: {{ getOrderTotal(order) | currency }}</p>
        </div>
        <div class="order-summary">
          <h3>Total Amount: {{ getTotalAmount() | currency }}</h3>
        </div>
      </div>

      <ng-template #noOrders>
        <p>No orders found.</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
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

      .orders-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow-y: auto;
        height: 70%;
      }

      .orders-container::-webkit-scrollbar {
        display: none;
      }

      .order-item {
        padding: 1rem;
        width: 100%;
        box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
        border-radius: 0.9rem;
        background-color: #fff;
        color: var(--text);
        font-family: 'Montserrat', sans-serif;
      }

      .order-summary {
        padding: 1rem;
        width: 100%;
        box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
        border-radius: 0.9rem;
        background-color: #fff;
        color: var(--text);
        font-family: 'Montserrat', sans-serif;
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
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  ngOnInit() {
    this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
  }

  getOrderTotal(order: any): number {
    return order.items.reduce(
      (total: number, item: any) => total + item.price,
      0
    );
  }

  getTotalAmount(): number {
    return this.orders.reduce(
      (total: number, order: any) => total + this.getOrderTotal(order),
      0
    );
  }
}
