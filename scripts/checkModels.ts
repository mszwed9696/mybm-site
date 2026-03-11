import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

async function checkCapabilities() {
    console.log("Checking all available models for image generation capabilities...");
    try {
        const response = await ai.models.list();
        let foundImageGen = false;
        for await (const model of response) {
            const methods = model.supportedGenerationMethods || [];
            if (methods.includes("generateImages") || model.name.toLowerCase().includes("image") || model.name.toLowerCase().includes("imagen")) {
                console.log(`- ${model.name}`);
                console.log(`  Methods: ${methods.join(", ")}`);
                if (methods.includes("generateImages")) {
                    foundImageGen = true;
                }
            }
        }
        if (!foundImageGen) {
            console.log("\n❌ No models found that explicitly support 'generateImages' in the metadata.");
        }
    } catch (e) {
        console.error("Error fetching models:", e);
    }
}
checkCapabilities();
