import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  blog() {
    return this.http.get('https://bawabtalsharq.com/api_1/apiv4.php?api_action=blogList');
  }

}
