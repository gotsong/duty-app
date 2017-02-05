import {Component,OnInit} from '@angular/core';
import {Api,ResidentReport, Resident} from '../../services/api';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
    selector: 'admin',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    providers: [],
    directives: [],
    pipes: []
})
export class Admin implements OnInit{
    constructor(private api: Api) {}

    residents: Resident[]
    selectedResidents: Resident[]
    residentReports: ResidentReport[]

    ngOnInit(){
        console.log('Admin!')
        this.api.getResidents()
            .map(residents => this.residents = residents)
    }

    getResidentsReport(){
        this.api.getResidentReports(this.selectedResidents)
            .map(reports => this.residentReports = reports)
    }
}
