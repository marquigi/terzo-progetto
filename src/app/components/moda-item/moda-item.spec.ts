import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaItem } from './moda-item';

describe('ModaItem', () => {
  let component: ModaItem;
  let fixture: ComponentFixture<ModaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
