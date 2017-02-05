import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import DateTimeFormat = Intl.DateTimeFormat;


export class DutyPeriod{
    constructor(public startDate: DateTimeFormat, public endDate: DateTimeFormat) { }
}

export class Resident{
    constructor(public startDate: DateTimeFormat, public endDate: DateTimeFormat) { }
}

export class ResidentReport{
    constructor(public startDate: DateTimeFormat, public endDate: DateTimeFormat) { }
}

@Injectable()
export class Api {
    constructor(private http:Http) { }
    title: string = 'DutyApi';

    public getDuties(userId) {
        return this.http.get('/api/duties/' + userId)
             .map((response: Response) => <DutyPeriod[]>response.json().data)
             .catch(this.handleError);
    }

    addDuty(duty: DutyPeriod) {
        return this.http.post('/api/residents', duty)
            .map((response: Response) => <DutyPeriod[]>response.json().data)
            .catch(this.handleError);
    }

    getResidents() {
        return this.http.get('/api/residents')
            .map((response: Response) => <Resident[]>response.json().data)
            .catch(this.handleError);
    }

    getResidentReport(residentId) {
        return this.http.post('/api/residentreport', residentId)
            .map((response: Response) => <ResidentReport>response.json().data)
            .catch(this.handleError);
    }

    getResidentReports(residents) {
        return this.http.post('/api/residentreports', residents)
            .map((response: Response) => <ResidentReport[]>response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}
