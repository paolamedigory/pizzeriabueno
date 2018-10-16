import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeaderProvider} from '../../providers/leader/leader';
import { Leader} from '../../share/leader';

/**import la inter de leaders y su provider // agregar variable que
 reciba arregl de leaders, hace run metodo que con la funcion de get leaders que tengo en provides
 le asig la respuesta y en html iterar esa variable */

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

 leaders : Leader[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

getLeaders(){
  this.leaderService
  .getLeaders()
  .subscribe(
    response =>
 {
   console.log(response);
   this.leaders= response;
 },
   error => {
     console.log(error);
   }  );
  }
}

