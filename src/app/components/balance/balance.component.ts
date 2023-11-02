import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  @Input() balance = 0;
  @Output() onTransferToSaving = new EventEmitter<number>();
  message = 'Your Balance is:';
  amountToTransfer = 0;
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
  transferToSavings() {
    if (this.amountToTransfer <= this.balance && this.amountToTransfer > 0) {
      this.onTransferToSaving.emit(this.amountToTransfer);
      setTimeout(() => {
        this.showInput = false;
      }, 1000);
    } else {
      alert('check your amount...');
    }
  }
  cancelTransfer() {
    this.showInput = false;
  }

  changeToInput() {
    if (this.balance) {
      this.showInput = true;
      this.amountToTransfer = 0;
    }
  }
}
