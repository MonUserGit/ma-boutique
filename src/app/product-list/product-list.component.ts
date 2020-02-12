

import { Component } from '@angular/core';

import { mesProduits } from '../mesProduits';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = mesProduits;

  share() {
    window.alert('Le produit a été partagé!');
  }
}
