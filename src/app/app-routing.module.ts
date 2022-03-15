import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { Navbar1Component } from './navbar1/navbar1.component';

const routes: Routes = [
  {path: "navbar", component : NavbarComponent},
  {path: "login", component : LoginComponent},
  {path: "medicaments", component : MedicamentsComponent},
  {path: "navbar1", component : Navbar1Component},
  { path: "", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
