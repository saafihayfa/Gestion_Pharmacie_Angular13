import { Component, OnInit } from '@angular/core';
import { fournisseur } from '../model/fournisseur.model';
import { FournisseursService } from '../services/fournisseurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  four! : fournisseur[];

  constructor(private FournisseursServices: FournisseursService, private router : Router) { }

  ngOnInit(): void {

    this.FournisseursServices.listerFournisseur().subscribe( data => {
      this.four=data
      console.log(data);
      } );
  }

  supprimFournisseur(f: fournisseur)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce fournisseur?");
       if (conf)
           this.FournisseursServices.supprimerFournisseur(f.id).subscribe(() => {
               console.log("Fournisseur supprimé");

               this.SupprimFournisseurDuTableau(f);
              });
            }

    SupprimFournisseurDuTableau(f : fournisseur) {
     this.four.forEach((cur, index) => {
         if(f.id===cur.id) {
             this.four.splice(index, 1);
         }
     });
    }












}
