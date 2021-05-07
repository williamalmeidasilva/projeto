import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pedido(){
    this.router.navigate(['/cadastro']);
  }
}
