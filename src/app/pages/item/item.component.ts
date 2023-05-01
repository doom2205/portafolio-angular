import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Prod_idx } from '../../interface/info_prod_idx.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  prod_id : Prod_idx | undefined;
  id:string | undefined;
  constructor(private route: ActivatedRoute,
              public producto:ProductosService){
      
      
  }
  ngOnInit() {
    
    this.route.params.subscribe(param=>{
      this.producto.GetProducto(param['id'])
        .subscribe((resp:Prod_idx)=>{
          this.prod_id=resp
          this.id=param['id'];
        })
    })
  }

}
