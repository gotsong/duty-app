import {Component,OnInit} from '@angular/core';
import {Api, Resident, ResidentReport} from '../../services/api';
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
    userId = 1234 //TODO: Security not implemented
    residents: Resident[] = []
    selectedResidents: Resident[] = []
    residentReports: ResidentReport[] = []

    ngOnInit(){
        console.log('Admin!')
        this.residents  = this.api.getResidents(this.userId)
    }

    getResidentsReport(){

        for(let x in this.residents) {
            if(this.residents[x].selected) {
                this.residents[x].selected = false
                this.selectedResidents.push(this.residents[x]);
            }
        }

        if(this.selectedResidents.length == 0) return

        this.residentReports = this.api.getResidentReports(this.selectedResidents)
        this.selectedResidents = [];
    }
}
