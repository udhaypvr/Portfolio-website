"use client"; // Add this if this component uses client-side hooks or direct DOM manipulation,
              // or if it renders components (like FadeIn) that are marked "use client"

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from './fade-in'; // Assuming FadeIn is in the same directory or accessible via this path

const skills = [
  'JavaScript', 'Python', 'React', 'Node.js', 'Django', 'Tailwind CSS', 'Tkinter',
  'MongoDB', 'MySQL', 'Firebase', 'Git', 'GitHub', 'VS Code', 'Vercel', 'SQL',
  'HTML', 'CSS', '// Optionally add other categories if you want them in badges:',
  // 'User-Centered Design', 'Test-Driven Development (TDD)',
  // 'Statistical Modeling', // If you want to include data science methodologies
];

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 sm:py-28"> {/* Added dark mode background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center text-foreground dark:text-white">About Me</h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <FadeIn delay="0.2s"> {/* Stagger delay for image */}
              <Image
                src="/path/to/your-profile-picture.jpg" // **IMPORTANT: Replace with your actual image path**
                alt="Portrait of Udhay, the backend developer"
                width={300}
                height={300}
                className="rounded-full shadow-lg aspect-square object-cover"
              />
            </FadeIn>
          </div>

          <div className="md:col-span-2">
            <FadeIn delay="0.3s"> {/* Stagger delay for first paragraph */}
              <p className="text-lg text-muted-foreground dark:text-gray-300"> {/* Added dark mode text color */}
                Hi there! I'm UDHAY, a passionate **Back-end enthusiast** with a knack for building full-scale websites and web apps. This repository serves as a showcase of my work, demonstrating my skills, projects, and the journey I'm on in the world of Development.
              </p>
            </FadeIn>

            <FadeIn delay="0.4s"> {/* Stagger delay for second paragraph */}
              <p className="mt-4 text-lg text-muted-foreground dark:text-gray-300">
                My expertise lies in developing the core logic and infrastructure that powers seamless user interactions. I focus on efficient data management, secure APIs, and reliable system architecture, ensuring everything runs smoothly behind the scenes. I'm always eager to learn new technologies and improve my craft, driven by a passion for creating solutions that solve real-world problems.
              </p>
            </FadeIn>

            <div className="mt-8">
              <FadeIn delay="0.5s"> {/* Stagger delay for skills heading */}
                <h3 className="text-xl font-bold font-headline mb-4 text-foreground dark:text-white">My Skills</h3>
              </FadeIn>
              <FadeIn delay="0.6s"> {/* Stagger delay for skills badges */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-base px-4 py-2 bg-secondary text-secondary-foreground dark:bg-gray-700 dark:text-gray-100" // Added dark mode styles
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