import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentRoute: string = "";

  constructor(private router: Router,
    // public translateService: TranslateService
    ){
    // translateService.addLangs(['en', 'ar']);
    // translateService.setDefaultLang('en');
    // let oldLang= localStorage.getItem('language') ?? 'en';

    // this.translateService.use(oldLang);
    router.events.pipe(filter((event : any) => event instanceof NavigationEnd))
          .subscribe((event : any) => 
           {
              this.currentRoute = event.url;          
              console.log(this.currentRoute);
           });
    }
}
