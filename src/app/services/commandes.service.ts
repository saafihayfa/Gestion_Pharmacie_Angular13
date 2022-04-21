import { Injectable } from '@angular/core';
import { commande } from '../model/commande.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class CommandesService {

  apiURL: string = 'http://localhost:8000/api/commandes.json' ;

  constructor(private http : HttpClient) {

  }


  listerCommande(): Observable<commande[]>{
    return this.http.get<commande[]>(this.apiURL);
    }

  ajouterCommande( c: commande):Observable<commande>{
      return this.http.post<commande>(this.apiURL, c, httpOptions);
      }

  supprimerCommande(id : number){
        const url =  `${this.apiURL}/${id}`;
        return this.http.delete<commande>( url, httpOptions);
        }


}

