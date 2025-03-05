'use server';

import { PrismaAuthRepository } from '@/repositories/auth/prismaAuthRepository';
import { AuthService } from '@/services/authService';

const authService = new AuthService(new PrismaAuthRepository());

export const loginAction = async (
  state: { error: string; success?: undefined } | { success: boolean; error?: undefined } | null,
  formData: FormData
) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return await authService.login(email, password);
};

export const registerAction = async (
  state: { error: string; success?: undefined } | { success: boolean; error?: undefined } | null,
  formData: FormData
) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return await authService.register(email, password);
};
