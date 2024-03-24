import {Component, Input} from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {InputComponent} from "../../shared/components/input/input.component";
import {ActivatedRoute} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'mc-user-authentication',
  standalone: true,
  imports: [
    FlexModule,
    MatCardModule,
    InputComponent,
    MatButtonModule
  ],
  templateUrl: './user-authentication.component.html',
  styleUrl: './user-authentication.component.scss'
})
export class UserAuthenticationComponent {
  @Input() login: boolean = false;
  @Input() signUp: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((s: any) => {
      this.login = s.login;
      this.signUp = s.signUp;
    })
  }
}
