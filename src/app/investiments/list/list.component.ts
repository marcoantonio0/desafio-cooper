import { InvestimentService } from './../../_services/investiment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  investiments: any[] = [];
  displayedColumns: string[] = ['name', 'objective', 'total'];
  constructor(
    private investimentService: InvestimentService,
    private route: Router
  ) {
    this.investiments = this.investimentService.investiments.value;
  }

  ngOnInit(): void {
  }

  openInvestiment(row: any){
    let rowIndex = this.investiments.findIndex(v => v.nome == row.nome);
    if(row.indicadorCarencia === 'N'){
      this.route.navigate(['investiments/rescue/'+rowIndex])
    }
  }

}
