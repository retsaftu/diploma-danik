import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  template: `
    <div class="filters-container">
      <label>
        Категория:
        <select (change)="onFilterChange($event)">
          <option value="all">Все</option>
          <option value="sneakers">Кроссовки</option>
          <option value="boots">Ботинки</option>
          <option value="sandals">Сандалии</option>
        </select>
      </label>
      <label>
        Цена:
        <select (change)="onFilterChange($event)">
          <option value="all">Все</option>
          <option value="low">До 5000</option>
          <option value="medium">5000 - 10000</option>
          <option value="high">Более 10000</option>
        </select>
      </label>
    </div>
  `,
  styles: [
    `
      .filters-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      label {
        font-family: Montserrat;
        color: #fdf4f4;
      }
      select {
        margin-left: 10px;
      }
    `,
  ],
})
export class ProductFiltersComponent {
  @Output() filterChange = new EventEmitter<any>();

  onFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.filterChange.emit({ [target.name]: target.value });
  }
}
