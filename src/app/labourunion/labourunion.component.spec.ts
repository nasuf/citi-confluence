import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourunionComponent } from './labourunion.component';

describe('LabourunionComponent', () => {
  let component: LabourunionComponent;
  let fixture: ComponentFixture<LabourunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
