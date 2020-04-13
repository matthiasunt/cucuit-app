import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CucuDetailComponent } from './cucu-detail.component';

describe('CucuDetailComponent', () => {
  let component: CucuDetailComponent;
  let fixture: ComponentFixture<CucuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CucuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CucuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
