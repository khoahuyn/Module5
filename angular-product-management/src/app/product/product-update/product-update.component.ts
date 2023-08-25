import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from 'src/app/service/product.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(private _formBuilder: FormBuilder, private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   const product = this._productService.findById(this.id);
    // });
    // this.productForm = this._formBuilder.group({
    //   id: [this._productService.findById(this.id).id],
    //   name: [this._productService.findById(this.id).name],
    //   price: [this._productService.findById(this.id).price],
    //   description: [this._productService.findById(this.id).description]
    // });
  }

  // submit() {
  //   const product = this.productForm.value;
  //   console.log(product);
  //   // @ts-ignore
  //   this._productService.updateProduct(product);
  //   alert('Update thành công');
  //   this._router.navigate(['/product/list']);
  // }

  getProduct(id: number) {
    return this._productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        id: new FormControl(product.id),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this._productService.updateProduct(id, product).subscribe(() => {
      this._router.navigate(['']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

}
