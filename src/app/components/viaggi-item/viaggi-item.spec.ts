import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiItem } from './viaggi-item';

describe('ViaggiItem', () => {
  let component: ViaggiItem;
  let fixture: ComponentFixture<ViaggiItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViaggiItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViaggiItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
