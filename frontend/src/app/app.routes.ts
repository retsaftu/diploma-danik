import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   children: [],
  //   pathMatch: 'full',
  //   canActivate: [RedirectGuard],
  // },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./main/feature/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./main/feature/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./main/feature/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./main/feature/orders.component').then((m) => m.OrdersComponent),
  },
];
