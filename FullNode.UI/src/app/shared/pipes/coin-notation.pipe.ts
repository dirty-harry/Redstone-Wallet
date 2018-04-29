import { Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Pipe({
  name: 'coinNotation'
})
export class CoinNotationPipe implements PipeTransform {
  constructor (private globalService: GlobalService) {
    this.setCoinUnit();
  }

  private coinUnit: string;
  private coinNotation: number;
  private decimalLimit = 8;

  transform(value: number): number {
    let temp;
    if (typeof value === 'number') {
      switch (this.getCoinUnit()) {
        case "BTC":
          temp = value / 100000000;
          return temp.toFixed(this.decimalLimit);
        case "mBTC":
          temp = value / 100000;
          return temp.toFixed(this.decimalLimit);
        case "uBTC":
          temp = value / 100;
          return temp.toFixed(this.decimalLimit);
        case "TBTC":
          temp = value / 100000000;
          return temp.toFixed(this.decimalLimit);
        case "TmBTC":
          temp = value / 100000;
          return temp.toFixed(this.decimalLimit);
        case "TuBTC":
          temp = value / 100;
          return temp.toFixed(this.decimalLimit);
        case "XRD":
          temp = value / 100000000;
          return temp.toFixed(this.decimalLimit);
        case "mXRD":
          temp = value / 100000;
          return temp.toFixed(this.decimalLimit);
        case "uXRD":
          temp = value / 100;
          return temp.toFixed(this.decimalLimit);
        case "TXRD":
          temp = value / 100000000;
          return temp.toFixed(this.decimalLimit);
        case "TmXRD":
          temp = value / 100000;
          return temp.toFixed(this.decimalLimit);
        case "TuXRD":
          temp = value / 100;
          return temp.toFixed(this.decimalLimit);
      }
    }
  }

  getCoinUnit() {
    return this.coinUnit;
  }

  setCoinUnit() {
    this.coinUnit = this.globalService.getCoinUnit();
  };
}


