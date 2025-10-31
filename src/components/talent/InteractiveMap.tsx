
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { MapPin, X, Film, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const locations = [
  {
    id: 'manila',
    name: 'Oktoberfest',
    venue: 'Malate, Manila',
    date: '31 OCT 2025',
    coords: { top: '40%', left: '48%' },
    videoUrl: 'https://www.youtube.com/watch?v=yvWVfYwpMD0',
    ticketUrl: 'https://www.ticketnation.ph/events/manila-oktoberfest-halloween-party-edition',
  },
  {
    id: 'pangasinan',
    name: 'Panpacific Festival',
    venue: 'Urdaneta, Pangasinan',
    date: '30 OCT 2025',
    coords: { top: '35%', left: '40%' },
    videoUrl: 'https://www.youtube.com/watch?v=7TC19p1ut-w',
    ticketUrl: '/tickets',
  },
];

const mapImage = PlaceHolderImages.find(p => p.id === 'philippines-map');

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null);

  const getTicketLink = (url: string) => {
    if (url.startsWith('http')) {
      return <a href={url} target="_blank" rel="noopener noreferrer"><Ticket className="mr-2 h-3 w-3"/> Get Tickets</a>;
    }
    return <Link href={url}><Ticket className="mr-2 h-3 w-3"/> Get Tickets</Link>;
  };

  return (
    <div className="w-56 h-72 opacity-80 relative animate-fade-in-up">
      {mapImage && <Image src={mapImage.imageUrl} alt="Philippines Map" fill objectFit="contain" className="rounded-md" />}
      
      {/* Location Dots */}
      {locations.map(loc => (
        <button
          key={loc.id}
          aria-label={`View details for ${loc.name} in ${loc.venue}`}
          className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: loc.coords.top, left: loc.coords.left }}
          onClick={() => setSelectedLocation(loc)}
        >
          <div className={cn(
            "w-3 h-3 bg-[#39FF14] rounded-full animate-pulse transition-all",
            selectedLocation?.id === loc.id && "ring-2 ring-offset-2 ring-offset-black ring-cyan-400"
          )}></div>
           <span className="absolute -top-5 -left-1/2 transform -translate-x-1/4 whitespace-nowrap text-xs font-mono text-white bg-black/50 px-1 rounded">
             {loc.venue.split(',')[0]}
           </span>
        </button>
      ))}

      {/* Info Card */}
      {selectedLocation && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg shadow-2xl shadow-cyan-500/20 p-3 text-left animate-fade-in z-10">
          <button onClick={() => setSelectedLocation(null)} aria-label="Close location details" className="absolute top-1 right-1 text-gray-400 hover:text-white">
            <X className="w-4 h-4"/>
          </button>
          <h4 className="font-display text-lg text-cyan-400 uppercase">{selectedLocation.name}</h4>
          <p className="text-sm font-mono text-white">{selectedLocation.date}</p>
          <p className="text-xs text-gray-400 mb-3 flex items-center gap-1"><MapPin className="w-3 h-3"/> {selectedLocation.venue}</p>
          <div className="flex flex-col gap-2">
            <Button size="sm" variant="outline" asChild className="text-xs border-cyan-400/50 hover:bg-cyan-400/10 text-cyan-400 hover:text-cyan-300">
                <a href={selectedLocation.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Film className="mr-2 h-3 w-3"/> Watch Teaser
                </a>
            </Button>
             <Button size="sm" asChild className="text-xs bg-cyan-500 hover:bg-cyan-400 text-black">
                {getTicketLink(selectedLocation.ticketUrl)}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
