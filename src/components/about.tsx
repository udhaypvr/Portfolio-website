import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase', 'UI/UX Design'];

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center">About Me</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://placehold.co/300x300.png"
              alt="Portrait of the developer"
              width={300}
              height={300}
              className="rounded-full shadow-lg aspect-square object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground">
              I&apos;m a full-stack developer with a passion for building beautiful and functional user interfaces. I have experience working with modern web technologies to create dynamic and engaging applications. My journey into code started with a simple &quot;Hello, World!&quot; and has since grown into a full-fledged passion for solving complex problems and creating seamless user experiences.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and hiking in the great outdoors.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold font-headline mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-base px-4 py-2 bg-secondary text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
