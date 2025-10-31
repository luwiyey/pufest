
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Panpacific Festival",
  description: "Read the Privacy Policy for the Panpacific Festival website to understand how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-32 md:px-6 min-h-screen">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground font-headline animate-fade-in glitch" data-text="Privacy Policy">
              Privacy Policy
            </h1>
            <p className="mt-2 text-muted-foreground">Last updated: October 2025</p>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p>
              This is a placeholder for the Privacy Policy. This document will outline how the Panpacific Festival Website collects, uses, and protects your personal data when you use our website.
            </p>
            <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
            <p>
              This section will detail the types of information we might collect, such as names, email addresses for newsletters, and browsing data. For now, know that your privacy is a top priority.
            </p>
            <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p>
              This section will explain the purposes for which we use the collected data, like sending event updates or improving user experience.
            </p>
            <h2 className="text-xl font-bold text-foreground">3. Data Security</h2>
            <p>
              We are committed to ensuring that your information is secure. This section will describe the measures taken to prevent unauthorized access or disclosure.
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
