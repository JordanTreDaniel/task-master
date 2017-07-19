export interface iNote {
    reason: string,
    thoughts: string
}

export class Note implements iNote {
    reason: string;
    thoughts: string;
}