import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tiebreaker',
      subHeader: 'How many pieces does each player begin with in a game of chess?',
      message: 'Answer: 16 ',
      buttons: ['OK']
    });
    await alert.present();

}}

