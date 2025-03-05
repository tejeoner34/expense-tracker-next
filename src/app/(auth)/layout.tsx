import { Card } from '@/components/ui/card';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center p-1.5">
      <Card className="w-full max-w-lg">{children}</Card>
    </div>
  );
}
