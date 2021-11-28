import { Component, OnInit} from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  users: any = [];
  homes: any = [];
  maylikes: any = [];
  categorysss: any = [];

  responsiveOptions: any = [];

  constructor(private auth: UserService,private service: GeneralService) { 
    this.responsiveOptions = [
            {
                breakpoint: '950px',
                numVisible: 5,
                numScroll: 2,
            },
            {
                breakpoint: '800px',
                numVisible: 4,
                numScroll: 2,

            },
            {
                breakpoint: '700px',
                numVisible: 3,
                numScroll: 1,

            },
            {
                breakpoint: '450px',
                numVisible: 2,
                numScroll: 2,

            }
        ];
   

   
  }

  ngOnInit(): void {
    this.service.category().subscribe(res => {
      this.users = res;
    });

    this.service.home().subscribe(res => {
      this.homes = res;
    });
    this.auth.maylike().subscribe(res => {
      this.maylikes = res;
    });
  }





}
