import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { GamesService } from '../services/games.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { Juego } from '../model/juego';
import { Genero } from '../model/genero';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {  
  juego: Juego;
  juegoId: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.juegoId = this.route.snapshot.paramMap.get('id');
    

    this.gamesService.getGameById(this.juegoId)
    .subscribe(
      (juego: Juego) => { // Success
        console.log(juego);
        this.juego = juego;
      },
      (error) => {
        console.error(error);
      }
    );
  }



}
