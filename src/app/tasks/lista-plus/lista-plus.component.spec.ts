import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlusComponent } from './lista-plus.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';

describe('ListaPlusComponent', () => {
  let component: ListaPlusComponent;
  let fixture: ComponentFixture<ListaPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlusComponent, TaskComponent, NewTaskComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
