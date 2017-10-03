import { CelebrationEvent } from "./celebrationevent";
export class User {
    number : Number = 0;
    email : string = ""
    name : string = ""
    birthday : string = ""
    gender : string = "male"
    type : string = "user"
    comments : string = ""
    picture : string = ""
    events : CelebrationEvent[] = [];
    daysoffweek : string[] = ["Sat","Sun"];
    password : string = "";
    static init(value){
      var user = new User();
      user.email = value.email;
      user.name = value.name;
      user.birthday = value.birthday;
      user.gender = value.gender;
      user.type = value.type;
      user.comments = value.comments;
      user.picture = value.picture;
      user.password = value.password;
      if (value.events == undefined){
        user.events = [];
      } else {
        value.events.forEach(element => {
          user.events.push(CelebrationEvent.init(element));      
        });
      }
      user.daysoffweek = value.daysoffweek;
      return user;
    }
  
}
