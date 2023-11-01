import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.scss'],
})
export class SavingComponent implements OnInit {
  @Input() saving = 0;
  title = '';

  constructor() {}

  ngOnInit(): void {
    if (this.saving) {
      this.title = 'click to transfer';
    } else {
      this.title = 'not enough to transfer';
    }
  }
}
