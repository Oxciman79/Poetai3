export interface Poem {
    title: string;
    author: string;
    content: string;
    dateCreated: Date;
}

export interface PoemList {
    poems: Poem[];
}