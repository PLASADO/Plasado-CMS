import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { Item } from './item';

@Component({
  moduleId: module.id,
  selector: 'page-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  styleUrls: ['breadcrumb.component.scss']
})
export class PageBreadcrumbComponent implements OnInit {
  pageTitle: string = 'Breadcrumb';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() { }

  breadcrumb: Item[] = [
    {
      title: 'Home',
      link: '#',
      icon: ''
    },
    {
      title: 'UI Elements',
      link: '#',
      icon: ''
    },
    {
      title: 'Components',
      link: '#',
      icon: ''
    },
    {
      title: 'Breadcrumb',
      link: '',
      icon: ''
    }
  ];
  breadcrumbIcon: Item[] = [
    {
      title: 'Home',
      link: '#',
      icon: 'fa fa-home'
    },
    {
      title: 'UI Elements',
      link: '#',
      icon: 'fa fa-paper-plane'
    },
    {
      title: 'Components',
      link: '#',
      icon: 'fa fa-shopping-bag'
    },
    {
      title: 'Breadcrumb',
      link: '',
      icon: 'fa fa-diamond'
    }
  ];
}