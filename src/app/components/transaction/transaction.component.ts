import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITransaction } from './transaction.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  @Input() transactionType?: 'income' | 'expense';
  @Output() onTransactionAdded = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addTransaction(amount: number, title: string) {
    this.onTransactionAdded.emit({ amount, title, type: this.transactionType });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
