import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public _infoService: InfoPaginaService,
              private router: Router){}
    
  
  buscarProd(term: string){
      if(term.length<1){
        return
      }

      this.router.navigate(['search/', term]);
      
    }
  }

