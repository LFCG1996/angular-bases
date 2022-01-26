import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<span>Luis</span>',
  // template: `
  //   <span>Multilinea</span>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle: string = 'Mi App'
}
