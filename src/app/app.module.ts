import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MedicamentsComponent,
    RegisterComponent,
    AddMedicamentComponent,
    UpdatemedicamentComponent,
    AccueilComponent,
    CommandesComponent,
    AddCommandesComponent,
    StocksComponent,
    AddStockComponent,
    VentesComponent,
    AddVenteComponent,
    FournisseursComponent,
    AddFournisseurComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
