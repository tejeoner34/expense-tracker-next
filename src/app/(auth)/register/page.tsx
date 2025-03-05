'use client';

import { registerAction } from '@/actions/auth';
import { signIn } from 'next-auth/react';
import { useActionState } from 'react';
import EmailPassForm from '@/components/auth/EmailPassForm.component';
import GithubForm from '@/components/auth/GithubForm.component';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterPage() {
  const [state, action, isLoading] = useActionState(registerAction, null);

  return (
    <>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <GithubForm
          buttonText="Sign Up with GitHub"
          action={() => signIn('github')}
          isLoading={isLoading}
        />
        <EmailPassForm buttonText="Sign Up" formAction={action} isLoading={isLoading} />

        {state?.error && <p className="text-red-500 text-sm mt-2">{state?.error}</p>}
      </CardContent>
    </>
  );
}
