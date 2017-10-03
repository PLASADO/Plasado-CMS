import { Component, OnInit, NgZone } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { FireService } from '../../services/fireservice/fire.service';
import { AuthService } from '../../services/auth-service/auth.service';

import { Intention } from '../../model/intention';
@Component({
  selector: 'app-intention',
  templateUrl: './intention.component.html',
  styleUrls: ['./intention.component.scss']
})
export class IntentionComponent implements OnInit {
  intentionlist : Intention[] = [];
  constructor(
    private fireservice : FireService, 
    private authservice : AuthService,
    public dialog: MdDialog,private zone:NgZone) { }

  ngOnInit() {
    this.fireservice.getIntentionList().subscribe(valuelist => {
      var index = 0;
      valuelist.forEach(value => {
        var offer = Intention.initialize(value);
        offer.no = index = index + 1;
        this.intentionlist.push(offer);
      });
      this.intentionlist = this.intentionlist.slice();
    });
  }

}
