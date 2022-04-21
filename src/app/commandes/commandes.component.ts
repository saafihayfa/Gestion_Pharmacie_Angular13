import { Component, OnInit } from '@angular/core';
import { commande } from '../model/commande.model';
import { CommandesService } from '../services/commandes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {

 com !:commande[]  ;

  constructor(private CommandesService: CommandesService, private router : Router) {

   //this.medicaments= MedicamentService.listeMedicaments();

   }

  ngOnInit(): void {

    this.CommandesService.listerCommande().subscribe( data => {
      this.com=data
      console.log(data);
      } );

  }

  supprimCommande(c:commande)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce médicament?");
       if (conf)
           this.CommandesService.supprimerCommande(c.id).subscribe(() => {
               console.log("médicament supprimé");
  });

    this.router.navigate(['commandes']).then(() => {
     window.location.reload();
    });
}

}
