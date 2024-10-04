import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
  <h1>{{ 'Dashboard' | translate }}</h1>
  <p>{{ 'Charts' | translate: { name: 'Forms' } }}</p>
`
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setTranslation('th', '/assets/i18n/th.json');
    this.translate.setDefaultLang('th');
  }
  title = 'frontend';
}
