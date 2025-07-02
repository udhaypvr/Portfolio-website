'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold font-headline text-primary">
            PortFolio
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95">
          <nav className="flex flex-col items-stretch space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
