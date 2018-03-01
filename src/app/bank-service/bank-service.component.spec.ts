import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankServiceComponent } from './bank-service.component';

describe('BankServiceComponent', () => {
  let component: BankServiceComponent;
  let fixture: ComponentFixture<BankServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
