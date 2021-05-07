import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Pedido', url: 'pedido', icon: 'cart' },
    { title: 'Sair', url: 'sair', icon: 'log-out' },
  ];
  public labels = ['Ram7', 'Ppsh', 'Mp5', 'Mac10', 'Krig6', 'Origin'];
  constructor() {}
}
