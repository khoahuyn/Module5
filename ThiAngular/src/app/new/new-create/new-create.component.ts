import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {NewService} from "../../service/new.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-create',
  templateUrl: './new-create.component.html',
  styleUrls: ['./new-create.component.css']
})
export class NewCreateComponent implements OnInit {

  categories: Category[];

  newForm:FormGroup;

  constructor(private newService: NewService, private router: Router, private _categoryService: CategoryService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._categoryService.getAllCategory().subscribe(value => {
      this.categories = value;
    });

    this.newForm = this.formBuilder.group({
      type: ['', ],
      local: ['', ],
      category: ['', ],
      status: ['', ],
      address: ['', [Validators.required]],
      area: ['', [Validators.required, Validators.min(20)]],
      where: ['', ],
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      cost: ['',[Validators.required, Validators.min(100000000)]],

    });
  }


  onSubmit() {

    const product = this.newForm.value;
    console.log(product);
    this.newService.saveNew(product).subscribe(() => {
      this.router.navigate(['/new/list']);
    }, e => {
      console.log(e);
    });

    if (this.newForm.valid) {
      console.log(this.newForm.value);
    }
  }


}
