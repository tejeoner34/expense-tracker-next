import { routes } from '@/router/routes';
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: routes.login,
  },
});

export const config = { matcher: ['/dashboard/:path*'] };
