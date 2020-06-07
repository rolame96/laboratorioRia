import { Juego } from './juego';

export interface ListaJuegos{
    next: string;
    previous: string;
    results: Juego[];
}
