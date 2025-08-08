import { Component } from '@angular/core';
import {write} from 'node:fs';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss'
})
export class Eventos {
   exibir(){
      alert("Evento foi chamado através do botão.");
   }

   horario: number=new Date().getHours();
   minutos: number=new Date().getMinutes();

   // Função que retorna uma mensagem
   saudacao(){
      alert('teste')
      console.log(this.minutos);
   }


   capturarTexto(event: Event) {
      const input = event.target as HTMLInputElement;
      console.log(input.value);
   }

   teclaPressionada(event: KeyboardEvent) {
      console.log('Tecla:', event.key);
   }

   dizerAlgo(mensagem: string) {
      console.log(mensagem);
   }


}
