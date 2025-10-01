import { Component, inject, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';
import { PreferitiService } from '../../services/preferiti-service';

@Component({
  selector: 'app-cucina-item',
  imports: [CommonModule],
  templateUrl: './cucina-item.html',
  styleUrl: './cucina-item.css'
})
export class CucinaItem {
  @Input()
  cucina?: Post;

  preferitiService: PreferitiService = inject(PreferitiService);

  aggiungiPreferiti() {
    this.preferitiService.aggiungiPreferiti(this.cucina!);
  }
}
