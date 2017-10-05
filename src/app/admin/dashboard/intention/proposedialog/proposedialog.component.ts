import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { Offer } from '../../../model/offer';

import { FireService } from '../../../services/fireservice/fire.service';
@Component({
  selector: 'app-proposedialog',
  templateUrl: './proposedialog.component.html',
  styleUrls: ['./proposedialog.component.scss']
})
export class ProposedialogComponent implements OnInit {
  public form: FormGroup;
  offerList : Offer[] = [];

  category : string = "";
  dialogTitle : string = "Propose offer";
  constructor(private fb: FormBuilder, private fireService : FireService,public dialogRef: MdDialogRef<ProposedialogComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      message: [null, Validators.compose([Validators.required])],
      offer: [null,Validators.compose([Validators.required])]
    });
    this.form.controls['message'].setValue("I'd like to discuss about your intention");
    this.fireService.getOffersList().subscribe(refList => {
      var index = 0;
      refList.forEach(value => {
        var offer = Offer.initialize(value);
        if (offer.category == this.category){
          this.offerList.push(offer);
        }
      });
      this.offerList = this.offerList.slice();
    });
  }

}
