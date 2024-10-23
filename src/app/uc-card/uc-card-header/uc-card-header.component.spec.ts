import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcCardHeaderComponent } from './uc-card-header.component';

describe('UcCardHeaderComponent', () => {
  let component: UcCardHeaderComponent;
  let fixture: ComponentFixture<UcCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
