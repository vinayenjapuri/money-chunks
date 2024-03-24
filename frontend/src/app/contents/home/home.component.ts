import { Component } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";

@Component({
  selector: 'mc-home',
  standalone: true,
  imports: [
    FlexLayoutModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
