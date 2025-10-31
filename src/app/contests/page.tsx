
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Guitar, Mic, PersonStanding, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contests | Panpacific Festival",
  description: "A look back at the incredible competitions from Panpacific Festival 2025: Battle of the Bands, Call for Performers, and the Cosplay Competition.",
};

const contestData = [
  {
    icon: Guitar,
    title: 'Battle of the Bands',
    description: 'Bands had what it took to rock the main stage, competing for the ultimate title.',
    link: 'https://bit.ly/PU-Fest-BOTB',
  },
  {
    icon: Mic,
    title: 'Call for Performers',
    description: 'Singers, dancers, magicians, and unique talents shared their skills on the Indie Grove stage.',
    link: 'https://bit.ly/PU-Fest-Performers',
  },
  {
    icon: PersonStanding,
    title: 'Cosplay Competition',
    description: 'Amazing characters were brought to life! Participants showcased their craftsmanship and performance skills to win amazing prizes.',
    link: 'https://bit.ly/PU-Fest-Cosplay25',
  },
];

export default function ContestsPage() {
  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-32 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground font-headline animate-fade-in hover:text-primary transition-all duration-300 cursor-default glitch" data-text="Contests of 2025">
            Contests of 2025
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            A look back at the incredible competitions from Panpacific Festival 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contestData.map((contest, index) => (
            <div key={contest.title} className="animate-fade-in-up group" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="h-full flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/30%)] hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-party-background opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="p-0 mb-4 flex flex-col items-center z-10">
                  <div className="w-16 h-16 bg-green-950/80 backdrop-blur-sm text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-700 animate-float">
                    <contest.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{contest.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 z-10">
                  <CardDescription>{contest.description}</CardDescription>
                </CardContent>
                <div className="mt-6 z-10">
                  <Button asChild variant="outline" className="group/button">
                    <a href={contest.link} target="_blank" rel="noopener noreferrer">
                      View Archives
                      <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
