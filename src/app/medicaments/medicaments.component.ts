import { Component, OnInit } from '@angular/core';
import { medicament } from '../model/medicament.model';
import { MedicamentsService } from '../services/medicaments.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

 medicaments ! : medicament[] ;

  constructor(private MedicamentService: MedicamentsService, private router : Router) {

   //this.medicaments= MedicamentService.listeMedicaments();

   }

  ngOnInit(): void {

    this.MedicamentService.listeMedicament().subscribe( med => {
      console.log(med);
      this.medicaments = med;
      });

  }

  supprimerMedicament(med: medicament)
  {
      let conf = confirm("Etes-vous sûr ?");
       if (conf)
           this.MedicamentService.supprimerMedicament(med.id).subscribe(() => {
               console.log("médicament supprimé");
  });



this.router.navigate(['medicaments']).then(() => {
window.location.reload();
});
}

}
