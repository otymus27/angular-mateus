import { Component, Input, OnInit } from '@angular/core';

@Component({
   selector: 'app-componente-filho',
   imports: [],
   templateUrl: './componente-filho.html',
   styleUrl: './componente-filho.scss',
})
export class ComponenteFilho implements OnInit {
   @Input() nome: string = '';
   
   @Input() dados!: {email: string; profissao: string}

   constructor() {}

   ngOnInit(): void {}
}
