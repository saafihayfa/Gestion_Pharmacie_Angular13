import { Component, OnInit } from '@angular/core';
import { vente } from '../model/vente.model';
import { VentesService } from '../services/ventes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vente',
  templateUrl: './add-vente.component.html',
  styleUrls: ['./add-vente.component.css']
})
export class AddVenteComponent implements OnInit {

  NewVente = new vente();

  constructor(private VentesService: VentesService, private router : Router ) { }

  ngOnInit(): void {
  }


  addVente(){
    this.VentesService.ajouterVente(this.NewVente)
    .subscribe(s => {
    console.log(s);
    });
    this.router.navigate(['ventes']).then(() => {
      window.location.reload();
      });
    }
  }


