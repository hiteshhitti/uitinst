import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import {Blog} from 'src/app/interface/blog'
import { BlogserviceService } from 'src/app/services/blogservice.service';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-blogadmin',
  imports: [CommonModule, FormsModule],
  templateUrl: './blogadmin.component.html',
  styleUrl: './blogadmin.component.css'
})
export class BlogadminComponent {
  title = '';
  content = '';
  imageUrl = '';

  constructor(private blogServiceservice: BlogserviceService) {}

  addBlog() {
    const blog: Blog = {
      title: this.title,
      content: this.content,
      imageUrl: this.imageUrl,
      date: new Date()
    };
    this.blogServiceservice.addBlog(blog);
    this.title = this.content = this.imageUrl = '';
    alert('Blog added!');
  }

}
