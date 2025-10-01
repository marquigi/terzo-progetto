import { Component, inject } from '@angular/core';
import { Post } from '../../models/blog';
import { DatiService } from '../../services/dati-service';
import { CommonModule } from '@angular/common';
import { ModaItem } from "../moda-item/moda-item";

@Component({
  selector: 'app-lista-moda',
  imports: [CommonModule, ModaItem],
  templateUrl: './lista-moda.html',
  styleUrl: './lista-moda.css'
})
export class ListaModa {

  postDati: Post[] = [];

  datiServer: DatiService = inject(DatiService);

  ngOnInit(): void {
    this.postDati = this.datiServer.getPostCategory('fashion');
  }
}
