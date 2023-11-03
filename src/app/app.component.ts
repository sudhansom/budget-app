import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { ITransaction } from './components/transaction/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'budget-app';
  constructor(private dataService: DataServiceService) {}
  saving = 0;
  balance = 0;
  progressing = false;
  data: ITransaction[] = [];

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.data = this.dataService.data;
    let total = 0;
    this.data.forEach((item) => {
      if (item.type === 'expense') {
        total = total - item.amount;
      } else {
        total = total + item.amount;
      }
    });
    this.balance = total - this.saving;
    console.log(this.dataService.data);
  }

  handleTransferToBalance(event: number) {
    this.progressing = true;
    setTimeout(() => {
      this.balance = this.balance - event;
      this.saving = this.saving + event;
      this.progressing = false;
      this.data = this.dataService.data;
    }, 1000);
  }

  handleTransferToSaving(event: number) {
    this.progressing = true;
    setTimeout(() => {
      this.balance = this.balance + event;
      this.saving = this.saving - event;
      this.progressing = false;
    }, 1000);
  }

  handleAddTransaction() {
    this.progressing = true;
    setTimeout(() => {
      this.fetchData();
      this.progressing = false;
    }, 1000);
  }
}
