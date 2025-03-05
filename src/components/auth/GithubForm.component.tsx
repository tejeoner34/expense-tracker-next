export default function GithubForm({
  buttonText,
  action,
}: {
  buttonText: string;
  action: () => void;
}) {
  return (
    <form action={action}>
      <button type="submit" className="w-full bg-black text-white py-2 rounded-md mb-3">
        {buttonText}
      </button>
    </form>
  );
}
