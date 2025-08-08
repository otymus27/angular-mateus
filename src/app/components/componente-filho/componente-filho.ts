import {Component, Input, OnInit, Output} from '@angular/core';
import EventEmitter = require('node:events');


@Component({
   selector: 'app-componente-filho',
   imports: [],
   templateUrl: './componente-filho.html',
   styleUrl: './componente-filho.scss',
})
export class ComponenteFilho implements OnInit {
   // A propriedade 'nome' pode receber dados do componente pai
   @Input() nome: string = '';

   @Input() dados!: {email: string; profissao: string}

   constructor() {}

   // Um alias para o @Input, com outro nome no template do pai
   @Input() mensagemRecebida: string = '';

   ngOnInit(): void {}

   @Output() mensagemEnviada = new EventEmitter<string>();

   EnviarParaOPai(){
      this.mensagemEnviada.emit("Estou enviando para o pai")
   }
}
