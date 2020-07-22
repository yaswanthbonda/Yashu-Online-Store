import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Products } from '../products.model';
import { PRODUCTS } from '../products-list';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  prod = PRODUCTS;
  productInForLoop : Products;
  // product: Products;
  id: number;

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
    console.log("prod here: " + this.prod[1]);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // this.prod = PRODUCTS[1];
        }
      );
  }

}
