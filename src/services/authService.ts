import { AuthRepository } from '@/repositories/auth/authRepository';

export class AuthService {
  constructor(private repository: AuthRepository) {}

  async login(email: string, password: string) {
    return await this.repository.login(email, password);
  }

  async register(email: string, password: string) {
    return await this.repository.register(email, password);
  }
}
