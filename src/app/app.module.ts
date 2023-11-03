import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SavingComponent } from './components/saving/saving.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    BalanceComponent,
    SavingComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
