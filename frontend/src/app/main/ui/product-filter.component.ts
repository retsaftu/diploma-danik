import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  template: `
    <div class="filters-container">
      <label>
        Категория:
        <select (change)="onFilterChange('category', $event)">
          <option value="all">Все</option>
          <option value="sneakers">Кроссовки</option>
          <option value="boots">Ботинки</option>
          <option value="sandals">Сандалии</option>
        </select>
      </label>
      <label>
        Цена:
        <select (change)="onFilterChange('price', $event)">
          <option value="all">Все</option>
          <option value="low">До 5000</option>
          <option value="medium">5000 - 10000</option>
          <option value="high">Более 10000</option>
        </select>
      </label>
      <label>
        Размер:
        <select (change)="onFilterChange('size', $event)">
          <option value="all">Все</option>
          <option *ngFor="let size of sizes" [value]="size">{{ size }}</option>
        </select>
      </label>
      <label>
        Популярность:
        <select (change)="onFilterChange('popularity', $event)">
          <option value="all">Все</option>
          <option value="popular">Самые популярные</option>
          <option value="new">Новинки</option>
          <option value="discount">Скидки</option>
        </select>
      </label>
      <label>
        Бренд:
        <select (change)="onFilterChange('brand', $event)">
          <option value="all">Все</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
          <option value="reebok">Reebok</option>
          <option value="newbalance">New Balance</option>
        </select>
      </label>
      <label>
        Цвет:
        <select (change)="onFilterChange('color', $event)">
          <option value="all">Все</option>
          <option value="red">Красный</option>
          <option value="blue">Голубой</option>
          <option value="orange">Оранжевый</option>
          <option value="green">Зеленый</option>
          <option value="purple">Фиолетовый</option>
          <option value="yellow">Желтый</option>
          <option value="turquoise">Бирюзовый</option>
          <option value="pink">Розовый</option>
          <option value="brown">Коричневый</option>
          <option value="darkblue">Синий</option>
        </select>
      </label>
    </div>
  `,
  styles: [
    `
      .filters-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 10px;
        // background-color: #ff9900;
        border-radius: 5px;
      }

      label {
        color: white;
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        margin-right: 10px;
      }

      select {
        margin-left: 5px;
        padding: 5px;
        border-radius: 5px;
        border: none;
        background-color: #fff;
        color: #000;
      }

      select:focus {
        outline: none;
      }
    `,
  ],
  imports: [NgFor],
})
export class ProductFiltersComponent {
  @Output() filterChange = new EventEmitter<any>();

  sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

  private filters: any = {
    category: 'all',
    price: 'all',
    size: 'all',
    popularity: 'all',
    brand: 'all',
    color: 'all',
  };

  onFilterChange(filterType: string, event: Event) {
    const target = event.target as HTMLSelectElement;
    this.filters[filterType] = target.value;
    this.filterChange.emit(this.filters);
  }
}
