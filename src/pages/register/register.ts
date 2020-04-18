import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  login : string;
  email:string;
  password: string;
  mpdConf: string;
  myUrl :string;
  data :Observable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertController: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

 // http://www.papyruxe.net/mesSiteInternet/apicontact/users/register

Creation(){


 let mdp=this.password;
let mdpc=this.mpdConf;
if(mdp !=mdpc){
  const alert =  this.alertController.create({
    title :'error',
    message: ` <h4>mode passe pas identique.</h4>`,
    buttons: [`close `]
  });
   alert.present();
}else{

  //let headers = new Headers();
 
  let data = JSON.stringify({
    login:this.login,
    email:this.email,
    password:this.password
  });
        this.http.post('http://www.papyruxe.net/mesSiteInternet/apicontact/users/register.php',data)
        .map(res => res.json())
        .subscribe(res => {
          console.log(res);
        }, (err) => {
         
          const alert =  this.alertController.create({
            title :'error',
            message: ` <h4>error de creation.</h4>`,
            buttons: [`close `]
          });
           alert.present();
        });
}

  
  
}

}
