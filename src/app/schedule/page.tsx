
import { scheduleData, Event } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Event Schedule | Panpacific Festival",
  description: "View the complete 2025 event schedule for the Panpacific Festival. Find out about performance times, stages, and attractions for the full day.",
};

const EventCard = ({ event, index }: { event: Event; index: number }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-border sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-background after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-primary-foreground bg-primary rounded-full">
        {event.time}
      </time>
      <div className="text-xl font-semibold text-foreground">{event.title}</div>
    </div>
    <div className="text-muted-foreground ml-0 sm:ml-[10.5rem]">
      <Badge variant={event.stage === 'Main Stage' ? 'default' : 'secondary'} className="mb-2">{event.stage}</Badge>
      <p>{event.description}</p>
    </div>
  </div>
);


export default function SchedulePage() {
  return (
    <div className="page-background">
      <div className="container mx-auto px-4 py-32 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground font-headline animate-fade-in hover:text-primary transition-all duration-300 cursor-default glitch" data-text="Event Schedule">Event Schedule</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            A look back at the complete guide to the performances, competitions, and attractions from Panpacific Festival 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.primary/20%)] hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="w-6 h-6" />
                <span>Full Day Itinerary</span>
              </CardTitle>
              <CardDescription>All times were in local time (PHT).</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <div className="p-4">
                  {scheduleData.map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                  ))}
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
