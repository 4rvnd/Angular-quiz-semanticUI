export class Article {
    title: string;
    link: string;
    votes: number;
    n: string;
    i: string;
    d: string;
    s: any;
    constructor(title: string, link: string, n: string, i: string, d: string, s: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.n = n;
    this.i = i;
    this.d = d;
    this.s = s;
    this.votes = votes || 0;
    }
    voteUp(): void {
    this.votes += 1;
    }
    voteDown(): void {
    this.votes -= 1;
    }}
