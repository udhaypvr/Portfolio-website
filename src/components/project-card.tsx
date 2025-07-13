import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

export function ProjectCard({ title, description, imageUrl, tags, liveUrl, repoUrl, imageHint }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-2">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-4">
        <div className="flex justify-start w-full space-x-4">
          {liveUrl && (
            <Button asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {repoUrl && (
            <Button asChild variant="outline">
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
