import { Component, OnInit } from '@angular/core';
import { medicament } from '../model/medicament.model';
import { MedicamentsService } from '../services/medicaments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})

export class MedicamentsComponent {

 medicam !:medicament[]  ;

  constructor(private MedicamentsService: MedicamentsService, private router : Router) {

   //this.medicaments= MedicamentService.listeMedicaments();

   }

  ngOnInit(): void {

    this.MedicamentsService.listerMedicament().subscribe( data => {
      this.medicam=data
      console.log(data);
      } );

  }

  supprimMedicament(md: medicament)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce médicament?");
       if (conf)
           this.MedicamentsService.supprimerMedicament(md.id).subscribe(() => {
               console.log("médicament supprimé");

               this.SupprimMedicamentDuTableau(md);
              });
            }

  SupprimMedicamentDuTableau(m : medicament) {
     this.medicam.forEach((cur, index) => {
         if(m.id===cur.id) {
             this.medicam.splice(index, 1);
         }
     });
    }

  }
