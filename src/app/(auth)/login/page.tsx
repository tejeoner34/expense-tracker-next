'use client';

import { loginAction } from '@/actions/auth';
import EmailPassForm from '@/components/auth/EmailPassForm.component';
import GithubForm from '@/components/auth/GithubForm.component';
import { signIn } from 'next-auth/react';
import { useActionState } from 'react';

export default function LoginPage() {
  const [state, formAction, isLoading] = useActionState(loginAction, null);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>

        {/* GitHub Login */}
        <GithubForm buttonText="Sign In with GitHub" action={() => signIn('github')} />

        {/* Email/Password Login */}
        <EmailPassForm buttonText="Sign In" formAction={formAction} isLoading={isLoading} />

        {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
      </div>
    </div>
  );
}
