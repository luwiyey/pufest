
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

// This is a client component, so metadata must be exported from a server component.
// We can create a layout.tsx file in this directory to handle it if needed,
// but for a simple placeholder, we will omit it.

export default function SocialPlaceholderPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground text-center px-4">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold font-mono">Sorry, this link is a placeholder!</h1>
        <p className="text-muted-foreground mt-2">The social media profiles for this artist are not available.</p>
        <Button asChild className="mt-8">
            <Link href="/talent#also-featuring">
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Link>
        </Button>
      </div>
    </div>
  );
}
