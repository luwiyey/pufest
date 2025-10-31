
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Panpacific Festival",
  description: "Review the Terms of Service for the Panpacific Festival website. Your use of this site is subject to these terms.",
};

export default function TermsOfServicePage() {
  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-32 md:px-6 min-h-screen">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground font-headline animate-fade-in glitch" data-text="Terms of Service">
              Terms of Service
            </h1>
            <p className="mt-2 text-muted-foreground">Last updated: October 2025</p>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Welcome to the Panpacific Festival Website! This is a placeholder for our Terms of Service. By accessing or using our website, you agree to be bound by these terms.
            </p>
            <h2 className="text-xl font-bold text-foreground">1. Use of Our Service</h2>
            <p>
              This section will outline the permitted uses of the website, including rules for user conduct and any restrictions on content.
            </p>
            <h2 className="text-xl font-bold text-foreground">2. Intellectual Property</h2>
            <p>
              The content on this site, including text, graphics, logos, and images, is the property of the Panpacific Festival Website and is protected by copyright laws. This section will clarify ownership and usage rights.
            </p>
            <h2 className="text-xl font-bold text-foreground">3. Limitation of Liability</h2>
            <p>
              This section will specify the extent of our liability regarding the use of this website. Information is provided "as is" and we make no guarantees of its accuracy.
            </p>
          </div>
           <div className="mt-12 text-center">
            <Button asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Home
                </Link>
            </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
