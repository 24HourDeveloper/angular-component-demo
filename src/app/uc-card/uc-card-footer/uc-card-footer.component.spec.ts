import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcCardFooterComponent } from './uc-card-footer.component';

describe('UcCardFooterComponent', () => {
  let component: UcCardFooterComponent;
  let fixture: ComponentFixture<UcCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcCardFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
