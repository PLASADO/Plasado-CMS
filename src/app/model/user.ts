export class User {
  email : String = ""
  name : String = ""
  birthday : String = ""
  gender : String = "male"
  type : String = "user"
  comments : String = ""
  picture : String = ""
  events : CelebrationEvent[] = [];
  daysoffweek : String[] = ["Sat","Sun"]
  static init(value){
    var user = new User();
    user.email = value.email;
    user.name = value.name;
    user.birthday = value.birthday;
    user.gender = value.gender;
    user.type = value.type;
    user.comments = value.comments;
    user.picture = value.picture;

    for (var event in value.events){
      user.events.push(CelebrationEvent.init(event));
    }
    user.daysoffweek = value.daysoffweek;
    return user;
  }
}
class CelebrationEvent{
  name : String = ""
  description : String = ""
  start_time : String = ""
  end_time : String = ""
  static init(value){
    var event = new CelebrationEvent();
    event.name = value.name;
    event.description = value.description;
    event.start_time = value.start_time;
    event.end_time = value.end_time;
    return event;
  }
}
