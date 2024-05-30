import { NgFor, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="card" [style.backgroundColor]="product.bgcolor">
      <div class="product-image">
        <img
          [src]="product.image"
          alt="OFF-white Red Edition"
          draggable="false"
        />
      </div>
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <div class="price">$999</div>
      </div>
      <div class="btn">
        <button class="buy-btn" (click)="addToCart()">Buy Now</button>
        <div *ngIf="numberOfItems">{{ numberOfItems }}</div>
        <!-- <button class="fav">
          <svg
            class="svg"
            id="i-star"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"
            />
          </svg>
        </button> -->
      </div>
    </div>
    <!-- <section class="card card-blue">
        <div class="product-image">
          <img
            src="https://i.ibb.co/0JKpmgd/blue.png"
            alt="OFF-white Blue Edition"
            draggable="false"
          />
        </div>
        <div class="product-info">
          <h2>Nike X OFF-white</h2>
          <p>Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
          <div class="price">$1599</div>
        </div>
        <div class="btn">
          <button class="buy-btn">Buy Now</button>
          <button class="fav">
            <svg
              class="svg"
              id="i-star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"
              />
            </svg>
          </button>
        </div>
      </section> -->
  `,
  styles: [
    `
      /*===== GOOGLE FONTS =====*/
      // @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

      /*===== VARIABLES CSS =====*/
      :root {
        --dark-color-lighten: #f2f5ff;
        --red-card: #a62121;
        --blue-card: #4bb7e6;
        --btn: #141414;
        --btn-hover: #3a3a3a;
        --text: #fbf7f7;
      }

      /*===== RESET =====*/

      button {
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        border: none;
        outline: none;
        border-radius: 0.2rem;
        color: var(--text);
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }

      img {
        max-width: 100%;
        height: 100%;
        user-select: none;
      }

      /*===== CARD =====*/
      .container {
        height: 100%;
        width: 850px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
      .card {
        position: relative;
        padding: 1rem;
        width: 350px;
        height: 450px;
        box-shadow: -1px 15px 30px -12px rgb(32, 32, 32);
        border-radius: 0.9rem;
        background-color: var(--red-card);
        color: var(--text);
        cursor: pointer;
      }

      .card-blue {
        background: var(--blue-card);
      }

      .product-image {
        height: 230px;
        width: 100%;
        transform: translate(0, -1.5rem);
        transition: transform 500ms ease-in-out;
        filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.4));
      }
      .product-info {
        text-align: center;
      }

      .card:hover .product-image {
        transform: translate(-1.5rem, -7rem) rotate(-20deg);
      }

      .product-info h2 {
        font-size: 1.4rem;
        font-weight: 600;
      }
      .product-info p {
        margin: 0.4rem;
        font-size: 0.8rem;
        font-weight: 600;
      }
      .price {
        font-size: 1.2rem;
        font-weight: 500;
      }
      .btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 0.8rem;
      }
      .buy-btn {
        background-color: var(--btn);
        padding: 0.6rem 3.5rem;
        font-weight: 600;
        font-size: 1rem;
        transition: 300ms ease;
      }
      .buy-btn:hover {
        background-color: var(--btn-hover);
      }
      .fav {
        box-sizing: border-box;
        background: #fff;
        padding: 0.5rem 0.5rem;
        border: 1px solid#000;
        display: grid;
        place-items: center;
      }

      .svg {
        height: 25px;
        width: 25px;
        fill: #fff;
        transition: all 500ms ease;
      }

      .fav:hover .svg {
        fill: #000;
      }

      @media screen and (max-width: 800px) {
        body {
          height: auto;
        }
        .container {
          padding: 2rem 0;
          width: 100%;
          flex-direction: column;
          gap: 3rem;
        }
      }
    `,
  ],
  imports: [NgFor, NgIf],
})
export class ProductCardComponent {
  @Input() product: any = null;
  numberOfItems = 0;
  cartService = inject(CartService);
  addToCart() {
    this.cartService.addToCart(this.product);
    this.numberOfItems++;
  }
}
