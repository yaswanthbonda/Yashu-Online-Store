import { Injectable } from '@angular/core';
import { Products } from './products.model';
import { PRODUCTS } from './products-list';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  allCurrentProducts = PRODUCTS;
  // private products = Products[];
  // validProducts = Products[];
  constructor() { }

  getProducts(
    productId: number,
    name: string,
    displayName: string,
    brand: string,
    description: string,
    imagePath: string,
    productUses: string,
    sizes: Array<string>,
    mrp: number,
    discountInRs: number,
    discountInPercent: number,
    finalPrice: number,
    tags: Array<string>
  ){
    let currentProducts = PRODUCTS;
    return currentProducts;
  }

  getProduct(index: number) {
    return this.allCurrentProducts[index];
  }
}
