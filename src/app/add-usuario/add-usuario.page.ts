import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  id:number       = 0;
  nome:string     = "";
  email:string    = "";
  celular:number;
  cidade:string   = "";
  cpf:number;

  constructor(private service:PostService, private route:Router, private actRoute:ActivatedRoute) { }
  ngOnInit() {
    // this.actRoute.params.subscribe((dadosdarota:any)=>{
    //   this.id       = dadosdarota.id;
    //   this.nome     = dadosdarota.nome;
    //   this.email    = dadosdarota.email;
    //   this.celular  = dadosdarota.celular;
    //   this.estado   = dadosdarota.estado;
    //   this.cpf      = dadosdarota.cpf;
    // });
  }
  cadastrar(){
    const  dados = {
      requisicao: 'add',
      nome: this.nome,
      email: this.email,
      celular: this.celular,
      cidade: this.cidade,
      cpf:this.cpf
    }
    this.service.dadosApi(dados, 'api.php').subscribe(data =>{
      if(data['success']){
        this.route.navigate(['lista-usuarios']);
        this.nome     = "";
        this.email    = "";
        this.celular  = 0;
        this.cidade   = "";
        this.cpf      = 0;
      }
    })

  }
  update(){
    alert('update')
  }
}
