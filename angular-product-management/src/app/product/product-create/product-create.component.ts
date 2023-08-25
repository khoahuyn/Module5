import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  onSubmit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.router.navigate(['']);
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }
}
