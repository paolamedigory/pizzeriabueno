import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../share/dish';
import { Comment } from '../../share/comment';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {


  dish : Dish;
  numComments : number;
  averageRate: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

}
