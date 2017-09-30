import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http }                 from '@angular/http';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { ChartsModule }                     from 'ng2-charts';
import { CalendarModule }                   from 'angular-calendar';
import { NgxDatatableModule }               from '@swimlane/ngx-datatable';
import { AgmCoreModule }                    from '@agm/core';
import { SqueezeBoxModule }                 from 'squeezebox';

import { AppRoutingModule }                 from './app-routing.module';

import { AppComponent }                     from './app.component';
import { DefaultLayoutComponent }           from './layouts/default/default.component';
import { BoxedLayoutComponent }             from './layouts/boxed/boxed.component';
import { ShowsidebarLayoutComponent }       from './layouts/show-sidebar/show-sidebar.component';
import { BoxedshowLayoutComponent }         from './layouts/boxed-show/boxed-show.component';
import { ExtraLayoutComponent }             from './layouts/extra/extra.component';

//A2 Components
import { NavbarComponent }                  from './ni-components/navbar/navbar.component';
import { SidebarComponent }                 from './ni-components/sidebar/sidebar.component';
import { LogoComponent }                    from './ni-components/logo/logo.component';
import { MainMenuComponent }                from './ni-components/main-menu/main-menu.component';
import { A2CardComponent }                  from './ni-components/card/card.component';
import { AlertComponent }                   from './ni-components/alert/alert.component';
import { BadgeComponent }                   from './ni-components/badge/badge.component';
import { BreadcrumbComponent }              from './ni-components/breadcrumb/breadcrumb.component';
import { FileComponent }                    from './ni-components/file/file.component';
import { NIHTimelineComponent }             from './ni-components/ni-h-timeline/ni-h-timeline.component';
import { FooterComponent }                  from './ni-components/footer/footer.component';

//A2 Pages
import { PageDashboardComponent }           from './pages/dashboard/dashboard.component';
import { PageDashboard2Component }          from './pages/dashboard-2/dashboard-2.component';
import { PageButtonComponent }              from './pages/material-components/button/button.component';
import { PageCardComponent }                from './pages/material-components/card/card.component';
import { PageCheckboxComponent }            from './pages/material-components/checkbox/checkbox.component';
import { PageChipsComponent }               from './pages/material-components/chips/chips.component';
import { PageDialogComponent }              from './pages/material-components/dialog/dialog.component';
import { DialogResultComponent }            from './pages/material-components/dialog/dialog.component';
import { PageIconComponent }                from './pages/material-components/icon/icon.component';
import { PageInputComponent }               from './pages/material-components/input/input.component';
import { PageListComponent }                from './pages/material-components/list/list.component';
import { PageMenuComponent }                from './pages/material-components/menu/menu.component';
import { PageProgressBarComponent }         from './pages/material-components/progress-bar/progress-bar.component';
import { PageProgressSpinnerComponent }     from './pages/material-components/progress-spinner/progress-spinner.component';
import { PageRadioButtonComponent }         from './pages/material-components/radio-button/radio-button.component';
import { PageSelectComponent }              from './pages/material-components/select/select.component';
import { PageSliderComponent }              from './pages/material-components/slider/slider.component';
import { PageSlideToggleComponent }         from './pages/material-components/slide-toggle/slide-toggle.component';
import { PageSnackbarComponent }            from './pages/material-components/snackbar/snackbar.component';
import { PageTabsComponent }                from './pages/material-components/tabs/tabs.component';
import { PageToolbarComponent }             from './pages/material-components/toolbar/toolbar.component';
import { PageTooltipComponent }             from './pages/material-components/tooltip/tooltip.component';

import { PageFileComponent }                from './pages/ni-components/file/file.component';
import { PageA2CardComponent }              from './pages/ni-components/a2-card/a2-card.component';
import { PageAlertComponent }               from './pages/ni-components/alert/alert.component';
import { PageBadgeComponent }               from './pages/ni-components/badge/badge.component';
import { PageBreadcrumbComponent }          from './pages/ni-components/breadcrumb/breadcrumb.component';

import { PageTypographyComponent }          from './pages/typography/typography.component';
import { PageNotFoundComponent }            from './pages/not-found/not-found.component';

import { PageAboutUsComponent }             from './pages/pages-service/about-us/about-us.component';
import { PageFaqComponent }                 from './pages/pages-service/faq/faq.component';
import { PageTimelineComponent }            from './pages/pages-service/timeline/timeline.component';
import { PageInvoiceComponent }             from './pages/pages-service/invoice/invoice.component';
import { PageLineChartComponent }           from './pages/charts/line-chart/line-chart.component';
import { PageBarChartComponent }            from './pages/charts/bar-chart/bar-chart.component';
import { PageDoughnutChartComponent }       from './pages/charts/doughnut-chart/doughnut-chart.component';
import { PageRadarChartComponent }          from './pages/charts/radar-chart/radar-chart.component';
import { PagePieChartComponent }            from './pages/charts/pie-chart/pie-chart.component';
import { PagePolarAreaChartComponent }      from './pages/charts/polar-area-chart/polar-area-chart.component';
import { PageDynamicChartComponent }        from './pages/charts/dynamic-chart/dynamic-chart.component';
import { PageCalendarComponent }            from './pages/calendar/calendar.component';
import { CalendarDialogComponent }          from './pages/calendar/calendar-dialog.component';
import { PageSimpleTableComponent }         from './pages/tables/simple-table/simple-table.component';
import { PageBootstrapTablesComponent }     from './pages/tables/bootstrap-tables/bootstrap-tables.component';
import { PageEditingTableComponent }        from './pages/tables/editing-table/editing-table.component';
import { PageFilteringTableComponent }      from './pages/tables/filtering-table/filtering-table.component';
import { PagePaginationTableComponent }     from './pages/tables/pagination-table/pagination-table.component';
import { PageFormElementsComponent }        from './pages/forms/form-elements/form-elements.component';
import { PageFormLayoutComponent }          from './pages/forms/form-layout/form-layout.component';
import { PageFormValidationComponent }      from './pages/forms/form-validation/form-validation.component';
import { PageGoogleMapComponent }           from './pages/maps/google-map/google-map.component';
import { PageLeafletMapComponent }          from './pages/maps/leaflet-map/leaflet-map.component';
import { PageWidgetsComponent }             from './pages/widgets/widgets.component';
import { PageLayoutsComponent }             from './pages/layouts/layouts.component';

