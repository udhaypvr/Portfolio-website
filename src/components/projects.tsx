
import { ProjectCard } from '@/components/project-card';


const projects = [
  {
    title: 'Hospital Management System (MySQL)',
    description: 'A comprehensive system to manage hospital data, with data access via MySQL.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Tkinter', 'MySQL'],
    repoUrl: 'https://github.com/udhaypvr/hospital-management-system-mysql',
    imageHint: 'Hospital management system UI with MySQL'
  },
  {
    title: 'Hospital Management System (MongoDB)',
    description: 'A robust system to manage hospital data, with data access from a MongoDB server.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Tkinter', 'MongoDB'],
    repoUrl: 'https://github.com/udhaypvr/hospital-management-system-mongodb',
    imageHint: 'Hospital management system UI with MongoDB'
  },
  {
    title: 'Hackathon - Webstyledown',
    description: 'A website for ACM, built exclusively with HTML and CSS for a hackathon contest.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['HTML', 'CSS'],
    liveUrl: 'https://udhaypvr.github.io/webstyledown/',
    repoUrl: 'https://github.com/udhaypvr/webstyledown/',
    imageHint: 'Web design hackathon website'
  },
  {
    title: 'Hackathon - AR/VR & IoT',
    description: 'An innovative project to enhance large vehicle maintenance using AR/VR immersive models and real-time IoT diagnostics.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Unity', 'Blender', 'C#', 'Node.js', 'TypeScript', 'Arduino', 'Firebase'],
    repoUrl: 'https://github.com/udhaypvr/project-hackathon',
    imageHint: 'AR/VR and IoT project for vehicle maintenance'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-black"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center text-white">My Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-white-300">
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
