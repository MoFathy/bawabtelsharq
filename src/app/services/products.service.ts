import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';
import { Product } from '../models/Product';
import { BASE_URL, handleError } from '../shared/shared';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  options2 = {};
  lang: string = 'en';
  constructor(private http: HttpClient,
    //  public translateService: TranslateService
     ) {
    // this.lang = translateService.currentLang;
    this.lang = 'en';

  }


  categories() {
    return this.http.get(BASE_URL + 'get_categories&lang=en').pipe(
      catchError(handleError)
    );
  }
  category(id: number) {
    let data = 'category_id=' + id + '&page=0&user_id=1257&ApiKey=1637331208';
    return this.http.post(BASE_URL + `get_products_by_category&lang=${this.lang}&currency_id=4`, data, this.options).pipe(
      catchError(handleError)
    );
  }

  productDetails(id: number): Observable<any> {
    let data = 'product_id=' + id;
    return this.http.post<Product>(BASE_URL + `product_details&lang=${this.lang}&currency_id=4`, data, this.options).pipe(
      pluck('data'),
      catchError(handleError)
    );
  }
  company_profile(id: number) {
    let data = 'supplier_id=' + id;
    return this.http.post(BASE_URL + `supplier_profile&lang=${this.lang}&currency_id=4`, data, this.options).pipe(
      catchError(handleError)
    );
  }
  product_by_country(id: any) {
    let data = 'country_id=' + id;
    return this.http.post('https://bawabtalsharq.com/api_1/apiv4.php?api_action=get_products_by_country&lang=en&country_code=EG', data, this.options).pipe(
      catchError(handleError)
    );
  }
}
