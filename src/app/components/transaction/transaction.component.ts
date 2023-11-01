import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITransaction } from './transaction.model';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  @Input() transactionType?: 'income' | 'expense';
  @Output() onTransactionAdded = new EventEmitter();

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {}

  addTransaction(amount: number, title: string) {
    this.onTransactionAdded.emit({ amount, title, type: this.transactionType });
  }

  onSubmit(form: NgForm) {
    this.dataService.updateData(form.value);
    this.onTransactionAdded.emit();
    setTimeout(() => {
      form.reset();
    }, 1000);
  }
}
