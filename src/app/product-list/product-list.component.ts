import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[];

  constructor() {
    this.products = products;
  }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

}
