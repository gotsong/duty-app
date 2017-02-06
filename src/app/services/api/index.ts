import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import DateTimeFormat = Intl.DateTimeFormat;

// Types representing the api
export class DutyPeriod {
    constructor(public startDate: Date, public endDate: Date) {
    }
}

export class Resident {
    constructor(public firstName: String, public lastName: String, public selected: Boolean) {
    }
}

export class Shift {
    constructor(public startDate: Date, public endDate: Date) {
    }
}

export class Violation{
    constructor(public name: String,
                public shifts: Shift[]){}
}

export class ResidentReport {
    constructor(public firstName: String,
                public lastName: String,
                public violationCount: Number,
                public violations: Violation[]) {
    }
}

@Injectable()
export class Api {
    //http placeholder for active api
    constructor(private http: Http) {
    }

    title: string = 'DutyApp';

    getDuties = (userId) => [
        {startDate: new Date(2012, 4, 23, 14, 15, 0, 0), endDate: new Date(2012, 4, 23, 18, 15, 0, 0)},
        {startDate: new Date(2012, 4, 24, 14, 15, 0, 0), endDate: new Date(2012, 4, 24, 18, 15, 0, 0)}
    ];

    addDuty = (duty: DutyPeriod) => [
        {startDate: new Date(2012, 4, 23, 14, 15, 0, 0), endDate: new Date(2012, 4, 23, 18, 15, 0, 0)},
        {startDate: new Date(2012, 4, 24, 14, 15, 0, 0), endDate: new Date(2012, 4, 24, 18, 15, 0, 0)},
        {startDate: new Date(2012, 4, 25, 14, 15, 0, 0), endDate: new Date(2012, 4, 24, 18, 15, 0, 0)}
    ];

    getResidents = (userId) => [
        {firstName: "Mark", lastName: "Whitfield", selected: false},
        {firstName: "Jimmy", lastName: "Hendrix", selected: false},
        {firstName: "Eddie", lastName: "VanHalen", selected: false},
        {firstName: "Wes", lastName: "Montgomery", selected: false},
        {firstName: "George", lastName: "Benson", selected: false},
        {firstName: "Kenny", lastName: "Burrell", selected: false},
        {firstName: "Jimmy", lastName: "Raney", selected: false},
        {firstName: "Norman", lastName: "Brown", selected: false}
    ];

    getResidentReport(residentId) {
        return {
            firstName: "Mary",
            lastName: "Davis",
            violationCount: 1,
            violations: [
                {
                    name: "Hours Over 80",
                    shifts: [{
                        startDate: new Date(2012, 4, 24, 14, 15, 0, 0),
                        endDate: new Date(2012, 4, 24, 18, 15, 0, 0)
                    }]
                }
            ]
        }
    };

    getResidentReports = (residents: Resident[]) => [
        {
            firstName: "Mary",
            lastName: "Davis",
            violationCount: 1,
            violations: [
                {
                    name: "Hours Over 80",
                    shifts: [{
                        startDate: new Date(2012, 4, 24, 14, 15, 0, 0),
                        endDate: new Date(2012, 4, 24, 18, 15, 0, 0)
                    }]
                }
            ]
        },
        {
            firstName: "Jeff",
            lastName: "Miles",
            violationCount: 1,
            violations: [
                {
                    name: "Less than 8 hr between shifts",
                    shifts: [{
                        startDate: new Date(2012, 4, 24, 14, 15, 0, 0),
                        endDate: new Date(2012, 4, 24, 18, 15, 0, 0)
                    }]
                }
            ]
        }
    ];

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}
