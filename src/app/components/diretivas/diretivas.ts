import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-diretivas',
   imports: [
      NgStyle,
      NgClass
   ],
  templateUrl: './diretivas.html',
  styleUrl: './diretivas.scss'
})
export class Diretivas {
   logado: boolean=true;

   carros = ['uno', 'mobi', 'corolla'];

   cor = 'blue';
   fonte=40;

   underline = 'underline-title';
}



