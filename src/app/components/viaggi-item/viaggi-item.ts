import { Component, inject, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';
import { PreferitiService } from '../../services/preferiti-service';

@Component({
  selector: 'app-viaggi-item',
  imports: [CommonModule],
  templateUrl: './viaggi-item.html',
  styleUrl: './viaggi-item.css'
})
export class ViaggiItem {
  @Input()
  viaggi?: Post;

  preferitiService: PreferitiService = inject(PreferitiService);

  aggiunto = false;

  aggiungiPreferiti() {
    this.preferitiService.aggiungiPreferiti(this.viaggi!);
    this.aggiunto = true;
  }

}
