import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  currentLang?: String;
  constructor(private auth: UserService,
    // public translateService: TranslateService,
     private service: GeneralService) { 
    
  }

  ngOnInit(): void {
    this.isLogged = this.auth.isLogin();
  }

  // translateSite(langauge: string) {
  //   this.translateService.use(langauge);
  //   localStorage.setItem('language', langauge);
  // }
  
  logout(){
    console.log(4848484848)
    this.auth.logout().subscribe((res: any) => {
      console.log(res);
      if (res.code == 200) {
        localStorage.setItem('user', '');
        window.location.replace("/");

      } else {
        console.log(res.msg);
      }
    })
  };
}
