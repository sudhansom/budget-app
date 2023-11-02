import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {
  @Input() saving = 0;
  @Output() onTransferToBalance = new EventEmitter();
  title = '';
  showInput = false;
  targetAmount = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.saving) {
      this.title = 'click to transfer';
    } else {
      this.title = 'not enough to transfer';
    }
  }

  transferToBalance() {
    if (this.targetAmount <= this.saving && this.targetAmount > 0) {
      this.onTransferToBalance.emit(this.targetAmount);

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
    if (this.saving) {
      this.showInput = true;
      this.targetAmount = 0;
    }
  }
}
