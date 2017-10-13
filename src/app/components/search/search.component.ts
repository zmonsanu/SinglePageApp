import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router' /* permite capturar la url que se pasa*/
import {HeroesService,Heroe} from '../../servicios/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent implements OnInit {
   heroesSearch:Heroe[]=[];
   mostrarInfo:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private _router:Router,
              private _heroesService:HeroesService) {
}

  ngOnInit() {
this.activatedRoute.params.subscribe( params =>{
this.heroesSearch = this._heroesService.buscarHeroes(params['nombre']);
console.log(this.heroesSearch);
});
  }


  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }
}
