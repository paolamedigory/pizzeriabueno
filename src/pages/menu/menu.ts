import { Component, Inject, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DishProvider } from '../../providers/dish/dish';
import { Dish} from '../../share/dish';
import { DishdetailPage } from '../dishdetail/dishdetail';

/**
 * Generated class for the MenuPage page. 
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit {



  dishes : Dish[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private dishService: DishProvider, 
     @Inject('DbURL') private dbURL
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  
  }


  dishDetails(event,dish){
   this.navCtrl.push(DishdetailPage,{dish: dish
  });
  }

  ngOnInit(){
this.getDishes();

  }

 

  getDishes(){
  this.dishService
  .getDishes()
  .subscribe(
    response =>
 {
   console.log(response);
   this.dishes= response;
 },
   error => {
     console.log(error);
   }  );
  }
}




