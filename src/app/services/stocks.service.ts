import { Injectable } from '@angular/core';
import { stock } from '../model/stock.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

export class StocksService {

  apiURL: string = 'http://localhost:8000/api/stocks.json' ;

  constructor(private http : HttpClient) { }


  listerStock(): Observable<stock[]>{
    return this.http.get<stock[]>(this.apiURL);
    }

  ajouterStock( s: stock):Observable<stock>{
      return this.http.post<stock>(this.apiURL, s, httpOptions);
      }

  supprimerStock(id : number){
        const url =  `http://127.0.0.1:8000/api/stocks/${id}`;
        return this.http.delete( url, httpOptions);
        }

}
