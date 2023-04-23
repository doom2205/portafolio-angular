import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargar=true;
  prod:any[]=[]
  
  constructor(private http: HttpClient) {
    this.Cargar_producto()
   }
   private Cargar_producto(){
    this.http.get('https://angular-html-5bc66-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:any) => {
      this.prod=resp
      console.log(resp)
      this.cargar=false 
    });
   }



}
      
