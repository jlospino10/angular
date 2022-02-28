import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerBitComponent } from './taller-bit.component';

describe('TallerBitComponent', () => {
  let component: TallerBitComponent;
  let fixture: ComponentFixture<TallerBitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallerBitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
