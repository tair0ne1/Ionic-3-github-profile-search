import { Repository } from './../../models/repository.model';
import { Profile } from './../../models/profile.model';
import { GithubProvider } from './../../providers/github/github.provider';
import { Component } from '@angular/core';
import { IonicPage, NavParams, Loading, LoadingController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  username: string;
  profile: Profile;
  repositories: Repository[];
  loading: Loading;

  constructor(
              private navCtrl: NavController,
              private navParams: NavParams,
              private github: GithubProvider,
              private loadCtrl: LoadingController,
            ) {
              this.loading = this.loadCtrl.create({
                content: 'Retrieving data, please wait...'
              });
  }

  
  getUserInformation() {
    this.github.getUserInformation(this.username).subscribe((data: Profile) => this.profile = data);
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
    this.loading.dismiss();
  }
  
  navegateBack() {
    this.navCtrl.pop();
  }
  
  ionViewWillLoad() {
    this.loading.present();
    this.username = this.navParams.get('username');
    if( this.username ) {
      this.getUserInformation();
    }
  }


}