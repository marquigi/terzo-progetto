import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';

@Component({
  selector: 'app-viaggi-item',
  imports: [],
  templateUrl: './viaggi-item.html',
  styleUrl: './viaggi-item.css'
})
export class ViaggiItem {
  @Input()
  viaggi?: Post;
}
