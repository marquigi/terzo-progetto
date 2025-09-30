import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCucina } from './lista-cucina';

describe('ListaCucina', () => {
  let component: ListaCucina;
  let fixture: ComponentFixture<ListaCucina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCucina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCucina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
