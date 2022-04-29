import { Component, OnInit } from '@angular/core';
import { fournisseur } from '../model/fournisseur.model';
import { FournisseursService } from '../services/fournisseurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  NewFournisseur = new fournisseur ();

  constructor(private FournisseursService: FournisseursService, private router : Router ) { }

  ngOnInit(): void {
  }

  addfournisseur(){
    this.FournisseursService.ajouterFournisseur(this.NewFournisseur)
    .subscribe(s => {
    console.log(s);
    });
    this.router.navigate(['fournisseurs']).then(() => {
      window.location.reload();
    });
  }
}
