import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService: ProductsService, private router: Router) { 
    console.log(this.productsService.allCurrentProducts);
  }

  ngOnInit(): void {
  }

  onGetProducts(){

  }

}
