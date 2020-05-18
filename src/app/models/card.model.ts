
export class Card{
    public name: string;
    public imageURL: string;
    public id: number;
    public type: string;
    public variant: string;

    constructor(n:string, u:string, i:number, t: string, v: string){
        this.name=n;
        this.imageURL=u;
        this.type=t;
        this.id=i;
        this.variant=v;
    }
}

export enum CardTypes {
    Fire = "FIRE",
    Water = "WATER",
    Electric = "ELECTRIC",
    Grass = "GRASS",
    Fighting = "FIGHTING",
    Dark = "DARK",
    Psychic = "PSYCHIC",
    Fairy = "FAIRY",
    Dragon = "DRAGON",
    Colorless = "COLORLESS",
    Steel = "STEEL",
    Supporter = "SUPPORTER",
    Item = "ITEM",
    Stadium = "STADIUM"
  }
  