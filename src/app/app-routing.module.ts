import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { RegisterComponent } from './register/register.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { UpdatemedicamentComponent } from './updatemedicament/updatemedicament.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AddCommandesComponent } from './add-commandes/add-commandes.component';
import { StocksComponent } from './stocks/stocks.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { VentesComponent } from './ventes/ventes.component';
import { AddVenteComponent } from './add-vente/add-vente.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';




const routes: Routes = [
  {path: "register", component : RegisterComponent},
  {path: "login", component : LoginComponent},
  {path: "medicaments", component : MedicamentsComponent},
  {path: "addMedicament", component : AddMedicamentComponent},
  {path: "updatemedicament", component : UpdatemedicamentComponent},
  {path: "accueil", component : AccueilComponent},
  {path:"commandes" , component : CommandesComponent},
  {path:"addcommande", component : AddCommandesComponent},
  {path: "stocks" , component : StocksComponent},
  {path:"addstock", component : AddStockComponent},
  {path:"ventes", component : VentesComponent},
  {path:"addvente", component: AddVenteComponent},
  {path: "fournisseurs", component: FournisseursComponent},
  {path: "addfournisseur", component: AddFournisseurComponent},
  {path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
