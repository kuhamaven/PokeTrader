import { Card } from './card.model';
import { Bid } from './bid.model';

export class Trade{
    public hostEmail: string;
    public card: Card;
    public id: number;
    public openingDate: string;
    public condition: string;
    public willingToAccept: Card[];
    public open: boolean;
    public bidders:Bid[];
    public hostVerification: boolean;
    public bidderVerification: boolean;

    constructor(){
    }

    
 
}