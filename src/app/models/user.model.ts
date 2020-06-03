import { Card } from './card.model';

export class User{
    public email: string;
    public photoUrl: string;
    public bio: string;
    public userName: string;
    public id: string;
    public cards: Card[];

    constructor(){
        this.email="";
        this.photoUrl="";
        this.bio="";
        this.userName="";
        this.id="";
        this.cards=[];
    }

    
 
}