import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';

export const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "", component: HomeComponent },
];
