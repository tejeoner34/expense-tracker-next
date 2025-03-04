import { Expense } from '@/domain/expense';

export interface ExpenseRepository {
  create(expense: Expense): Promise<Expense>;
  update(expense: Expense): Promise<Expense>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Expense | null>;
  findByUser(userId: string): Promise<Expense[]>;
}
