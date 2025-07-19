// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview Inspiration image generator for project ideas.
 *
 * - generateInspirationImages - A function that generates project photos based on a description.
 * - GenerateInspirationImagesInput - The input type for the generateInspirationImages function.
 * - GenerateInspirationImagesOutput - The return type for the generateInspirationImages function, containing a list of image data URIs.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInspirationImagesInputSchema = z.object({
  description: z
    .string()
    .describe(
      'A description of the space to be painted, including details like room type, size, and desired style.'
    ),
});
export type GenerateInspirationImagesInput = z.infer<
  typeof GenerateInspirationImagesInputSchema
>;

const GenerateInspirationImagesOutputSchema = z.object({
  images: z.array(
    z.string().describe('A list of generated image data URIs.')
  ),
});
export type GenerateInspirationImagesOutput = z.infer<
  typeof GenerateInspirationImagesOutputSchema
>;

export async function generateInspirationImages(
  input: GenerateInspirationImagesInput
): Promise<GenerateInspirationImagesOutput> {
  return generateInspirationImagesFlow(input);
}

const inspirationImagePrompt = ai.definePrompt({
  name: 'inspirationImagePrompt',
  input: {schema: GenerateInspirationImagesInputSchema},
  output: {schema: GenerateInspirationImagesOutputSchema},
  prompt: `You are an interior design assistant that specializes in generating photorealistic images of painted rooms.

  Based on the following description, generate 3 distinct images that can serve as inspiration for the project.

  Description: {{{description}}}
  `,
});

const generateInspirationImagesFlow = ai.defineFlow(
  {
    name: 'generateInspirationImagesFlow',
    inputSchema: GenerateInspirationImagesInputSchema,
    outputSchema: GenerateInspirationImagesOutputSchema,
  },
  async input => {
    const generatedImages: string[] = [];
    for (let i = 0; i < 3; i++) {
      const {media} = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: input.description,
        config: {
          responseModalities: ['TEXT', 'IMAGE'],
        },
      });
      if (media?.url) {
        generatedImages.push(media.url);
      }
    }

    return {images: generatedImages};
  }
);
