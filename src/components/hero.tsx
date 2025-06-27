import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from './fade-in';

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24 flex flex-col items-center justify-center text-center">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight">
          Building Digital Experiences
        </h1>
      </FadeIn>
      <FadeIn delay="0.2s">
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground">
          Hi, I&apos;m a passionate developer creating modern and responsive web applications. Welcome to my personal space where I share my projects and journey.
        </p>
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
