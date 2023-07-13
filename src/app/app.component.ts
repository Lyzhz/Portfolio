import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjAng';
  lang = false;

  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['br', 'en']);
    translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/pt|en/) ? browserLang : 'pt');
   }

    // ngOnInit() { 
    //   let lang = false;
    //   this.router.navigate([`/home/${lang}`]);
    // }

    switchLang() { 
      const newlang = this.lang ? 'en' : 'br';
      this.translate.use(newlang);
    }

}