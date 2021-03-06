import { Injectable } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

function padNumber(value: number) {
    debugger
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return "";
    }
}

function isNumber(value: any): boolean {
    debugger
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    debugger
    return parseInt(`${value}`, 10);
}

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
      debugger
        if (value) {
            const dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return {year: toInteger(dateParts[0]), month: null, day: null};
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
            }
        }   
        return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
      debugger
        let stringDate: string = ""; 
        console.log(date);
        if(date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "-" : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "-" : "";
            //stringDate += isNumber(date.month) ? moment().month(date.month-1).format("MMMM") + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
  }
}

@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        debugger
        if (value) {
            const dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return {year: toInteger(dateParts[0]), month: null, day: null};
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
            }
        }   
        return null;
    }

    format(date: NgbDateStruct): string {
        debugger
        let stringDate: string = ""; 
        console.log(date);
        if(date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "-" : "";
            stringDate += isNumber(date.month) ? moment().month(date.month-1).format("MMMM") + "-" : "";
            //stringDate += isNumber(date.month) ? padNumber(date.month) + "-" : "";
            stringDate += date.year;
        }
        return stringDate;
    }
}

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }
}
