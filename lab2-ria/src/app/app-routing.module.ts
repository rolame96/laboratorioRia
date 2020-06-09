import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { JuegoComponent } from './juego/juego.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
  path: '',
  // component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'buscador',
      component: BuscadorComponent
    },
    {
      path: 'juegos/:id',
      component: JuegoComponent
    }
  ],
},
{
  path: '**',
  loadChildren: () =>
    import('./error/error.module').then((m) => m.ErrorModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
