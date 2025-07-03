'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from './fade-in';
import DotGrid from '@/components/ui/grid'; // Ensure this path is correct for your project

const skills = [
  'JavaScript', 'Python', 'React', 'Node.js', 'Django', 'Tailwind CSS', 'Tkinter',
  'MongoDB', 'MySQL', 'Firebase', 'Git', 'GitHub', 'VS Code', 'Vercel', 'SQL',
  'HTML', 'CSS',
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden bg-black" // Background is black
    >
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          baseColor="#FFFFFF" // White dots
          activeColor="#CCCCCC" // Slightly dimmer white for active dots
          dotSize={8}
          gap={24}
          proximity={100}
        />
      </div>

      {/* Content of the About section, placed above the DotGrid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center text-white">About Me</h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <FadeIn delay="0.2s">
              <Image
                src="/me.png" 
                alt="Portrait of Udhay, the backend developer"
                width={300}
                height={300}
                className="rounded-full shadow-lg aspect-square object-cover"
              />
            </FadeIn>
          </div>

          <div className="md:col-span-2">
            <FadeIn delay="0.3s">
              <p className="text-lg text-white bg-blue-600 px-1.5 py-0.5 rounded-sm text-highlight-effect">
                Hi there! I'm UDHAY, a passionate **Back-end enthusiast** with a knack for building full-scale websites and web apps. This repository serves as a showcase of my work, demonstrating my skills, projects, and the journey I'm on in the world of Development.
              </p>
            </FadeIn>

            <FadeIn delay="0.4s">
              <p className="mt-4 text-lg text-white bg-blue-600 px-1.5 py-0.5 rounded-sm text-highlight-effect">
                My expertise lies in developing the core logic and infrastructure that powers seamless user interactions. I focus on efficient data management, secure APIs, and reliable system architecture, ensuring everything runs smoothly behind the scenes. I'm always eager to learn new technologies and improve my craft, driven by a passion for creating solutions that solve real-world problems.
              </p>
            </FadeIn>

            <div className="mt-8">
              <FadeIn delay="0.5s">
                <h3 className="text-xl font-bold font-headline mb-4 text-white">My Skills</h3>
              </FadeIn>
              <FadeIn delay="0.6s">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-base px-4 py-2 bg-gray-800 text-white border-gray-600" // Adjusted for black background
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}