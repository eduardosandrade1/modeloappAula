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
  login(usuario:any, senha:any){
    if(usuario == "eduardo" && senha == ""){
      this.router.navigate(['folder/'+this.usuario])
      this.blockMenu.enable(true)
    };

  }

}
