import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {
  blog: any[] = [];
  blog_details: any;


  constructor(private route: ActivatedRoute, private router: Router, private service: GeneralService, private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.blog().subscribe((res: any) => {
      let blog = res.data;
      this.blog_details = blog.find((blog: any) => blog.id == id);
      this.titleService.setTitle(this.blog_details.blog_title);
      this.metaTagService.addTags([
        { name: 'keywords', content: this.blog_details.blog_title },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: this.blog_details.blog_title },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'date', content: this.blog_details.blog_date, scheme: 'YYYY-MM-DD' },
        { property: 'og:title', content: this.blog_details.blog_title },
        { property: 'og:url', content: `https://bawabtelsharq.herokuapp.com/?id=${this.blog_details.id}` },
        { property: 'og:image', content: this.blog_details.blog_image },
        { property: 'og:description', content: this.blog_details.blog_title },
        { charset: 'UTF-8' }
      ]);

    });


    // this.getProducts(id);

  }
  // getProducts(id: number){
  //     this.service.blog_details(id).subscribe((res: any) => {
  //        this.blog = res.data;
  //     });
  // }
  stripHtml(html: any) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
}
