import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Infopagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info : Infopagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    console.log("se cargo el servicio");
    this.http.get('assets/data/data.json')
      .subscribe((resp: Infopagina) =>{
        this.cargada=true;
        this.info=resp;
        console.log(resp);
      })

  }
}
