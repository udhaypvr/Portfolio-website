import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from './fade-in'; // Assuming FadeIn is in the same directory
import DecryptedText from '@/components/ui/decrypted-text'; // Adjust path if needed

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24 flex flex-col items-center justify-center text-center">
      <FadeIn>
        {/* Replace h1 with DecryptedText */}
        <DecryptedText
          text="Building Digital Experiences"
          speed={70} // Adjust speed as desired (milliseconds per character update)
          sequential={true} // Reveal characters one by one
          revealDirection="start" // Start revealing from the beginning
          animateOn="view" // Animate when the component comes into view
          parentClassName="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight"
          // You can add className for revealed characters and encryptedClassName for scrambling characters if needed
          // For example:
          // className="text-white" // Class for the revealed characters
          // encryptedClassName="text-gray-400" // Class for the scrambling characters
        />
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