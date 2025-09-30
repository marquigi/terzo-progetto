import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucinaItem } from './cucina-item';

describe('CucinaItem', () => {
  let component: CucinaItem;
  let fixture: ComponentFixture<CucinaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CucinaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CucinaItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
