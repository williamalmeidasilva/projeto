import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
 nome: string="";
 Email: string="";
 CPF: string="";
 Telefone: string="";
 Senha: string="";

  id:number=0;
  constructor(private router: Router) { }

  ngOnInit() {
  }
 confirmar(){
   this.router.navigate(['/add-usuario']);
 }

}
