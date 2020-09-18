import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleamarketComponent } from './fleamarket.component';

describe('FleamarketComponent', () => {
  let component: FleamarketComponent;
  let fixture: ComponentFixture<FleamarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleamarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleamarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
