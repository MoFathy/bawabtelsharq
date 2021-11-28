import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blogs: any = [];
  blog_datails: any;
  constructor(private titleService: Title,private route: ActivatedRoute, private service :GeneralService,private metaTagService: Meta ) { }

  ngOnInit(): void {
    this.metaTagService.removeTag("property='og:title'");
    this.metaTagService.removeTag("property='og:url'");
    this.metaTagService.removeTag("property='og:image'");
    this.metaTagService.removeTag("property='og:description'");
    this.metaTagService.removeTag("name='keywords'");
    this.metaTagService.removeTag("name='author'");
    this.metaTagService.removeTag("name='date'");

    this.route.queryParams.subscribe((params:any) => {
      let id = params.id;
      if( id && id !== '' && id !== undefined){
        this.service.blog().subscribe((res: any) => {
          this.blogs = res.data;
          this.blog_datails =  res.data.filter((el :any) => el.id == id)[0];
          this.titleService.setTitle(this.blog_datails.blog_title);
          this.metaTagService.addTags([
            { name: 'keywords', content: this.blog_datails.blog_title },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: this.blog_datails.blog_title },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: this.blog_datails.blog_date, scheme: 'YYYY-MM-DD' },
            { property: 'og:title', content: this.blog_datails.blog_title },
            { property: 'og:url', content: `https://bawabtelsharq.herokuapp.com/?id=${this.blog_datails.id}` },
            { property: 'og:image', content: this.blog_datails.blog_image },
            { property: 'og:description', content: this.blog_datails.blog_title },
            { charset: 'UTF-8' }
          ]);
        });
      }else{
        this.service.blog().subscribe((res: any) => {
          this.blogs = res.data;
          this.titleService.setTitle(res.data[0].blog_title);
          this.metaTagService.addTags([
            { name: 'keywords', content: res.data[0].blog_title },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: res.data[0].blog_title },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: res.data[0].blog_date, scheme: 'YYYY-MM-DD' },
            { property: 'og:title', content: res.data[0].blog_title },
            { property: 'og:url', content: `https://bawabtelsharq.herokuapp.com/` },
            { property: 'og:image', content: res.data[0].blog_image },
            { property: 'og:description', content: res.data[0].blog_title },
            { charset: 'UTF-8' }
          ]);
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
