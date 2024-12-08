import { Component } from '@angular/core';
import { Header } from '../header/header.component';
import { AppBody } from '../appbody/appbody.component';

@Component({
  selector: 'app-root',
  imports: [Header, AppBody],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myproject';
}
