import { Injectable } from '@angular/core';
import { Post, PostCategory } from '../models/blog';
import blog from '../data/blog.json'


@Injectable({
  providedIn: 'root'
})
export class DatiService {
  constructor() { }

  // Richiamo l'array di post
  getDati(): Post[] {
    return blog.posts;
  }

  // Richiamo l'array di post category
  getCategory(): PostCategory[] {
    return blog.postCategories;
  }

  // Metodo per ottenere i post filtrati in base alla categoria
  getPostCategory(categoryId: string): Post[] {
    if (categoryId === 'tutti') {
      return blog.posts
    }
    return blog.posts.filter(post => post.category === categoryId);
  }

  // Metodo per ottenere il titolo di una categoria
  getCategoryTitle(categoryId: string): string {
    const category = blog.postCategories.find(cat => cat.id === categoryId);
    return category ? category.title : categoryId;
  }


}
