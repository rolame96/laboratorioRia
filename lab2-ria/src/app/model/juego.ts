import { Genero } from './genero';
import { Plataforma } from './plataforma';
import { Tiendas } from './tiendas';

export interface Juego{
    id: string;
    slug: string;
    name: string;
    released: Date;
    background_image: string;
    description: string;
    rating: string;
    rating_top: string;
    metacritic: string;
    platforms: Plataforma[];
    genres: Genero[];
    stores: Tiendas[];

}
