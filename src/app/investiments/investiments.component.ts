import { InvestimentService } from './../_services/investiment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investiments',
  templateUrl: './investiments.component.html',
  styleUrls: ['./investiments.component.scss']
})
export class InvestimentsComponent implements OnInit {
  isLoading = true;
  hasError = false;
  constructor(
    private investimentService: InvestimentService
  ) { }

  ngOnInit(): void {
    this.investimentService.getInvestiments().subscribe(r => {
      this.isLoading = false;
    }, e => {
      this.isLoading = false;
      this.hasError = true;
    });
  }

}
