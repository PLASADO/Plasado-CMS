export class CelebrationEvent {
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
