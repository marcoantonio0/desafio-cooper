import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentsComponent } from './investiments.component';

describe('InvestimentsComponent', () => {
  let component: InvestimentsComponent;
  let fixture: ComponentFixture<InvestimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
