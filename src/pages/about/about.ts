import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeaderProvider} from '../../providers/leader/leader';
import { Leader} from '../../share/leader';


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

