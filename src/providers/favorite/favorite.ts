import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dish } from '../../shared/dish';
import { DishProvider } from '../dish/dish';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

	favorites: Array<any>;

  constructor(
  	public http: HttpClient,
  	private dishService: DishProvider
  ) {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addToFavorites(id: number): boolean {
  	/*this.favorites.push(id);
  	return true;*/
  	if (!this.isFavorite(id)) {
  		this.favorites.push(id);
  	}
  	console.log(this.favorites);
  	return true;
  }

  getFavorites(): Observable<Dish[]>{
  	console.log(this.favorites);
  	return this.dishService.getDishes().map(
  		res => res.filter(dishes => this.favorites.some(dish => dish == dishes.id))
  	)

  	/*
		El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
		en este caso dishes es nuestro array(la respuesta de getDishes), al aplicar filter dish es cada elemento del arreglo 
		y checa si cumple la condición de que el id de nuestro favorites exista.

		https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
  	*/
  }


  isFavorite(id: number): boolean{
  	return this.favorites.some(dish => dish == id);
  }

  deleteFavorite(id: number): Observable<Dish[]>{
  	let index = this.favorites.indexOf(id);
  	/*
  		El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, 
  		ó retorna -1 si el elemento no esta presente.
  		https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
  	*/

  	if (index >= 0) {
  		this.favorites.splice(index, 1);
  		/*
			El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
			https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
  		*/
  		return this.getFavorites();
  	} else {
  		console.log('No es favorito ', id);
  	}
  }
}
