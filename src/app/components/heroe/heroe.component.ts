import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router' /* permite capturar la url que se pasa*/
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

heroe:any={};
  constructor( private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService) {
this.activatedRoute.params.subscribe( params =>{
  //console.log(params['id']);});
this.heroe = this._heroesService.getHeroe(params['id']);
});
}


}//fin de la clase