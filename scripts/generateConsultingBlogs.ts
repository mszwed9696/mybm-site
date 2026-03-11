import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("Missing VITE_GEMINI_API_KEY in environment variables.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const industries = [
    { name: "Solar Companies", slug: "solar", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop" },
    { name: "Med Spas", slug: "med-spas", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2670&auto=format&fit=crop" },
    { name: "Home Services", slug: "home-services", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop" },
    { name: "Chiropractors", slug: "chiropractors", image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2673&auto=format&fit=crop" },
    { name: "Law Firms", slug: "law-firms", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2712&auto=format&fit=crop" },
    { name: "Franchises", slug: "franchise", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop" },
    { name: "E-commerce", slug: "e-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop" },
    { name: "Auto Repair & Services", slug: "auto", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2670&auto=format&fit=crop" },
    { name: "Financial Advisors", slug: "financial-advisors", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop" },
    { name: "Luxury Real Estate", slug: "luxury-real-estate", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop" },
    { name: "Optical Services", slug: "optical", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2680&auto=format&fit=crop" },
    { name: "Pet Care & Vets", slug: "pet-care", image: "https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?q=80&w=2670&auto=format&fit=crop" },
    { name: "Life Insurance", slug: "life-insurance", image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb82?q=80&w=2670&auto=format&fit=crop" }
];

async function generateBlogPosts() {
    console.log("Generating consulting blogs...");
    const posts: any[] = [];

    // Spread the dates
    const msPerDay = 24 * 60 * 60 * 1000;
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Start yesterday

    for (let i = 0; i < industries.length; i++) {
        const ind = industries[i];
        console.log(`Generating for ${ind.name}...`);

        const promptText = `
        You are an expert copywriter and SEO specialist. Write a high-converting, SEO-optimized blog post for ${ind.name} about scaling their business through direct Marketing Consulting.
        
        The audience: Owner-operators or companies with internal marketing teams in the ${ind.name} industry who are going through extreme growth phases, expect a big jump in ad spend, and need operational guidance without hiring a full agency.
        The Offer: Mike Szwed's $10,000/month (or $100k/year) no-commitment Marketing Consulting. The benefit is DIRECT knowledge transfer and skill transfer from an industry leader who has generated massive results.
        
        Instructions:
        1. Use copywriting principles from "Breakthrough Advertising" (address market sophistication, channel desire, build the case for expert consulting vs. trial-and-error).
        2. Format using HTML tags (<h2>, <h3>, <p>, <ul>, <li>, <strong>, etc.) so it drops right into a React dangerouslySetInnerHTML div. Do NOT use markdown markdown blocks (\`\`\`). Do NOT include the \`<h1>\` title inside the body (I will use the title field for that).
        3. Make the title exactly: "Marketing Consulting for ${ind.name}: Scaling Your Internal Acquisition Systems".
        4. Provide an SEO excerpt (under 160 characters).
        5. Provide SEO meta description (under 160 characters).
        6. Include a clear Call to Action at the end driving traffic to "/consulting". Make it a compelling closing.
        7. The tone should be authoritative, premium, data-driven, and persuasive.
        
        Return ONLY a JSON object with this exact structure:
        {
          "title": "Marketing Consulting for ${ind.name}: Scaling Your Internal Acquisition Systems",
          "excerpt": "...",
          "metaDescription": "...",
          "body": "..."
        }
        Do not wrap the JSON in Markdown. Just strictly return raw valid JSON.
        `;

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: promptText,
            });

            let text = response.text || "";
            text = text.replace(/```json/g, "").replace(/```/g, "").trim();
            const data = JSON.parse(text);

            const postDate = new Date(currentDate.getTime() - (i * 3 * msPerDay)); // Space by 3 days

            posts.push({
                slug: `marketing-consulting-for-${ind.slug}`,
                title: data.title,
                excerpt: data.excerpt,
                category: "Marketing Consulting",
                industryTags: [ind.slug],
                author: "Mike Szwed",
                readTime: "6 min read",
                date: postDate.toISOString().split('T')[0],
                metaDescription: data.metaDescription,
                body: data.body,
                coverImage: ind.image
            });
            console.log(`Success for ${ind.name}`);
        } catch (err) {
            console.error(`Failed for ${ind.name}:`, err);
        }
    }

    // Read the existing blogData.ts and append
    const dataPath = path.join(process.cwd(), 'src/data/blogData.ts');
    let fileContent = fs.readFileSync(dataPath, 'utf-8');

    // Find where the array ends. It's \`];\` at the end of the file.
    const insertionPoint = fileContent.lastIndexOf('];');
    if (insertionPoint !== -1) {
        const postsString = posts.map(p => JSON.stringify(p, null, 4)).join(',\\n');
        const newFileContent = fileContent.substring(0, insertionPoint) +
            ',\\n' + postsString + '\\n' + fileContent.substring(insertionPoint);

        fs.writeFileSync(dataPath, newFileContent, 'utf-8');
        console.log("Successfully injected new consulting blogs into blogData.ts!");
    } else {
        console.error("Could not find the end of the array in blogData.ts");
    }
}

generateBlogPosts();
