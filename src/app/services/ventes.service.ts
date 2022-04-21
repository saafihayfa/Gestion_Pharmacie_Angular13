import { Injectable } from '@angular/core';
import { vente } from '../model/vente.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class VentesService {

  apiURL: string = 'http://localhost:8000/api/ventes.json' ;

  constructor(private http : HttpClient) { }


  listerVente(): Observable<vente[]>{
    return this.http.get<vente[]>(this.apiURL);
    }

  ajouterVente( v: vente):Observable<vente>{
      return this.http.post<vente>(this.apiURL, v, httpOptions);
      }

  supprimerVente(id : number){
        const url =  `${this.apiURL}/${id}`;
        return this.http.delete( url, httpOptions);
        }


}
