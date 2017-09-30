import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-calendar-dialog',
  template: `
  <h5 class="mt-0">Event action occurred</h5>
  <div class="mb-4">
    <strong>Action:</strong>
    <pre>{{ data?.action }}</pre>
  </div>
  <div class="mb-4">
    <strong>Event:</strong>
    <pre>{{ data?.event | json }}</pre>
  </div>
  <button md-button type="button" (click)="dialogRef.close()">Close dialog</button>`
})
export class CalendarDialogComponent {
  constructor( public dialogRef: MdDialogRef<CalendarDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }
}