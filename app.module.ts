import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxTypeaheadModule } from "ngx-typeahead";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsComponent } from './patients/patients.component';
import { PatientsNewComponent } from './patients-new/patients-new.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPatientsPipe } from './filter-patients.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientRecordsComponent } from './patient-records/patient-records.component';
import { PatientVisitsComponent } from './patient-visits/patient-visits.component';
import { PatientEngagementComponent } from './patient-engagement/patient-engagement.component';
import { PatientLettersComponent } from './patient-letters/patient-letters.component';
import { PatientHighlightsComponent } from './patient-highlights/patient-highlights.component';
import { PatientGraphingComponent } from './patient-graphing/patient-graphing.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SystemSetupComponent } from './system-setup/system-setup.component';
import { QueueComponent } from './queue/queue.component';
import { LabResultsComponent } from './lab-results/lab-results.component';
import { StockComponent } from './stock/stock.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FilterSetupPipe } from './filter-setup.pipe';
import { ColorPickerModule } from 'ngx-color-picker';
import {NgxPrintModule} from 'ngx-print';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';
import { InventoryAllComponent } from './inventory-all/inventory-all.component';
import { InventoryFacilitiesComponent } from './inventory-facilities/inventory-facilities.component';
import { InventorySuppliersComponent } from './inventory-suppliers/inventory-suppliers.component';
import { HelpFaqsComponent } from './help-faqs/help-faqs.component';
import { NgpSortModule } from "ngp-sort-pipe";
import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgbDateFRParserFormatter, CustomAdapter } from './services/date/date-utils.service';
import { ExcelService } from './excel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditDebitNotesComponent } from './credit-debit-notes/credit-debit-notes.component';
import { NgbDateAdapter, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { PrintInvoiceComponent } from './invoices/print-invoice/print-invoice.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { VoidPaymentsComponent } from './void-payments/void-payments.component';
import { ChartsModule } from 'ng2-charts';
import { AccountReceivableComponent } from './account-receivable/account-receivable.component';
import { DayEndSummaryComponent } from './day-end-summary/day-end-summary.component';
import { VisitTypeComponent } from './visit-type/visit-type.component';

import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';

import { SalesNationalityComponent } from './sales-nationality/sales-nationality.component';
import { PatientSalesReportComponent } from './patient-sales-report/patient-sales-report.component';
import { PatientCorporateComponent } from './patient-corporate/patient-corporate.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CorporateInvoicesComponent } from './corporate-invoices/corporate-invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsNewComponent,
    AppointmentsComponent,
    FilterPatientsPipe,
    PatientRecordsComponent,
    PatientVisitsComponent,
    PatientEngagementComponent,
    PatientLettersComponent,
    PatientHighlightsComponent,
    PatientGraphingComponent,
    PatientDetailsComponent,
    SystemSetupComponent,
    QueueComponent,
    LabResultsComponent,
    StockComponent,
    ContactsComponent,
    FilterSetupPipe,
    InventoryAllComponent,
    InventoryFacilitiesComponent,
    InventorySuppliersComponent,
    HelpFaqsComponent,
    IntelligenceComponent,
    InvoicesComponent,
    CreditDebitNotesComponent,
    PrintInvoiceComponent,
    QueueListComponent,
    OutstandingComponent,
    PaymentmodeComponent,
    VoidPaymentsComponent,
    AccountReceivableComponent,
    DayEndSummaryComponent,
    VisitTypeComponent,
    SalesInvoiceComponent,
    DayEndSummaryComponent,
    VisitTypeComponent,
    SalesNationalityComponent,
    PatientSalesReportComponent,
    PatientCorporateComponent,
    CorporateInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    DragDropModule,
    ColorPickerModule,
    NgxPrintModule,
    AngularEditorModule,
    QuillModule.forRoot(),
    NgpSortModule,
    NgxTypeaheadModule,
    NgScrollbarModule,
    NgbModule,
    ChartsModule,
    NgSelectModule
  ],
  providers: [
    ExcelService,
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
