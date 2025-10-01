import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dati-item',
  imports: [CommonModule],
  templateUrl: './dati-item.html',
  styleUrl: './dati-item.css'
})
export class DatiItem {
  @Input()
  dati?: Post;
}
