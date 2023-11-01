import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

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

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    let total = 0;
    this.dataService.data.forEach((item) => {
      if (item.type === 'expense') {
        total = total - item.amount;
      } else {
        total = total + item.amount;
      }
    });
    this.balance = total - this.saving;
  }

  balanceTransfer(event: number) {
    this.balance = this.balance - event;
    this.saving = this.saving + event;
  }

  savingTransfer(event: number) {
    this.balance = this.balance + event;
    this.saving = this.saving - event;
  }

  updateTransaction() {
    this.fetchData();
  }
}
