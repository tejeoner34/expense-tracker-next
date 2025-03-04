import { z } from 'zod';

export const expenseSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  category: z.string(),
  amount: z.number().positive(),
  currency: z.string(),
  date: z.string().transform((val) => new Date(val)),
});

export const updateExpenseSchema = expenseSchema.extend({
  id: z.string().uuid(),
  date: z.string().transform((val) => new Date(val)),
});
