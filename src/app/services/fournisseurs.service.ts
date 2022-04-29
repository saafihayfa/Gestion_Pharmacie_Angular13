import { Injectable } from '@angular/core';
import { fournisseur } from '../model/fournisseur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  apiURL: string = 'http://localhost:8000/api/fournisseurs.json' ;


  constructor(private http : HttpClient) { }

  listerFournisseur(): Observable<fournisseur[]>{
    return this.http.get<fournisseur[]>(this.apiURL);
    }

  ajouterFournisseur( f: fournisseur):Observable<fournisseur>{
      return this.http.post<fournisseur>(this.apiURL, f, httpOptions);
      }

  supprimerFournisseur(id : number){
        const url =  `http://127.0.0.1:8000/api/fournisseurs/${id}`;
        return this.http.delete( url, httpOptions);
        }

}
