import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CDComponent } from './cd/cd.component';
import { DVDComponent } from './dvd/dvd.component';
import { LivreComponent } from './livre/livre.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemComponent },
  { path: 'cd', component: CDComponent },
  { path: 'dvd', component: DVDComponent },
  { path: 'livre', component: LivreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
