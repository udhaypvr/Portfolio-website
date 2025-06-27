import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/80">
          &copy; {new Date().getFullYear()} StaticFolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
