import { prisma } from '@/lib/prisma';
import { Expense } from '@/domain/expense';
import { ExpenseRepository } from './expenseRepository';

export class PrismaExpenseRepository implements ExpenseRepository {
  async create(expense: Expense): Promise<Expense> {
    return await prisma.expense.create({
      data: {
        id: expense.id,
        userId: expense.userId,
        category: expense.category,
        amount: expense.amount,
        currency: expense.currency,
        date: expense.date,
      },
    });
  }

  async update(expense: Expense): Promise<Expense> {
    return await prisma.expense.update({
      where: { id: expense.id },
      data: {
        category: expense.category,
        amount: expense.amount,
        currency: expense.currency,
        date: expense.date,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.expense.delete({ where: { id } });
  }

  async findById(id: string): Promise<Expense | null> {
    return await prisma.expense.findUnique({ where: { id } });
  }

  async findByUser(userId: string): Promise<Expense[]> {
    return await prisma.expense.findMany({ where: { userId } });
  }
}
