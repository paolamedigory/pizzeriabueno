import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Promotion} from '../../share/promotion';
import {dbURL} from '../../share/dburl';

/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PromotionProvider Provider');
  }

  
  getPromotions(): Observable<Promotion[]>
{
  return this.http.get<Promotion[]>(dbURL + 'promotions').map(
    res => res
  );
}

 getFeaturedPromotion(): Observable<Promotion>{
   return this.http.get<Promotion>(dbURL + 'promotion?featured=true').map(
     res => res
   );
 }

}
