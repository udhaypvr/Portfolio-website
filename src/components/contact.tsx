'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { handleContactForm } from '@/app/actions';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleContactForm(values);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center">Contact Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
             <div>
                <h3 className="text-xl font-bold font-headline">Contact Information</h3>
                <p className="text-muted-foreground mt-2">Fill up the form and I will get back to you within 24 hours.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <span className="text-lg">your.email@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <span className="text-lg">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-accent" />
                <span className="text-lg">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary/30 p-8 rounded-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message here..." {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
