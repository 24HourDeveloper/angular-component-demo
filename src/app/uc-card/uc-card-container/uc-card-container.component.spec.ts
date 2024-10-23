import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcCardContainerComponent } from './uc-card-container.component';

describe('UcCardContainerComponent', () => {
  let component: UcCardContainerComponent;
  let fixture: ComponentFixture<UcCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcCardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
