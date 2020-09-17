import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatsharingComponent } from './eatsharing.component';

describe('EatsharingComponent', () => {
  let component: EatsharingComponent;
  let fixture: ComponentFixture<EatsharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatsharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatsharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
