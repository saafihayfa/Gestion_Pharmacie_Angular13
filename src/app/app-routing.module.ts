import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { RegisterComponent } from './register/register.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';



const routes: Routes = [
  {path: "navbar", component : NavbarComponent},
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "medicaments", component : MedicamentsComponent},
  {path: "addMedicament", component : AddMedicamentComponent},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
