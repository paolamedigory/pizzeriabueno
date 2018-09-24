
import { Component, OnInit,Inject } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DishProvider} from '../../providers/dish/dish';

import {Dish} from '../../share/dish';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  dish: Dish;

  constructor(
    public navCtrl: NavController,
    private dishService: DishProvider
//    @Inject('DbURL') private dbURL
  ){}

  ngOnInit(){

  }  
  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()
    .subscribe(
      response => {
        this.dish = response[0];
        console.log(this.dish);
      }
    );
  }
}
  /* ES UNA INSTANCIA DEL PROVIDER QUE CREAMOS EN EL CONSTRUCTOR ( THIS) POR QUE ESTAMOS EN LA MISMA 
  CLASE // GETFEA
TUREDDISH = metodo(funcion) y se manda a llamar  y se suscribe a una promesa 
  ( a que le regrese un valor)  cacha 0 que es el valor del arreglo y la respuesta o el error lo 
  marca en la consola */



