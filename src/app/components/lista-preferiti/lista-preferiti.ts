import { Component, inject, OnInit } from '@angular/core';
import { PreferitiService } from '../../services/preferiti-service';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/blog';

@Component({
  selector: 'app-lista-preferiti',
  imports: [CommonModule],
  templateUrl: './lista-preferiti.html',
  styleUrl: './lista-preferiti.css'
})
export class ListaPreferiti implements OnInit {

  preferitiService: PreferitiService = inject(PreferitiService);

  preferiti: Post[] = [];

  ngOnInit(): void {
    this.preferiti = this.preferitiService.getPreferiti();
  }

  onSvuota() {
    this.preferitiService.svuotaPreferiti();
    this.preferiti = this.preferitiService.getPreferiti();
  }

  onRimuovi(id: number) {
    this.preferitiService.rimuoviPreferito(id);
    this.preferiti = this.preferitiService.getPreferiti(); // aggiorna la lista
  }
}
