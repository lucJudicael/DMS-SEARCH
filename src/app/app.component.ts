import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dms-search-ui';
  isLightTheme: boolean = false;

  themeHandler() {
    this.isLightTheme = !this.isLightTheme;
  }
}
