import { InvestimentService } from './../../_services/investiment.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.scss']
})
export class RescueComponent implements OnInit {
  investiment: any = null;
  acoes: FormArray = this.fb.array([]);
  total = 0;
  modalType: 'ERROR' | 'SUCCESS' | '' = '';
  errors: string[] = [];
  @ViewChild('modal') modal!: TemplateRef<any>;
  isLoading: boolean = false;
  constructor(
    private investimentService: InvestimentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private currencyPipe: CurrencyPipe,
    private fb: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(params => {

      // Captura a index passada pelo parametro da rota
      if(Object.keys(params).length > 0){
        this.investiment = this.investimentService.investiments.value[params['index']];

        // Lista em formulário as acoes

        for (const acao of this.investiment.acoes) {
          let saldo = (this.investiment.saldoTotal * acao.percentual) / 100;
          let group = this.fb.group({ ...acao, saldo, saldoResgatar: this.fb.control(0, Validators.max(saldo)) });
          this.acoes.push(group);
        }
        this.getValorTotal();


      } else {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit(): void {

  }

  getError(c: FormControl): string | any {
    if(c.hasError('max')){
      return `O valor a resgatar não pode ser maior que ${this.currencyPipe.transform(c.getError('max').max, 'BRL')}`;
    }
    return;
  }

  getValorTotal(){
    this.acoes.valueChanges.subscribe(r => {
      this.total = 0;
      for (const acao of r) {
        this.total = this.total + acao.saldoResgatar;
      }
    })
  }

  confirmRescue() {
    this.isLoading = true;
    if(this.total <= 0){
       this.openModal(800, 'SUCCESS', ['Insira os valores para confirmar o resgate']);
       return;
    }
    setTimeout(() => {
      if(this.acoes.valid){
        this.openModal(800, 'SUCCESS');
      } else {
        let errors: string[] = [];
        this.acoes.controls.forEach((e: any) => {
          if(e.controls['saldoResgatar'].hasError('max')) {
            errors.push(`<b>${e.controls.nome.value}</b>: O valor a resgatar não pode ser maior que ${this.currencyPipe.transform(e.controls['saldoResgatar'].getError('max').max, 'BRL')}`)
          }
        })
        this.openModal(800, 'ERROR', errors);
      }
      this.isLoading = false;
    }, 1200);
  }

  openModal(width: number, type: 'SUCCESS' | 'ERROR', errors: string[] = []){
    this.modalType = type;
    if(errors.length > 0) this.errors = errors;
    this.dialog.open(this.modal, {
      width: width.toString()+'px',
      height: '300px'
    });
  }

  resetValues(){
    this.acoes.controls.forEach((e: any) => {
      e.controls['saldoResgatar'].setValue(0);
    })
  }
}
