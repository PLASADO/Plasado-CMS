export class Intention {
    no : number;
    name : string;
    date : string;
    location : string;
    category : string;
    minBudget : number;
    maxBudget : number;
    user : string;
    static initialize(value){
        var intention = new Intention();
        intention.name = value.name;
        intention.date = value.date;
        intention.location = value.location;
        intention.category = value.category;
        intention.minBudget = value.minBudget;
        intention.maxBudget = value.maxBudget;
        intention.user = value.user;
        return intention;
    }
}
