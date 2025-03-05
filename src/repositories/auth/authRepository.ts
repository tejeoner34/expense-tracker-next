export interface AuthRepository {
  login(
    email: string,
    password: string
  ): Promise<{ error: string; success?: undefined } | { success: boolean; error?: undefined }>;
  register(
    email: string,
    password: string
  ): Promise<{ error: string; success?: undefined } | { success: boolean; error?: undefined }>;
}
