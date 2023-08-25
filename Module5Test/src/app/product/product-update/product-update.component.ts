import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../model/product";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  // productForm: FormGroup;
  id: number;
  categories: Category[];
  product: Product;

  constructor(private formBuilder: FormBuilder, private productService: ProductService,
              private activatedRoute: ActivatedRoute, private router: Router,
              private categoryService: CategoryService) {
  }


  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(
      data => {
        this.categories = data;
      }, error => {
        console.log('error');
      }
    )

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  productForm: FormGroup;

  updateProduct(id: number) {
    const productUpdate = this.productForm.value;
    this.productService.updateProduct(id, productUpdate).subscribe(
      () => {
        console.log('complete');
        console.log(productUpdate);
        this.router.navigate(['/product/list']);
      }, error => {
        console.log('error');
        console.log(productUpdate);
        console.log(id);
      }
    )
  }

  private getProduct(id: number) {
    this.productService.findById(this.id).subscribe(product => {
      this.product = product;
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        email: new FormControl(this.product.email),
        category: new FormControl(this.product.category),
        dateOfBirthday: new FormControl(this.product.dateOfBirthday),
        phoneNumber: new FormControl(this.product.phoneNumber),
        address: new FormControl(this.product.address),
      })
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
