import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcCardContentComponent } from './uc-card-content.component';

describe('UcCardContentComponent', () => {
  let component: UcCardContentComponent;
  let fixture: ComponentFixture<UcCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UcCardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
