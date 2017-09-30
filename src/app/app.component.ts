import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['../assets/sass/style.scss']
})
export class AppComponent {


  constructor() {
  }
}
