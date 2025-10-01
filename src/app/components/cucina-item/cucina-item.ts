import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cucina-item',
  imports: [CommonModule],
  templateUrl: './cucina-item.html',
  styleUrl: './cucina-item.css'
})
export class CucinaItem {
  @Input()
  cucina?: Post;
}
