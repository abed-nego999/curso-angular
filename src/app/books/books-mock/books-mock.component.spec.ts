import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMockComponent } from './books-mock.component';

describe('BooksMockComponent', () => {
  let component: BooksMockComponent;
  let fixture: ComponentFixture<BooksMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
