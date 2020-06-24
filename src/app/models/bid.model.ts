import { Card } from './card.model';
import { Trade } from './trade.model';
export class Bid{
    public userId: string;
    public card: Card;
    public tradeId: number;
    public id: number;
    public date: string;
    public accepted: boolean;
    public rejected:boolean;
    public hostEmail:string;
    

    constructor(){
    }

    
 
}