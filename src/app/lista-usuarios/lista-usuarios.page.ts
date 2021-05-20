import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  nome:string = "";
  email:strong
  // importa o router para poder redirecionar
  constructor(private router:Router, private service:PostService, private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((dadosdarota:any)=>{
      this.nome
    })
  }
  addUsuario(){
    // redireciona e trás o action do back-button
    this.router.navigate(['add-usuario'])
  }

}
