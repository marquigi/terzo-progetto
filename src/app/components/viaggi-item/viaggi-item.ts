import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viaggi-item',
  imports: [CommonModule],
  templateUrl: './viaggi-item.html',
  styleUrl: './viaggi-item.css'
})
export class ViaggiItem {
  @Input()
  viaggi?: Post;
}
