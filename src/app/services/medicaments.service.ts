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

  apiURL: string = 'http://127.0.0.1:8000/api/medicaments.json' ;

  constructor(private http : HttpClient) {

  }


  listerMedicament(): Observable<medicament[]>{
    return this.http.get<medicament[]>(this.apiURL);
    }

  ajouterMedicament( m: medicament):Observable<medicament>{
      return this.http.post<medicament>(this.apiURL, m, httpOptions);
      }

  supprimerMedicament(id : number){
        const url =  `${this.apiURL}/${id}`;
        return this.http.delete<medicament>( url, httpOptions);
        }


}
