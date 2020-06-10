import { Genero } from './genero';
import { Plataforma } from './plataforma';
import { Tiendas } from './tiendas';
import { Screenshot } from './screenshot';

export interface Juego{
    id: number;
    slug: string;
    name: string;
    released: string;
    background_image: string;
    description: string;
    rating: string;
    rating_top: string;
    metacritic: string;
    platforms: Plataforma[];
    genres: Genero[];
    stores: Tiendas[];
    short_screenshots: Screenshot[];
    clip: {
        clip: string;
    }

}
