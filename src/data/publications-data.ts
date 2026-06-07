export type Author = {
    surname: string;
    'given-name': string;
    initials: string;
};

export type Publication = {
    id: string
    authors: Author[]
    title: string
    'xml-title': string
    year: number
    journal: string
    journal_abbrev: string
    doi: string
    volume: string
    number: string
    pages: string
}