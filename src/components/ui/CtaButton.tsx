import { Loader2 } from 'lucide-react';
import { Button } from './button';

export default function CtaButton({
  buttonText,
  isLoading,
}: {
  buttonText: string;
  isLoading: boolean;
}) {
  return (
    <Button disabled={isLoading} type="submit" className="w-full">
      {buttonText} {isLoading && <Loader2 className="animate-spin" size={20} />}
    </Button>
  );
}
