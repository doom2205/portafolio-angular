import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interface/info_prod.interface';
import { ResolveStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargar = true;
  productos: Productos[] = [];
  productosfiltrados: Productos[] = [];

  constructor(private http: HttpClient) {
    this.Cargar_producto()

  }
  private Cargar_producto() {

    return new Promise((resolve, reject) =>
      this.http.get('https://angular-html-5bc66-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: Productos) => {
          this.productos = Object.values(resp)
          this.cargar = false
          resolve(resp);
        })
    )

  }

  GetProducto(id: string) {
    return this.http.get(`https://angular-html-5bc66-default-rtdb.firebaseio.com/productos/${id}.json`)

  }
  BuscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.Cargar_producto().then(() => {
        this.Filtrar_prod(termino)
        console.log(termino)
          console.log(this.productosfiltrados)
      })
    } else {
      this.Filtrar_prod(termino)
      console.log(termino)
          console.log(this.productosfiltrados)

    }
  }

  Filtrar_prod(termino:string){
    this.productosfiltrados=[]
    termino=termino.toLocaleLowerCase()
    this.productos.forEach(p=>{
       let titulo=p.titulo?.toLowerCase();
      if(p.categoria?.indexOf(termino) != null){
        if(titulo?.indexOf(termino) != null){
        if(p.categoria.indexOf(termino) >= 0 || titulo?.indexOf(termino) >= 0){
          this.productosfiltrados.push(p)
        }
      }
      }
    })

  }
  
}





