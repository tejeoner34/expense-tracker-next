'use server';

import { ExpenseService } from '@/services/expenseService';
import { PrismaExpenseRepository } from '@/repositories/prismaExpenseRepository';
import { revalidatePath } from 'next/cache';
import { expenseSchema, updateExpenseSchema } from '@/schemas/expense.schema';

const expenseService = new ExpenseService(new PrismaExpenseRepository());

const revalidate = () => revalidatePath('/dashboard');

export async function addExpenseAction(formData: FormData) {
  try {
    const expense = expenseSchema.parse({
      userId: formData.get('userId'),
      category: formData.get('category'),
      amount: Number(formData.get('amount')),
      currency: formData.get('currency'),
      date: formData.get('date'),
    });

    await expenseService.addExpense(expense);

    revalidate();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add expense');
  }
}

export async function getExpensesAction(userId: string) {
  if (!userId) throw new Error('User ID is required');

  return await expenseService.getExpenses(userId);
}

export async function deleteExpenseAction(expenseId: string) {
  if (!expenseId) throw new Error('Expense ID is required');

  await expenseService.removeExpense(expenseId);

  revalidate();
}

export async function updateExpenseAction(formData: FormData) {
  try {
    const expense = updateExpenseSchema.parse({
      id: formData.get('id'),
      userId: formData.get('userId'),
      category: formData.get('category'),
      amount: Number(formData.get('amount')),
      currency: formData.get('currency'),
      date: formData.get('date'),
    });

    await expenseService.editExpense(expense);

    revalidate();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update expense');
  }
}
