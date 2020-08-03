
export class Card{
    public name: string;
    public imageUrl: string;
    public id: string;
    public types: string[];
    public supertype: string;
    public subtype: string;
    public rarity: string;
    public set:string;
    public nationalPokedexNumber:number;

    constructor(n:string, u:string, i:string, t: string[], v: string, w: string,x: string,y: string,z:number){
        this.name=n;
        this.imageUrl=u;
        this.types=t;
        this.id=i;
        this.supertype=v;
        this.subtype=w;
        this.rarity=x;
        this.set=y;
        this.nationalPokedexNumber=z;
    }
}

