import { Routes } from '@angular/router';
import { RedirectGuard } from './guard/redirect.guard';

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
    path: 'products',
    loadComponent: () =>
      import('./product/list/list.component').then((m) => m.ListComponent),
  },
];
