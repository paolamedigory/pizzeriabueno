
import { Component, OnInit,Inject } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DishProvider} from '../../providers/dish/dish';
import { Dish} from '../../share/dish';
import { LeaderProvider} from '../../providers/leader/leader';
import { Leader} from '../../share/leader';
import { PromotionProvider} from '../../providers/promotion/promotion';
import { Promotion} from '../../share/promotion';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  dish: Dish;
  leader: Leader;
  promotion: Promotion;


  constructor(
    public navCtrl: NavController,
    private leaderService: LeaderProvider,
    private dishService: DishProvider,
    private promotionService: PromotionProvider,
    

    @Inject('DbURL') private dbURL
  ){}

  ngOnInit(){
    this.getFeaturedDish();
    this.getFeaturedPromotion();
    this.getFeaturedLeader();

  }  
  getFeaturedDish(){
    this.dishService
    .getFeaturedDish()
    .subscribe(
      response => {
        this.dish = response[0];
        console.log(this.dish);
      },
      error => {
        console.log(error);
      }
    );
  }

  getFeaturedPromotion(){
    this.promotionService
    .getFeaturedPromotion()
    .subscribe(
      response => {
        this.promotion = response[0];
        console.log(this.promotion);
      },
      error => {
        console.log(error);
      }
    );
  }

  getFeaturedLeader(){
    this.leaderService
    .getFeaturedLeader()
    .subscribe(
      response => {
        this.leader = response[0];
        console.log(this.leader);
      },
      error => {
        console.log(error);
      }
    );
  }

}








  /* ES UNA INSTANCIA DEL PROVIDER QUE CREAMOS EN EL CONSTRUCTOR ( THIS) POR QUE ESTAMOS EN LA MISMA 
  CLASE // GETFEA
TUREDDISH = metodo(funcion) y se manda a llamar  y se suscribe a una promesa 
  ( a que le regrese un valor)  cacha 0 que es el valor del arreglo y la respuesta o el error lo 
  marca en la consola */



