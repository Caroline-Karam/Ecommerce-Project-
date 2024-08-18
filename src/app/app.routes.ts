import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { authGuard } from './Guards/auth.guard';
import { DetailsComponent } from './Components/details/details.component';

export const routes: Routes = [


  {path: "", component: BlankLayoutComponent, children:[
    {path: "", redirectTo:"home", pathMatch:"full"},
    {path: "home", component: HomeComponent , canActivate:[authGuard]},
    {path: "cart", component: CartComponent , canActivate:[authGuard]},
    {path: "details/:id", component: DetailsComponent , canActivate:[authGuard]},
    {path: "products", component: ProductsComponent , canActivate:[authGuard]},
    {path: "categories", component: CategoriesComponent , canActivate:[authGuard]},
    {path: "brands", component: BrandsComponent , canActivate:[authGuard]},
  ]},

  {path: "", component: AuthLayoutComponent, children:[
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
  ]},


    {path: "**", component: NotFoundComponent},

];
