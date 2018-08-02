import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  username: string;

  constructor(
              private navCtrl: NavController,
              private alertCtrl: AlertController
            ) {
  }

  getUserInformation() {
    if(this.username){
      this.navCtrl.push('ProfilePage', { username: this.username });
    } else {
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Username must be filled to search for a user!',
        buttons: ['Ok']
      }).present();
    }
  }

}
