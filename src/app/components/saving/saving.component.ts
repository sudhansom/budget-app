import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {
  @Input() saving = 0;
  @Output() onSavingTransfer = new EventEmitter();
  title = '';
  showInput = false;
  amountToTransfer = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.saving) {
      this.title = 'click to transfer';
    } else {
      this.title = 'not enough to transfer';
    }
  }

  transferAmount() {
    if (this.amountToTransfer <= this.saving) {
      this.onSavingTransfer.emit(this.amountToTransfer);
      this.showInput = false;
    } else {
      alert('not enough...');
    }
  }

  changeToInput() {
    if (this.saving) {
      this.showInput = true;
    }
  }
}
