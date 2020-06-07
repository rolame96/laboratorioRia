import { Genero } from './genero';
import { Plataforma } from './plataforma';
import { Tiendas } from './tiendas';

export interface Juego{
    id: string;
    description: string;
    etiqueta: string;
    name: string;
    released: Date;
    image: string;
    rating: string;
    rating_top: string;
    metacritic: string;
    platforms: Plataforma[];
    genres: Genero[];
    stores: Tiendas[];
    background_image: string;

}
