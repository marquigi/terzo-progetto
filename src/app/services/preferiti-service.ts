import { Injectable } from '@angular/core';
import { Post } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {
  constructor() { }

  datiNeiPreferiti: Post[] = [];

  aggiungiPreferiti(dati: Post) {
    this.datiNeiPreferiti.push(dati);
  }

  svuotaPreferiti() {
    this.datiNeiPreferiti = [];
  }

  getPreferiti(): Post[] {
    return this.datiNeiPreferiti;
  }

  // Aggiugere un metodo per rimuovere un solo dato preferiti
  rimuoviPreferito(id: number) {
    this.datiNeiPreferiti = this.datiNeiPreferiti.filter(p => p.id !== id);
  }
}
