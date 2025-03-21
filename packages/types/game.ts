export interface Game {
    id: number;
    name: string;
    slug: string;
    meta: { thumbnail: { src: string } };
    provider: { name: string };
}
