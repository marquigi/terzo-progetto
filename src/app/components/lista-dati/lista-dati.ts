import { Component, inject, OnInit } from '@angular/core';
import { DatiItem } from "../dati-item/dati-item";
import { Post } from '../../models/blog';
import { DatiService } from '../../services/dati-service';

@Component({
  selector: 'app-lista-dati',
  imports: [DatiItem],
  templateUrl: './lista-dati.html',
  styleUrl: './lista-dati.css'
})
export class ListaDati implements OnInit {


  postDati: Post[] = [];

  datiServer: DatiService = inject(DatiService);

  ngOnInit(): void {
    this.postDati = this.datiServer.getDati();
  }
}
