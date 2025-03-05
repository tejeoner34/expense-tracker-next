import { AuthRepository } from './authRepository';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export class PrismaAuthRepository implements AuthRepository {
  async login(
    email: string,
    password: string
  ): Promise<{ error: string; success?: undefined } | { success: boolean; error?: undefined }> {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || !user.password) {
        return { error: 'Invalid email or password' };
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return { error: 'Invalid email or password' };
      }

      return { success: true };
    } catch (error) {
      console.log(error);
      throw new Error('Failed to login');
    }
  }

  async register(
    email: string,
    password: string
  ): Promise<{ error: string; success?: undefined } | { success: boolean; error?: undefined }> {
    try {
      if (!email || !password) {
        return { error: 'Email and password are required' };
      }

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return { error: 'User already exists' };
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      await prisma.user.create({
        data: { email, password: hashedPassword },
      });

      return { success: true };
    } catch (error) {
      console.log(error);
      throw new Error('Failed to register');
    }
  }
}
