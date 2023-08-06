import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      serviceName: ['', [Validators.required, Validators.minLength(6)]],
      area: ['', [Validators.required, Validators.min(1000)]],
      floor: ['', [Validators.required, Validators.min(1)]],
      capacity: ['', [Validators.required, Validators.min(2)]],
      cost: ['', [Validators.required, Validators.min(100)]],
      recentType: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

}
