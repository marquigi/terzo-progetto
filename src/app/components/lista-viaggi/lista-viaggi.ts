import { Component, inject, OnInit } from '@angular/core';
import { Post, PostCategory } from '../../models/blog';
import { DatiService } from '../../services/dati-service';
import { ViaggiItem } from "../viaggi-item/viaggi-item";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-viaggi',
  imports: [ViaggiItem, CommonModule],
  templateUrl: './lista-viaggi.html',
  styleUrl: './lista-viaggi.css'
})
export class ListaViaggi implements OnInit {

  postDati: Post[] = [];

  datiServer: DatiService = inject(DatiService);

  ngOnInit(): void {
    this.postDati = this.datiServer.getPostCategory('travel');
  }

}
