import { Component } from '@angular/core';

@Component({
   selector: 'app-primeiro-componente',
   imports: [],
   templateUrl: './primeiro-componente.html',
   styleUrl: './primeiro-componente.scss',
})
export class PrimeiroComponente {
   nome: string = 'Fábio';
   idade: number = 45;
   hobbies = ['volei', 'games', 'trilhas'];
   carro = {
      nome: 'fit',
      marca: 'honda',
   };

   saudacao() {
      return `Olá, ${this.nome}`;
   }
}
