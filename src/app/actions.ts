'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  // This is a static site, so we can't send an email from the server.
  // In a real application, you would integrate with an email service
  // like Resend, SendGrid, or use a service like Formspree.
  // For this demo, we'll just log the data and return a success message.
  console.log('Contact form submitted:');
  console.log(values);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Form submitted successfully.' };
}
