import { Injectable } from '@angular/core';
import { Post, PostCategory } from '../models/blog';
import blog from '../data/blog.json'


@Injectable({
  providedIn: 'root'
})
export class DatiService {
  constructor() { }

  getDati(): Post[] {
    return blog.posts;
  }

  getCategory(): PostCategory[] {
    return blog.postCategories;
  }

  getPostCategory(categoryId: string): Post[] {
    if (categoryId === 'tutti') {
      return blog.posts
    }
    return blog.posts.filter(post => post.category === categoryId);
  }

  getCategoryTitle(categoryId: string): string {
    const category = blog.postCategories.find(cat => cat.id === categoryId);
    return category ? category.title : categoryId;
  }


}
