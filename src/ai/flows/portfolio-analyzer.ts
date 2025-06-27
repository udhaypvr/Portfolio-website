'use server';
/**
 * @fileOverview Provides AI-powered suggestions for improving portfolio item descriptions.
 *
 * - getPortfolioSuggestions - A function that accepts portfolio content and returns suggestions for improvement.
 * - PortfolioSuggestionsInput - The input type for the getPortfolioSuggestions function.
 * - PortfolioSuggestionsOutput - The return type for the getPortfolioSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSuggestionsInputSchema = z.object({
  portfolioContent: z.string().describe('The content of the portfolio item description to be analyzed.'),
});
export type PortfolioSuggestionsInput = z.infer<typeof PortfolioSuggestionsInputSchema>;

const PortfolioSuggestionsOutputSchema = z.object({
  suggestions: z.string().describe('AI-powered suggestions for improving the portfolio item description.'),
});
export type PortfolioSuggestionsOutput = z.infer<typeof PortfolioSuggestionsOutputSchema>;

export async function getPortfolioSuggestions(input: PortfolioSuggestionsInput): Promise<PortfolioSuggestionsOutput> {
  return portfolioAnalyzerFlow(input);
}

const portfolioAnalyzerPrompt = ai.definePrompt({
  name: 'portfolioAnalyzerPrompt',
  input: {schema: PortfolioSuggestionsInputSchema},
  output: {schema: PortfolioSuggestionsOutputSchema},
  prompt: `You are an AI assistant designed to provide suggestions for improving portfolio item descriptions to make them more appealing to potential clients.

  Analyze the following portfolio content and provide actionable suggestions to enhance its impact and clarity. Focus on aspects like highlighting key achievements, quantifying results, and tailoring the language to resonate with potential clients.

  Portfolio Content: {{{portfolioContent}}}
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const portfolioAnalyzerFlow = ai.defineFlow(
  {
    name: 'portfolioAnalyzerFlow',
    inputSchema: PortfolioSuggestionsInputSchema,
    outputSchema: PortfolioSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await portfolioAnalyzerPrompt(input);
    return output!;
  }
);
