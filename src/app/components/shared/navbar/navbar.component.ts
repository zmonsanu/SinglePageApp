import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../../servicios/heroes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
/*   styleUrls: ['./navbar.component.css'] */
})
export class NavbarComponent implements OnInit {
//  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private _router:Router) { }

  ngOnInit() {
    //this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  buscarHeroe(texto:string){
  //  console.log(texto);
    //this.heroes = this._heroesService.buscarHeroes(texto);
    this._router.navigate(['/search',texto]);



  }

}
