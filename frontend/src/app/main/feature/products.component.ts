import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFiltersComponent } from '../ui/product-filter.component';
import { ProductGridComponent } from '../ui/product-grid.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductFiltersComponent, ProductGridComponent],
  template: `
    <div class="container">
      <header class="logo-container">
        <h1>DANIKROSSY</h1>
        <button class="profile-btn">Профиль</button>
      </header>
      <app-product-filters
        (filterChange)="onFilterChange($event)"
      ></app-product-filters>
      <app-product-grid [products]="filteredProducts"></app-product-grid>
    </div>
  `,
  styles: [
    // Ваши стили здесь
  ],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Кроссовки 1',
      category: 'sneakers',
      price: 4500,
      image: 'assets/images/sneakers1.png',
    },
    {
      id: 2,
      name: 'Кроссовки 2',
      category: 'sneakers',
      price: 6000,
      image: 'assets/images/sneakers2.png',
    },
    {
      id: 3,
      name: 'Ботинки 1',
      category: 'boots',
      price: 8000,
      image: 'assets/images/boots1.png',
    },
    {
      id: 4,
      name: 'Сандалии 1',
      category: 'sandals',
      price: 3000,
      image: 'assets/images/sandals1.png',
    },
    // Добавьте больше продуктов по необходимости
  ];

  filteredProducts = [...this.products];

  onFilterChange(filters: any) {
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
      return categoryMatch && priceMatch;
    });
  }
}
