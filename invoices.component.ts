import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']

})
export class InvoicesComponent implements OnInit {
  invoices = [
    { Date: '04/03/20', InvoiceNo: 'IN20320202098', PatientName: 'AH BEE', PatientId: '3302', SubTotal: '100.00', GST: '', Adj: '0.00', Total: '100.00', Payment: '107.00', CorpInvoiced: '0.00', PatientOutstanding: '7.00', Mode: 'cash', Corp: 'NTUC', Location: 'ME' },
    { Date: '05/03/20', InvoiceNo: 'IN20567202098', PatientName: 'CHIA LI HWA', PatientId: '3708', SubTotal: '201.64', GST: '14.11', Adj: '0.00', Total: '215.75', Payment: '30.00', CorpInvoiced: '185.75', PatientOutstanding: '0.00', Mode: 'MasterCard, Cash', Corp: '', Location: 'PM' },
    { Date: '16/03/20', InvoiceNo: 'IN20320223498', PatientName: 'HAN KOK TIAN', PatientId: '3617 ', SubTotal: '100.00', GST: '7.00', Adj: '0.00', Total: '107.00', Payment: '0.00', CorpInvoiced: '107.00', PatientOutstanding: '0.00', Mode: '', Corp: 'NTUC', Location: 'ME' },
    { Date: '16/03/20', InvoiceNo: 'IN20320202098', PatientName: 'ALBERT NG WEI TONG', PatientId: '2176', SubTotal: '237.64', GST: '16.63', Adj: '0.02', Total: '254.25', Payment: '50.00', CorpInvoiced: '204.25', PatientOutstanding: '0.00', Mode: 'MasterCard', Corp: 'NTUC', Location: 'ME' },
  ]
  printInvoice: any = [];
  modelFr;
  modelTo;
  date: { year: number, month: number };

  constructor(private excelService: ExcelService, private calendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {
  }

  ngOnInit(): void {
    this.selectToday('');
  }

  selectToday(field) {
    if (field == 'from') {
      this.modelFr = this.dateAdapter.toModel(this.calendar.getToday());
    } else if (field == 'to') {
      this.modelTo = this.dateAdapter.toModel(this.calendar.getToday());
    } else {
      this.modelFr = this.dateAdapter.toModel(this.calendar.getToday());
      this.modelTo = this.dateAdapter.toModel(this.calendar.getToday());
    }
  }

  selectYesterday() {
    debugger
    this.modelFr = this.dateAdapter.toModel(this.calendar.getPrev(this.calendar.getToday(), 'd', 1));
    this.modelTo = this.dateAdapter.toModel(this.calendar.getPrev(this.calendar.getToday(), 'd', 1));
  }

  selectCurMonth() {
    debugger
    let d = this.calendar.getToday().day - 1;
    this.modelFr = this.dateAdapter.toModel(this.calendar.getPrev(this.calendar.getToday(), 'd', d));
    this.modelTo = this.dateAdapter.toModel(this.calendar.getToday());
  }

  selectPreMonth() {
    debugger
    let preMonthDate = this.calendar.getPrev(this.calendar.getToday(), 'm', 1);
    let d = preMonthDate.day - 1;
    let day1 = this.calendar.getPrev(preMonthDate, 'd', d);
    this.modelFr = this.dateAdapter.toModel(day1);
    let dayLast = this.getDaysInMonth(day1.month, day1.year);
    this.modelTo = this.dateAdapter.toModel(this.calendar.getNext(day1, 'd', dayLast - 1));
  }

  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  };

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.invoices, 'Invoice List');
  }
  // sort
  sortByAsce(sort: string) {

    if (sort === "Date") {
      this.invoices = this.invoices.sort(this.sortByDateAsce)
    } else if (sort === "InvoiceNo") {
      this.invoices = this.invoices.sort(this.sortByInvNoAsce)
    } else if (sort === "Total") {
      this.invoices = this.invoices.sort(this.sortByTotAsce)

    } else if (sort === "Payment") {
      this.invoices = this.invoices.sort(this.sortByPayAsce)

    } else if (sort === "PatientOutstanding") {
      this.invoices = this.invoices.sort(this.sortByOutAsce)

    }
    else if (sort === "Location") {
      this.invoices = this.invoices.sort(this.sortByLocAsce)

    }
  }
  sortByDateAsce(c1, c2) {
    return parseInt(c1.Date) - parseInt(c2.Date)
  }
  sortByInvNoAsce(c1, c2) {
    if (c1.InvoiceNo > c2.InvoiceNo) return 1
    else if (c1.InvoiceNo === c2.InvoiceNo) return 0
    else return -1
  }
  sortByTotAsce(c1, c2) {
    return parseInt(c1.Total) - parseInt(c2.Total)
  }
  sortByPayAsce(c1, c2) {
    return parseInt(c1.Payment) - parseInt(c2.Payment)
  }
  sortByOutAsce(c1, c2) {
    return parseInt(c1.PatientOutstanding) - parseInt(c2.PatientOutstanding)
  }
  sortByLocAsce(c1, c2) {
    if (c1.Location > c2.Location) return 1
    else if (c1.Location === c2.Location) return 0
    else return -1
  }

  sortByDesc(sort: string) {
    if (sort === "Date") {
      this.invoices = this.invoices.sort(this.sortByDateDesce)
    } else if (sort === "InvoiceNo") {
      this.invoices = this.invoices.sort(this.sortByInvNoDesce)
    } else if (sort === "Total") {
      this.invoices = this.invoices.sort(this.sortByTotDesce)

    } else if (sort === "Payment") {
      this.invoices = this.invoices.sort(this.sortByPayDesce)

    } else if (sort === "PatientOutstanding") {
      this.invoices = this.invoices.sort(this.sortByOutDesce)

    }
    else if (sort === "Location") {
      this.invoices = this.invoices.sort(this.sortByLocDesce)

    }
  }

  sortByDateDesce(c1, c2) {
    return parseInt(c2.Date) - parseInt(c1.Date)
  }
  sortByInvNoDesce(c1, c2) {
    if (c1.InvoiceNo < c2.InvoiceNo) return 1
    else if (c1.InvoiceNo === c2.InvoiceNo) return 0
    else return -1
  }
  sortByTotDesce(c1, c2) {
    return parseInt(c2.Total) - parseInt(c1.Total)
  }
  sortByPayDesce(c1, c2) {
    return parseInt(c2.Payment) - parseInt(c1.Payment)
  }
  sortByOutDesce(c1, c2) {
    return parseInt(c2.PatientOutstanding) - parseInt(c1.PatientOutstanding)
  }
  sortByLocDesce(c1, c2) {
    if (c1.Location < c2.Location) return 1
    else if (c1.Location === c2.Location) return 0
    else return -1
  }

  printIndividual(invoice) {
    this.printInvoice = [];
    this.printInvoice.push(invoice)
    this.print();
  }

  printAll() {
    this.printInvoice = [];
    this.printInvoice = this.invoices;
    this.print();
  }

  print() {

    setTimeout(() => {
      let content = document.getElementById("invoice-print").innerHTML;
      let win = window.open();
      win.document.open();
      win.document.write('<html><head><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" /><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" /><style> @media screen { .print-header, .print-footer {display: none;}}  </style></head><body >' + content + "</html>");
      win.document.close();
    }, 100);
  }
}



