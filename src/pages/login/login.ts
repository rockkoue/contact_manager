import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RegisterPage } from '../register/register';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  login : string;
  password: string;
  myUrl :string;
  data :Observable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertController: AlertController ,public http:Http) {

    

  }




  

  register(){
    this.navCtrl.push(RegisterPage);
  }

  connceted(){
    /*
    let user = this.login;
    let mdp  = this.password;
    if( user =='rock' && mdp =='PASSEionic')
    {
      this.navCtrl.push(MenuPage);
    }
    else{
      const alert =  this.alertController.create({
        title :'error',
        message: ` <h4>Merci de verifier vos champs.</h4>`,
        buttons: ['close']
      });
       alert.present();
    }

*/

    let data = JSON.stringify({
      login:this.login,
      password:this.password
    });
          this.http.post('http://www.papyruxe.net/mesSiteInternet/apicontact/users/login',data)
          .map(res => res.json())
          .subscribe(res => {
            this.navCtrl.push(MenuPage);
          }, (err) => {
            const alert =  this.alertController.create({
              title :'error',
              message: ` <h4>Merci de verifier vos champs.</h4>`,
              buttons: ['close']
            });
             alert.present();
          });
    
        
  }

  

}
