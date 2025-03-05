'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    );
  }

  return (
    <button onClick={() => signIn('github')} className="bg-blue-500 text-white p-2 rounded">
      Login with GitHub
    </button>
  );
}
