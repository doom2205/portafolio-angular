import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private route:ActivatedRoute,
              public productoFilter: ProductosService){}

  ngOnInit() {
   this.route.params
   .subscribe(p=>{
    this.productoFilter.BuscarProducto(p['termino'])
   })
    
  }
  
}


