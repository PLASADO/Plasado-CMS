import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  moduleId: module.id,
  selector: 'show-sidebar-layout',
  templateUrl: 'show-sidebar.component.html',
  styleUrls: ['../layouts.scss'],
  providers: [ SharedService ]
})
export class ShowsidebarLayoutComponent implements OnInit {
  pageTitle: any;
  boxed: boolean;
  compress: boolean;
  @Input() openedSidebar: boolean;

  constructor( private _sharedService: SharedService ) {
    this.openedSidebar = false;
    this.boxed = false;
    this.compress = false;

    _sharedService.changeEmitted$.subscribe(
      title => {
        this.pageTitle = title;
      }
    );
  }

  ngOnInit() { }

  getClasses() {
    return {
      'boxed': this.boxed,
      'compress-sidebar': this.compress,
      'open-sidebar': this.openedSidebar
    };
  }

  sidebarState() {
    this.openedSidebar = !this.openedSidebar;
  }
}