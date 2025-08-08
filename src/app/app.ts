import { Component } from '@angular/core';
import {Eventos} from './components/eventos/eventos';

@Component({
  selector: 'app-root',
   imports: [Eventos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'curso-mateus';
}
