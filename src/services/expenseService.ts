import { Expense } from '@/domain/expense';
import { ExpenseRepository } from '@/repositories/expenseRepository';

export class ExpenseService {
  constructor(private repository: ExpenseRepository) {}

  async addExpense(expense: Expense): Promise<Expense> {
    return this.repository.create(expense);
  }

  async editExpense(expense: Expense): Promise<Expense> {
    return this.repository.update(expense);
  }

  async removeExpense(expenseId: string): Promise<void> {
    await this.repository.delete(expenseId);
  }

  async getExpenses(userId: string): Promise<Expense[]> {
    return this.repository.findByUser(userId);
  }
}
