import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
@Component({
  selector: 'app-categorycreatedialog',
  templateUrl: './categorycreatedialog.component.html',
  styleUrls: ['./categorycreatedialog.component.scss']
})
export class CategorycreatedialogComponent implements OnInit {

  categorytitle = "";
  constructor(public dialogRef: MdDialogRef<CategorycreatedialogComponent>) { }

  ngOnInit() {
  }

}
