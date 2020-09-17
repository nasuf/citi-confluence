import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechQaComponent } from './tech-qa.component';

describe('CarsharingComponent', () => {
  let component: TechQaComponent;
  let fixture: ComponentFixture<TechQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
