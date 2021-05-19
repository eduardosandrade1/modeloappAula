import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string = "";
  senha:string = "";
  constructor(private blockMenu:MenuController, private router:Router) { }

  ngOnInit() {
    this.blockMenu.enable(false)
  } 
  login(){
    if(this.usuario == "eduardo" && this.senha == "123400"){
      this.router.navigate(['folder/'+this.usuario])
      this.blockMenu.enable(true)
    };

  }

}
