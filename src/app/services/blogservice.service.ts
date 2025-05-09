import { Injectable } from '@angular/core';
import {Blog} from 'src/app/interface/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  private blogs: Blog[] = [];

  getBlogs(): Blog[] {
    return this.blogs;
  }

  addBlog(blog: Blog) {
    this.blogs.unshift(blog); // Add to beginning
  }
  constructor() { }
}
