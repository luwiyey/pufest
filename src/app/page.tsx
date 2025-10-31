
'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { ArrowRight, PlayCircle, School, Music, ListMusic, Play, Pause } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { festivalPlaylist, PlaylistSong } from "@/lib/data";
import { useState, useRef, useEffect } from "react";


const galleryImages = PlaceHolderImages.filter(p => p.imageHint.includes("gallery"));


const Section = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <section
    className={cn("w-full py-12 md:py-24 lg:py-32", className)}
    {...props}
  />
);

function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-neutral-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative z-20 text-center">
         <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-8 animate-fade-in-up">
          PANPACIFIC UNIVERSITY
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto animate-fade-in-up [animation-delay:0.3s]">
          Relive the unforgettable moments, the electrifying performances, and the vibrant energy of this year's Panpacific Festival.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up [animation-delay:0.6s]">
          <Button asChild size="lg">
            <Link href="/schedule">View Full Schedule <ArrowRight /></Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href="/talent">Meet the Stars <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function PanpacificSection({ puBuildingImage }: { puBuildingImage: ImagePlaceholder | undefined }) {
    return (
      <Section className="relative">
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-enter-from-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                The Heart of the Celebration
              </h2>
              <h3 className="text-2xl font-semibold mt-2 text-foreground/80">Panpacific University</h3>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                The Panpacific Festival is more than just an event; it's a celebration of the spirit, creativity, and community of Panpacific University. We are proud to host this festival, bringing together students, faculty, and the local community for an unforgettable experience.
              </p>
              <Button asChild size="lg" className="mt-8">
                <a href="https://www.panpacificu.edu.ph/" target="_blank" rel="noopener noreferrer">
                  Learn More About PU <School className="ml-2" />
                </a>
              </Button>
            </div>
            <div className="animate-enter-from-right">
              {puBuildingImage && (
                <Card className="overflow-hidden shadow-2xl transition-all hover:shadow-primary/40 hover:scale-105 duration-500 group">
                    <Image
                      src={puBuildingImage.imageUrl}
                      alt={puBuildingImage.description}
                      data-ai-hint={puBuildingImage.imageHint}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-500"
                    />
                </Card>
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  }


function AftermovieSection() {
  return (
    <Section>
      <div className="h-[40rem] w-full relative flex flex-col items-center justify-center antialiased">
         <div className="max-w-4xl mx-auto p-4">
             <h2 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Relive the Hype: The Official Aftermovie
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
               Didn't make it? Or want to experience it all over again? Hit play and immerse yourself in the best moments of the Panpacific Festival.
            </p>
            <div className="mx-auto mt-12 max-w-4xl">
              <Card className="overflow-hidden shadow-2xl transition-all hover:shadow-primary/20 hover:scale-105 duration-500 border-2 border-primary/50">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <video
                      src="aftermovie.mp4"
                      controls
                      className="w-full h-full rounded-lg object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>

    </Section>
  );
}

function GallerySection() {
  return (
    <Section>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Captured Moments</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the sea of faces, the roaring crowd, and the incredible talent that made the Panpacific Festival a smash hit.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group">
                      <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          width={600}
                          height={800}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </Section>
  );
}

function PlaylistSection() {
  const [currentSong, setCurrentSong] = useState<PlaylistSong | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = (song: PlaylistSong) => {
    if (audioRef.current) {
      if (currentSong?.src === song.src && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Stop currently playing song if there is one
        if (isPlaying) {
          audioRef.current.pause();
        }
        setCurrentSong(song);
        audioRef.current.src = song.src;
        audioRef.current.play().catch(e => console.error("Autoplay was prevented:", e));
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrentSong(null);
    }

    audio.addEventListener('ended', handleEnded);

    return () => {
        audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <Section className="relative">
      <audio ref={audioRef} />
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Festival Playlist</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The sounds that defined the Panpacific Festival. Relive the moments with the official playlist.
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <ListMusic className="w-8 h-8 mr-4 text-primary" />
                <h3 className="text-2xl font-bold font-headline">Panpacific Festival Hits</h3>
              </div>
              <ul className="space-y-2">
                {festivalPlaylist.map((song: PlaylistSong, index: number) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center">
                      <Music className="w-5 h-5 mr-4 text-muted-foreground" />
                      <div>
                        <p className="font-semibold text-foreground">{song.title}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                      onClick={() => handlePlayPause(song)}
                    >
                      {isPlaying && currentSong?.src === song.src ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}


export default function Home() {
  const puBuildingImage = PlaceHolderImages.find(p => p.id === "pu-building");
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-white">
      <main className="flex-1">
        <HeroSection />
        <PanpacificSection puBuildingImage={puBuildingImage} />
        <AftermovieSection />
        <GallerySection />
        <PlaylistSection />
      </main>
    </div>
  );
}
