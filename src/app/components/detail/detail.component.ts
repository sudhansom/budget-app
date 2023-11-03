import { Component, Input, OnInit } from '@angular/core';
import { ITransaction } from '../transaction/transaction.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() data: ITransaction[] = [];
  expenses: ITransaction[] = [];
  incomes: ITransaction[] = [];

  constructor() {}

  ngOnInit(): void {
    this.data.forEach((item) => {
      if (item.type === 'expense') {
        this.expenses.push(item);
      } else {
        this.incomes.push(item);
      }
    });
  }
}
