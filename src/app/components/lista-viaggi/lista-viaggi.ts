import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../models/blog';
import { DatiService } from '../../services/dati-service';
import { ViaggiItem } from "../viaggi-item/viaggi-item";

@Component({
  selector: 'app-lista-viaggi',
  imports: [ViaggiItem],
  templateUrl: './lista-viaggi.html',
  styleUrl: './lista-viaggi.css'
})
export class ListaViaggi implements OnInit {


  postViaggi: Post[] = [];

  datiServer: DatiService = inject(DatiService);

  ngOnInit(): void {
    this.postViaggi = this.datiServer.getDati();
  }

}
