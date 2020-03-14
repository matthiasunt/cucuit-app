import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCucuFormComponent } from './add-cucu-form.component';

describe('AddCucuFormComponent', () => {
  let component: AddCucuFormComponent;
  let fixture: ComponentFixture<AddCucuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCucuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCucuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
