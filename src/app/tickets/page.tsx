
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Faq from '@/components/tickets/Faq';
import { Ticket, Star, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tickets | Panpacific Festival",
  description: "Ticket sales have ended for 2025. View the past ticket tiers (General Admission, VIP, VVIP) and pricing for reference for our next event.",
};

const ticketTiers = [
  {
    name: 'General Admission',
    price: '₱749',
    features: ['Full Day Access', 'Main Stage Viewing', 'Indie Grove Access'],
    icon: Ticket,
  },
  {
    name: 'VIP Box B',
    price: '₱1,499',
    features: ['All GA benefits', 'Elevated Viewing Deck', 'Exclusive Restrooms', '1 Free Drink'],
    icon: Star,
  },
  {
    name: 'VVIP Box A',
    price: '₱2,999',
    features: ['All VIP benefits', 'Front of Stage Access', 'Meet & Greet Raffle Entry', 'Unlimited Drinks'],
    icon: Users,
  },
];

export default function TicketsPage() {
  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-32 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground font-headline animate-fade-in hover:text-primary transition-all duration-300 cursor-default glitch" data-text="Ticket Information">
            Ticket Information
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Sales for this year's festival have ended. Check out the 2025 ticket tiers below for reference, and get ready for next year's announcement!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {ticketTiers.map((tier, index) => (
            <div key={tier.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 150 + 300}ms` }}>
              <Card className={`h-full flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/30%)] hover:-translate-y-2 ${tier.name.includes('VVIP') ? 'border-primary border-2' : ''}`}>
                <CardHeader className="p-0 mb-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-950 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-700">
                    <tier.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">{tier.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <ul className="space-y-2 text-muted-foreground">
                    {tier.features.map(feature => <li key={feature}>{feature}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Card className="bg-primary text-primary-foreground text-center p-8 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/80%)] hover:-translate-y-1">
            <h3 className="font-headline text-3xl">Buy 5, Get 1 Free!</h3>
            <p className="mt-2 text-lg opacity-80">We had a great promo this year! Look out for similar deals for the next event.</p>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <h2 className="text-center text-3xl font-bold mb-8 font-headline hover:text-primary transition-colors cursor-default">Frequently Asked Questions</h2>
          <Faq />
        </div>
      </div>
    </div>
  );
}
