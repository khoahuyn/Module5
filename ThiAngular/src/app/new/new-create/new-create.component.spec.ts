import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreateComponent } from './new-create.component';

describe('NewCreateComponent', () => {
  let component: NewCreateComponent;
  let fixture: ComponentFixture<NewCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
