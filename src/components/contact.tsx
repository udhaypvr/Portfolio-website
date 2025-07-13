'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import Link from 'next/link'; 

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center">Contact Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        <div className="mt-12 md:w-1/2 lg:w-1/3 mx-auto">
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-xl font-bold font-headline">Contact Information</h3>
              <p className="text-muted-foreground mt-2">Say Hi and I will get back to you within 24 hours.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <span className="text-lg">udhaypvr@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <MapPin className="h-6 w-6 text-accent" />
                <span className="text-lg">Andhra Pradesh , India</span>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="mailto:udhaypvr@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" />Click to Email Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
