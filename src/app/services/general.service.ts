import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL, handleError } from '../shared/shared';
// import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  options2 = {};
  lang?: string;
  constructor(private http: HttpClient,
    //  public translateService: TranslateService
     ) {
    // this.lang = translateService.currentLang;
    this.lang = 'en';

  }


  bawabtalsharq() {
    return this.http.get(BASE_URL).pipe(
      catchError(handleError)
    );
  }
  category() {
    return this.http.get(BASE_URL + `get_categories&lang=${this.lang}`).pipe(
      catchError(handleError)
    );
  }
  sub_category(id: number) {
    let data = 'category_id=' + id + '&page=0&user_id=1257&ApiKey=1637331208';
    return this.http.post(BASE_URL + `get_products_by_category&lang=${this.lang}&currency_id=4`, data, this.options).pipe(
      catchError(handleError)
    );
  }
  home() {
    return this.http.get(BASE_URL + 'get_home&lang=en&country_code=EG').pipe(
      catchError(handleError)
    );
  }
  country() {
    return this.http.get(BASE_URL + 'get_countries').pipe(
      catchError(handleError)
    );
  }
  blog() {
    return this.http.get('https://bawabtalsharq.com/api_1/apiv4.php?api_action=blogList').pipe(
      catchError(handleError)
    );
  }
  about() {
    return this.http.get(BASE_URL + `get_about_us&lang=${this.lang}&currency_id=4&country_code=EG`).pipe(
      catchError(handleError)
    );
  }
  faq() {
    return this.http.get(BASE_URL + 'get_faq').pipe(
      catchError(handleError)
    );
  }
  pricing() {
    return this.http.get(BASE_URL + 'get_palns').pipe(
      catchError(handleError)
    );
  }
  suppliers(target: string, page: number = 0) {
    let url = `${target}&lang=${this.lang}&currency_id=4&country_code=EG&page=${page}`;
    return this.http.get(BASE_URL + url).pipe(
      catchError(handleError)
    );
  }
  guide_qutation() {
    return this.http.get(BASE_URL + 'rfq_fill').pipe(
      catchError(handleError)
    );
  }
}

