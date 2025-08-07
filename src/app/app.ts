import { Component } from '@angular/core';
import {Diretivas} from './components/diretivas/diretivas';

@Component({
  selector: 'app-root',
   imports: [Diretivas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'curso-mateus';
}
