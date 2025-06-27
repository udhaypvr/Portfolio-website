import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a checkout process, built with Next.js and Stripe.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'e-commerce website',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app to help users organize their tasks, set deadlines, and track progress. Features include drag-and-drop and real-time updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'dnd-kit'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'task management app',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, featuring a clean design and smooth animations.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'portfolio website',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center">My Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          Here are some of the projects I&apos;ve worked on.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
