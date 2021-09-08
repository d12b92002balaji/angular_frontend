import { BlogService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';
import { BloglistComponent } from '../bloglist/bloglist.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-blogfrom',
  templateUrl: './blogfrom.component.html',
  styleUrls: ['./blogfrom.component.css']
})
export class BlogfromComponent implements OnInit {

  categories = ['technoical','personal','nature'];
  constructor(private service:BlogService) { }

  ngOnInit() {
  }
  insert(blog:any){
    alert("added");
    console.log("inserting...")
    this.service.addBlog(blog);
  }

}
