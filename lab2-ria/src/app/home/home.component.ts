import { Component, ViewChild, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { GamesService } from '../services/games.service';
import { ListaJuegos } from '../model/listaJuegos';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Result } from '../model/results';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  // displayedColumns: string[] = ['Nombre', 'Rating', 'Fecha de Lanzamiento'];
  dataSource: MatTableDataSource<Result>;
  existeRecursos = false;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   getGames(){
    this.gamesService.getGames().subscribe((res: any[]) => {
      console.log('res ', res);
      const listaAux: any[] = [];
      for (const item of res.results) {
          let obj1 = new Result();
          obj1.name = item.name;
          obj1.released = item.released;
          obj1.rating_top = item.rating_top;
          listaAux.push(obj1);
      }
      console.log('listaAux ', listaAux);
      this.existeRecursos = true;
      this.dataSource = new MatTableDataSource(listaAux);
      });
   }
}
