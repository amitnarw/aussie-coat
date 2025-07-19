"use server";

import { generateInspirationImages } from "@/ai/flows/generate-inspiration-images";
import { z } from "zod";

const formSchema = z.object({
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

export async function handleGenerateImages(data: z.infer<typeof formSchema>) {
  try {
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
      return {
        success: false,
        error: "Invalid input: " + validation.error.formErrors.fieldErrors.description?.join(', '),
      };
    }

    const result = await generateInspirationImages({ description: validation.data.description });
    
    if (result && result.images && result.images.length > 0) {
      return { success: true, data: result };
    } else {
       return { success: false, error: "The AI could not generate images based on your description. Please try being more specific." };
    }
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
    return { success: false, error: errorMessage };
  }
}
