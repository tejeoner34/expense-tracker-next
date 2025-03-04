export interface Expense {
  id?: string;
  userId: string;
  category: string;
  amount: number;
  currency: string;
  date: Date;
}
