import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaViaggi } from './lista-viaggi';

describe('ListaViaggi', () => {
  let component: ListaViaggi;
  let fixture: ComponentFixture<ListaViaggi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaViaggi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaViaggi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
