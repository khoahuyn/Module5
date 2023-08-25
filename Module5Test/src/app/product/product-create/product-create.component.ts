import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[];


  constructor(private productService: ProductService, private router: Router, private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this._categoryService.getAllCategory().subscribe(value => {
      this.categories = value;
    });
  }

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    category: new FormControl(),
    dateOfBirthday: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
  });


  onSubmit() {

    const product = this.productForm.value;
    console.log(product);
    this.productService.saveProduct(product).subscribe(() => {
      this.router.navigate(['/product/list']);
    }, e => {
      console.log(e);
    });
  }

}
