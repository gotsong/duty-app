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
    userId = 1234
    residents
    selectedResidents: Resident[]
    residentReports

    ngOnInit(){
        console.log('Admin!')
        this.residents  = this.api.getResidents(this.userId)
    }

    getResidentsReport(){
        this.residentReports = this.api.getResidentReports(this.selectedResidents)
    }
}
