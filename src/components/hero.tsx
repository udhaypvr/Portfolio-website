"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from './fade-in';
import DecryptedText from '@/components/ui/decrypted-text';
import Squares from '@/components/ui/squares' // Assuming Squares.tsx is in the same directory or adjust the path

export function Hero() {
  return (
    <section
      id="home"
      className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Squares Component */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal" // You can customize these props
          speed={0.5}
          borderColor="#333" // Keep this dark to contrast with the text
          hoverFillColor="#0a0a0a" // Keep this dark
          squareSize={50}
        />
      </div>

      {/* Content of the Hero section, layered above the background */}
      <div className="relative z-10">
        <FadeIn>
          <DecryptedText
            text="I Am Udhay"
            speed={70}
            sequential={true}
            revealDirection="start"
            animateOn="view"
            parentClassName="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight text-white" // Added text-white here for headline too
          />
        </FadeIn>

        <FadeIn delay="0.2s">
          <DecryptedText
            text="Hi, I specialize in building robust and scalable server-side applications, crafting the logic and infrastructure that powers seamless digital experiences. My focus is on efficient data management, secure APIs, and reliable system architecture to ensure everything runs smoothly behind the scenes."
            speed={30}
            sequential={true}
            revealDirection="start"
            animateOn="view"
            // CHANGED THIS LINE:
            parentClassName="mt-6 max-w-2xl text-lg sm:text-xl text-gray-200" // Changed from text-muted-foreground
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
      </div>
    </section>
  );
}