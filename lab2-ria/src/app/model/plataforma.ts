import { InfoPlataforma } from './infoPlataforma';

export interface Plataforma{
    released_at: Date;
    platform: {
        name: string;
        id: number;
    }
    requirements: {
        minimun: string;
        recommended: string;
    }
}
