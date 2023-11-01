import { Injectable } from '@angular/core';
import { ITransaction } from './components/transaction/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  data = [
    {
      title: 'title1',
      amount: 900,
      type: 'income',
    },
    {
      title: 'title2',
      amount: 200,
      type: 'expense',
    },
    {
      title: 'title3',
      amount: 400,
      type: 'income',
    },
    {
      title: 'title4',
      amount: 100,
      type: 'expense',
    },
  ];
  constructor() {}

  updateData(expense: ITransaction) {
    this.data.push(expense);
  }
}
