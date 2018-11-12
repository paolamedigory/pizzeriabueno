import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dish } from '../../share/dish';
import { Comment } from '../../share/comment';
import { inject } from '../../../node_modules/@angular/core/src/render3';
import { FavoriteProvider } from '../../providers/favorite/favorite';


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
  averageRating: number;
  favorite: boolean;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    @Inject('DbURL') private DbURL,
    private favoriteService: FavoriteProvider,
  ) {

    this.dish = navParams.get('dish');
    this.numComments = this.dish.comments.length;
    this.favorite = this.favoriteService.isFavorite(this.dish.id);

    let total = 0;
    this.dish.comments.forEach(
      comm => {
        total += comm.rating 
      }
    );
    this.averageRating = (total/this.numComments)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites(){
    this.favoriteService.addToFavorites(this.dish.id);
    this.favorite = this.favoriteService.isFavorite(this.dish.id);
  }

  ngOngInit(){
    
  }

}
