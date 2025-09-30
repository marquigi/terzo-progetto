import { Component, OnInit, output } from '@angular/core';
import { DatiItem } from "../dati-item/dati-item";
import { Post } from '../../models/blog';

@Component({
  selector: 'app-lista-dati',
  imports: [DatiItem],
  templateUrl: './lista-dati.html',
  styleUrl: './lista-dati.css'
})
export class ListaDati implements OnInit {

  postDati: Post[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
