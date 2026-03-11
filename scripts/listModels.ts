import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

async function list() {
    console.log("Listing models...");
    try {
        const response = await ai.models.list();
        for await (const model of response) {
            if (model.name.includes("imagen") || model.name.includes("image")) {
                console.log(model.name, model.supportedGenerationMethods);
            }
        }
    } catch (e) {
        console.error(e);
    }
}
list();
