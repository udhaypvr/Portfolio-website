'use server';

import { getPortfolioSuggestions, PortfolioSuggestionsInput } from '@/ai/flows/portfolio-analyzer';

export async function analyzePortfolioAction(input: PortfolioSuggestionsInput) {
  try {
    const result = await getPortfolioSuggestions(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in analyzePortfolioAction:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
