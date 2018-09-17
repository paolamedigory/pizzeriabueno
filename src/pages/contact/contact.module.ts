import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ContactPage } from './contact';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
})
export class ContactPageModule {}
