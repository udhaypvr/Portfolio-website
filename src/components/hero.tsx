import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from './fade-in';
import DecryptedText from '@/components/ui/decrypted-text';

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24 flex flex-col items-center justify-center text-center">
      <FadeIn> {/* This FadeIn wraps the headline */}
        <DecryptedText
          text="Building Digital Experiences"
          speed={70}
          sequential={true}
          revealDirection="start"
          animateOn="view"
          parentClassName="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight"
        />
      </FadeIn>

      {/* NEW: Apply DecryptedText to the paragraph */}
      <FadeIn delay="0.2s"> {/* This FadeIn wraps the paragraph */}
        <DecryptedText
          text="Hi, I'm a passionate developer creating modern and responsive web applications. Welcome to my personal space where I share my projects and journey."
          speed={30} // Adjust speed for paragraph (maybe a bit faster or slower than headline)
          sequential={true} // Keep it sequential for a typing effect
          revealDirection="start" // Reveal from start
          animateOn="view" // Animate on view
          parentClassName="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground"
          // You might want to use encryptedClassName and className here for a more distinct effect
          // encryptedClassName="text-gray-600 opacity-70" // Lighter, slightly transparent scrambling chars
          // className="text-muted-foreground" // Final color (already in parentClassName, but can be explicit)
        />
      </FadeIn>

      <FadeIn delay="0.4s">
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-semibold">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}