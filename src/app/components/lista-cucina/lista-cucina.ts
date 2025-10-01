import { Component, inject } from '@angular/core';
import { DatiService } from '../../services/dati-service';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';
import { CucinaItem } from "../cucina-item/cucina-item";

@Component({
  selector: 'app-lista-cucina',
  imports: [CommonModule, CucinaItem],
  templateUrl: './lista-cucina.html',
  styleUrl: './lista-cucina.css'
})
export class ListaCucina {

  postDati: Post[] = [];

  datiServer: DatiService = inject(DatiService);

  ngOnInit(): void {
    this.postDati = this.datiServer.getPostCategory('food');
  }
}
