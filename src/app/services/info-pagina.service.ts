import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Infopagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info : Infopagina = {};
  cargada = false;
  fireb:any[]=[];

  constructor(private http: HttpClient) { 
    this.cargarData();
    this.cargar_Firebase();
            
  }

  private cargar_Firebase(){

  this.http.get('https://angular-html-5bc66-default-rtdb.firebaseio.com/equipo.json')
  .subscribe((resp:any)=>{
    this.fireb=resp;
    console.log(resp);
  })
  }
  private cargarData(){
  
  this.http.get('assets/data/data.json')
  .subscribe((resp: Infopagina) =>{
    this.cargada=true;
    this.info=resp;    
    })
  }
}