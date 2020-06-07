import { InfoPlataforma } from './infoPlataforma';

export interface Plataforma{
    released_at: Date;
    platform: InfoPlataforma[];
    requirements_en: string;
}
