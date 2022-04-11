import { Injectable } from '@angular/core';
import { medicament } from '../model/medicament.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class MedicamentsService {

  apiURL: string = 'http://localhost:8000/api/medicaments' ;

  constructor(private http : HttpClient) {

  }

  listeMedicament(): Observable<medicament[]>{
    return this.http.get<medicament[]>(this.apiURL);
    }

  supprimerMedicament(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
  }




}
