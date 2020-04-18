import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  nom :string;
  prenom: string;
  telephone :string;
  email: string;
  pays:string;
  ville :string;
  fonction:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertController: AlertController ) {
  }



  refresh(){
  this.navCtrl.push(AccueilPage);
}

  Creation(){
    
let headers = new Headers();
headers.append('Content-Type', 'application/json');
let data=JSON.stringify({
  nom: this.nom,
  prenom:this.prenom,
  telephone:this.telephone,
  email:this.email,
  pays:this.pays,
  ville:this.ville,
  fonction:this.fonction
});
this.http.post('http://www.papyruxe.net/mesSiteInternet/apicontact/createContact',data)
.map(res => res.json())
.subscribe(res => {
  const alert =  this.alertController.create({
    title :'success',
    message: ` <h4>Contact Creer.</h4>`,
    buttons: [`close `]
  });
   alert.present();
}, (err) => {

});

  }


}
