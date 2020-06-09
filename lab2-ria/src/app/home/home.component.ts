import { Component, ViewChild, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { GamesService } from '../services/games.service';
import { ListaJuegos } from '../model/listaJuegos';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  listasJuego: any;
  //const juegos: any = [{name: "Juego 1"}, {name: "Juego 2"}, {name: "Juego 3"}];
  /** Based on the screen size, switch from standard to one column per row */
  displayedColumns: string[] = ['Nombre', 'Imagen'];
  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   getGames(){
    this.gamesService.getGames().subscribe((res: any[]) => {
      console.log('res ', res);
      this.listasJuego = res;
      console.log(this.listasJuego);
      });
   }

   //this.dataSource = new MatTableDataSource(recursoTemp);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
