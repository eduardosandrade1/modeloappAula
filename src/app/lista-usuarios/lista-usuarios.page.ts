import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  // importa o router para poder redirecionar
  constructor(private router:Router) { }

  ngOnInit() {
  }
  addUsuario(){
    // redireciona e trás o action do back-button
    this.router.navigate(['add-usuario'])
  }

}
