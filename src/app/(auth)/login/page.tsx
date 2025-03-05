'use client';

import { loginAction } from '@/actions/auth';
import EmailPassForm from '@/components/auth/EmailPassForm.component';
import GithubForm from '@/components/auth/GithubForm.component';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { signIn } from 'next-auth/react';
import { useActionState } from 'react';

export default function LoginPage() {
  const [state, formAction, isLoading] = useActionState(loginAction, null);

  return (
    <>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* GitHub Login */}
        <GithubForm
          buttonText="Sign In with GitHub"
          action={() => signIn('github')}
          isLoading={isLoading}
        />

        {/* Email/Password Login */}
        <EmailPassForm buttonText="Sign In" formAction={formAction} isLoading={isLoading} />

        {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
      </CardContent>
    </>
  );
}
