import { Injectable } from '@angular/core';
import { Post } from '../models/blog';
import blog from '../data/blog.json'


@Injectable({
  providedIn: 'root'
})
export class DatiService {
  constructor() { }

  getDati(): Post[] {
    return blog.posts;
  }
}
