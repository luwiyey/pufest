
'use client';
import Image from 'next/image';
import { talentData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Youtube, Facebook, Instagram, Twitter, Trophy, Bot, Star, Award, Film, Music, Ticket, Volume2, VolumeX, Send } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import InteractiveMap from '@/components/talent/InteractiveMap';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

const NeonStrobeText = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`${className} transition-all duration-100 hover:text-cyan-400`}>
    {children}
  </span>
);

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-[#39FF14] uppercase text-xl mb-4 tracking-widest">
    <NeonStrobeText>{children}</NeonStrobeText>
  </h2>
);

const Countdown = () => {
  const [isEventOver, setIsEventOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-10-30T20:30:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsEventOver(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsEventOver(true);
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnit = (value: number, label: string) => (
    <div>
      <div className="text-4xl font-bold text-[#39FF14] animate-pulse">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );

  if (isEventOver) {
    return (
        <div className="text-center font-mono text-2xl md:text-3xl text-red-500 font-bold tracking-widest animate-pulse">
            EVENT CONCLUDED
        </div>
    );
  }

  return (
     <div className="grid grid-cols-4 gap-2 text-center font-mono">
      {timeUnit(timeLeft.days, 'DAYS')}
      {timeUnit(timeLeft.hours, 'HOURS')}
      {timeUnit(timeLeft.minutes, 'MINS')}
      {timeUnit(timeLeft.seconds, 'SECS')}
    </div>
  )
}

const loadingMessages = [
  "> INITIALIZING CONNECTION...",
  "> ATTEMPTING TO BYPASS FIREWALL...",
  "> ACCESS GRANTED. AUTHENTICATING...",
  "> UPLOADING PAYLOAD: Panpacific Festival_HITS.PLS",
  "> DECRYPTING ARTIST DATABASE...",
  "> SESSION ACTIVE - READY TO JAM, PANPACIFICS?",
];

const awards = [
  {
    icon: Award,
    title: 'Filipino Music Awards 2025',
    description: 'Prominent winner, recognized as a key figure in Filipino hip-hop for his influential song "Upuan".',
    color: 'text-cyan-400',
  },
  {
    icon: Music,
    title: 'Awit Awards (2002-2021)',
    description: 'Multiple wins including Best Rap Recording, Song of the Year, Best Collaboration, and Album of the Year.',
    color: 'text-cyan-400',
  },
  {
    icon: Film,
    title: 'FAMAS Awards',
    description: 'Best Theme Song winner in both 2012 and 2015.',
    color: 'text-purple-400',
  },
  {
    icon: Trophy,
    title: 'MYX Music Awards',
    description: 'Several wins including Favorite Male Artist and Favorite Song.',
    color: 'text-red-400',
  },
  {
    icon: Star,
    title: 'Various Accolades',
    description: 'Philippine Hip-Hop Rap Artist of the Year, Globe Tatt Indie Rocker, GMMSF Male Recording Artist, and multiple Best Original Theme Song awards.',
    color: 'text-green-400',
  },
];


function Preloader({ onFinished }: { onFinished: () => void; }) {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const preloaderAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (preloaderAudioRef.current) {
        preloaderAudioRef.current.src = "preloadersound.mp3";
        preloaderAudioRef.current.play().catch(e => {
            console.error("Preloader audio autoplay was blocked:", e);
        });
    }

    let messageIndex = 0;
    const interval = setInterval(() => {
      if (messageIndex < loadingMessages.length) {
        setVisibleMessages(prev => [...prev, loadingMessages[messageIndex]]);
        messageIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onFinished, 1500); // Wait 1.5 seconds after last message
      }
    }, 1200); // Time between each message appearing

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 bg-[#111111] z-[100] flex items-center justify-center font-mono text-green-500/70 text-sm md:text-base">
        <audio ref={preloaderAudioRef} loop />
        <div className="w-full max-w-lg p-4">
            <div className="animate-pulse absolute top-4 left-4 text-xs text-left">ESTABLISHING SECURE LINK...</div>
            <div className="space-y-2 text-left">
                {visibleMessages.map((msg, index) => (
                    <p key={index} className="w-fit overflow-hidden whitespace-nowrap animate-typing border-r-2 border-r-green-500">{msg}</p>
                ))}
            </div>
        </div>
    </div>
  );
}


export default function TalentPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fanMessage, setFanMessage] = useState('');
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement>(null);
  const equalizerBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number>();
  
  const featuredArtist = talentData.find(t => t.id === 'gloc-9');
  const otherArtists = talentData.filter(t => t.id !== 'gloc-9');
  const featuredArtistImage = PlaceHolderImages.find(p => p.id === featuredArtist!.imageId);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (!isLoading && audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.play().catch((e) => {
        console.log("Audio autoplay was blocked by the browser.", e);
      });
    }
  }, [isLoading]);

  const handleToggleMute = () => {
    if(audioRef.current) {
      const currentlyMuted = !audioRef.current.muted;
      audioRef.current.muted = currentlyMuted;
      setIsMuted(currentlyMuted);
      if (!currentlyMuted && audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  }

  const handleSendMessage = () => {
    if (fanMessage.trim() === '') {
        toast({
            variant: "destructive",
            title: "Empty Message",
            description: "Please type a message before sending.",
        });
        return;
    }
    toast({
        title: "Message Sent!",
        description: "Your message has been sent to Gloc-9's fan terminal.",
    });
    setFanMessage('');
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    
    // Set initial state
    if (!audio.paused) setIsPlaying(true);
    setIsMuted(audio.muted);
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    }
  }, []);

  const firstAward = awards[0];
  const otherAwards = awards.slice(1);
  
  useEffect(() => {
    const animateEqualizer = () => {
        equalizerBarsRef.current.forEach(bar => {
            if (bar) {
                bar.style.height = `${Math.random() * 90 + 5}%`;
            }
        });
        animationFrameId.current = requestAnimationFrame(animateEqualizer);
    };

    if (isPlaying && !isMuted) {
        animationFrameId.current = requestAnimationFrame(animateEqualizer);
    } else {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        equalizerBarsRef.current.forEach(bar => {
            if (bar) {
                bar.style.height = '5%';
            }
        });
    }

    return () => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };
  }, [isPlaying, isMuted]);

  return (
    <>
      <audio ref={audioRef} autoPlay loop muted={isMuted} src="Sumayaw Ka.mp3" />
      {isLoading ? (
        <Preloader onFinished={handleFinishLoading} />
      ) : (
        <div className="schedule-background">
        <button onClick={handleToggleMute} aria-label={isMuted ? "Unmute audio" : "Mute audio"} className="fixed bottom-4 right-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-white/20 transition-colors">
          {isMuted ? <VolumeX className="w-5 h-5"/> : <Volume2 className="w-5 h-5"/>}
        </button>
        <div className="bg-transparent text-white font-body pt-20">
          
          {/* HERO SECTION */}
          <header className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-mono text-sm text-gray-400">LOADING..</p>
                <h1 className="font-display text-9xl text-[#39FF14] uppercase glitch" data-text={featuredArtist!.name}>{featuredArtist!.name}</h1>
              </div>
              <div className="text-right flex-shrink-0">
                <InteractiveMap />
              </div>
            </div>
          </header>

          {/* MAIN CONTENT (3 Columns) */}
          <main className="container mx-auto px-4 md:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Column 1: Music & Videos (Left) */}
            <div className="md:col-span-3 space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <section>
                    <SectionHeader>Music/Videos</SectionHeader>
                    <div className="space-y-4">
                        <iframe className="w-full aspect-video rounded-md border border-green-500/20" src="https://www.youtube.com/embed/7TC19p1ut-w" title="YouTube video player for Gloc-9" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe className="w-full aspect-video rounded-md border border-green-500/20" src="https://www.youtube.com/embed/3nKmv5oDzBw" title="YouTube video player for Gloc-9" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe className="w-full aspect-video rounded-md border border-green-500/20" src="https://www.youtube.com/embed/yvWVfYwpMD0" title="YouTube video player for Gloc-9" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </section>
                <section>
                    <SectionHeader>Awards &amp; Achievements</SectionHeader>
                      <div className="space-y-4">
                          <div className="flex items-start gap-4 bg-black/20 p-4 rounded-md border border-cyan-500/10">
                              <firstAward.icon className={`w-8 h-8 flex-shrink-0 ${firstAward.color}`} />
                              <div className="font-body">
                                  <h4 className="font-semibold text-white">{firstAward.title}</h4>
                                  <p className="text-sm text-gray-400">{firstAward.description}</p>
                              </div>
                          </div>
                          <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1" className="border-b-0">
                                  <AccordionTrigger className="text-sm font-semibold text-cyan-400 hover:no-underline hover:text-cyan-300 p-2 bg-black/20 rounded-md border border-cyan-500/10 justify-center">View More Achievements</AccordionTrigger>
                                  <AccordionContent className="pt-4 space-y-4">
                                      {otherAwards.map((award, index) => (
                                          <div key={index} className="flex items-start gap-4 bg-black/20 p-4 rounded-md border border-cyan-500/10">
                                              <award.icon className={`w-8 h-8 flex-shrink-0 ${award.color}`} />
                                              <div className="font-body">
                                                  <h4 className="font-semibold text-white">{award.title}</h4>
                                                  <p className="text-sm text-gray-400">{award.description}</p>
                                              </div>
                                          </div>
                                      ))}
                                  </AccordionContent>
                              </AccordionItem>
                          </Accordion>
                      </div>
                </section>
            </div>

            {/* Column 2: Featured & News (Center) */}
            <div className="md:col-span-6 space-y-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <SectionHeader>ABOUT</SectionHeader>
                        <div className="flex gap-4">
                            <a href="https://www.youtube.com/channel/UChMtKfu2xXx4EPzMwuudlLQ" target="_blank" rel="noopener noreferrer" aria-label="Gloc-9 on Youtube" className="text-gray-400 hover:text-white transition-colors hover:scale-110 hover:drop-shadow-[0_0_5px_#fff]"><Youtube className="w-6 h-6"/></a>
                            <a href="https://www.facebook.com/glocdash9/" target="_blank" rel="noopener noreferrer" aria-label="Gloc-9 on Facebook" className="text-gray-400 hover:text-white transition-colors hover:scale-110 hover:drop-shadow-[0_0_5px_#fff]"><Facebook className="w-6 h-6"/></a>
                            <a href="https://www.instagram.com/glocdash9/" target="_blank" rel="noopener noreferrer" aria-label="Gloc-9 on Instagram" className="text-gray-400 hover:text-white transition-colors hover:scale-110 hover:drop-shadow-[0_0_5px_#fff]"><Instagram className="w-6 h-6"/></a>
                        </div>
                    </div>
                     <div className="w-full border border-green-500/30 p-2 rounded-md mb-6">
                        {featuredArtistImage && (
                            <Image
                                src={featuredArtistImage.imageUrl}
                                alt={`Photograph of ${featuredArtist!.name}`}
                                data-ai-hint={featuredArtistImage.imageHint}
                                width={800}
                                height={450}
                                className="w-full object-cover rounded-sm"
                            />
                        )}
                    </div>
                    <p className='font-body text-gray-300 leading-relaxed'>{featuredArtist!.bio}</p>
                </section>
                <section>
                  <SectionHeader>Notable Releases</SectionHeader>
                  <div className="grid grid-cols-3 gap-4 [perspective:1000px]">
                    {[
                      'G9 (2003)', 'Ako Si... (2005)', 'Diploma (2007)', 'Matrikula (2009)',
                      'Talumpati (2011)', 'MKNM: Mga Kwento ng Makata (2012)', 'Liham at Lihim (2013)',
                      'Sukli (2016)', 'Poot at Pag-ibig (2021)', 'Pilak (2023)', 'Sari-Sari Story (2024)', 'Project A (2025)',
                    ].map(album => (
                       <div key={album} className="bg-black/20 aspect-square rounded-md border border-green-500/20 flex items-center justify-center p-2 text-center text-xs font-mono transition-transform duration-500 hover:[transform:rotateY(10deg)_rotateX(5deg)] hover:shadow-[0_0_30px_-5px_#00FFFF40]">
                        {album}
                       </div>
                    ))}
                  </div>
                </section>
            </div>

            {/* Column 3: Gigs & Events & Audio (Right) */}
            <div className="md:col-span-3 space-y-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <section>
                    <SectionHeader>Next Show</SectionHeader>
                    <div className="bg-black/20 p-4 rounded-md border border-green-500/10 text-center">
                        <p className="text-center font-display text-white text-2xl mt-2">Panpacific Festival</p>
                        <p className="text-center text-green-400 text-3xl font-mono mb-2">30.10.2025</p>
                        <Countdown />
                    </div>
                </section>
                <section>
                    <SectionHeader>Fan Terminal Access</SectionHeader>
                    <div className="relative">
                        <Bot className="absolute left-3 top-3 w-5 h-5 text-green-500/50"/>
                        <Textarea 
                            placeholder="type a message for gloc-9..." 
                            className="w-full bg-black border border-green-500/30 rounded-md pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#00FFFF] focus:outline-none font-mono min-h-[120px]" 
                            value={fanMessage}
                            onChange={(e) => setFanMessage(e.target.value)}
                        />
                    </div>
                    <Button onClick={handleSendMessage} className="w-full mt-2 bg-green-500/20 border border-green-500/50 hover:bg-green-500/30 text-green-400">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </section>
                <section>
                    <SectionHeader>Audio Controls</SectionHeader>
                    <div className="w-full h-48 bg-black border border-green-500/30 rounded-lg flex items-center justify-center p-4">
                        <div className="w-full h-full flex items-end gap-1">
                            {[...Array(16)].map((_, i) => (
                                <div
                                    key={i}
                                    ref={el => equalizerBarsRef.current[i] = el}
                                    className="flex-1 bg-[#39FF14]"
                                    style={{ height: '5%', transition: 'height 0.1s ease-out' }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border-2 border-[#39FF14] bg-black flex items-center justify-center relative animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full absolute top-2"></div>
                            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-gray-700"></div>
                            <div className={`absolute w-full h-full ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }}>
                                <div className="w-1 h-8 bg-[#39FF14] absolute top-1/2 -translate-y-1/2 left-[calc(50%-2px)]"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            {/* Also Featuring Section (Full Width After Grid) */}
            <section id="also-featuring" className="md:col-span-12 space-y-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <SectionHeader>Also Featuring</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherArtists.map((artist) => {
                  const artistImage = PlaceHolderImages.find(p => p.id === artist.imageId);
                  return (
                    <div key={artist.id} className="bg-black/20 p-6 rounded-lg border border-cyan-500/20 transition-all duration-300 hover:border-cyan-500/70 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                      {artistImage && (
                        <Image
                          src={artistImage.imageUrl}
                          alt={`Promotional image of ${artist.name}`}
                          data-ai-hint={artistImage.imageHint}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover rounded-md mb-6"
                        />
                      )}
                      <h3 className="font-display text-4xl text-white uppercase glitch" data-text={artist.name}>{artist.name}</h3>
                      <p className="font-mono text-cyan-400 text-sm mb-4">{artist.genre}</p>
                      <p className='font-body text-gray-400 leading-relaxed text-sm mb-6'>{artist.bio}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </div>
      )}
    </>
  );
}
