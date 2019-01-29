import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fte-polar';
  router: string;

  constructor(private _router: Router) {
    this.router = _router.url;
  }

  onActivate(event) {
    window.scroll(0,0);
  }
}
