import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeGrados'
})
export class PipeGradosPipe implements PipeTransform {

  transform(valor: number, unidad: string) {
   
        if (unidad === 'C') {
            var temperatura = (valor - 32) /1.8 ;
            return temperatura.toFixed(2);
        } else if (unidad === 'F'){
            var temperatura = (valor * 1.8 ) + 32
            return temperatura.toFixed(2);
        }
      }  
  
}


