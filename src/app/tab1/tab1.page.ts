import { Component } from '@angular/core';
import {NavController, ToastController} from "@ionic/angular";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Grocery';
  item = [
    {
      name: 'Milk',
      quantity: 1
    },
    {
      name: 'Bread',
      quantity: 2
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  removeItem(item, index) {
    console.log('Removing Item - ', item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item- ' + index + ' ...',
      duration: 3000,
    });
    toast.catch();

    this.item.splice(index, 1);
  }

  editItem(item, index) {
    console.log('Editing Item', item, index);
    const toast= this.toastCtrl.create({
      message: 'Editing item' + index + '...',
      duration:3000,
    });
    toast.catch();

    this.showEditItemPrompt(item, index);
  };

  showEditItemPrompt(item, index) {
    this.alertCtrl.create({
      header: 'Edit item',
      // subHeader: 'Enter information requested',
      message: 'Please edit item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (item) => {
            console.log('Canceled', item);
          }
        },
        {
          text: 'Save',
          handler: (item) => {
            console.log('Saved Information', item);
            this.item[index] = item;
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }


  addItem() {
    console.log('Adding item');
    this.showAddItemPrompt();
  }
  showAddItemPrompt() {
    this.alertCtrl.create({
      header: 'Add Item',
      // subHeader: 'Enter information requested',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (item: any) => {
            console.log('Canceled', item);
          }
        },
        {
          text: 'Save',
          handler: (item: any) => {
            console.log('Saved Information', item);
            this.item.push(item);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
}

