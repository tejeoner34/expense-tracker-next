import CtaButton from '../ui/CtaButton';

export default function GithubForm({
  buttonText,
  isLoading,
  action,
}: {
  buttonText: string;
  isLoading: boolean;
  action: () => void;
}) {
  return (
    <form action={action}>
      <span>Use Github</span>
      <CtaButton buttonText={buttonText} isLoading={isLoading} />
    </form>
  );
}
