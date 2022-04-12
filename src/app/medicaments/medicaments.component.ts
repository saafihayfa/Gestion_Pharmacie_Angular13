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

    this.MedicamentsService.listeMedicament().subscribe( data => {
      this.medicam=data
      console.log(data);
      });

  }

  supprimerMedicament(med: medicament)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce médicament?");
       if (conf)
           this.MedicamentsService.supprimerMedicament(med.id).subscribe(() => {
               console.log("médicament supprimé");
  });



this.router.navigate(['medicaments']).then(() => {
window.location.reload();
});
}

}
