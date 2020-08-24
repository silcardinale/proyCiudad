import { Component, OnInit } from '@angular/core';
import {Ciudad} from 'src/app/models/ciudad';
import {Clima} from 'src/app/models/clima';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  

  ciudades: Ciudad [] 
  public indice:number
  
  constructor(){
    this.ciudades =
    [
     {name :'Rio de Janeiro',country :'Brasil' , aptCode:'RIO', clima:{temperatura: 30,viento:10,precipitaciones:10}},
     {name :'Buenos Aires', country :'Argentina' , aptCode:'BUE',clima:{temperatura: 30,viento:5,precipitaciones:80}},
     {name :'Madrid', country :'España' , aptCode:'MAD',clima:{temperatura: 35,viento:0,precipitaciones:0}},
     {name :'Paris', country :'Francia' , aptCode:'PAR',clima:{temperatura: 23,viento:15,precipitaciones:40}},
     {name:'Dubai', country :'UAE' , aptCode:'DXB',clima:{temperatura: 50,viento:14,precipitaciones:1}}

    ]
    
  }

  public agregarCiudad(nuevoNombre: string, nuevoPais: string, nuevoCodigo:string,nuevoClima:[object])
  {
    this.ciudades.push(new Ciudad (nuevoNombre,nuevoPais,nuevoCodigo,nuevoClima))
  }
  
  public mostrarDetalles(i:number)
  {
    this.indice = i

  }

  ngOnInit(): void {
  }

}




