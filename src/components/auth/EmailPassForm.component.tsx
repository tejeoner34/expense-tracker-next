import { Input } from '../ui/input';
import CtaButton from '../ui/CtaButton';

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
      <span>Use Email and password</span>
      <Input type="email" name="email" placeholder="Email" required />
      <Input type="password" name="password" placeholder="Password" required />
      <CtaButton buttonText={buttonText} isLoading={isLoading} />
    </form>
  );
}
