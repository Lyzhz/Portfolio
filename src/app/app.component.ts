import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjAng';
  lang = false;
  // TranslateService é um serviço que permite a tradução de textos
  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'br']);
    translate.setDefaultLang('br');
  }
  // Método para mudar o idioma
  switchLang() {
    const newlang = this.lang ? 'br' : 'en';
    this.translate.use(newlang);
  }
}
