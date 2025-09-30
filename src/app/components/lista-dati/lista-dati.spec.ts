import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDati } from './lista-dati';

describe('ListaDati', () => {
  let component: ListaDati;
  let fixture: ComponentFixture<ListaDati>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDati]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDati);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
