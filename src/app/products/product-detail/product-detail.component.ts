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
  id: number;
  // prod = PRODUCTS[1];
  productDetail : Products = PRODUCTS[this.id];
  // product: Products;
  

  constructor(private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
    // console.log("prod here: " + this.productDetail.name);
    this.route.params
      .subscribe(
        (params: Params) => {
          // this.id = +params['id'];
          this.id = +this.router.url.split('/').slice(-1)[0];
          console.log("route params: " + this.router.url);
          console.log("id here: " + this.id);
          this.productDetail = PRODUCTS[this.id];
        }
      );
  }

}
