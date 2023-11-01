export interface ITransaction {
  amount: number;
  type: 'income' | 'expense';
  title: string;
}
