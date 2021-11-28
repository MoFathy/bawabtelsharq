import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export const BASE_URL = "https://bawabtalsharq.com/api_1/apiv4.php?api_action=";
export const handleError = (error: HttpErrorResponse): any =>{
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.message}`);
    return throwError(
      'Something bad happened; please try again later.');
  }