import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestimentService {
  investiments = new BehaviorSubject([]);
  constructor(
    private http: HttpClient
  ) { }

  getInvestiments(): Observable<any> {
    return this.http.get(environment.apiUrl+'ca4ec77d-b941-4477-8a7f-95d4daf7a653').pipe(map((v: any) => {
      if(parseInt(v.response.status) === 200){
        this.investiments.next(v.response.data.listaInvestimentos);
        return v;
      }
      throw v;
    }))
  }
}