//Extra pages
import { PageSignIn1Component }             from './pages/extra-pages/sign-in-1/sign-in-1.component';
import { PageSignIn2Component }             from './pages/extra-pages/sign-in-2/sign-in-2.component';
import { PageSignIn3Component }             from './pages/extra-pages/sign-in-3/sign-in-3.component';
import { PageSignUp1Component }             from './pages/extra-pages/sign-up-1/sign-up-1.component';
import { PageSignUp2Component }             from './pages/extra-pages/sign-up-2/sign-up-2.component';
import { PageForgotComponent }              from './pages/extra-pages/forgot/forgot.component';
import { PageConfirmComponent }             from './pages/extra-pages/confirm/confirm.component';
import { Page404Component }                 from './pages/extra-pages/page-404/page-404.component';
import { Page500Component }                 from './pages/extra-pages/page-500/page-500.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './fireservice/auth.service';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { OfferlistComponent } from './admin/offerlist/offerlist.component';
import { OfferCreateDialogComponent } from './admin/offerlist/offer-create-dialog/offer-create-dialog.component';
import { CategorylistComponent } from './admin/categorylist/categorylist.component';
import { CategorycreatedialogComponent } from './admin/categorylist/categorycreatedialog/categorycreatedialog.component';
export const firebaseConfig = {
    apiKey: "AIzaSyBwdmdX7bfq1xjEsgk-6S2GeYqC2jXyt_Y",
    authDomain: "plasado-eea28.firebaseapp.com",
    databaseURL: "https://plasado-eea28.firebaseio.com",
    projectId: "plasado-eea28",
    storageBucket: "plasado-eea28.appspot.com",
    messagingSenderId: "666738415613"
  };
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    CalendarModule.forRoot(),
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    SqueezeBoxModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations : [
    AppComponent,
    DefaultLayoutComponent,
    BoxedLayoutComponent,
    ShowsidebarLayoutComponent,
    BoxedshowLayoutComponent,
    ExtraLayoutComponent,

    NavbarComponent,
    SidebarComponent,
    LogoComponent,
    MainMenuComponent,
    A2CardComponent,
    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    FileComponent,
    NIHTimelineComponent,
    FooterComponent,

    PageDashboardComponent,
    PageDashboard2Component,
    PageButtonComponent,
    PageCardComponent,
    PageCheckboxComponent,
    PageChipsComponent,
    PageDialogComponent,
    DialogResultComponent,
    PageIconComponent,
    PageInputComponent,
    PageListComponent,
    PageMenuComponent,
    PageProgressBarComponent,
    PageProgressSpinnerComponent,
    PageRadioButtonComponent,
    PageSelectComponent,
    PageSliderComponent,
    PageSlideToggleComponent,
    PageSnackbarComponent,
    PageTabsComponent,
    PageToolbarComponent,
    PageTooltipComponent,

    PageFileComponent,
    PageA2CardComponent,
    PageAlertComponent,
    PageBadgeComponent,
    PageBreadcrumbComponent,

    PageTypographyComponent,
    PageNotFoundComponent,

    PageSignIn1Component,
    PageSignIn2Component,
    PageSignIn3Component,
    PageSignUp1Component,
    PageSignUp2Component,
    PageForgotComponent,
    PageConfirmComponent,
    Page404Component,
    Page500Component,
    PageAboutUsComponent,
    PageFaqComponent,
    PageTimelineComponent,
    PageInvoiceComponent,
    PageLineChartComponent,
    PageBarChartComponent,
    PageDoughnutChartComponent,
    PageRadarChartComponent,
    PagePieChartComponent,
    PagePolarAreaChartComponent,
    PageDynamicChartComponent,
    PageCalendarComponent,
    CalendarDialogComponent,
    PageSimpleTableComponent,
    PageBootstrapTablesComponent,
    PageEditingTableComponent,
    PageFilteringTableComponent,
    PagePaginationTableComponent,
    PageFormElementsComponent,
    PageFormLayoutComponent,
    PageFormValidationComponent,
    PageGoogleMapComponent,
    PageLeafletMapComponent,
    PageWidgetsComponent,
    PageLayoutsComponent,


    UserlistComponent,
    OfferlistComponent,
    OfferCreateDialogComponent,
    CategorylistComponent,
    CategorycreatedialogComponent
  ],
  entryComponents: [ DialogResultComponent, CalendarDialogComponent,OfferCreateDialogComponent,CategorycreatedialogComponent ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
