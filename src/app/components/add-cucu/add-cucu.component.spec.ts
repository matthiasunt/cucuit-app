import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCucuComponent } from './add-cucu.component';

describe('AddCucuComponent', () => {
  let component: AddCucuComponent;
  let fixture: ComponentFixture<AddCucuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCucuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
