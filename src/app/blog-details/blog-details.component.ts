import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog_datails: any;

  constructor(private titleService: Title,private route: ActivatedRoute, private service :GeneralService,private metaTagService: Meta) { }

  ngOnInit(): void {
    this.service.blog().subscribe((res: any) => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
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
  }

}
