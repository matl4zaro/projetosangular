import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  constructor() {

  }


  active:string = 'forca';
  x: number = 0;
  xy = this.x * 100;
  valoresConvertidos:number[]=[];

  digitando(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    let valor:number = Number((<HTMLInputElement>evento.target).value);
    this.valoresConvertidos[0] = ( valor * 100);
    this.valoresConvertidos[1] = ( valor * 1);
    this.valoresConvertidos[2] = ( valor / 1000);
  }


}
