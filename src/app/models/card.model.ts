
export class Card{
    public name: string;
    public url: string;
    public type: string;
    public

    constructor(n:string, u:string, t: string){
        this.name=n;
        this.url=u;
        this.type=t;
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
  