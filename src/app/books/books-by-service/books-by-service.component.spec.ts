import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByServiceComponent } from './books-by-service.component';

describe('BooksByServiceComponent', () => {
  let component: BooksByServiceComponent;
  let fixture: ComponentFixture<BooksByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
