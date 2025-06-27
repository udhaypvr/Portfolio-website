import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, MoveRight, Bot } from "lucide-react";
import { PortfolioAnalyzerDialog } from "@/components/portfolio-analyzer-dialog";
import { ContactForm } from "@/components/contact-form";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with features like product catalog, shopping cart, and secure payments. Built with a focus on performance and user experience.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets. Allows users to filter, sort, and export data, providing valuable business insights.",
    image: "https://placehold.co/600x400.png",
    hint: "data visualization",
  },
  {
    title: "Mobile-First Social App",
    description:
      "A social networking application designed for mobile devices. Features real-time messaging, user profiles, and a dynamic content feed.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile application",
  },
  {
    title: "Corporate Branding Website",
    description:
      "A sleek and professional website for a major corporation, designed to reflect their brand identity and communicate their values effectively.",
    image: "https://placehold.co/600x400.png",
    hint: "modern architecture",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            className="font-headline text-2xl font-bold text-primary"
          >
            PortfolioPro
          </Link>
          <nav className="hidden space-x-6 font-body text-lg md:flex">
            <Link
              href="#about"
              className="transition-colors hover:text-accent"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-accent"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-accent"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-primary md:text-7xl">
              Creative Developer & Designer
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-foreground/80">
              I build beautiful, responsive, and user-friendly websites that
              solve real-world problems. Welcome to my digital space.
            </p>
            <Button asChild size="lg" className="mt-8 font-body">
              <Link href="#projects">
                View My Work <MoveRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="bg-secondary py-20">
          <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div className="relative mx-auto h-96 w-full max-w-sm">
              <Image
                src="https://placehold.co/600x800.png"
                alt="A portrait of the developer"
                fill
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-headline text-4xl font-bold text-primary">
                About Me
              </h2>
              <p className="mt-4 font-body text-lg text-foreground/90">
                Hello! I'm a passionate developer and designer with a knack for
                creating engaging digital experiences. With a background in both
                front-end and back-end development, I enjoy bringing ideas to
                life, from concept to deployment. I thrive on challenges and am
                constantly learning new skills to stay at the forefront of
                technology.
              </p>
              <h3 className="mt-8 font-headline text-3xl font-bold text-primary">
                My Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-3 font-body">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Figma",
                  "UI/UX Design",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  My Projects
                </h2>
                <p className="mt-2 font-body text-lg text-foreground/80">
                  Here are some of the projects I'm proud of.
                </p>
              </div>
              <PortfolioAnalyzerDialog>
                <Button variant="outline" className="mt-4 font-body md:mt-0">
                  <Bot className="mr-2" />
                  Analyze Your Portfolio
                </Button>
              </PortfolioAnalyzerDialog>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                      data-ai-hint={project.hint}
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-2xl text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 font-body text-base text-foreground/80">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-secondary py-20">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center font-headline text-4xl font-bold text-primary">
              Get In Touch
            </h2>
            <p className="mt-2 text-center font-body text-lg text-foreground/80">
              Have a project in mind or just want to say hello? I'd love to
              hear from you.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-primary-foreground">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-center md:flex-row md:px-6 md:text-left">
          <p className="font-body">
            &copy; {new Date().getFullYear()} PortfolioPro. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#">
              <Github className="h-6 w-6 transition-colors hover:text-accent" />
            </Link>
            <Link href="#">
              <Linkedin className="h-6 w-6 transition-colors hover:text-accent" />
            </Link>
            <Link href="#">
              <Mail className="h-6 w-6 transition-colors hover:text-accent" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
