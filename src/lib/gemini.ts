import { GoogleGenAI } from '@google/genai';

// Initialize the Google Gen AI SDK
// Note: We expect the user to have VITE_GEMINI_API_KEY in their .env
export const getGenAIClient = () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.");
    }
    return new GoogleGenAI({ apiKey });
};

export interface GenerateImageOptions {
    prompt: string;
    aspectRatio?: '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
    numberOfImages?: number;
}

/**
 * Generates an image using the Imagen 3 model via the Gemini API.
 */
export async function generateImage({
    prompt,
    aspectRatio = '16:9',
    numberOfImages = 1,
}: GenerateImageOptions): Promise<string[]> {
    const ai = getGenAIClient();

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt,
            config: {
                numberOfImages,
                outputMimeType: 'image/jpeg',
                aspectRatio,
            },
        });

        if (!response.generatedImages || response.generatedImages.length === 0) {
            throw new Error("No images were generated.");
        }

        // Return an array of base64 strings
        return response.generatedImages.map(
            (img) => `data:${img.image.mimeType};base64,${img.image.imageBytes}`
        );
    } catch (error) {
        console.error("Error generating image:", error);
        throw error;
    }
}
