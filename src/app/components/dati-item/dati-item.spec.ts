import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiItem } from './dati-item';

describe('DatiItem', () => {
  let component: DatiItem;
  let fixture: ComponentFixture<DatiItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatiItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
