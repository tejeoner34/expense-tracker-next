export default function EmailPassForm({
  formAction,
  buttonText,
  isLoading,
}: {
  formAction: (payload: FormData) => void;
  buttonText: string;
  isLoading: boolean;
}) {
  return (
    <form action={formAction} className="space-y-3">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border px-3 py-2 rounded-md"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border px-3 py-2 rounded-md"
        required
      />
      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md"
      >
        {isLoading ? 'Loading...' : buttonText}
      </button>
    </form>
  );
}
