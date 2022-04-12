import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicament } from '../model/medicament.model';
import { MedicamentsService } from '../services/medicaments.service';


@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {

  NewMedicament = new medicament();

  constructor(private MedicamentsService: MedicamentsService, private router : Router ) { }

  ngOnInit(): void {
  }


  addProduit(){
    this.MedicamentsService.ajouterMedicament(this.NewMedicament)
    .subscribe(m => {
    console.log(m);
    });
    this.router.navigate(['medicaments']);
    }


}
