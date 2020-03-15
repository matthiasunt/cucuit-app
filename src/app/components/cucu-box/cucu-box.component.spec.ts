import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuBoxComponent } from './cucu-box.component';

describe('CucuBoxComponent', () => {
  let component: CucuBoxComponent;
  let fixture: ComponentFixture<CucuBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CucuBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CucuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
