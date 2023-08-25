import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  displayStyle = 'none';
  idProduct: number;
  p = 1;


  private Swal: any;
  private msg: boolean;


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.productService.getAll().subscribe( products =>{
      this.products=products;
    })
  }

  openPopup(id: number) {
    this.displayStyle = 'block';
    this.idProduct = id;
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  delete() {
    this.productService.deleteProduct(this.idProduct).subscribe(() => {
      this.closePopup();
      this.ngOnInit();
    });
  }

  search(inputSerach: HTMLInputElement) {
    this.productService.search(inputSerach.value).subscribe(next => {
      this.products = next;
      if (this.products.length === 0) {
        this.msg = true;
      } else {
        this.msg = false;
      }
    });
  }

}
