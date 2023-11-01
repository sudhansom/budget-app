import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() balance = 0;
  @Output() onBalanceTransfer = new EventEmitter<number>();
  message = 'Your Balance is:';
  amountToTransfer = this.balance;
  showInput = false;
  title = '';
  constructor() {}

  ngOnInit(): void {
    if (this.balance > 0) {
      this.title = 'click to transfer money to Saving account';
    } else {
      this.title = 'not enough to transfer';
    }
  }
  transferAmount() {
    if (this.amountToTransfer <= this.balance) {
      this.onBalanceTransfer.emit(this.amountToTransfer);
      this.showInput = false;
    } else {
      alert('not enough...');
    }
  }

  changeToInput() {
    if (this.balance) {
      this.showInput = true;
    }
  }
}
