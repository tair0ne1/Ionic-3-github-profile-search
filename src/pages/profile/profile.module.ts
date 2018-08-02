import { ComponentsModule } from './../../components/components.module';
import { GithubProvider } from './../../providers/github/github.provider';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule
  ],
  providers: [
    GithubProvider,
  ],
})
export class ProfilePageModule {}
