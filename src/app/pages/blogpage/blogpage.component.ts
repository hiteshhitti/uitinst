import { Component } from '@angular/core'; 
import { BlogserviceService } from 'src/app/services/blogservice.service';
import {Blog} from 'src/app/interface/blog'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogpage',
  imports: [CommonModule],
  templateUrl: './blogpage.component.html',
  styleUrl: './blogpage.component.css'
})
export class BlogpageComponent {
  blogs: Blog[];

  constructor(private blogServiceservice: BlogserviceService) {
    this.blogs = this.blogServiceservice.getBlogs();
  }

}
