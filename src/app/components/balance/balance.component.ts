import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() balance = 0;
  title = '';
  constructor() {}

  ngOnInit(): void {
    if (this.balance > 0) {
      this.title = 'click to transfer money to Saving account';
    } else {
      this.title = 'not enough to transfer';
    }
  }
}
