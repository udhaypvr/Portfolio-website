import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { FadeIn } from '@/components/fade-in';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
