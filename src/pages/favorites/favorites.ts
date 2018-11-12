import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController } from 'ionic-angular';

import { Dish } from '../../share/dish';
import { FavoriteProvider } from '../../providers/favorite/favorite';


/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{

	favorites: Dish[];

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private favoriteService: FavoriteProvider,
  	private alertCtrl: AlertController,
  	@Inject('DbURL') private DbURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ngOnInit(){
  	this.getFavorites();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Éxito',
      subTitle: 'Se ha eliminado de favoritos',
      buttons: ['OK']
    });
    alert.present();
  }

  getFavorites(){
  	this.favoriteService
  	.getFavorites()
  	.subscribe(
  		response => {
  			this.favorites = response;
  			console.log(response);
  		},
  		error => {
  			console.log(error);
  		}
  	)
  }

  deleteFavorite(item: ItemSliding, id: number){
  	this.favoriteService
  	.deleteFavorite(id)
  	.subscribe(
  		response => {
  			this.favorites = response;
  			console.log('se eliminó ' +  id);
  			console.log(this.favorites);
  			this.showAlert();
  		},
  		error => {
  			console.log(error);
  		}
  	);
  	item.close();
  }
}
