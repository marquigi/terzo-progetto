import { Component, inject, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moda-item',
  imports: [CommonModule],
  templateUrl: './moda-item.html',
  styleUrl: './moda-item.css'
})
export class ModaItem {
  @Input()
  moda?: Post;
}
