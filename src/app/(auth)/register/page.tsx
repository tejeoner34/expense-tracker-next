'use client';

import { registerAction } from '@/actions/auth';
import { signIn } from 'next-auth/react';
import { useActionState } from 'react';
import EmailPassForm from '@/components/auth/EmailPassForm.component';
import GithubForm from '@/components/auth/GithubForm.component';

export default function RegisterPage() {
  const [state, action, isLoading] = useActionState(registerAction, null);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        <GithubForm buttonText="Sign Up with GitHub" action={() => signIn('github')} />

        <EmailPassForm buttonText="Sign Up" formAction={action} isLoading={isLoading} />

        {state?.error && <p className="text-red-500 text-sm mt-2">{state?.error}</p>}
      </div>
    </div>
  );
}
