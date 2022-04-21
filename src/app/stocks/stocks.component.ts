import { Component, OnInit } from '@angular/core';
import { stock } from '../model/stock.model';
import { StocksService } from '../services/stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stk !:stock[]  ;

  constructor(private StocksService: StocksService, private router : Router) { }

  ngOnInit(): void {

    this.StocksService.listerStock().subscribe( data => {
      this.stk=data
      console.log(data);
      } );
  }
  supprimStock(st: stock)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce stock?");
       if (conf)
           this.StocksService.supprimerStock(st.id).subscribe(() => {
               console.log("stock supprimé");

               this.SupprimStockDuTableau(st);
              });
            }

  SupprimStockDuTableau(s : stock) {
     this.stk.forEach((cur, index) => {
         if(s.id===cur.id) {
             this.stk.splice(index, 1);
         }
     });
    }

}
