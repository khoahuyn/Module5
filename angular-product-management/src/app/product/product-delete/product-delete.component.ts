import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   const product = this.getProduct(this.id);
    //   this.productForm = new FormGroup({
    //     id: new FormControl(product.id),
    //     name: new FormControl(product.name),
    //     price: new FormControl(product.price),
    //     description: new FormControl(product.description),
    //   });
    // });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
    });
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        id: new FormControl(product.id),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.router.navigate(['']);
      alert('Xoa thanh cong')
    }, e => {
      console.log(e);
    });
  }

}
