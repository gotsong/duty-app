import {Injectable} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Api} from '../../services/api';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
    selector: 'duty',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    providers: [Api],
    directives: [],
    pipes: []
})

@Injectable()
export class Duty implements OnInit{
    constructor(private api: Api){}

    userId = 1234; //TODO: Security not implemented
    duties
    residentReport
    firstName
    lastName
    violationCount
    violations
    start: Date
    end: Date


    ngOnInit(){
        console.log('Duty!')
        this.duties = this.api.getDuties(this.userId)
    }

    addDuty(){
        this.duties = this.api.addDuty({startDate: this.start,endDate: this.end})
    }

    getResidentReport(){
        this.residentReport = this.api.getResidentReport(this.userId)
        this.firstName = this.residentReport.firstName
        this.lastName = this.residentReport.lastName
        this.violationCount = this.residentReport.violationCount
        this.violations = this.residentReport.violations
    }
}

