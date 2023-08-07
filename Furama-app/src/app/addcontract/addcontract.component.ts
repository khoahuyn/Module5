import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addcontract',
  templateUrl: './addcontract.component.html',
  styleUrls: ['./addcontract.component.css']
})
export class AddcontractComponent implements OnInit {
  showTotalLessThan2000Error = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      serviceName: ['', [Validators.required, Validators.minLength(6)]],
      dayCreate: ['', [Validators.required]],
      endDay: ['', [Validators.required]],
      deposit: ['', [Validators.required, Validators.min(1000)]],
      total: ['', [Validators.required, Validators.min(2000)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }


}
