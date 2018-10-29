import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {


  favorites: Array<any>;

  constructor(public http: HttpClient) {
    this.favorites = [];
    console.log('Hello FavoriteProvider Provider');

  }
  addToFavorites(id: number) : boolean {

    if (!this.isFavorite(id)){
      this.favorites.push(id);
    }
    console.log(this.favorites);
    return true;
  }
  

   isFavorite(id:number): boolean{
   return this.favorites.some(dish => dish==id)
   }

   
 getFavorites():Observable<Dish[]>{
  console.log(this.favorites);
  return this.dishService.getDishes().map(
     res=> res.filter(dishes => this.favorites.some(dish => dish == dishes.id))
  )
}



}
/*

El metodo filter() crea un nuevo array con todos los 
elementos que completa la condicion implementada por la 
función dada, en este caso dishes es nuetro array 
(la respuesta de getDishhes), al aplicar filter dish 
es cada elemento del arrglo

*/

