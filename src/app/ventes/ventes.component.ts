import { Component, OnInit } from '@angular/core';
import { vente } from '../model/vente.model';
import { VentesService } from '../services/ventes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {

  vent! : vente[];

  constructor(private VentesService: VentesService, private router : Router) { }

  ngOnInit(): void {

    this.VentesService.listerVente().subscribe( data => {
      this.vent=data
      console.log(data);
      } );
  }

  supprimVente(v: vente)
  {
      let conf = confirm("Etes-vous sûr de supprimer cette vente?");
       if (conf)
           this.VentesService.supprimerVente(v.id).subscribe(() => {
               console.log("Ventesupprimé");

               this.SupprimVenteDuTableau(v);
              });
            }

  SupprimVenteDuTableau(v : vente) {
     this.vent.forEach((cur, index) => {
         if(v.id===cur.id) {
             this.vent.splice(index, 1);
         }
     });
    }

}
