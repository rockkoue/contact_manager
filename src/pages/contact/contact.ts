import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  data :Observable<any>;
  datas:any;
  id:string;
  frfr:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpclient:HttpClient,public alertController: AlertController) {
    
    this.data=this.httpclient.get('http://www.papyruxe.net/mesSiteInternet/apicontact/showContact.php');
    this.data.map(data =>data.json());
    this.data.subscribe(data => {
      this.datas = data.records
  });
  }
 
  DeleteContact(id)
  {
    //var id = document.getElementById('Contactid').nodeValue;

    let data=JSON.stringify({id});
    this.httpclient.post('http://www.papyruxe.net/mesSiteInternet/apicontact/deletedContact',data)
    .subscribe(res => {
      const alert =  this.alertController.create({
        title :'success',
        message: ` <h4>donnée suprimé.</h4>`,
        buttons: ['close']
      });
       alert.present();
    }, (err) => {
    console.log(Response);
    });

  }

    
  
}
