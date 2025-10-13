'use server';
/**
 * @fileOverview AI-powered ticket description generator.
 *
 * - generateTicketBlurb - A function that generates a promotional blurb for a ticket tier.
 * - TicketBlurbInput - The input type for the generateTicketBlurb function.
 * - TicketBlurbOutput - The return type for the generateTicketBlurb function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TicketBlurbInputSchema = z.object({
  ticketName: z.string().describe('The name of the ticket tier (e.g., Sports Pass, Party Pass, All-Access).'),
  ticketPrice: z.number().describe('The price of the ticket in NGN.'),
  ticketPerks: z.array(z.string()).describe('An array of perks included with the ticket (e.g., Access to Sports Day, Entry to Party Night, Exclusive access to VIP lounge).'),
});
export type TicketBlurbInput = z.infer<typeof TicketBlurbInputSchema>;

const TicketBlurbOutputSchema = z.object({
  blurb: z.string().describe('A short, engaging promotional blurb for the ticket tier.'),
});
export type TicketBlurbOutput = z.infer<typeof TicketBlurbOutputSchema>;

export async function generateTicketBlurb(input: TicketBlurbInput): Promise<TicketBlurbOutput> {
  return ticketBlurbFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ticketBlurbPrompt',
  input: {schema: TicketBlurbInputSchema},
  output: {schema: TicketBlurbOutputSchema},
  prompt: `You are a marketing copywriter specializing in promotional material for events. Your task is to generate a short, engaging promotional blurb for a ticket tier for the "Game On, Party On – Inter-Uni Edition" event in Lagos, Nigeria.

  The event is a two-day event featuring a sports day and a party night.

  Use the following information to create the blurb:

  Ticket Name: {{{ticketName}}}
  Ticket Price: ₦{{{ticketPrice}}}
  Ticket Perks: {{#each ticketPerks}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  The blurb should be concise and enticing, highlighting the key benefits of the ticket tier and encouraging potential attendees to purchase it.  It should be no more than 50 words.
`,
});

const ticketBlurbFlow = ai.defineFlow(
  {
    name: 'ticketBlurbFlow',
    inputSchema: TicketBlurbInputSchema,
    outputSchema: TicketBlurbOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
