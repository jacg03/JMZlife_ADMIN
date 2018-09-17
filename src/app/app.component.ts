import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  var = 'block';
  title = 'JMZlife-Admin';

  hide() {
    this.var = 'none';
  }
  getvar() {
    return this.var;
  }
}
