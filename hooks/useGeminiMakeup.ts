
import { GoogleGenAI, Modality } from '@google/genai';

// Lazily retrieved to avoid top-level throw
const API_KEY = import.meta.env.VITE_API_KEY || process.env.API_KEY;

function base64ToGenerativePart(base64: string, mimeType: string) {
  return {
    inlineData: {
      data: base64.split(',')[1],
      mimeType,
    },
  };
}

export async function applyMakeup(base64Image: string, prompt: string): Promise<string | null> {
  if (!API_KEY) {
    console.error("API_KEY environment variable not set.");
    throw new Error("API configuration missing. Please ensure VITE_API_KEY is set in your .env file.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    const imagePart = base64ToGenerativePart(base64Image, 'image/jpeg');
    const textPart = { text: prompt };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        role: 'user',
        parts: [imagePart, textPart],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts ?? []) {
      if (part.inlineData) {
        const base64ImageBytes = part.inlineData.data;
        const mimeType = part.inlineData.mimeType;
        return `data:${mimeType};base64,${base64ImageBytes}`;
      }
    }

    console.warn("No image part found in the response.");
    return null;

  } catch (error) {
    console.error('Error applying makeup with Gemini API:', error);
    // Check for specific API errors if possible
    if (error instanceof Error && error.message.includes('SAFETY')) {
      throw new Error('The request was blocked due to safety settings. Please adjust your image or prompt.');
    }
    throw new Error('An unexpected error occurred while communicating with the AI.');
  }
}
