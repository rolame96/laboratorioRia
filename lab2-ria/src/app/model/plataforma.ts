import { InfoPlataforma } from './infoPlataforma';

export interface Plataforma{
    released_at: Date;
    platform: {
        id: number;
        name: string;
        
    }
    requirements: {
        minimum: string;
        recommended: string;
    }
}
