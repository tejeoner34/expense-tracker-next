'use server';

import { PrismaAuthRepository } from '@/repositories/auth/prismaAuthRepository';
import { AuthService } from '@/services/authService';
import { redirect } from 'next/navigation';

const authService = new AuthService(new PrismaAuthRepository());

export const loginAction = async (
  state: { error: string; success?: undefined } | { success: boolean; error?: string } | null,
  formData: FormData
) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return await authService.login(email, password);
};

export const registerAction = async (
  state: { error: string; success?: undefined } | { success: boolean; error?: string } | null,
  formData: FormData
) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = await authService.register(email, password);
  if (result.success) {
    redirect('/login');
  }
  return result;
};
