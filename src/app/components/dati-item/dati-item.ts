import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';

@Component({
  selector: 'app-dati-item',
  imports: [],
  templateUrl: './dati-item.html',
  styleUrl: './dati-item.css'
})
export class DatiItem {
  @Input()
  dati?: Post;
}
