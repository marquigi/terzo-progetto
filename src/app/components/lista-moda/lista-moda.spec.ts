import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModa } from './lista-moda';

describe('ListaModa', () => {
  let component: ListaModa;
  let fixture: ComponentFixture<ListaModa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaModa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaModa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
