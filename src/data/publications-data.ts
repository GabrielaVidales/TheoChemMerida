export type Author = {
    family: string;
    names: string;
};

export type Publication = {
    id: string
    authors: Author[]
    title: string
    year: number
    journal: string
    doi: string
    volume: string
    number: string
    pages: string
}