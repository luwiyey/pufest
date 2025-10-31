
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const Logo = () => (
    <img 
        src="logo.png" 
        alt="Panpacific University Logo"
        width="40"
        height="40"
    />
);


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/talent', 'label': 'Talent' },
  { href: '/contests', label: 'Contests' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/tickets', label: 'Tickets' },
];

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary text-lg lg:text-sm font-medium",
        isActive ? 'text-primary' : 'text-primary-foreground/70'
      )}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/50 shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl text-foreground">
           <Logo />
          <span className="font-headline bg-gradient-to-r from-white via-teal-400 to-blue-500 bg-clip-text text-transparent">PANPACIFIC UNIVERSITY</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild>
                <Link href="/tickets">Buy Tickets</Link>
            </Button>
            <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background text-foreground">
                <div className="flex flex-col space-y-6 p-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <Logo />
                        <span className="font-headline bg-gradient-to-r from-white via-green-400 to-blue-500 bg-clip-text text-transparent">PANPACIFIC UNIVERSITY</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xl text-foreground/80 hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
