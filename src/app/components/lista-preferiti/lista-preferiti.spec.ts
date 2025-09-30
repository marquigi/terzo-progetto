import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreferiti } from './lista-preferiti';

describe('ListaPreferiti', () => {
  let component: ListaPreferiti;
  let fixture: ComponentFixture<ListaPreferiti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPreferiti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPreferiti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
