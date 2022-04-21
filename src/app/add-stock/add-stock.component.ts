import { Component, OnInit } from '@angular/core';
import { stock } from '../model/stock.model';
import { StocksService } from '../services/stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  NewStock = new stock();

  constructor(private StocksService: StocksService, private router : Router ) { }

  ngOnInit(): void {
  }

  addStock(){
    this.StocksService.ajouterStock(this.NewStock)
    .subscribe(s => {
    console.log(s);
    });
    this.router.navigate(['stocks']);
    }


}
