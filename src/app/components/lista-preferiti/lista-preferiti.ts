import { Component, inject } from '@angular/core';
import { PreferitiService } from '../../services/preferiti-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-preferiti',
  imports: [CommonModule],
  templateUrl: './lista-preferiti.html',
  styleUrl: './lista-preferiti.css'
})
export class ListaPreferiti {
  preferitiService: PreferitiService = inject(PreferitiService);
}
