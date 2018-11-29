import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMdComponent } from './form-md.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormMdComponent', () => {
  let component: FormMdComponent;
  let fixture: ComponentFixture<FormMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMdComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
