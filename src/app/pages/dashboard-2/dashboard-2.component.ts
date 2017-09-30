import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { CalendarDialogComponent } from '../calendar/calendar-dialog.component';
import { SharedService } from '../../layouts/shared-service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'page-dashboard-2',
  templateUrl: './dashboard-2.component.html',
  styleUrls: ['./dashboard-2.component.scss']
})
export class PageDashboard2Component implements OnInit {
  pageTitle: string = 'Dashboard';
  lat: number = 50.4664212;
  lng: number = 30.6;
  tableColumns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
    { name: 'Age' }
  ];
  loadingIndicator: boolean = true;

  ngOnInit(){
    let mymap: any = L.map('map').setView([this.lat, this.lng], 13);
    let circle:any = L.circle([this.lat, this.lng], {
      color: '#dc143c',
      fillColor: '#dc143c',
      fillOpacity: 0.2,
      radius: 800
    }).addTo(mymap);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmV4dC1pdGVtIiwiYSI6ImNqMDFlYWRqeTAyNzEyd3FuNjQxdmVvMjgifQ.Ff8pEWrzeJ3uipr78e69uw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);
  }

  // lineChart
  public lineChartData: any[] = [
    {
      data: [30, 42, 46, 51, 65, 73, 80],
      label: 'Users',
      borderWidth: 1,
      pointRadius: 1
    },
    {
      data: [42, 43, 52, 47, 65, 70, 79],
      label: 'Pages',
      borderWidth: 1,
      pointRadius: 1
    },
    {
      data: [51, 48, 45, 56, 61, 69, 67],
      label: 'Visits',
      borderWidth: 1,
      pointRadius: 1
    }
  ];
  public lineChartLabels: any[] = [
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    'Sat.',
    'Sun.'
  ];
  public lineChartOptions: any = {
    responsiveAnimationDuration: 500,
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: true
        }
      }],
    }
  };
  public lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(93,173,224,0.2)',
      borderColor: '#5dade0',
      pointBackgroundColor: '#5dade0',
      pointBorderColor: '#0e7cc5',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    },
    {
      backgroundColor: 'rgba(255,140,0,0.2)',
      borderColor: '#ff8c00',
      pointBackgroundColor: '#ff8c00',
      pointBorderColor: '#FF630B',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    },
    {
      backgroundColor: 'rgba(220,20,60,0.2)',
      borderColor: '#dc143c',
      pointBackgroundColor: '#dc143c',
      pointBorderColor: '#7E2303',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/table-data.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  // Pie
  public pieChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public pieChartData: any[] = [
    300,
    500,
    100
  ];
  public pieChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#5dade0",
        "#3c4e62"
      ],
    }
  ];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  //Doughnut
  public doughnutChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public doughnutChartData: number[] = [
    350,
    450,
    100
  ];
  public doughnutChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#ff8c00",
        "#3c4e62"
      ],
    }
  ];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];
  public polarAreaChartData: number[] = [
    300,
    400,
    500
  ];
  public polarAreaChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#dc143c",
        "#3c4e62"
      ],
    }
  ];
  public polarAreaChartType: string = 'polarArea';
  public polarAreaChartOptions: any = {
    elements: {
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  dialogRef: MdDialogRef<CalendarDialogComponent>;
  lastCloseResult: string;
  actionsAlignment: string;
  config: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      action: '',
      event: []
    }
  };
  numTemplateOpens = 0;

  view = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-pencil"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="fa fa-times"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [{
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    color: colors.blue
  }, {
    start: addHours(startOfDay(new Date()), 2),
    end: new Date(),
    title: 'A draggable and resizable event',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];

  activeDayIsOpen = true;

  constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any, private _sharedService: SharedService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.config.data = {event, action};
    this.dialogRef = this.dialog.open(CalendarDialogComponent, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
