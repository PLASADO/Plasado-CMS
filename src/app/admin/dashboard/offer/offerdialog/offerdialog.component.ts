import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { FireService } from '../../../services/fireservice/fire.service';
declare var jQuery: any;

@Component({
  selector: 'app-offerdialog',
  templateUrl: './offerdialog.component.html',
  styleUrls: ['./offerdialog.component.scss']
})
export class OfferdialogComponent implements OnInit {

  public form: FormGroup;
  categoryList : string[] = [];
  dialogTitle : string = "Create Offer";
  
  constructor(private fb: FormBuilder, private fireService : FireService,public dialogRef: MdDialogRef<OfferdialogComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      price: [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(1000), CustomValidators.number])],
      discount: [null, Validators.compose([Validators.required, Validators.min(0), Validators.max(100), CustomValidators.number])],
      comment: [null, Validators.compose([Validators.required])],
      category: [null,Validators.compose([Validators.required])]
    });
    this.fireService.getCategoryList().subscribe(list => {
      this.categoryList = list;
    });
  }    
  
}
