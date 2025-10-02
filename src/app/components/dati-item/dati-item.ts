import { Component, inject, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';
import { PreferitiService } from '../../services/preferiti-service';

@Component({
  selector: 'app-dati-item',
  imports: [CommonModule],
  templateUrl: './dati-item.html',
  styleUrl: './dati-item.css'
})
export class DatiItem {
  @Input()
  dati?: Post;

  preferitiService: PreferitiService = inject(PreferitiService);

  aggiunto = false;

  aggiungiPreferiti() {
    this.preferitiService.aggiungiPreferiti(this.dati!);
  }

}
