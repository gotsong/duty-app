import {Injectable} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Api,DutyPeriod, ResidentReport} from '../../services/api';
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
    duties: DutyPeriod[]
    residentReport: ResidentReport
    start: DateTimeFormat
    end: DateTimeFormat


    ngOnInit(){
        console.log('Duty!')
        this.api.getDuties(this.userId)
            .map(duties => this.duties = duties)
    }

    addDuty(){
        this.api.addDuty({startDate: this.start,endDate: this.end})
            .map(duties => {
                return this.duties = duties;
            })
    }

    getResidentReport(){
        this.api.getResidentReport(this.userId)
            .map(report => {
                return this.residentReport = report;
            })
    }
}
