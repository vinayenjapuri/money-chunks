import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CONTENT_TYPES} from "./shared/enums/content.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contents: string[] = [CONTENT_TYPES.Home, CONTENT_TYPES.About, CONTENT_TYPES["How to Earn"], CONTENT_TYPES.FAQ];
  currentContent: CONTENT_TYPES = CONTENT_TYPES.Home;
  login: boolean = false;
  signUp: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const currentRoute = window.location.pathname;
    if (currentRoute?.indexOf('home') > -1) {
      this.currentContent = CONTENT_TYPES.Home;
    } else if (currentRoute?.indexOf('faq') > -1) {
      this.currentContent = CONTENT_TYPES.FAQ;
    } else if (currentRoute?.indexOf('how-to-earn') > -1) {
      this.currentContent = CONTENT_TYPES["How to Earn"];
    } else if (currentRoute?.indexOf('about') > -1) {
      this.currentContent = CONTENT_TYPES.About;
    } else {
      this.signUp = currentRoute?.indexOf('signup') > -1;
      this.login = currentRoute?.indexOf('login') > -1;
    }
  }

  onNavigate(b: string) {
    //@ts-ignore
    this.currentContent = b === this.currentContent ? CONTENT_TYPES.home: CONTENT_TYPES[b];
    b = b === 'How to Earn'? 'how-to-earn': b;
    this.router.navigate([b?.toString()?.toLowerCase()]).then()
  }

  onLogin() {
    this.login = true;
    this.signUp&&=false;
    this.router.navigate(['login']).then();
  }

  onSignup() {
    this.signUp = true;
    this.login&&=false;
    this.router.navigate(['signup']).then();
  }
}
