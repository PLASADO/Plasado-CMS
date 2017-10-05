export class Offer {
    no : number;
    category : string;
    comment : string;
    creationDate : string;
    discount : number;
    picture : string;
    price : number;
    title : string;
    userEmail : string;
    key : string;
    static initialize(value){
        var offer = new Offer();
        offer.category = value.category;
        offer.comment = value.comment;
        offer.creationDate = value.creationDate;
        offer.discount = value.discount;
        offer.picture = value.picture;
        offer.price = value.price;
        offer.title = value.title;
        offer.userEmail = value.userEmail;
        offer.key = value.$key;
        return offer;
    }
}
