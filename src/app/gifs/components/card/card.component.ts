import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) // esto quiere decir si viene indefinido
    throw new Error('El gif es requerido.');
  }

}
