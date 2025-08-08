import { Component } from '@angular/core';
import { ComponenteFilho } from "./components/componente-filho/componente-filho";


@Component({
  selector: 'app-root',
  imports: [ComponenteFilho],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  usuario: string = 'Fábio';
  mensageDoPai: string = 'Mensagem recebida do pai.'

  dados = {
    email: "otymus27@gmail.com",
    profissao: 'professor'
  }
  protected title = 'curso-mateus';

  mostrarMensagem() {
     alert(this.mensageDoPai);
  }
}
