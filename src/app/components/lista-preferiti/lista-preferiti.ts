import { Component, inject } from '@angular/core';
import { PreferitiService } from '../../services/preferiti-service';

@Component({
  selector: 'app-lista-preferiti',
  imports: [],
  templateUrl: './lista-preferiti.html',
  styleUrl: './lista-preferiti.css'
})
export class ListaPreferiti {
  preferitiService: PreferitiService = inject(PreferitiService);
}
