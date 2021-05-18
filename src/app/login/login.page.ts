import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private blockMenu:MenuController, private router:Router) { }

  ngOnInit() {
    this.blockMenu.enable(false)
  } 
  login(){
    this.router.navigate(['add-usuario'])
    this.blockMenu.enable(true)
  }

}
