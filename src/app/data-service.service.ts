import { Injectable } from '@angular/core';
import { ITransaction } from './components/transaction/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  data: ITransaction[] = [
    {
      title: 'salary',
      amount: 900,
      type: 'income',
    },
    {
      title: 'Pizza',
      amount: 200,
      type: 'expense',
    },
    {
      title: 'salary2',
      amount: 400,
      type: 'income',
    },
    {
      title: 'Bread',
      amount: 100,
      type: 'expense',
    },
    {
      title: 'burrow',
      amount: 200,
      type: 'income',
    },
  ];

  constructor() {}

  updateData(expense: ITransaction) {
    setTimeout(() => {
      let currentBalance = this.data.reduce((acc, curr) => {
        if (curr.type === 'expense') {
          return acc - curr.amount;
        } else {
          return acc + curr.amount;
        }
      }, 0);
      console.log(currentBalance);
      if (expense.type === 'expense' && expense.amount < currentBalance) {
        this.data.push(expense);
      } else if (
        expense.type === 'expense' &&
        expense.amount > currentBalance
      ) {
        alert('not enough money.');
      } else {
        this.data.push(expense);
      }
    }, 1000);
  }
}
