
'use client';

import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Send } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Simple inline SVG for TikTok as it's not in lucide-react
const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.29-3.05-2.5-6.87-1.75-9.81.19-.75.43-1.5.69-2.23.41-1.12.91-2.19 1.48-3.23.78-1.47 1.64-2.88 2.59-4.25.13-.19.28-.37.42-.56.38-.51.8-.97 1.22-1.42.04-.04.09-.08.13-.12.23-.23.48-.44.73-.66.02-.02.03-.03.05-.05.15-.15.31-.29.47-.42C9.56 1.8 10.91.93 12.525.02zM10.15 7.66c.28-.48.56-.96.84-1.43.22-.35.42-.71.62-1.07.12-.22.24-.43.36-.65.2-.35.38-.72.56-1.08.22-.44.4-.9.56-1.37.09-.27.15-.56.21-.84.01-.06.02-.12.03-.18.01-.05.02-.11-.03-.16.07-.28.11-.57.15-.86.02-.12.03-.24.04-.37.01-.06.01-.13.02-.19.04-.26.06-.52.08-.78.01-.07.01-.15-.02-.22.04-.26-.05-.52-.06-.79.01-.08.01-.16.01-.24.03-.23-.04-.47-.04-.71-.02-.13-.04-.25-.06-.38-.01-.03-.02-.06-.03-.09-.05-.16-.1-.33-.15-.49-.07-.24-.15-.48-.22-.72-.08-.26-.17-.51-.25-.77-.1-.3-.2-.6-.3-.9-.11-.33-.23-.66-.35-.98-.12-.33-.25-.66-.38-.98-.11-.27-.23-.54-.34-.81-.12-.28-.24-.56-.36-.84-.09-.2-.18-.41-.27-.61-.08-.19-.17-.37-.25-.56-.12-.26-.25-.52-.37-.78-.07-.16-.15-.31-.22-.47-.01-.01-.01-.03-.02-.04-.05-.08-.09-.17-.14-.25-.13-.25-.27-.49-.41-.73-.11-.2-.22-.39-.33-.59-.13-.24-.26-.48-.39-.72-.1-.18-.2-.37-.31-.55-.08-.14-.16-.27-.24-.41-.13-.23-.26-.46-.39-.69-.09-.15-.18-.3-.28-.45-.03-.05-.06-.1-.09-.15-.08-.12-.16-.23-.24-.35-.12-.17-.24-.35-.36-.52-.1-.14-.2-.28-.29-.42-.09-.14-.19-.28-.28-.42-.06-.09-.12-.18-.18-.27-.12-.18-.24-.36-.36-.54-.08-.11-.16-.23-.24-.34-.1-.13-.19-.26-.29-.39-.09-.12-.18-.24-.27-.36-.08-.1-.16-.2-.24-.3-.06-.08-.12-.16-.18-.24-.09-.12-.19-.25-.28-.37-.07-.09-.15-.19-.22-.28-.09-.12-.18-.24-.27-.36-.03-.05-.07-.09-.1-.14-.07-.1-.14-.19-.21-.29-.07-.1-.15-.2-.22-.3-.01-.01-.01-.02-.02-.03-.08-.11-.17-.21-.25-.32-.09-.12-.19-.24-.28-.37-.08-.1-.15-.21-.23-.31-.06-.08-.13-.16-.19-.24-.08-.11-.16-.21-.24-.32-.07-.09-.14-.18-.21-.27-.02-.03-.05-.06-.07-.09-.07-.09-.14-.18-.21-.27-.03-.04-.06-.08-.1-.12-.06-.08-.12-.16-.18-.24-.02-.03-.05-.05-.07-.08-.06-.08-.12-.16-.18-.24-.01-.01-.02-.03-.03-.04-.05-.06-.1-.13-.15-.2-.02-.03-.04-.05-.05-.06-.05-.06-.08-.1-.13-.15-.01-.02-.02-.03-.03-.03-.04-.04-.05-.07-.08-.1-.01-.01-.01-.02-.02-.02-.02-.02-.03-.03-.04-.04-.05-.06-.08-.1-3.32-3.03-6.68-3.03-10.1-.03-4.48 2.05-8.62 5.56-10.94 1.41-.93 2.94-1.63 4.54-2.11.18-.05.35-.1.53-.15.2-.06.4-.12.6-.18.18-.05.35-.1.53-.15.19-.05.38-.1.57-.15.12-.03.24-.06.36-.09.19-.05.38-.1.57-.14.13-.03.26-.06.39-.08.2-.04.39-.07.59-.1.14-.02.28-.04.42-.06.19-.03.39-.05.58-.07.15-.02.3-.03.45-.05.19-.02.38-.04.57-.06.16-.01.32-.03.48-.04.2-.02.39-.03.59-.04.16-.01.32-.02.48-.03.2-.01.39-.02.59-.02.16-.01.32-.01.48-.02.19-.01.38-.01.57-.01.17 0 .34-.01.51-.01 1.09 0 2.18-.01 3.27-.02v-3.32c-.93.01-1.86.01-2.79.02-.17 0-.34.01-.51.01-.19.01-.38.01-.57.01-.16 0-.32.01-.48.02-.19.01-.39.01-.59.02-.16.01-.32.02-.48.03-.19.01-.39.03-.59.04-.16.01-.32.02-.48.04-.19.02-.38.03-.57.05-.15.02-.3.03-.45.05-.19.02-.38.04-.58.07-.14.02-.28.04-.42.06-.2.03-.39.06-.59.1-.13.02-.26.05-.39.08-.19.05-.38.09-.57.14-.12.03-.24.06-.36.09-.19.05-.38.1-.57.15-.2.06-.4.12-.6.18-.18.05-.35.1-.53.15-1.59.48-3.13 1.18-4.54 2.11-3.51 2.32-5.59 6.46-5.56 10.94.03 3.42 1.39 6.79 3.03 10.1.02.04.05.08.07.13.06.11.12.22.18.33.09.16.18.32.27.48.07.12.14.25.21.37.11.19.22.38.33.57.08.14.17.28.25.42.09.16.18.31.27.47.07.13.15.25.22.38.09.15.18.3.27.45.07.11.13.23.2.34.07.12.15.24.22.36.08.13.17.26.25.39.07.11.15.22.22.33.09.14.18.28.27.42.06.1.13.19.19.29.08.12.17.24.25.37.07.1.15.21.22.31.02.03.04.07.06.1.09.14.18.28.27.42.07.1.14.2.21.31.02.03.04.05.06.08.08.12.17.25.25.37.07.09.14.19.21.28.02.03.05.06.07.09.07.11.15.22.22.33.01.02.02.04.03.06.07.11.15.22.22.33.04.07.09.13.13.2.06.09.12.19.18.28.08.11.16.22.24.33.05.07.1.14.16.2.06.09.12.19.18.28.01.02.02.04.03.06.06.09.12.17.18.26.04.06.08.12.12.18.04.07.09.13.13.2.01.02.02.03.03.05.03.05.07.1.1.14.04.06.08.11.11.17.02.03.04.06.05.09.03.05.06.09.07.14.02.03.03.05.04.07.01.01.02.02.03.04z" />
    </svg>
);


