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
  private listasJuego: ListaJuegos[];
  /** Based on the screen size, switch from standard to one column per row */
  displayedColumns: string[] = ['Nombre', 'Imagen'];
  dataSource: MatTableDataSource<ListaJuegos>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames()
  }

   getGames(): void{
     this.gamesService.getGames().subscribe((listaJuego: ListaJuegos[])  => {
       console.log(listaJuego);
       this.dataSource = new MatTableDataSource(listaJuego);
     });
   }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
