import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFiltersComponent } from '../ui/product-filter.component';
import { ProductGridComponent } from '../ui/product-grid.component';
import { CartService } from 'src/app/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
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
        <div class="profile-container">
          <!-- <button class="profile-btn">Профиль</button> -->
          <span *ngIf="username">{{ username }}</span>
        </div>
        <a [routerLink]="['/cart']" class="button fancy-button"
          >Cart ({{ items.length }})</a
        >
        <a [routerLink]="['/orders']" class="button fancy-button">Orders</a>
      </header>
      <app-product-filters
        (filterChange)="onFilterChange($event)"
      ></app-product-filters>
      <div class="product-grid">
        <app-product-grid
          [products]="filteredProducts"
          [style.width.%]="100"
        ></app-product-grid>
      </div>
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
    `,
  ],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 999,
      image: 'assets/images/1.png',
      description: 'The 10: Air Jordan 1 off-white - Chicago',
      bgcolor: '#a62121',
      size: 42,
      popularity: 'popular',
      brand: 'nike',
      color: 'red',
    },
    {
      id: 2,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 850,
      image: 'assets/images/2.png',
      description: 'Nike Air Presto Off-White',
      bgcolor: '#4bb7e6',
      size: 40,
      popularity: 'new',
      brand: 'nike',
      color: 'blue',
    },
    {
      id: 3,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1500,
      image: 'assets/images/3.png',
      description: 'Nike Air Max 97 Off-White',
      bgcolor: '#f5a623',
      size: 44,
      popularity: 'popular',
      brand: 'nike',
      color: 'orange',
    },
    {
      id: 4,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1200,
      image: 'assets/images/4.png',
      description: 'Nike Blazer Mid Off-White',
      bgcolor: '#7ed321',
      size: 41,
      popularity: 'discount',
      brand: 'nike',
      color: 'green',
    },
    {
      id: 5,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1100,
      image: 'assets/images/5.png',
      description: 'Nike Air Force 1 Low Off-White',
      bgcolor: '#bd10e0',
      size: 43,
      popularity: 'popular',
      brand: 'nike',
      color: 'purple',
    },
    {
      id: 6,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 950,
      image: 'assets/images/6.png',
      description: 'Nike Air VaporMax Off-White',
      bgcolor: '#f8e71c',
      size: 39,
      popularity: 'new',
      brand: 'nike',
      color: 'yellow',
    },
    {
      id: 7,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1300,
      image: 'assets/images/7.png',
      description: 'Nike Zoom Fly Off-White',
      bgcolor: '#50e3c2',
      size: 38,
      popularity: 'discount',
      brand: 'nike',
      color: 'turquoise',
    },
    {
      id: 8,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1400,
      image: 'assets/images/1.png',
      description: 'Nike React Hyperdunk Off-White',
      bgcolor: '#d0021b',
      size: 42,
      popularity: 'popular',
      brand: 'nike',
      color: 'red',
    },
    {
      id: 9,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1250,
      image: 'assets/images/2.png',
      description: 'Nike Air Rubber Dunk Off-White',
      bgcolor: '#417505',
      size: 40,
      popularity: 'new',
      brand: 'nike',
      color: 'blue',
    },
    {
      id: 10,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1000,
      image: 'assets/images/3.png',
      description: 'Nike Air Force 1 Mid Off-White',
      bgcolor: '#b8e986',
      size: 44,
      popularity: 'popular',
      brand: 'nike',
      color: 'orange',
    },
    {
      id: 11,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1350,
      image: 'assets/images/4.png',
      description: 'Nike Dunk Low Off-White',
      bgcolor: '#9013fe',
      size: 41,
      popularity: 'discount',
      brand: 'nike',
      color: 'green',
    },
    {
      id: 12,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1450,
      image: 'assets/images/5.png',
      description: 'Nike Air Terra Forma Off-White',
      bgcolor: '#ff6f61',
      size: 43,
      popularity: 'popular',
      brand: 'nike',
      color: 'purple',
    },
    {
      id: 13,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1600,
      image: 'assets/images/6.png',
      description: 'Nike Air Jordan 5 Off-White',
      bgcolor: '#ffca28',
      size: 39,
      popularity: 'new',
      brand: 'nike',
      color: 'yellow',
    },
    {
      id: 14,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1550,
      image: 'assets/images/7.png',
      description: 'Nike Air Zoom Tempo Off-White',
      bgcolor: '#ab47bc',
      size: 38,
      popularity: 'discount',
      brand: 'nike',
      color: 'turquoise',
    },
    {
      id: 15,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1700,
      image: 'assets/images/1.png',
      description: 'Nike Air Max 90 Off-White',
      bgcolor: '#26c6da',
      size: 42,
      popularity: 'popular',
      brand: 'nike',
      color: 'red',
    },
    {
      id: 16,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 1800,
      image: 'assets/images/2.png',
      description: 'Nike Air Jordan 4 Off-White',
      bgcolor: '#ff7043',
      size: 40,
      popularity: 'new',
      brand: 'nike',
      color: 'blue',
    },

    {
      id: 17,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 22000,
      image: 'assets/images/3.png',
      description: 'Nike Air Force 1 MCA Off-White',
      bgcolor: '#66bb6a',
      size: 44,
      popularity: 'popular',
      brand: 'nike',
      color: 'orange',
    },
    {
      id: 18,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 2100,
      image: 'assets/images/4.png',
      description: 'Nike Air Force 1 University Blue Off-White',
      bgcolor: '#ef5350',
      size: 41,
      popularity: 'discount',
      brand: 'nike',
      color: 'green',
    },
    {
      id: 19,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 2200,
      image: 'assets/images/5.png',
      description: 'Nike Air Force 1 Black Off-White',
      bgcolor: '#42a5f5',
      size: 43,
      popularity: 'popular',
      brand: 'nike',
      color: 'purple',
    },
    {
      id: 20,
      name: 'Nike X OFF-white',
      category: 'sneakers',
      price: 7300,
      image: 'assets/images/6.png',
      description: 'Nike Air Force 1 Volt Off-White',
      bgcolor: '#ffa726',
      size: 39,
      popularity: 'new',
      brand: 'nike',
      color: 'yellow',
    },
  ];

  filteredProducts = [...this.products];
  cartService = inject(CartService);
  items = this.cartService.getItems();
  onFilterChange(filters: any) {
    console.log('🚀 ~ ProductsComponent ~ onFilterChange ~ filters:', filters);
    this.filteredProducts = this.products.filter((product) => {
      const categoryMatch =
        filters.category === 'all' || product.category === filters.category;

      let priceMatch = true;
      if (filters.price === 'low') {
        priceMatch = product.price <= 5000;
      } else if (filters.price === 'medium') {
        priceMatch = product.price > 5000 && product.price <= 10000;
      } else if (filters.price === 'high') {
        priceMatch = product.price > 10000;
      }

      const sizeMatch = filters.size === 'all' || product.size == filters.size;
      const popularityMatch =
        filters.popularity === 'all' ||
        product.popularity === filters.popularity;
      const brandMatch =
        filters.brand === 'all' || product.brand === filters.brand;
      const colorMatch =
        filters.color === 'all' || product.color === filters.color;

      return (
        categoryMatch &&
        priceMatch &&
        sizeMatch &&
        popularityMatch &&
        brandMatch &&
        colorMatch
      );
    });
  }
  constructor() {
    this.username = this.getUsername();
  }
  username: string | null = null;

  getUsername(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).username : null;
  }
}
