import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interface/info_prod.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargar=true;
  productos:Productos[]=[];
  
  constructor(private http: HttpClient) {
    this.Cargar_producto()
   }
   private Cargar_producto(){
    this.http.get('https://angular-html-5bc66-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:Productos)=> {
      this.productos=Object.values(resp)
      console.log(this.productos)
      setTimeout(()=>{
        this.cargar=false 
        
      },2000)
    });
   }



}
      
