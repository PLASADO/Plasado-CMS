import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

@Component({
  moduleId: module.id,
  selector: 'page-progress-spinner',
  templateUrl: 'progress-spinner.component.html',
  styleUrls: ['progress-spinner.component.scss']
})
export class PageProgressSpinnerComponent implements OnInit {
  pageTitle: string;
  sidebar: boolean;
  navbar: boolean;
  progressValue: number;

  constructor( private _sharedService: SharedService ) {
    this.pageTitle = 'Progress spinner';
    this.progressValue = 40;
    this.sidebar = true;
    this.navbar = true;
    this._sharedService.emitChange(this.pageTitle);
  }

  step(val: number) {
    this.progressValue += val;
  }

  ngOnInit() {}
}