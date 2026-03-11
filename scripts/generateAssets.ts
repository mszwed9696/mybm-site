import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("No VITE_GEMINI_API_KEY found in environment variables.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const assetsDir = path.join(process.cwd(), "src", "assets", "images", "industry");
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Map slugs to descriptions to generate the branded marketing images.
// The user requested: "HVAC images and Brand It With Marketing, Brand It With Mind Your Business Media marketing graphics and branding."
// We want high-quality, professional, premium marketing graphics related to the industry with a subtle dark-mode or luxurious agency feel.
const industryPrompts = [
    { slug: 'hvac', prompt: 'A sleek, modern digital marketing dashboard displayed on a high-end laptop, with a background subtly showing clean HVAC equipment. The lighting is cinematic, dark premium theme with gold and crimson accents. Text on screen hints at "Mind Your Business Media HVAC Growth". Professional photography, 4k.' },
    { slug: 'plumbers', prompt: 'A premium, modern tablet displaying a plumber marketing ROI calculator. The setting is a luxurious, clean modern office. Dark aesthetic with deep reds and gold accents. Focus on digital growth and lead generation for plumbing services. Photorealistic.' },
    { slug: 'electricians', prompt: 'A cinematic shot of a computer monitor showing a marketing campaign for an electrical business. Dark, moody, professional studio lighting with glowing LED elements. "Mind Your Business Media" style premium aesthetic. Extremely high quality.' },
    { slug: 'roofers', prompt: 'Marketing strategy documents and a digital dashboard for a roofing company, laid out on a dark slate desk. High-end, premium aesthetic, dark mode styling with crimson accents. Very professional, highly detailed.' },
    { slug: 'med-spas', prompt: 'A highly luxurious marketing presentation for a med spa displayed on a sleek monitor. Dark, elegant aesthetics, glowing gold and soft red accents. Professional medical marketing theme, photorealistic.' }
];

async function generateAssets() {
    console.log("Starting asset generation...");

    for (const item of industryPrompts) {
        const filePath = path.join(assetsDir, `${item.slug}.jpg`);

        if (fs.existsSync(filePath)) {
            console.log(`Asset ${item.slug}.jpg already exists. Skipping.`);
            continue;
        }

        console.log(`Generating image for ${item.slug}...`);
        try {
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: item.prompt,
                config: {
                    numberOfImages: 1,
                    outputMimeType: 'image/jpeg',
                    aspectRatio: '16:9'
                }
            });

            const base64Image = response.generatedImages?.[0]?.image?.imageBytes;
            if (!base64Image) {
                throw new Error("No image data returned from API.");
            }
            fs.writeFileSync(filePath, Buffer.from(base64Image, 'base64'));
            console.log(`✅ Saved ${filePath}`);
        } catch (error) {
            console.error(`❌ Failed to generate image for ${item.slug}:`, error);
        }

        // Sleep to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log("Finished asset generation!");
}

generateAssets();
