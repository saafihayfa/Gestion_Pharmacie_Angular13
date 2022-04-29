import { Component, OnInit } from '@angular/core';
import { commande } from '../model/commande.model';
import { CommandesService } from '../services/commandes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-commandes',
  templateUrl: './add-commandes.component.html',
  styleUrls: ['./add-commandes.component.css']
})
export class AddCommandesComponent implements OnInit {

  NewCommande = new commande();

  constructor(private CommandesService: CommandesService, private router : Router ) { }

  ngOnInit(): void {
  }


  addCommande(){
    this.CommandesService.ajouterCommande(this.NewCommande)
    .subscribe(c => {
    console.log(c);
    });
    this.router.navigate(['commandes']).then(() => {
      window.location.reload();
      });
  }
}

