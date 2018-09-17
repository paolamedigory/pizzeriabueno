import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
})
export class AboutPageModule {}
