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

const assetsDir = path.join(process.cwd(), "public", "images", "blog");
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Blog slugs and their base topics extracted from blogData.ts
const blogInfo = [
    { slug: "hvac-ai-search-2026", topic: "HVAC companies and AI search" },
    { slug: "plumber-local-search", topic: "Plumbers dominating local search" },
    { slug: "roofer-storm-marketing", topic: "Roofing storm damage marketing" },
    { slug: "pest-control-sunbelt-leads", topic: "Pest control lead generation" },
    { slug: "electrician-speed-to-lead", topic: "Electricians speed to lead" },
    { slug: "eco-friendly-curb-appeal-2026", topic: "Eco-friendly landscaping marketing" },
    { slug: "smart-exterior-roi-2026", topic: "Smart exterior and siding ROI" },
    { slug: "dentist-dso-competition", topic: "Dentists competing with DSOs" },
    { slug: "med-spa-neurocosmetics", topic: "Med Spa and neurocosmetics branding" },
    { slug: "mens-health-symptom-seo", topic: "Men's health clinics symptom SEO" },
    { slug: "neurowellness-longevity-2026", topic: "Neurowellness and longevity clinics" },
    { slug: "ai-diagnostics-proactive-health-2026", topic: "Concierge medicine and AI diagnostics" },
    { slug: "real-estate-geo-strategy", topic: "Real estate geo-farming marketing" },
    { slug: "law-firm-project-seo", topic: "Law firms project-based SEO" },
    { slug: "private-credit-ai-wealth-management-2026", topic: "Private credit and wealth management AI" },
    { slug: "protecting-assets-cyber-risk-ai", topic: "B2B insurance cyber risk AI" },
    { slug: "conversational-commerce-ai-agents", topic: "Conversational commerce and AI agents" },
    { slug: "frictionless-local-services-ai-booking", topic: "Local services AI booking" },
    { slug: "supplement-compliant-ads", topic: "E-commerce supplements compliant ads" },
    { slug: "franchise-multi-location-marketing", topic: "Franchise multi-location marketing" },
    { slug: "retainer-free-marketing-model", topic: "Retainer-free marketing agency model" },
    { slug: "aeo-vs-seo-2026", topic: "AEO vs SEO in 2026" },
    { slug: "ai-search-lead-generation", topic: "AI search engines lead generation" },
    { slug: "five-signs-agency-overcharging", topic: "Marketing agency overcharging" },
    { slug: "google-ai-overviews-business-owners", topic: "Google AI Overviews for business owners" },
    { slug: "local-seo-checklist-2026", topic: "Local SEO strategy checklist 2026" }
];

async function generateAssets() {
    console.log("Starting blog cover image generation...");

    for (const item of blogInfo) {
        const filePath = path.join(assetsDir, `${item.slug}.jpg`);

        if (fs.existsSync(filePath)) {
            console.log(`Asset ${item.slug}.jpg already exists. Skipping.`);
            continue;
        }

        console.log(`Generating image for ${item.slug}...`);

        const prompt = \`A highly cinematic, ultra-premium 3D image representing: "\${item.topic}". The aesthetic is high-end, dark mode, sophisticated, expensive, and professional. Deep blacks, glowing crimson and subtle gold accents. Glassmorphism elements floating in the background. Mind Your Business Media branding style. Highly detailed, photorealistic, 8k resolution. Negative prompt: text, words, cartoon, cheap.\`;

        try {
            const response = await ai.models.generateImages({
                model: 'imagen-3.0-generate-001',
                prompt: prompt,
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
            console.log(\`✅ Saved \${filePath}\`);
        } catch (error: any) {
            console.error(\`❌ Failed to generate image for \${item.slug}:\`, error?.message || error);
        }

        // Sleep to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 4000));
    }

    console.log("Finished blog cover image generation!");
}

generateAssets();
