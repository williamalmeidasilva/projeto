import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
id:number=0;
constructor(private router: Router) { }

  ngOnInit() {
  }
  confirmar(){

this.router.navigate(['/home']);
  }
}
