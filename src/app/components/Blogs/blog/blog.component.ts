import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  constructor( private service :GeneralService ,private titleService: Title,private metaTagService: Meta) { }

  ngOnInit(): void {
    this.service.blog().subscribe((res: any) => {
      this.blogs = res;
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

  stripHtml(html: any)
  {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

}