export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
        toast({
            variant: "destructive",
            title: "Invalid Email",
            description: "Please enter a valid email address.",
        });
        return;
    }

    toast({
        title: "Subscription Confirmed!",
        description: "Thank you for subscribing to our newsletter.",
    });
    setEmail('');
  }

  const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/schedule', label: 'Schedule' },
      { href: '/talent', label: 'Talent' },
      { href: '/contests', label: 'Contests' },
      { href: '/leaderboard', label: 'Leaderboard' },
      { href: '/tickets', label: 'Tickets' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/panpacificu', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/panpacificu/', name: 'Instagram' },
    { icon: TiktokIcon, href: 'https://www.tiktok.com/@panpacificu', name: 'Tiktok' },
    { icon: Youtube, href: 'https://www.youtube.com/@managementinformationsyste9901', name: 'Youtube' },
  ]

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="relative border-t-2 border-primary/20 bg-black/40 overflow-hidden text-gray-300">
      {/* Neon Edge Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Column 1: Logo / Title */}
        <div>
          <h2 className="text-3xl font-display text-primary uppercase tracking-widest">PANPACIFIC FESTIVAL</h2>
          <p className="mt-2 text-sm text-gray-400 font-mono">
            Live Music. Raw Energy. Pure Celebration.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-primary uppercase font-semibold text-sm mb-3 tracking-widest">Navigation</h3>
          <ul className="space-y-2 text-sm font-mono">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-primary/90 transition-colors duration-300 hover:pl-1 block"
                >
                  &gt; {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
         <div>
          <h3 className="text-primary uppercase font-semibold text-sm mb-3 tracking-widest">Contact Us</h3>
          <ul className="space-y-3 text-sm font-mono text-gray-400">
            <li className="flex items-start"><MapPin className="text-primary mr-3 h-4 w-4 mt-0.5 shrink-0" /> <span>Panpacific University, Urdaneta, Pangasinan</span></li>
            <li className="flex items-start"><Mail className="text-primary mr-3 h-4 w-4 mt-0.5 shrink-0" /> <span>dpo@panpacificu.edu.ph</span></li>
            <li className="flex items-start"><Phone className="text-primary mr-3 h-4 w-4 mt-0.5 shrink-0" /> <span>+63 912 345 6789</span></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-primary uppercase font-semibold text-sm mb-3 tracking-widest">Stay Updated</h3>
          <p className="text-sm mb-4 text-gray-400">Subscribe for the latest updates and announcements.</p>
          <form className="flex items-center">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-black/20 border-primary/30 rounded-r-none focus:ring-primary text-sm h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 rounded-l-none h-10 w-10" onClick={handleSubscribe}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
           <div className="flex gap-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-md border border-primary/20 hover:border-primary text-primary hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary))] "
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

       <div className="border-t border-primary/20 mt-8 py-6 text-center text-xs text-gray-500 font-mono relative z-10">
        <span>© 2025 PANPACIFIC FESTIVAL. ALL RIGHTS RESERVED.</span>
        <span className="mx-2">|</span>
        <Link href="/privacy-policy" className="hover:text-primary">PRIVACY POLICY</Link>
        <span className="mx-2">|</span>
        <Link href="/terms-of-service" className="hover:text-primary">TERMS OF SERVICE</Link>
      </div>
    </footer>
  );
}
