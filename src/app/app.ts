import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteFilho } from "./components/componente-filho/componente-filho";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteFilho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  usuario: string = 'Fábio'

  dados = {
    email: "otymus27@gmail.com",
    profissao: 'professor'
  }
  protected title = 'curso-mateus';
}
