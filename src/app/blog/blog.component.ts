import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  blog_datails: any;
  constructor(private route: ActivatedRoute, private service :GeneralService,private metaTagService: Meta ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id = params.id;
      if( id && id !== '' && id !== undefined){
        this.service.blog().subscribe((res: any) => {
          this.blogs = res.data;
          this.blog_datails =  res.data.filter((el :any) => el.id == id)[0];
          console.log(this.blog_datails);
          
        });
      }else{
        this.service.blog().subscribe((res: any) => {
          this.blogs = res.data;
        });
      }
    });
  }


  selectBlog(id: any){
    console.log(id);
    
    window.location.replace(`/?id=${id}`);
    // window.location.href = window.location.pathname + `?id=${id}`;
  }
}
