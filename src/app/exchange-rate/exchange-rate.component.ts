import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../service/exchange.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit {
  constructor(private exchangeService: ExchangeService) {}

  rates: any;

  exchangeForm!: FormGroup;

  ngOnInit(): void {
    this.getAllRate();

    this.exchangeForm = new FormGroup({
      rate1: new FormControl('1'),
      rate2: new FormControl('1'),
      value1: new FormControl('0'),
      value2: new FormControl('0'),
    });
  }

  getAllRate() {
    this.exchangeService.getAll().subscribe((res) => {
      this.exchangeService = res;
      this.rates = res;
    });
  }

  OnChange1() {
    let koef = this.exchangeForm.value.rate1 / this.exchangeForm.value.rate2;
    let newValue2 = (this.exchangeForm.value.value1 / koef).toFixed(2);
    this.exchangeForm.get('value2')?.patchValue(newValue2);
  }
  OnChange2() {
    let koef = this.exchangeForm.value.rate2 / this.exchangeForm.value.rate1;
    let newValue1 = (this.exchangeForm.value.value2 * koef).toFixed(2);
    this.exchangeForm.get('value1')?.patchValue(newValue1);
  }
}
